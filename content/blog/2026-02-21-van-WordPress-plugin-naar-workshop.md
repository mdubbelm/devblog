---
title: Van WordPress plugin naar workshop
date: 2026-02-21
draft: false
description: In november bouwde ik een plugin om mijn WordPress-site statisch te maken. Daar kwamen vragen op. Nu is er een gratis online workshop.
tags:
  - wordpress
  - plugin
  - vibe-coding
  - workshop
  - ai
mastodon:
  host: mastodon.social
  username: Mdubbelm
  id: ""
---

In november bouwde ik een plugin. Niet omdat ik dat van plan was, maar omdat ik mijn WordPress-site statisch wilde maken om hem gratis te kunnen hosten op Kinsta. Je hebt dan twee opties: of je zoekt een bestaande plugin die dat doet, of je bouwt zelf iets. Ik probeerde het eerst met Simply Static, maar dat deed niet helemaal wat ik wilde. Dus bouwde ik zelf een plugin en dat werd de [Static Site Exporter](https://github.com/mdubbelm/static-site-exporter).

De plugin werkte en ik kon mijn site gratis hosten. In november gaf ik er een presentatie over op de Amsterdamse WordPress meetup, over hoe ik mijn statische site live had gezet. Maar toen kwamen de vragen. Hoe heb je dat gedaan? Heb je een tutorial? Mag ik 'm forken? Kan ik dat ook?

## Van vragen naar workshop

Zelf deed ik mee aan de [Claude Code workshop van Frank Meeuwsen](https://frankmeeuwsen.com/workshopclaudecode/), maar die is wat breder ingestoken. Ik dacht, wat als ik nou een simpele workshop opzet alleen voor WordPress plugins? Iets wat mensen zelfstandig kunnen doorlopen, wanneer het ze uitkomt, zonder mij erbij.

Dus ik maakte een online workshop. Vijf pagina's die je stap voor stap door het proces leiden, van voorbereiding tot werkende plugin. Je hebt geen programmeerervaring nodig, alleen een AI-tool en iets om op te testen.

## Hoe het groeide

Ik begon met een voorbereiding en een handleiding. Daarna een lijst met plugin-ideeën voor wie zelf niks kon bedenken. En vier kant-en-klare prompts voor wie daar ook geen zin in had.

Maar het voelde onaf zonder een Tips-pagina. Want wat doe je als de plugin werkt? Is hij dan klaar voor een echte site? Die pagina werd de langste van de vijf: een beveiligingsoverzicht, uitleg over Plugin Check, toegankelijkheid, en een eerlijk antwoord op de vraag of vibe coding eigenlijk wel een goed idee is. Soms wel, soms niet, dat hangt ervan af.

Ergens halverwege voegde ik een taalswitch toe. De workshop is in het Engels – de WordPress-wereld is dat nu eenmaal – maar ik wilde hem ook in het Nederlands aanbieden. Vijf statische HTML-pagina's, geen bouwsysteem, dus ik heb met Claude Code een gedeeld JavaScript-bestand gebouwd met alle vertalingen en een toggle die je keuze onthoudt tussen pagina's. Ik weet niet of het de beste of mooiste oplossing is, maar voor nu werkt het.

## Klaar voor anderen

Voordat ik de workshop deelde heb ik de teksten laten checken door Claude op jargon en eenvoud. De doelgroep heeft geen programmeerervaring, dus woorden als "XSS" en "obfuscated code" zijn prima als je weet wat het betekent maar helpen verder niks als je voor het eerst een plugin bouwt. Het Nederlands heb ik daarna nog een keer apart doorgekeken op zinnen die te stijf waren of te letterlijk uit het Engels kwamen. "Je wordt sterk aangeraden" is zo'n zin. Dat zeg je niet. Tot slot nog een rondje toegankelijkheid: werkt de navigatie zonder muis, zijn er skip-links, is de taalwisselaar goed gelabeld.

En dan heb ik hem ook nog door een echt mens laten testen. [Rian Rietveld](https://rianrietveld.com/) (accessibility-expert en WordPress-veteraan) ging er kritisch doorheen en kwam terug met iets waar ik zelf niet opgekomen was: als je de starterplugin al activeert en daarna code erin plakt die interactie heeft met de database, dan moet je de plugin eerst deactiveren en opnieuw activeren. Klinkt logisch als je het weet. Staat nu in de workshop. Ze stelde ook een goede vraag: waarom stop je alle code in één bestand? Het antwoord is: omdat dit een workshop voor beginners is en één bestand behapbaarder is dan een mappenstructuur uitleggen. Maar het is een terechte vraag die ik zonder haar niet hardop had gesteld. Dank je, Rian, voor de eerlijke en kritische review.

De echte vaardigheid bij vibe coding is niet het schrijven van prompts. Het is weten wanneer je de uitvoer kunt vertrouwen. Dat weet ik nu ook pas een beetje, na een paar maanden ermee werken.

De workshop staat op [pluginvibes.modub.nl](https://pluginvibes.modub.nl) en is vrij te gebruiken, delen en aanpassen onder CC BY 4.0. Kijk er eens naar als je WordPress gebruikt en nieuwsgierig bent naar wat AI ermee kan, of als je al eens een plugin hebt willen bouwen maar niet wist hoe te beginnen.

Zie jij waarde in een online workshop die je zelfstandig doorloopt, zonder iemand die meekijkt? Ik hoor graag je feedback!

<!--
MASTODON POST (handmatig plaatsen, dan toot-ID invullen in frontmatter):

In november bouwde ik een WordPress plugin. Niet omdat ik dat van plan was — gewoon omdat de bestaande oplossingen niet deden wat ik wilde.

Op de Amsterdamse WordPress meetup kwamen de vragen. Hoe dan? Heb je een tutorial? Kan ik dat ook?

Dat werd een workshop.

https://modub.nl/blog/van-wordpress-plugin-naar-workshop/

#WordPress #VibeCoding #AI
-->
