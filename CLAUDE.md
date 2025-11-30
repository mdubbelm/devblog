# CLAUDE.md - Devblog

Persoonlijke blog over bouwen met AI en andere experimenten.

## Tech stack

- **Hugo** (static site generator)
- **PaperMod** theme
- **Netlify** hosting

## Commands

```bash
# Lokaal ontwikkelen
hugo server --buildDrafts

# Build voor productie
hugo --gc --minify
```

## Content structuur

```
content/
├── habittracker/     # Health tracker serie
│   ├── _index.md     # Serie intro
│   └── 2025-*.md     # Posts
└── about/
    └── index.md
```

## Nieuwe post toevoegen

1. Kopieer post van `~/Projecten/habittracker/blog/` naar `content/habittracker/`
2. Check frontmatter (geen nested `stats:`)
3. Test lokaal met `hugo server`

## Schrijfstijl van Monique

**BELANGRIJK:** Dit is Monique's persoonlijke blog. Schrijf in HAAR stijl, niet in een generieke AI-stijl.

### Kernkenmerken

1. **Toegankelijk en persoonlijk**
   - Spreek de lezer aan met "je" en "jouw"
   - Schrijf alsof je tegen een collega praat
   - Deel persoonlijke observaties en twijfels

2. **Informeel maar niet slordig**
   - Colloquialismen zijn OK: "joehoe!", "hey, het oog wil ook wat"
   - Zelfspot om technische onderwerpen lichter te maken
   - Geen academisch of corporate taalgebruik

3. **Afwisseling in zinslengte**
   - Korte zinnen voor impact: "Design is een vak, laat dat duidelijk zijn."
   - Langere zinnen voor uitleg
   - Dit creëert ritme en houdt aandacht vast

4. **Concrete voorbeelden**
   - Geen abstracte theorie
   - Noem specifieke tools, websites, situaties
   - "Toen ik zei X, kreeg ik Y" in plaats van "Als men X doet, gebeurt Y"

5. **Plain language**
   - Vermijd vakjargon zonder uitleg
   - Als je een term gebruikt, leg hem uit
   - Referentie: Episode 30 rethink.fm "Designer-isms: Speak Plain Language"

### Structuur

```markdown
# Titel (sentence case)

Korte intro die het probleem of de vraag stelt. Max 2-3 zinnen.

---

## Het probleem / De situatie

Wat was er aan de hand? Persoonlijk verteld.

---

## De oplossing / Wat ik deed

Concreet, met voorbeelden.

---

## Wat ik hiervan leerde

Reflectie, inzichten. Vaak in bullet points.

---

*Poëtische one-liner als afsluiter.*
```

### Frontmatter

```yaml
---
title: "Titel in sentence case"
date: 2025-11-30T22:00:00+01:00
session: 12                    # Sessienummer
tags: [features, ux, reflectie]
user_time: "30 min"            # Jouw tijdsinvestering
ai_time: "2 uur"               # AI tijdsinvestering
efficiency: "1:4"              # Ratio user:ai
version: "0.3.0"               # App versie (optioneel)
mood: "🎯"                     # Emoji die de sessie typeert
---
```

### Anti-patterns (NIET doen)

- ❌ "In dit artikel zullen we bespreken..." → te formeel
- ❌ Lange inleidingen voordat je to the point komt
- ❌ Passive voice: "Er werd besloten..." → "Ik besloot..."
- ❌ Buzzwords zonder uitleg: "leveraging synergies"
- ❌ Overdreven enthousiast: "Super geweldig fantastisch!"
- ❌ Geen persoonlijke stem of mening

### Goede voorbeelden uit Monique's werk

**Fronteers Adventskalender 2018 - "Mooi rood is niet lelijk":**
> "Daarom geef ik je in dit artikel 7 tips."
> "Misschien heeft de ontwerper gedacht: wat voor Coolblue werkt, werkt vast ook voor ons."

**modub.nl:**
> Direct, to the point, geen omhaal

**rethink.fm podcasts:**
> Toegankelijke uitleg van complexe UX concepten
> Focus op praktische toepasbaarheid

### Data en stats

Voeg waar mogelijk toe:
- Tijdsinvestering (user vs AI)
- Versienummers
- Concrete metrics (accessibility score, test coverage, etc.)
- Vergelijkingen in tabellen

### Bronnen voor meer context

- [Fronteers Adventskalender 2018](https://fronteers.nl/blog/2018/12/mooi-rood-is-niet-lelijk)
- [modub.nl](https://modub.nl)
- [rethink.fm podcasts](https://rethink.fm/author/monique/)
- [UXATT](https://uxatt.com/author/monique/)

**TODO:** Aanvullen met voorbeelden uit WordPress exports van modub.nl en prilgroen.nl

## Deployment

- Push naar GitHub → GitHub Pages auto-deploy
- URL: https://blog.modub.nl

### DNS setup (TransIP)

Voeg dit CNAME record toe in TransIP:

```
blog.modub.nl  CNAME  mdubbelm.github.io.
```

### GitHub Pages aanzetten

1. Ga naar repo Settings → Pages
2. Source: "GitHub Actions"
3. Wacht op eerste deploy
4. Custom domain: `blog.modub.nl`
