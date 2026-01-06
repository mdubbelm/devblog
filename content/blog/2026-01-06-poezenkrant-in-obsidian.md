---
title: "Mijn Poezenkrant-collectie bijhouden met Claude Code en Obsidian"
date: 2026-01-06
draft: false
description: "Na 50 jaar is De Poezenkrant gestopt. Hoe houd je bij welke nummers je hebt? Met Claude Code en Obsidian maakte ik een doorzoekbare collectie met covers."
tags: ["ai", "obsidian", "claude-code", "collectie"]
cover:
  image: /images/blog/2026/screenshot-owned.png
  alt: "Obsidian card view met Poezenkrant covers"
  hidden: true  # verbergt cover in post zelf, toont alleen als social image
# Mastodon comments - vul de toot ID in na publicatie
mastodon:
  host: mastodon.social
  username: Mdubbelm
  id: ""
---
Laatst stonden we in het Stadsarchief in Amsterdam. Ze verkopen daar ook Poezenkranten, en wij stonden daar een beetje suffig te kijken naar de stapel. Welke hadden we nou eigenlijk al? Mijn vriend had ooit op een geeltje alle bestaande nummers opgeschreven met kruisjes bij de nummers die we al hebben. Maar ja, dat briefje lag thuis.

Dit kon zo niet langer vond ik (mijn vriend dacht daar anders over, maar dat doet er hier niet toe).

## De Poezenkrant is niet meer

Voor wie het niet kent: [De Poezenkrant](https://www.poezenkrant.com/) was een onregelmatig verschijnend tijdschrift van Piet Schreuders. "Was", want na vijftig jaar heeft hij er de stekker uitgetrokken. Het eerste nummer verscheen op 7 februari 1974, het laatste (nummer 70) op exact 7 februari 2024.

Het ging trouwens nauwelijks over poezen. Het was meer een speeltuin voor typografie en grafisch ontwerp. Je wist nooit wanneer er een nieuwe kwam, en ook niet hoe die eruit zou zien. Soms een krantje, soms een boekje, soms iets heel anders. Hilarisch om te zien, maar het maakt het verzamelen er niet makkelijker op.

We hebben er heel wat, maar lang niet alles. En dus dat geeltje.

![Geel post-it briefje met een grid van nummers 1-70, sommige doorgekruist om aan te geven welke Poezenkranten we hebben](/images/blog/2026/geel-briefje-poezenkrant.jpg)

## Claude Code erbij

Ik dacht: dit moet in Obsidian. Dan heb ik het altijd bij me (op m'n telefoon) en kan ik in één oogopslag zien wat we wel en niet hebben.

Maar 70 nummers handmatig invoeren met covers, prijzen en verschijningsdata? Nee dank je.

Dus ik startte Claude Code op en vroeg of-ie de website van De Poezenkrant wilde uitlezen. Alle 70 covers, alle prijzen, alle data. Binnen een kwartiertje had Claude de boel goed en wel gescraped en netjes een markdown-bestand aangemaakt voor elke editie, inclusief:

- Nummer
- Verschijningsdatum
- Prijs (van fl 0,50 voor nummer 1 tot €7,00 voor nummer 70)
- Cover-afbeelding
- Of ik 'm heb: ja of nee

## Bases in Obsidian

In Obsidian gebruik ik Bases om er een mooie card view van te maken. Twee views: "Owned" en "Not owned". De covers worden als kaartjes getoond, dus je ziet in één oogopslag wat je hebt en wat je mist.

![Obsidian card view met 20 Poezenkrant covers die we in bezit hebben, getoond als visuele kaartjes](/images/blog/2026/screenshot-owned.png)

![Obsidian card view met 50 Poezenkrant covers die we nog missen, kleinere kaartjes in een grid](/images/blog/2026/screenshot-not-owned.png)

En het mooie is: als we weer eens bij het Stadsarchief staan (of op een rommelmarkt, of waar dan ook), pak ik gewoon m'n telefoon erbij. Obsidian openen, even scrollen door de "Not owned" view, en ik weet precies wat we nog zoeken.

## De cijfers

Van de 70 edities (plus wat dubbelnummers en speciale edities, dus eigenlijk 72 bestanden) hebben we er 20. Dat betekent dat we er nog 50 missen. Genoeg te jagen dus.

De vroege nummers uit de jaren 70 zijn het lastigst te vinden. Die kostten destijds een halve gulden en werden vooral onder vrienden verspreid. Maar goed, dat maakt de jacht juist leuk.

## Hoe het werkt

Het systeem is simpel. Elk nummer heeft een eigen pagina met properties en de cover. Klik je erop, dan zie je meteen of je 'm hebt of niet.

![Obsidian editiepagina van Poezenkrant nummer 67, met properties bovenaan en daaronder de cover met headlines als 'Welke kat lijkt er op Steve Buscemi?'](/images/blog/2026/editiepagina_poezenkrant_67.jpeg)

Onder de motorkap is het gewoon een markdown-bestand met wat YAML frontmatter:

```yaml
nummer: 42
prijs: €3,50
verschijningsdatum: maart 1997
in_bezit: false
cover: https://www.poezenkrant.com/wp-content/uploads/...
```

Als we een nummer scoren, open ik het bestand en verander ik `in_bezit: false` naar `in_bezit: true`. De views in Bases updaten automatisch.

Volgende keer als we in een archief of op een markt staan, hoef ik alleen m'n telefoon te pakken. Dat gele briefje mag met pensioen.

<!--
MASTODON POST (handmatig plaatsen, dan toot-ID invullen in frontmatter):

De Poezenkrant is na 50 jaar gestopt. Wij verzamelen 'm, maar welke nummers hebben we eigenlijk?

Dat gele briefje met kruisjes lag altijd thuis. Dus: Claude Code + Obsidian = doorzoekbare collectie met covers.

20 van de 70 in bezit, nog 50 te gaan.

https://modub.nl/blog/mijn-poezenkrant-collectie-bijhouden-met-claude-code-en-obsidian/ #obsidian #claudecode #collectie
-->
