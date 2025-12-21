---
title: Claude Code in de terminal of in de desktop app?
date: 2025-12-20T14:00:00+01:00
draft: false
tags:
  - ai
  - workflow
  - claude-code
  - tools
description: Wat ik leerde over de verschillen tussen Claude Code in de terminal en de Claude Desktop app, en wanneer je welke gebruikt.
---

Op de [Digitale Fitheid meetup](https://start.digitalefitheid.nl/c/agenda/meet-greet-learn-43) deze week vroeg iemand waarom ze de Desktop app van Claude niet kon gebruiken voor haar projecten. Goede vraag. Ik gebruik zelf vooral de terminal, maar waarom eigenlijk?

Tijd om uit te zoeken wat de verschillen zijn.

---

## Eerst even context

Claude Code zit pas sinds eind november 2025 in de Desktop app. Daarvoor was het alleen beschikbaar als CLI-tool in de terminal. De integratie maakt het mogelijk om te coderen, debuggen en projecten te managen vanuit de Desktop app — inclusief git en andere CLI-tools.

Ik werk al een tijdje met Claude Code in de terminal. Vanuit mijn overkoepelende Projecten-folder, waar mijn CLAUDE.md en al mijn agents staan. Werkt prima. Maar de Desktop app heeft iets wat de terminal niet heeft: je kunt er screenshots in slepen.

---

## De opties in de Desktop app

Wanneer je de Claude Desktop app opent, krijg je een environment selector:

| Optie | Betekenis |
|-------|-----------|
| **Local** | Claude heeft toegang tot je bestanden en kan tools gebruiken |
| **Default** | Alleen chat, geen toegang tot je systeem |
| **Add environment** | Remote omgeving toevoegen (SSH naar server) |

De "Local" optie geeft Claude toegang tot je bestanden. Maar dan moet je wel instellen welke folders, via Settings → Developer.

---

## Mijn setup

Mijn werkstructuur ziet er zo uit:

```text
/Users/monique/Projecten/
├── CLAUDE.md           ← overkoepelende context
├── _agents/            ← mijn team van AI agents
├── devblog/            ← dit blog
├── zweedsapp/          ← PWA project
└── ...
```

In de terminal start ik Claude vanuit `/Projecten`. De CLAUDE.md wordt automatisch geladen. Klaar.

In de Desktop app moet je die working directory handmatig instellen. Dat kan, maar het is een extra stap.

---

## Wanneer welke tool?

Na wat experimenteren kwam ik tot deze verdeling:

| Feature              | Desktop app       | Terminal (CLI)             |
| -------------------- | ----------------- | -------------------------- |
| Screenshots uploaden | ✅ Drag & drop     | ❌ Niet direct              |
| Visuele feedback     | ✅ Mooie UI        | Tekst-based                |
| File access          | Via settings      | ✅ Direct                   |
| Working directory    | Moet je instellen | Waar je op dat moment bent |
| CLAUDE.md auto-load  | Handmatig         | ✅ Automatisch              |
| Snelheid             | Trager            | ✅ Sneller                  |

Dat laatste punt verdient uitleg. De terminal voelt merkbaar sneller. Tekst verschijnt direct, zonder de rendering overhead van een Electron app. Bij langere sessies of veel file operations merk je dat verschil. Ook kun je makkelijk verschillende vensters naast elkaar openen om tegelijk aan verschillende dingen te werken.

Maar: de Desktop app is wel laagdrempeliger voor starters. Geen terminal openen, geen `cd` naar de juiste folder, geen commands onthouden. Gewoon de app openen en typen. Als je nog niet gewend bent aan de command line, is dat een stuk minder intimiderend.

### Worktrees: meerdere taken tegelijk

De Desktop app heeft ook een handige feature: **worktrees**. In gewone mensentaal: je kunt meerdere Claude-sessies tegelijk draaien, elk bezig met een andere taak in hetzelfde project.

Stel je voor: één Claude fixt een bug, terwijl een andere Claude documentatie schrijft. Zonder dat ze elkaar in de weg zitten. Elke sessie werkt in een eigen "kopie" van je project (technisch: een git worktree), maar ze delen wel dezelfde onderliggende code.

Voor beginners is dit fijn omdat je niet hoeft te weten hoe git branches werken. De Desktop app regelt het voor je. Je klikt gewoon op "nieuwe sessie" en gaat aan de slag.

---

## Mijn conclusie

De terminal blijft mijn primaire tool voor projectwerk. De CLAUDE.md wordt automatisch geladen, ik kan makkelijk wisselen tussen projecten met `cd`, en alles werkt gewoon.

De Desktop app gebruik ik voor:
- Screenshots analyseren
- UI/design feedback vragen
- Visuele vragen waar ik iets wil laten *zien*
- Snelle vragen waar ik geen file access nodig heb

Het zijn twee tools met elk hun eigen sterke punten. Geen van beide is "beter", ze vullen elkaar aan.

Heb je geen ervaring met de terminal en command line? Dan is de Desktop app een prima startpunt. Je kunt direct aan de slag zonder eerst commands te leren. En als je later meer wilt, kun je altijd nog overstappen naar de terminal.

---

## Wat ik hiervan leerde

**1. De terminal wint voor projectwerk.**

Als je een overkoepelende CLAUDE.md hebt met agents en context, is de terminal gewoon handiger. Automatische context loading is een groot voordeel.

**2. Screenshots zijn een killer feature.**

Soms wil je gewoon iets laten zien. Een error in de browser, een design dat niet klopt, een UI die je wilt bespreken. Dan is drag & drop in de Desktop app onverslaanbaar.

---

*De beste tool is de tool die past bij wat je op dat moment doet.*

