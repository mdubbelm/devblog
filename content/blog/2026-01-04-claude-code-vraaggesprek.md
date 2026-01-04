---
title: Laat de AI de vragen stellen
slug: claude-code-vraaggesprek
date: 2026-01-04T20:00:00+01:00
draft: false
description: Over een slimmere manier om met Claude Code te werken - door de AI vragen te laten stellen in plaats van zelf alles te moeten overzien
tags:
  - claude-code
  - ai
  - workflow
  - homeserver
mastodon:
  host: mastodon.social
  username: Mdubbelm
  id: ""
---

"Ik overzie het niet."

Dat typte ik vanmiddag naar Claude Code. Niet mijn meest eloquente moment, maar wel eerlijk.

## Te veel informatie

Ik ben bezig met [mijn homeserver](/blog/mijn-eigen-fotobibliotheek) – Raspberry Pi, Immich voor foto's, Navidrome voor muziek. Het werkt, maar ik wilde de aanpak eens laten reviewen. Mis ik iets? Doe ik het goed?

Dus vroeg ik Claude Code om de relevante agents[^1] in te schakelen: Limor (homeserver specialist) en Grace (backup specialist). Die kwamen met vragen waar ik zelf helemaal niet aan had gedacht. Backup strategie? Monitoring? Wat als de stroom uitvalt? Wat als de Pi crasht terwijl ik niet thuis ben?

Goede vragen. Maar het waren er ineens een stuk of tien, netjes gegroepeerd in tabellen met kritieke punten, aandachtspunten, en actielijsten. Mooie aanbevelingen – en mijn hoofd werd er moe van. Te veel tegelijk.

## Draai het om

Ik typte:

> "Kunnen beide agents hun vragen 1 voor 1 stellen, op volgorde van prioriteit, en mijn antwoord afwachten totdat ik de volgende vraag beantwoord?"

Simpel verzoek. En het werkte verrassend goed.

## Eén vraag, één antwoord

Grace begon:

> "De ProtonDrive sync is geconfigureerd maar nog niet actief. Wil je de sync nu aanzetten, of wachten tot de Immich thumbnails klaar zijn?"

Ah. Eén vraag. Die kon ik aan. "Is het handig om te wachten?" vroeg ik terug. Grace legde uit waarom (minder belasting op de Pi), ik zei oké, door naar de volgende.

Zo werkten we door acht vragen. Backup al gedraaid? Nee, eerste moet vannacht. Offsite schijven? Liggen nog thuis, niet beschreven. UPS? Nee. Monitoring? Ook nee.

Elke vraag één antwoord. Geen afleiding, geen "maar wat als", geen rabbit holes.

## Wat het opleverde

Na tien minuten had ik:

- Duidelijkheid over wat er wél en níet geregeld is
- Een geprioriteerde TODO in de README
- Begrip waarom sommige dingen urgent zijn (backup) en andere niet (UPS)

Maar belangrijker: ik had het gevoel dat ik het *snapte*. Niet dat ik een rapport had gekregen dat ik later nog eens moest lezen. (Spoiler: dat doe ik nooit, jij wel?)

## Waarom dit werkt

AI-tools zijn geneigd om alles tegelijk te dumpen. Hier zijn je opties! Hier de voor- en nadelen! Hier een tabel! Nuttig, maar overweldigend. Zeker als je al moe bent of het overzicht kwijt bent.

Door de AI te vragen om het om te draaien – jij stelt de vragen, ik antwoord – krijg je een gesprek in plaats van een presentatie. En gesprekken zijn makkelijker te volgen dan presentaties.

## Wanneer dit handig is

Niet altijd. Als je precies weet wat je wilt, werkt "geef me een script dat X doet" prima. Maar als je:

- Niet weet waar je moet beginnen
- Te veel opties krijgt
- Het overzicht kwijt bent
- Moe bent (hè hè, herkenbaar)

Dan werkt deze aanpak goed.

## Oh ja, de homeserver

Bijna vergeten – dit kwam eruit over mijn setup:

- ✅ Basis staat (SSD boot, Docker, Tailscale)
- ⏳ Backup draait vannacht voor het eerst
- ⏳ ProtonDrive sync moet nog starten
- ❌ Geen monitoring, geen UPS, geen auto-updates

En een TODO-lijstje dat ik daadwerkelijk ga gebruiken. Omdat ik elk punt zelf heb doorgenomen, in plaats van het van een wall of text te moeten schrapen.

*Soms is de beste manier om iets te begrijpen niet door te lezen, maar door vragen te beantwoorden.*

[^1]: De agents in mijn Claude Code setup zijn [vernoemd naar vrouwen in tech](/blog/ai-workflow/de-vrouwen-achter-mijn-ai-agents/): Limor naar [Limor Fried](https://en.wikipedia.org/wiki/Limor_Fried) (oprichter Adafruit), Grace naar [Grace Hopper](https://en.wikipedia.org/wiki/Grace_Hopper) (computerpionier, uitvinder van de compiler).

<!--
MASTODON POST (handmatig plaatsen, dan toot-ID invullen in frontmatter):

"Ik overzie het niet."

Dus vroeg ik Claude Code om het om te draaien: laat de AI de vragen stellen, één voor één, en wacht op mijn antwoord.

10 minuten later: duidelijkheid, geprioriteerde actielijst, en het gevoel dat ik het snapte.

https://modub.nl/blog/claude-code-vraaggesprek #claudecode #ai
-->
