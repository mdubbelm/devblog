---
title: Runbooks voor jezelf
slug: runbooks-voor-jezelf
date: 2026-02-04T15:00:00+01:00
draft: true
description: Documentatie die je helpt als je in paniek bent. Waarom ik runbooks schrijf voor mijn homeserver, en wat erin staat.
tags:
  - homeserver
  - documentatie
  - selfhosted
# Mastodon comments - vul de toot ID in na publicatie
mastodon:
  host: mastodon.social
  username: Mdubbelm
  id: ""
---

Na die [backup-paniek van laatst](/blog/backup-wake-up-call) ging ik met Claude Code de documentatie opschonen. En Claude stelde voor: "Zal ik er runbooks van maken?"

Runbooks? Nooit van gehoord.

## Wat is een runbook?

Blijkbaar iets dat IT-professionals allang weten. Runbooks zijn stappenplannen voor als er iets kapot is. Grote bedrijven hebben ze voor de mensen die 's nachts gebeld worden als de server crasht. Geen proza, geen uitleg, gewoon: dit is het probleem, doe dit.

Ik ben geen IT-professional. Ik ben een amateur die thuis een servertje heeft staan en nog veel te leren heeft. Maar het idee van een stappenplan voor paniek-momenten? Dat snapte ik meteen.

Want als er iets kapot is, ben ik niet op mijn best. Dan wil ik niet nadenken over "waar stond dat ook alweer" of "welk commando was het". Dan wil ik een lijstje dat zegt: doe dit, dan dit, dan dit.

## Wat staat erin?

Mijn backup runbook heeft drie secties:

**1. Snelle check**

Een paar commando's die ik kan copy-pasten om te zien of alles nog werkt. Draait de automatische backup nog? Wanneer was de laatste? Staan er bestanden?

Als iets niet klopt, weet ik genoeg om verder te zoeken.

**2. Veelvoorkomende problemen**

Een lijstje van dingen die eerder kapot zijn gegaan. Per probleem: wat zie je, wat is de oorzaak, wat doe je. Niet meer dan dat.

Bijvoorbeeld:
- "Geen toegang tot de schijf" → Zit de schijf er nog in? Is hij wel aangesloten?
- "Backup draait niet meer" → De automatische taak is waarschijnlijk verdwenen na een herstart

Dit zijn geen hypothetische problemen. Dit zijn problemen die ik heb gehad, opgelost, en opgeschreven zodat ik ze niet opnieuw hoef uit te zoeken.

**3. Restore procedures**

Hoe zet ik iets terug? Welk commando, van welke locatie, naar waar?

Dit is het deel dat je nooit test tot je het nodig hebt. En dan werkt het niet. Dus: opschrijven, en af en toe testen of het nog klopt.

## Waarom werkt dit?

Omdat ik het niet hoef te onthouden.

Ik weet niet uit mijn hoofd hoe ik moet inloggen op mijn online opslag, of waar de backup van mijn foto-database staat. Maar dat hoeft ook niet, want het staat in de runbook.

Het is documentatie voor mijn slechtste zelf. De versie van mij die om 23:00 merkt dat er iets niet werkt en eigenlijk al naar bed wilde. En die dat dan waarschijnlijk ook gewoon doet, maar de volgende ochtend met een fris hoofd aan de hand van het runbook de problemen snel kan oplossen.

## Hoe begin je?

Wacht tot er iets kapot gaat. Serieus.

Elke keer als je iets oplost en denkt "dit wil ik niet nog een keer uitzoeken", schrijf je het op. Niet in een notitie-app die je nooit meer opent (of vergeet te back-uppen) . In een bestand naast de code, de config, de plek waar het hoort.

Mijn runbooks staan in dezelfde map als mijn server-documentatie. Als ik daar toch ben omdat er iets niet werkt, vind ik ze ook.

Na een paar incidenten heb je een runbook. Niet omdat je het gepland hebt, maar omdat je het nodig had.

<!--
MASTODON POST (handmatig plaatsen, dan toot-ID invullen in frontmatter):

Runbooks: documentatie voor je slechtste zelf.

Stappenplannen voor als het 23:00 is, er iets kapot is, en je eigenlijk al naar bed wilde.

Wat erin staat en waarom ik ze schrijf voor mijn homeserver.

https://modub.nl/blog/runbooks-voor-jezelf #selfhosted #documentatie #homeserver
-->
