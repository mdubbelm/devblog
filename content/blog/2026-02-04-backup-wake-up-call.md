---
title: De backup wake-up call (en het systeem dat eruit kwam)
slug: backup-wake-up-call
date: 2026-02-04T14:00:00+01:00
draft: true
description: Hoe verdwenen Obsidian plugins me dwongen om mijn backup strategie onder de loep te nemen. En wat ik daarbij ontdekte.
tags:
  - backup
  - homeserver
  - obsidian
  - claude-code
  - hetzner
# Mastodon comments - vul de toot ID in na publicatie
mastodon:
  host: mastodon.social
  username: Mdubbelm
  id: ""
---

Vanochtend opende ik Obsidian en kreeg een melding: "Welkom bij je nieuwe vault!"

Huh? Nieuwe vault? Dit is mijn vault van afgelopen jaar. Met 26 plugins. Die er allemaal niet meer waren.

## Wat er gebeurd was

Gisteren had ik met Claude Code een plugin gebouwd voor Obsidian - een ISBN scanner voor mijn boekenlijst. Bij het installeren van die plugin is iets misgegaan. In plaats van alleen de nieuwe plugin-folder aan te maken, werd de hele plugins-map overschreven.

Resultaat: 26 plugins weg. Alle instellingen gereset. Obsidian dacht dat ik voor het eerst langskwam.

## De zoektocht naar een backup

Geen probleem, dacht ik. Ik heb Obsidian Sync. Maar nee - "Installed community plugins" stond uit. Logisch eigenlijk, sommige plugins werken niet op mobiel en ik wilde geen gedoe.

Oké, dan mijn nachtelijke backup. Maar toen ik ging zoeken: de Obsidian vault zat helemaal niet in het backup plan. Foto's, muziek, video - allemaal gebackupt. Mijn notities? Niet.

Proton Drive dan? Volgens mijn eigen documentatie zou de vault daar moeten syncen. Alleen: die sync was nooit opgezet. Het stond in het *plan*, niet in de *werkelijkheid*.

Uiteindelijk vond ik een backup in iCloud. Van september vorig jaar. Vijf maanden oud, maar beter dan niks.

## De wake-up call

Hier schrok ik van: mijn Obsidian vault - waar al mijn notities, projectdocumentatie en dagboeken in staan - had geen echte backup. Eén verkeerde actie en het was weg geweest.

De foto's? Drie kopieën. De muziek? Drie kopieën. Mijn notities? Alleen lokaal op mijn Mac.

Lekker bezig Monique... (not)

## Het nieuwe systeem

Dus ging ik aan de slag.

**Stap 1: Obsidian Sync goed instellen**

Obsidian Sync had ik al, maar de plugin-backup stond uit. Nu aan. Zo worden de plugins meegesynchroniseerd naar de cloud, maar kan mijn telefoon nog steeds zelf kiezen welke er actief zijn.

**Stap 2: Tweede backup naar Hetzner**

Ik huur online opslag bij Hetzner in Duitsland. Daar stonden al mijn foto's en muziek. Nu ook mijn vault en projecten. Een scriptje dat automatisch draait en alleen de gewijzigde bestanden kopieert.

**Stap 3: Documentatie op orde**

Dit kostte het meeste tijd. Ik had backup-documentatie op vijf verschillende plekken, deels verouderd, deels tegenstrijdig. Nu is er één plek: `OPSLAG-STRATEGIE.md`. Met:

- Wat staat waar
- Welke scripts draaien wanneer
- Hoe test je een restore
- Wat doe je voor een grote wijziging

## De nieuwe situatie

| Data | Kopie 1 | Kopie 2 | Kopie 3 |
|------|---------|---------|---------|
| Obsidian vault | Mac | Obsidian Sync | Hetzner |
| Projecten | Mac | GitHub | Hetzner |

3-2-1 regel: drie kopieën, twee verschillende media, één offsite. Mijn foto's en muziek hadden dat al. Mijn notities nu ook.

## De les

Twee dingen eigenlijk.

**Eén:** documentatie is niet hetzelfde als implementatie. Ik had een mooi plan. Het plan was niet uitgevoerd. Dat had ik beter moeten controleren, maar ik was met teveel dingen tegelijk bezig. En multi-tasken, daar is niemand goed in. Nee, vrouwen ook niet.

**Twee:** test je restores. Ik wist niet eens waar mijn backups stonden. Laat staan of ik ze terug kon zetten. Ik zou een kwartaal-reminder in mijn agenda moeten zetten: pak een willekeurig bestand en herstel het. Kijken of het werkt. Dat ga ik nog doen. Echt.

De plugins zijn terug. De vault is veilig. En ik heb een backup systeem waar ik op kan vertrouwen.

<!--
MASTODON POST (handmatig plaatsen, dan toot-ID invullen in frontmatter):

Vanochtend: 26 Obsidian plugins verdwenen. Backup? Niet echt.

De wake-up call die ik nodig had om mijn backup strategie onder de loep te nemen.

Nu: vault naar Obsidian Sync én Hetzner. Documentatie op één plek. En het voornemen om restores te testen.

https://modub.nl/blog/backup-wake-up-call #obsidian #backup #selfhosted
-->
