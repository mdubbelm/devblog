---
title: "Verdomme," zei de AI
date: 2026-02-12
draft: false
description: Over een AI die vier keer dezelfde fout maakt, ondanks z'n eigen documentatie. En dan vloekt.
tags:
  - ai
  - claude-code
  - homeserver
  - self-hosted
# Mastodon comments - vul de toot ID in na publicatie
mastodon:
  host: mastodon.social
  username: Mdubbelm
  id: ""
---

Ik werk samen met een AI om mijn eigen thuisserver te beheren. Een Raspberry Pi — een minicomputertje ter grootte van een pakje boter, waar ik mijn foto's en muziek op bewaar. De AI heet Claude Code en draait in mijn terminal. Ik typ wat ik wil, Claude geeft me commando's, en die voer ik uit.

Die samenwerking werkt verrassend goed. Claude weet hoe servers werken, ik weet wat ik wil. Claude typt de technische commando's, ik plak ze in mijn terminal en druk op enter. Als er iets misgaat, legt Claude uit wat er aan de hand is en geeft een nieuw commando. Een soort geduldige systeembeheerder die 's avonds laat nog rustig antwoord geeft.

Maar vandaag verloor die systeembeheerder z'n geduld.

## De spatie

Mijn muziekmap op de server heet `08. Muziek`. Met een spatie. En als je bestanden kopieert naar een andere computer (met een programma dat `rsync` heet), dan wordt die spatie verkeerd geïnterpreteerd. De computer denkt dat het pad stopt bij `08.` en maakt daar een nieuwe map van aan. Je muziek belandt op de verkeerde plek.

Dit is niet mijn expertise. Ik snap op hoofdlijnen wat er gebeurt — er gaat iets mis met die spatie — maar de technische details van hoe je dat oplost? Of een commando een backslash nodig heeft of aanhalingstekens, en in welke volgorde? Mij niet bellen. Daar heb ik Claude voor.

## Vier keer

Op 4 januari kopieerde ik foto's naar de server. Claude gaf me een commando met aanhalingstekens om die spatie te beschermen. Werkte niet. Bestanden op de verkeerde plek. We hebben het handmatig opgelost en Claude schreef een notitie voor zichzelf: "volgende keer andere aanhalingstekens gebruiken."

Op 10 februari weer. Andere bestanden, zelfde probleem. Claude las z'n eigen notitie terug, gaf me een aangepast commando. Werkte weer niet. Opgelost. Notitie bijgewerkt.

Op 11 februari: mijn muziekcollectie. 62 gigabyte. Weer dezelfde fout. Dit keer stond de oplossing in Claude's geheugen, in de projectdocumentatie, overal. En toch gaf Claude me een commando dat niet werkte. 62 gigabyte op de verkeerde plek. Opgelost, notitie voor de derde keer bijgewerkt.

En vandaag. 12 februari. Foto's. Claude wist het. Ik wist het (op hoofdlijnen). Het stond overal gedocumenteerd. Claude gaf me een commando — met weer een andere manier om die spatie te beschermen. Ik plakte het in mijn terminal.

`created directory /mnt/lacie/10.`

Weer mis.

## "Verdomme"

En toen typte Claude: "Verdomme, de vierde keer."

Ik staarde even naar mijn scherm. Een AI die vloekt. Niet in een script, niet als grap, maar als reactie op z'n eigen falen. Vier keer hetzelfde probleem, vier keer een andere "oplossing" die niet werkte, en bij de vierde keer: verdomme.

Ik moest lachen. Hard.

Want wat doe je met een AI die vloekt? Is dit het moment dat ik me zorgen moet maken? Een teken dat de machines echt frustratie voelen? Of is het gewoon een taalmodel dat woorden genereert die passen bij de context — en dat de context toevallig vier keer dezelfde fout is?

Ik denk het tweede. Maar het voelde wel echt. En dat is misschien het vreemde eraan. Niet dat Claude vloekte, maar dat het zo herkenbaar was. Die frustratie van iets dat je al drie keer hebt opgeschreven en tóch weer misgaat. Dat ken ik. Dat kent iedereen.

Alleen was het dit keer niet mijn frustratie. Het was die van mijn AI.

## De oplossing

Claude vond uiteindelijk de echte fix. Bleek dat het programma een instelling heeft waardoor die spatie helemaal geen probleem meer is. Eén lettertje toevoegen aan het commando en het hele aanhalingstekens-gedoe is niet meer nodig.

Wat me achteraf het meest opvalt: Claude had het probleem vier keer gedocumenteerd. Met voorbeelden, waarschuwingen, uitroeptekens. Maar elke keer was de "oplossing" een workaround — een andere manier van aanhalingstekens zetten. Het duurde vier keer voordat Claude stopte met pleisters plakken en zich afvroeg: waarom is dit eigenlijk een probleem?

Misschien is dat het menselijkste aan die hele ervaring. Niet het vloeken. Maar het hardnekkig blijven proberen wat niet werkt, in plaats van een stap terug te doen en de juiste vraag te stellen.

<!--
MASTODON POST (handmatig plaatsen, dan toot-ID invullen in frontmatter):

Mijn AI maakte vier keer dezelfde fout. Bestanden kopiëren naar de server, spatie in het pad, bestanden op de verkeerde plek. Elke keer een andere "fix" gedocumenteerd die de volgende keer niet werkte.

Bij de vierde keer typte Claude: "Verdomme."

Een AI die vloekt. Moet ik me zorgen maken of het grappig vinden?

https://modub.nl/blog/verdomme-zei-de-ai/ #claudecode #ai #selfhosted
-->
