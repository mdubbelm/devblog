#!/bin/bash
#
# Auto-publish script voor devblog
# Checkt of er lokale commits zijn die nog niet gepusht zijn naar GitHub Pages
# en publiceert ze automatisch.
#
# Gebruik: ./auto-publish.sh [--dry-run]
#

set -e

DEVBLOG_DIR="/Users/monique/Projecten/devblog"
LOG_FILE="/Users/monique/Projecten/devblog/logs/auto-publish.log"
DRY_RUN=false

# Parse arguments
if [[ "$1" == "--dry-run" ]]; then
    DRY_RUN=true
fi

# Zorg dat log directory bestaat
mkdir -p "$(dirname "$LOG_FILE")"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

cd "$DEVBLOG_DIR"

log "=== Auto-publish check gestart ==="

# Stap 1: Check of er nieuwe/gewijzigde content is die nog niet gecommit is
# We committen ALLEEN content bestanden, niet CLAUDE.md, scripts, logs etc.
NEW_CONTENT=$(git status --porcelain content/ | grep -E "^\?\?|^ M|^M" || true)

if [[ -n "$NEW_CONTENT" ]]; then
    log "Nieuwe/gewijzigde content gevonden, auto-commit..."

    # Voeg alleen content toe (blogs, _index.md, etc.)
    git add content/

    # Check of er iets te committen is
    if git diff --cached --quiet; then
        log "Geen content wijzigingen om te committen."
    else
        # Maak een commit met de gewijzigde bestanden
        CHANGED_FILES=$(git diff --cached --name-only | grep -E "\.md$" | xargs -I {} basename {} .md | head -3 | tr '\n' ', ' | sed 's/,$//')
        git commit -m "Auto-publish: $CHANGED_FILES" >> "$LOG_FILE" 2>&1
        log "Content gecommit: $CHANGED_FILES"
    fi
fi

# Stap 2: Fetch latest from remote
git fetch origin main --quiet

# Check of er lokale commits zijn die niet op remote staan
LOCAL_COMMITS=$(git rev-list origin/main..HEAD --count)

if [[ "$LOCAL_COMMITS" -eq 0 ]]; then
    log "Geen nieuwe lokale commits gevonden. Niks te doen."
    exit 0
fi

# Check of er ALLEEN drafts of toekomstige posts in de wijzigingen zitten
# Als alle gewijzigde posts draft:true hebben OF een toekomstige datum, niet pushen
CHANGED_POSTS=$(git diff --name-only origin/main..HEAD | grep -E "^content/.*\.md$" || true)
TODAY=$(date '+%Y-%m-%d')

if [[ -n "$CHANGED_POSTS" ]]; then
    HAS_PUBLISHABLE=false
    while IFS= read -r post; do
        if [[ -f "$post" ]]; then
            # Check of draft: true staat
            if head -20 "$post" | grep -q "^draft: *true"; then
                log "  Skipping (draft): $post"
                continue
            fi

            # Check of de datum in de toekomst ligt
            POST_DATE=$(head -20 "$post" | grep -E "^date:" | sed 's/date: *//; s/T.*//' | tr -d '"' | tr -d "'")
            if [[ -n "$POST_DATE" && "$POST_DATE" > "$TODAY" ]]; then
                log "  Skipping (future date $POST_DATE): $post"
                continue
            fi

            # Post is publiceerbaar
            HAS_PUBLISHABLE=true
            log "  Ready to publish: $post"
        fi
    done <<< "$CHANGED_POSTS"

    if [[ "$HAS_PUBLISHABLE" == false ]]; then
        log "Alle gewijzigde posts zijn drafts of hebben een toekomstige datum. Nog niet publiceren."
        exit 0
    fi
fi

log "Gevonden: $LOCAL_COMMITS nieuwe commit(s) om te pushen"

# Toon welke posts nieuw/gewijzigd zijn
log "Gewijzigde content:"
git diff --name-only origin/main..HEAD | grep -E "^content/" | while read -r file; do
    log "  - $file"
done

if [[ "$DRY_RUN" == true ]]; then
    log "[DRY-RUN] Zou nu pushen naar GitHub..."
    exit 0
fi

# Build eerst lokaal om te checken of alles werkt
log "Hugo build starten..."
if hugo --gc --minify >> "$LOG_FILE" 2>&1; then
    log "Hugo build succesvol"
else
    log "ERROR: Hugo build gefaald!"
    exit 1
fi

# Push naar GitHub (triggert GitHub Actions voor deployment)
log "Pushen naar GitHub..."
if git push origin main >> "$LOG_FILE" 2>&1; then
    log "Push succesvol! GitHub Actions zal nu deployen naar GitHub Pages."
else
    log "ERROR: Push gefaald!"
    exit 1
fi

log "=== Auto-publish voltooid ==="
