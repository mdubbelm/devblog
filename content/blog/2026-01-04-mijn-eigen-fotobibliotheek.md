---
title: Mijn eigen fotobibliotheek (en hoe ik 'm bijna opblies)
slug: mijn-eigen-fotobibliotheek
date: 2026-01-04T12:00:00+01:00
draft: false
description: Over het opzetten van Immich, 289.000 foto's waar er 55.000 hadden moeten zijn, en waarom je nooit dezelfde map twee keer moet mounten
tags:
  - immich
  - raspberry-pi
  - homeserver
  - open-source
  - self-hosted
mastodon:
  host: mastodon.social
  username: Mdubbelm
  id: ""
---

Nou, dat was even schrikken. Ik keek in mijn gloednieuwe fotobibliotheek en zag 289.000 foto's. Terwijl ik er ca. 55.000 heb. Vijf keer zoveel. Oeps.

## Van Navidrome naar Immich

[Een paar dagen geleden](/blog/terug-naar-mijn-muziek) had ik Navidrome aan de praat gekregen voor mijn muziek. De Raspberry Pi draait, de externe schijf is gemount, alles werkt. Dus logisch: nu de foto's.

Immich is een open source alternatief voor Google Photos en iCloud Photos. Je installeert het via Docker, koppelt je fotomap, en het indexeert alles met gezichtsherkenning, locaties, en zelfs zoeken op wat er in de foto staat. Klinkt ingewikkeld, is het eigenlijk niet.

Maargoed, de installatie was niet het probleem. Wat erna kwam wel.

## 55.000 foto's worden er 289.000

Na een dag of twee indexeren keek ik in de Immich web interface. Mooi! Foto's stonden erin. Gezichten werden herkend. Maar er was iets raars.

Heel veel dubbele foto's. En allemaal met de datum van 3 januari 2026 – de dag dat ik Immich had opgestart. Niet de echte datum, niet de EXIF-datum van de foto zelf.

Ik dacht eerst: misschien leest hij de metadata niet goed? HEIC-bestanden kunnen lastig zijn. Maar het waren ook gewone JPEGs.

Toen telde ik even in de database:

```
SELECT COUNT(*) FROM asset;
→ 289.375
```

289.000 assets. Terwijl ik er hooguit 55.000 had. Vijf keer zoveel.

## De fout: dezelfde map twee keer gemount

Na wat troubleshooten met Claude Code kwam de oorzaak boven water. In mijn `docker-compose.yml` stond dit:

```yaml
volumes:
  - ${UPLOAD_LOCATION}:/data
  - "/mnt/schijf/photos:/photos:ro"
```

En in mijn `.env`:

```
UPLOAD_LOCATION=/mnt/schijf/photos
```

Zie je het probleem? Dezelfde map – `/mnt/schijf/photos` – werd twee keer gemount. Eén keer als bron voor de foto's (`/photos`), en één keer als de plek waar Immich z'n eigen data opslaat (`/data`). Inclusief gegenereerde thumbnails en previews.

Dus: Immich scant de foto's. Maakt thumbnails. Slaat ze op in dezelfde map. Volgende scan: "Oh, nieuwe foto's!" Importeert de thumbnails als foto's. Maakt daar weer thumbnails van. En zo verder. Een soort [Groundhog Day](https://www.imdb.com/title/tt0107048/), maar dan met thumbnails.

437.000 thumbnail-bestanden later was mijn fotomap een puinhoop. En mijn vriend totaal overprikkeld, want de cooler van de Pi stond al 24 uur op orkaanstand. Die arme machine deed z'n best.

En ja, ik had dit kunnen voorkomen. Toen ik Immich installeerde met hulp van Claude Code, vroeg die waar mijn foto's stonden. `/mnt/schijf/photos`, zei ik. En die map werd keurig ingevuld voor zowel de fotomap als de uploadlocatie. Ik klikte op OK zonder na te denken. Want het was al laat, en het leek te werken.

(Niet dus.)

## De oplossing

Stap 1: Immich stoppen.

Stap 2: `UPLOAD_LOCATION` veranderen naar een aparte map (in mijn geval op de SSD: `/mnt/ssd/immich-data`).

Stap 3: Alle foute imports uit de database verwijderen:

```sql
DELETE FROM asset
WHERE "originalFileName" LIKE '%-thumbnail.webp'
   OR "originalFileName" LIKE '%-preview.jpeg';
→ DELETE 235.224
```

Stap 4: De fysieke thumbnail-bestanden van de schijf verwijderen. Dat duurde even – 437.000 kleine bestanden op een USB-aangesloten HDD.

Stap 5: Immich weer starten. Nu genereert hij thumbnails in de juiste map, en importeert hij alleen echte foto's.

## Wat ik geleerd heb

Allereerst: niet blind op OK klikken. Ook niet als het laat is. Ook niet als de AI het zo mooi voor je invult. Even nadenken: wil ik mijn foto's en mijn gegenereerde thumbnails echt in dezelfde map? Nee, natuurlijk niet.

Verder:

- **Check je aantallen.** Als je 55.000 foto's verwacht en er 289.000 in je database staan, is er iets mis. Niet "oh wat leuk, ik had meer foto's dan ik dacht."

- **De database liegt niet.** Een paar Postgres-queries en je weet precies wat er aan de hand is. De bestandsnamen (`*-thumbnail.webp`) verraadden meteen het probleem.

## Hoe nu verder

De cleanup draait nog terwijl ik dit schrijf. Daarna moet Immich opnieuw thumbnails genereren voor de echte 54.000 foto's – maar nu in de juiste map. Dat gaat weer een paar uur duren op die Pi. Geduld.

Maar dan heb ik wel mijn eigen fotobibliotheek. Volledig self-hosted, geen Apple of Google die meekijkt, en met gezichtsherkenning die lokaal draait. Daar doe je het voor.

Hebben jullie ervaring met Immich of andere self-hosted foto-oplossingen? Ik ben benieuwd.

*Soms moet je eerst 235.000 foute imports verwijderen voordat je kunt beginnen.*

<!--
MASTODON POST (handmatig plaatsen, dan toot-ID invullen in frontmatter):

Mijn vriend: "Waarom staat die cooler al 24 uur op orkaanstand?"

Immich importeerde z'n eigen thumbnails als foto's. En maakte daar weer thumbnails van. Groundhog Day, maar dan met 437.000 bestanden.

https://modub.nl/blog/mijn-eigen-fotobibliotheek #immich #selfhosted
-->
