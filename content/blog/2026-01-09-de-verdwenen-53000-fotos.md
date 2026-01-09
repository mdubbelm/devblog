---
title: De verdwenen 53.000 foto's (en hoe we ze terugvonden)
slug: de-verdwenen-53000-fotos
date: 2026-01-09T22:00:00+01:00
draft: false
description: Over duplicaten die niet gedetecteerd werden, een avond database-detectivewerk met Claude Code, en waarom je je externe schijf niet moet loskoppelen terwijl Immich draait
tags:
  - immich
  - raspberry-pi
  - homeserver
  - claude-code
  - troubleshooting
# Mastodon comments - vul de toot ID in na publicatie
mastodon:
  host: mastodon.social
  username: Mdubbelm
  id: ""
---

Ik wist dat er duplicaten in mijn fotobibliotheek zaten. Heel veel duplicaten. Jaren van "even snel kopiëren" naar verschillende mappen, backups van backups, exports uit Apple Photos. Je kent het wel.

[Vorige week schreef ik over mijn Immich-avontuur](/blog/mijn-eigen-fotobibliotheek) - ik had het aan de praat gekregen - na eerst per ongeluk 235.000 foute imports te hebben gemaakt. Nu wilde ik die duplicaten aanpakken.

Immich heeft een handige functie om duplicaten te vinden. Je gaat naar Hulpprogramma's, klikt op duplicaten, en dan toont hij alle foto's die op elkaar lijken.

Alleen: hij vond alleen duplicaten in mijn uploadmap (waar foto's van mijn telefoon terechtkomen). De 53.000+ foto's in mijn externe bibliotheek op een andere schijf? Niks. Nul. Noppes.

## De eerste hypothese: "dat zal wel niet werken voor externe bibliotheken"

Ik raadpleegde mijn digitale buddy Claude Code en diens eerste hypothese was: een beperking van Immich. Externe bibliotheken zijn tenslotte alleen-lezen - Immich mag daar niks aanpassen. Misschien was duplicate detection gewoon niet geïmplementeerd voor externe bibliotheken?

Maar dat kon ik me niet voorstellen. Andere slimme functies werkten wél: gezichtsherkenning, locaties, zelfs zoeken op wat er in de foto staat (typ "strand" en je vindt strandfoto's). Waarom zou duplicate detection dan niet werken?

Ik vroeg Claude verder te graven.

## De zoektocht

Wat volgde was een uurtje van eigen en online documentatie doorzoeken, bugmeldingen en discussies op GitHub lezen (de plek waar de Immich-code staat), en steeds dieper in de technische details duiken.

Eerst de officiële documentatie. Die zei:

> "Duplicate checking only exists for upload libraries, using the file hash."

Aha! Dus het werkt niet voor externe bibliotheken? Maar wacht, dat gaat over het detecteren van exacte kopieën bij uploaden. De duplicate detection die ik zocht werkt anders - op basis van visuele gelijkenis.

Toen de discussies op GitHub. [Een discussie over duplicate detection bij externe bibliotheken](https://github.com/immich-app/immich/discussions/11798) bevestigde: de slimme duplicate detection *zou* moeten werken voor externe bibliotheken. Het gebruikt dezelfde techniek als de zoekfunctie.

## De database liegt niet

Claude stelde een vraag aan de database voor: "Tel per bibliotheek hoeveel foto's er zijn, en hoeveel daarvan een digitale vingerafdruk hebben."

```sql
SELECT
  CASE WHEN "libraryId" IS NULL THEN 'Upload library' ELSE 'External library' END as library_type,
  COUNT(*) as total_assets,
  COUNT(se.embedding) as with_embeddings
FROM asset a
LEFT JOIN smart_search se ON a.id = se."assetId"
GROUP BY 1;
```

Het resultaat:

```
 library_type     | total_assets | with_embeddings
------------------+--------------+-----------------
 External library |        53766 |               0
 Upload library   |         7284 |            3850
```

53.766 foto's in de externe bibliotheek. Nul "embeddings" - dat zijn de digitale vingerafdrukken die Immich maakt om foto's te kunnen vergelijken en doorzoeken.

De upload library had die vingerafdrukken wél (al was het niet 100%). Maar de externe bibliotheek? Helemaal niks. Geen wonder dat duplicate detection ze niet kon vergelijken - er was letterlijk niks om te vergelijken.

## Waarom waren ze verwijderd?

We doken dieper. Claude bekeek zelfs de programmacode van Immich. Nergens iets dat externe bibliotheken zou overslaan. De software *zou* ze gewoon moeten meenemen.

Toen stelde Claude een andere query voor: "Hoeveel foto's zijn gemarkeerd als verwijderd, en in welke bibliotheek?"

```sql
SELECT
  a."libraryId" IS NOT NULL as is_external,
  a."deletedAt" IS NULL as not_deleted,
  COUNT(*) as count
FROM asset a
GROUP BY 1, 2;
```

En daar was het:

```
 is_external | not_deleted | count
-------------+-------------+-------
 f           | f           |   202
 f           | t           |  7082
 t           | f           | 53764
 t           | t           |     2
```

**53.764 foto's in de externe bibliotheek waren gemarkeerd als verwijderd.** Slechts 2 niet.

Mijn hele externe bibliotheek stond in de prullenbak. Niet echt verwijderd - de bestanden stonden nog gewoon op de schijf - maar Immich dacht dat ze weg waren. En verwijderde items worden netjes overgeslagen.

## De oorzaak

Wanneer was dit gebeurd? Een simpele query: "Op welke datums zijn foto's uit de externe bibliotheek verwijderd, en hoeveel per dag?"

```sql
SELECT DATE("deletedAt"), COUNT(*)
FROM asset WHERE "libraryId" IS NOT NULL AND "deletedAt" IS NOT NULL
GROUP BY 1;
```

```
 deleted_date | count
--------------+-------
 2026-01-05   |   701
 2026-01-08   | 53063
```

8 januari. Gisteren. De dag dat ik de externe schijf had losgekoppeld van de plek waar Immich de foto's zoekt.

Immich heeft een automatische dagelijkse library scan. Ergens in die periode moet een scan hebben gedraaid terwijl de externe schijf niet beschikbaar was. Immich kon de bestanden niet vinden. Conclusie: alles offline. Alles naar de prullenbak.

De precieze volgorde heb ik niet helemaal kunnen reconstrueren uit de logbestanden. Maar het patroon is duidelijk: schijf even weg = Immich markeert alles als verwijderd.

## De fix

De oplossing was verrassend simpel: "Haal de verwijder-markering weg bij alle foto's in de externe bibliotheek."

```sql
UPDATE asset
SET "deletedAt" = NULL
WHERE "libraryId" IS NOT NULL
AND "deletedAt" IS NOT NULL;
```

53.764 foto's hersteld. Immich herstarten. De slimme zoekfunctie opnieuw laten draaien.

En ja hoor: 59.000+ foto's in de wachtrij om verwerkt te worden. De externe bibliotheek werd eindelijk gescand.

## Wat ik leerde

**Ten eerste**: Immich' automatische library scan is gevaarlijk als je schijf niet altijd aangesloten en beschikbaar is. Je kunt dit uitzetten of aanpassen in Administration → Settings → External Library → Periodic Scanning.

**Ten tweede**: de database liegt niet. Als iets niet werkt zoals verwacht, vraag de database wat er aan de hand is. Die mysterieuze "verwijderd op"-datum vertelde het hele verhaal.

**Ten derde**: Claude Code is een goede onderzoekspartner. Niet omdat het alle antwoorden weet - die stonden nergens kant-en-klaar - maar omdat het methodisch kan zoeken, documentatie kan lezen, en de juiste vragen kan stellen.

Zelf had ik dit niet gekund. Niet het doorzoeken van de Engelse technische documentatie, niet het opstellen van die databasevragen, en ook niet het interpreteren van de uitkomsten. Dat er 53.764 foto's "verwijderd" waren had ik uit die cijfertjes niet gehaald. Voor mij was de inzet van Claude Code hier echt waardevol.

De hele sessie kostte zo'n twee uur. Handmatig - áls ik het al had gekund - was ik er dagen mee bezig geweest.

Het scannen draait nu nog steeds. 29.000+ foto's te gaan. Maar daarna kan ik eindelijk die duplicaten opsporen. Die schijf blijft voortaan aan de Pi hangen - de Raspberry Pi waar Immich op draait, bedoel ik. Een kleine computer die dag en nacht aanstaat. Dat weet ik nu.

<!--
MASTODON POST (handmatig plaatsen, dan toot-ID invullen in frontmatter):

53.000 foto's "kwijt" in mijn fotobibliotheek. Niet echt weg, maar Immich dacht van wel.

De oorzaak? Ik had mijn externe schijf even losgekoppeld. Immich zag de foto's niet meer en markeerde ze als verwijderd.

Een avond speurwerk met Claude Code. En één opdracht om alles te herstellen.

https://modub.nl/blog/de-verdwenen-53000-fotos #immich #selfhosted #claudecode
-->
