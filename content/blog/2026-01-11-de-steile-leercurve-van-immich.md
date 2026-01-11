---
title: De steile leercurve van Immich
date: 2026-01-11
draft: false
description: Over foto's delen die niet echt gedeeld zijn, en duplicaten verwijderen die niet echt verwijderd worden
tags:
  - immich
  - homeserver
  - self-hosted
  - raspberry-pi
cover:
  image: /images/blog/2026/immich-leercurve.jpg
  alt: Immich interface op een scherm
  hidden: true
mastodon:
  host: mastodon.social
  username: Mdubbelm
  id: "115877880148939339"
---

Ik heb nu een paar weken een Raspberry Pi draaien met Immich erop. 50.000+ foto's. Een externe schijf eraan. Alles netjes geïndexeerd met gezichtsherkenning en een kaart waar je op kunt klikken, en eerlijk gezegd is het best gaaf om te zien hoe dat allemaal werkt op zo'n klein computertje dat naast mijn router staat te zoemen.

Maar hè hè. Wat is het soms een gepuzzel.

## Delen is niet echt delen

Vandaag wilde ik mijn fotoarchief delen met mijn vriend. Simpel toch?

Hij heeft een account, ik klik op "Partner sharing", klaar. Mwah.

Eerst moest hij überhaupt bij de server kunnen. Mijn Pi hangt aan ons thuisnetwerk, en als hij niet op onze wifi zit kan hij er niet bij. Ik gebruik [Tailscale](https://tailscale.com/) - een VPN waarmee apparaten elkaar vinden alsof ze op hetzelfde netwerk zitten. Handig.

Toen dat eenmaal werkte zag hij mijn foto's in zijn timeline. Op de kaart zoeken waar foto's zijn gemaakt? Werkt. Prima.

Maar toen hij zocht op een persoon - die handige gezichtsherkenning waar Immich zo goed in is - niks. Blijkt: die functie werkt alleen voor de *eigenaar* van de foto's. Partners mogen kijken, maar niet zoeken. Niet op die manier.

Ik dacht even dat het aan zijn telefoon lag. Of aan Tailscale. Of aan de fase van de maan ofzo.

Nee hoor.

Het alternatief is dat we allebei een eigen "external library" aanmaken naar dezelfde map. Dan hebben we beiden volledige features. Maar dan staan al die 50.000 foto's dubbel in de database, en dat voelde meer als workaround dan als oplossing.

Volgende keer ga ik kijken of een gezamenlijk account beter werkt. Eentje die eigenaar is van de library, waar we allebei op inloggen als we het archief willen doorzoeken. Maar dat is voor een andere dag.

## Verwijderen is ook niet echt verwijderen

Ondertussen had ik ook een berg duplicaten gevonden. Immich heeft daar een mooie tool voor: je klikt door de setjes, kiest welke je wilt houden, de rest gaat naar de prullenbak.

Alleen.

Bij een external library blijven de bestanden gewoon op je schijf staan. De prullenbak is meer een... idee. Een database-dingetje. De foto's lachen je uit vanaf je externe schijf.

Ik legde het probleem voor aan Claude, mijn AI-assistent die me helpt met dit soort technische puzzels. Die kwam met een heel script: database queries, paden vertalen, bestanden verplaatsen naar een tijdelijke map (voor de zekerheid, want ja, de eerste 583 als duplicaat gemarkeerde foto's in één keer weggooien voelt toch spannend). Omslachtig, maar het deed wat het moest doen.

Tot [Frank Meeuwsen](https://frankmeeuwsen.com/) (die ook met Immich worstelt) me een berichtje stuurde: had ik wel `:ro` weggehaald bij mijn mount?

Eh.

Die `:ro` had ik nota bene op advies van Claude in mijn docker-compose gezet. Read-only. Veilig. Beschermt je bestanden tegen onbedoeld verwijderen. Klinkt logisch toch?

Alleen had diezelfde Claude me net een heel script laten bouwen om bestanden handmatig te verwijderen - in plaats van gewoon te vragen: "Hé, staat je mount misschien op read-only?"

Twee karakters. `:ro` weghalen. En de prullenbak werkt gewoon.

(AI is soms geweldig. En soms wat minder.)

## De leercurve

Immich is krachtige software. Echt. De gezichtsherkenning is beter dan ik had verwacht, de kaartfunctie is geweldig, en het idee dat al mijn foto's op mijn eigen hardware staan (en niet bij Google of Apple) voelt goed.

Maar het is geen Apple Photos. Geen "installeren en vergeten". Je moet snappen hoe Docker werkt. Wat mounts zijn. Waarom read-only soms niet is wat je wilt. Je moet accepteren dat Partner sharing niet hetzelfde is als een gedeelde bibliotheek.

En je moet mensen kennen die de juiste vragen stellen als jij en je AI allebei de bocht uit vliegen.

Met AI kom je een heel eind, maar accepteer dat het je dus ook soms je zondag of je nachtrust kost.

<!--
MASTODON POST (handmatig plaatsen, dan toot-ID invullen in frontmatter):

`:ro`

Dat waren de drie karakters die ik moest weghalen. Een heel database-script gebouwd, terwijl mijn mount gewoon op read-only stond.

En foto's delen met je partner? Kijken mag, zoeken op gezichten niet. Dat mag wat mij betreft simpeler.

AI is soms geweldig. En soms wat minder.

https://modub.nl/blog/de-steile-leercurve-van-immich/ #immich #selfhosted
-->
