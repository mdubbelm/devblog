---
title: Vier uur met Claude op de server
date: 2026-01-26
draft: false
description: Over hoe ik Nextcloud met Collabora op een VPS installeerde - iets wat ik nooit alleen had gekund, maar wat ook met AI nog een lange sessie werd
tags:
  - ai
  - claude-code
  - nextcloud
  - self-hosted
  - big-tech-exit
mastodon:
  host: mastodon.social
  username: Mdubbelm
  id: "115962068637642997"
---

Gisteravond wilde ik "even" Nextcloud installeren op een server. Een vervanger voor OneDrive en Microsoft 365 - weer een stap verder in mijn reis om minder afhankelijk te zijn van big tech.

Hoe moeilijk kan het zijn?

Ik had hier al eerder naar gekeken, maar het leek me toen vrij complex. Allerlei serverinstellingen die ik niet snapte. Dus had ik een tijdje een hosted Nextcloud bij The Good Cloud, maar nu ik toch al zo lekker bezig ben - met Claude Code krijg ik het voor elkaar om een eigen Pi-server te draaien en storage boxes bij Hetzner in te richten - durfde ik deze stap ook wel te nemen.

Dat werd een lange sessie.

## Wat ik wilde

Eigenlijk wilde ik een soort Office 365, maar dan voor mezelf. Een plek waar Jacob en ik samen documenten kunnen bewerken, spreadsheets kunnen delen, zonder dat Microsoft meekijkt. Onze eigen cloud, van ons en van niemand anders.

**Voor de techneuten:** Nextcloud op een Hetzner VPS (€4,59/maand), met Collabora Online voor het bewerken van Office-documenten in de browser. Docker, Caddy als reverse proxy, MariaDB als database, SSL via Let's Encrypt.

## Wat er gebeurde

Claude Code is een AI die in je terminal draait. Je typt wat je wilt, die geeft commando's, jij voert ze uit. Een soort geduldige systeembeheerder die om 11 uur 's avonds nog steeds rustig antwoord geeft als je voor de zoveelste keer vraagt "waarom werkt dit niet?"

Met een menselijke systeembeheerder was het waarschijnlijk sneller gegaan. Maar dit is een hobbyproject, en ik had niet zo iemand beschikbaar. Wel een AI met oneindig geduld. Bovendien wilde ik het niet zomaar over de schutting gooien bij iemand en zeggen: regel dit. Ik wilde zelf ook dingen leren.

De Nextcloud installatie ging prima. Account aanmaken, inloggen, bestanden uploaden. Check.

En toen Collabora. Dacht ik.

## De eindeloze troubleshoot

Het probleem: als ik een document wilde openen, kreeg ik een spinner die bleef draaien. En een foutmelding over een server die niet bereikbaar was via "http" in plaats van "https".

Dat ene woordje. Ergens dacht de software dat het via HTTP moest, terwijl alles via HTTPS liep. Maar waar kwam dat vandaan?

Claude en ik hebben van alles geprobeerd. Configuraties aanpassen, caches legen, de reverse proxy opnieuw instellen. Het frustrerende was dat het elke keer logisch leek wat we probeerden. Claude deed - op mijn verzoek - grondig onderzoek, las forumposts, vond documentatie, citeerde bronnen (keurig met linkjes en al). En toch werkte het niet.

## Waar Claude vastliep

Op een gegeven moment vroeg ik: "Doe grondig onderzoek. Gebruik de agents."

Ik heb een soort kennisbank met gespecialiseerde AI-profielen - een DevOps engineer genaamd Nicole, een homeserver specialist genaamd Limor. Allemaal [vernoemd naar vrouwen in tech](/blog/ai-workflow/de-vrouwen-achter-mijn-ai-agents/). Claude kan die raadplegen voor specifieke expertise.

Het onderzoek leverde goede informatie op. Echt waar. Maar toen kreeg ik een 500-error van Claude zelf, en het was inmiddels laat. Tijd om te slapen.

De volgende ochtend vrolijk verder.

## Wat uiteindelijk werkte

Het probleem zat 'm in meerdere dingen tegelijk. Configuratie-instellingen die niet werden overgenomen. Een reverse proxy die het verkeerde protocol stuurde. Een app die oude instellingen had gecached. Elk probleem apart had Claude waarschijnlijk kunnen vinden. Maar de combinatie - het feit dat je al die dingen tegelijk goed moet hebben - daar struikelden we allebei over.

De oplossing was uiteindelijk bijna beschamend simpel: de configuratie uit de software halen, drie regels aanpassen, terugzetten, en de app opnieuw opstarten. Drie regels.

Achteraf gezien hadden we dit in een half uur kunnen doen. Als we meteen de actuele configuratie hadden bekeken in plaats van te hopen dat de standaard instellingen zouden werken.

**Voor de techneuten:** De coolwsd.xml uit de Collabora container kopiëren, ssl.enable op false zetten, ssl.termination op true, server_name invullen, mounten als volume in docker-compose. En daarna de richdocuments app in Nextcloud uit- en weer aanzetten om de cache te resetten. De public_wopi_url moet op https staan, en Caddy moet gewoon HTTP naar de container sturen (geen https:// in de backend URL).

## Wat ik hiervan leer

Dat Claude Code geen magiër is, wist ik al lang. Maar Claude weet me wel systematisch door bestanden heen te loodsen, logs te draaien en razendsnel uit te lezen, en geeft me suggesties voor vervolgstappen. Zonder die hulp had ik dit nooit gedaan.

Is dat leren? Ik denk het wel. Op een rare manier.

Het voelt een beetje als autorijden met een instructeur die ook niet precies weet waar we heen moeten, maar wel kalm blijft en de kaart kan lezen. We komen er uiteindelijk. Het duurt alleen wat langer dan gepland. En onderweg leer je toch iets over hoe de versnellingsbak werkt, ook al had je dat niet per se gevraagd.

Zou ik dit nog een keer doen? Ja. Zou ik het aanraden aan iemand die geen geduld heeft voor lange troubleshoot-sessies? Nee.

Maar het werkt nu. Jacob en ik kunnen nu samen in onze document cloud. Die van ons is, en van niemand anders.

En net als bij Dropbox of OneDrive kun je een desktop client installeren die automatisch synct. Zo heb ik gewoon een mapje op mijn Mac dat ik gebruik zoals elke andere cloud folder.

Klinkt dit allemaal als veel te veel gedoe? Begrijpelijk. [The Good Cloud](https://thegood.cloud/) biedt hosted Nextcloud aan - dan hoef je zelf niks te installeren en heb je toch een Europees alternatief voor de grote techbedrijven.

<!--
MASTODON POST (handmatig plaatsen, dan toot-ID invullen in frontmatter):

Vier uur met Claude Code. Een VPS. Nextcloud met Collabora.

Installeren? Prima.
Documenten bewerken in de browser? Eindeloos gepuzzel.

Configuraties die niet worden overgenomen. Caches die niet leeglopen. Een reverse proxy die het verkeerde protocol stuurt.

Zonder AI had ik dit nooit gedurfd. Maar het is ook geen magie - soms wisten we allebei niet waar we moesten zoeken. De lamme helpt de blinde, zeg maar.

Nu werkt het. Onze eigen document cloud. Van ons, niet van Microsoft.

https://modub.nl/blog/vier-uur-met-claude-op-de-server/ #claudecode #nextcloud #selfhosted #bigtechexit
-->
