# Scripts voor devblog

Deze map bevat scripts voor automatische publicatie van blogposts.

---

## auto-publish.sh

**Doel:** Automatisch lokale commits pushen naar GitHub Pages, met slimme filtering.

### Wat het doet

1. **Auto-commit** — Pakt nieuwe/gewijzigde bestanden in `content/` en maakt automatisch een commit
2. **Draft-check** — Slaat posts met `draft: true` over
3. **Datum-check** — Slaat posts met een toekomstige datum over (bijv. `date: 2025-12-08` wordt pas op 8 december gepubliceerd)
4. **Hugo build** — Bouwt de site lokaal om te checken of alles werkt
5. **Push** — Pusht naar GitHub, wat de GitHub Actions deployment triggert
6. **Notificatie** — Stuurt een macOS notificatie bij succes of falen

### Gebruik

```bash
# Normale run
./scripts/auto-publish.sh

# Dry-run (laat zien wat er zou gebeuren, zonder te pushen)
./scripts/auto-publish.sh --dry-run
```

### Logs

Alle output wordt gelogd naar `logs/auto-publish.log`.

---

## random-delay-publish.sh

**Doel:** Wrapper die een random vertraging toevoegt, zodat posts niet elke dag op exact hetzelfde tijdstip verschijnen.

### Wat het doet

1. Start om 7:00 (via launchd)
2. Wacht een willekeurige tijd tussen 0 en 6 uur
3. Roept dan `auto-publish.sh` aan

**Resultaat:** Posts worden ergens tussen 7:00 en 13:00 gepubliceerd.

### Configuratie

De launchd job staat in:
```
~/Library/LaunchAgents/nl.modub.devblog-publish.plist
```

Handmatig starten/stoppen:
```bash
# Laden (aanzetten)
launchctl load ~/Library/LaunchAgents/nl.modub.devblog-publish.plist

# Unloaden (uitzetten)
launchctl unload ~/Library/LaunchAgents/nl.modub.devblog-publish.plist

# Status checken
launchctl list | grep modub
```

---

## Tips

### Post inplannen voor later

Zet gewoon de datum in de toekomst in de frontmatter:

```yaml
---
title: "Mijn geplande post"
date: 2025-12-25T09:00:00+01:00
---
```

De post wordt automatisch gepubliceerd op 25 december (of de eerstvolgende keer dat het script draait na die datum).

### Forceer publicatie

Als je niet wilt wachten op de scheduled run:

```bash
cd ~/Projecten/devblog
./scripts/auto-publish.sh
```

### Draft houden

Wil je een post nog niet publiceren, ook niet als de datum bereikt is?

```yaml
---
title: "Work in progress"
date: 2025-12-06T09:00:00+01:00
draft: true
---
```

De post wordt genegeerd totdat je `draft: true` verwijdert.
