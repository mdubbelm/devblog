---
title: Ik heb Readwise opgezegd. Voor de zoveelste keer
slug: ik-heb-readwise-opgezegd
date: 2026-04-12T09:00:00+02:00
draft: false
description: Voor de vierde keer een nieuwe read-later setup, deze keer self-hosted op Miniflux en Kill the Newsletter. Of het patroon nu doorbreekt? Geen idee.
tags:
  - rss
  - self-hosted
  - miniflux
  - newsletters
  - raspberry-pi
  - open-source
  - digitale-onafhankelijkheid
---

Ik heb Readwise opgezegd. Niet omdat het slecht is, ik las het gewoon niet meer. En bijna tien euro per maand betalen voor iets dat ik niet gebruik vind ik op een gegeven moment zonde.

Vorig jaar leerde ik tijdens de [Leergang Digitale Fitheid](https://digitalefitheid.nl/leergang/) over Readwise Reader. Ik merkte dat het opslaan van artikelen die ik wilde bewaren of nog lezen een beetje omslachtig was geworden. Readwise leek dé oplossing. 
Maar na een paar maanden zag ik een patroon. Voor Readwise had ik Feedbin. Voor Feedbin had ik Pocket. En voor Pocket had ik Feedly. Steeds dezelfde route: enthousiast feeds toevoegen, een paar weken trouw lezen, dan langzaam afhaken. Op een gegeven moment open ik de app niet meer en blijft alleen het schuldige gevoel over dat ik er nog steeds voor betaal.

Misschien voeg ik te makkelijk feeds toe. Misschien wisselt het per periode hoeveel ruimte ik in mijn hoofd heb voor dingen die niet móeten. Bij vlagen vind ik het belangrijk om dingen te kunnen bewaren en lezen. Bij andere vlagen niet. En dat is het patroon waar ik op vastloop.

## Dus wat dan

Mijn voornemen was niet "ik ga deze keer écht lezen". Dat heb ik vier keer eerder gedacht en dat werd niks. Kijk aan, onze Monique begint zichzelf na ruim 50 jaar eindelijk een beetje te kennen! Mijn voornemen was: als ik er tóch niet altijd naar omkijk, hoef ik er ook niet voor te betalen. En als ik het al doe, dan op spullen die van mij zijn.

Dus heb ik het zelf opgezet. Nou ja, zelf – geïnstalleerd, geconfigureerd, en flink wat in elkaar geprutst met Claude naast me om de details op te lossen. Drie stukjes:

**Miniflux** draait op de Raspberry Pi in mijn werkkamer. Een open source RSS-lezer, klein en stil, die alles lokaal opslaat. RSS is de oude techniek waarmee blogs hun nieuwe artikelen aankondigen, een soort abonneer-knop die niet aan een bedrijf gekoppeld is. Bestaat al sinds ergens eind jaren negentig en is nog altijd niet kapot te krijgen.

**Kill the Newsletter** draait op mijn VPS, op een eigen subdomein. (Een VPS is een huur-server in een datacenter, in mijn geval bij Hetzner in Duitsland.) Kill the Newsletter maakt e-mailadressen aan waar je nieuwsbrieven naartoe kunt sturen. Wat binnenkomt, zet het om naar een feed. Die feed lees ik vervolgens... in Miniflux (als ik zin heb dan). Cirkel rond.

Waarom dat omslachtige gedoe? Omdat ik nieuwsbrieven niet in mijn gewone mailprogramma wil. Mijn inbox is voor mensen die antwoord willen, voor bestelbevestigingen. of facturen. Niet voor de wekelijkse update van wie of wat dan ook. Nieuwsbrieven horen bij lezen, niet bij doen.

**NetNewsWire** is de app waarin ik het uiteindelijk lees, op de Mac en op de iPhone. Gratis, open source, gemaakt door iemand die nog van het oude RSS-tijdperk komt. Deze app praat met Miniflux. Op de bank pak ik mijn telefoon, op mijn werkplek de Mac, en het lijstje is overal hetzelfde.

## Wat is hier nu echt anders aan

Eerlijk? Ik weet niet of ik nu wel ga lezen. Het zou kunnen  dat ik over een paar maanden weer een post schrijf waarin Miniflux dezelfde rol speelt als Feedbin in deze. Als ik lees, heb ik vaak meer behoefte aan fictie en niet aan werkgerelateerde zaken. De kunst is om het lezen in te bouwen in mijn werkroutine. Dat gaat soms goed en vaak niet.

Wat wel zeker anders is: ik betaal er niet meer voor. Het draait op spullen die van mij zijn, op een domein dat van mij is. Als ik over zes maanden weer afhaak, heb ik tenminste geen abonnement waar ik me schuldig over voel. Ik zet de containers stil en daar blijft het bij.

En het past in een grotere beweging die ik aan het doorvoeren ben. Stap voor stap minder betaalde abonnementen, meer open source, meer in eigen beheer. Niet omdat het ineens technisch makkelijk zou zijn, maar omdat het met AI naast me aan tafel net haalbaar genoeg is om het zelf werkend te krijgen. 

Of mijn patronen  echt veranderen weet ik dus niet. Of mijn portemonnee blijer is: dat wel. En het belangrijkste: ik heb er weer veel van geleerd!

<!--mastodon
Ik heb Readwise opgezegd. Voor de vierde keer een read-later tool, deze keer self-hosted. Miniflux op de Pi voor RSS, Kill the Newsletter op de VPS voor nieuwsbrieven, NetNewsWire als app.

Of ik nu wel ga lezen? Geen idee. Maar ik betaal er in ieder geval niet meer voor.

https://modub.nl/blog/ik-heb-readwise-opgezegd/

#selfhosted #rss #opensource
-->
