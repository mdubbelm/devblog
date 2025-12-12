---
title: "Bugs melden vanaf de bank — een iOS Shortcut voor GitHub Issues"
date: 2025-12-08T09:00:00+01:00
draft: false
tags: [ios, shortcuts, github, workflow]
description: "Een iOS Shortcut die met twee tikken een GitHub issue aanmaakt, inclusief screenshot. Zonder externe diensten."
---

Je kent het wel. Je zit op de bank je eigen app te testen op je telefoon, en dan zie je het: een bug. Of je bedenkt ineens een feature die er echt in moet.

En dan? Laptop opstarten, GitHub openen, screenshot maken, afbeelding uploaden (waar eigenlijk?), issue aanmaken... Voor je het weet ben je een kwartier verder en is het moment foetsie.

Dus bouwde ik een iOS Shortcut (werkt op iPhones, iPads en andere Macs). Eén tik vanuit het deelmenu, titel intypen, klaar. De issue staat op GitHub, mét screenshot, mét de URL van de pagina, mét het juiste label.

---

## Wat het doet

De Shortcut werkt vanuit het deelmenu van Safari (of elke andere browser op je iPhone of iPad). Je deelt een pagina, en dan:

1. Er wordt automatisch een screenshot gemaakt
2. Je kiest de repository (uit een vooraf ingesteld lijstje)
3. Je kiest het type: bug, feature, of enhancement
4. Je vult een titel in en optioneel een beschrijving
5. De screenshot wordt gecommit naar je repo
6. De issue wordt aangemaakt met alles erin

Het resultaat is een nette issue met de URL, een embedded screenshot, en het juiste label. Geen Imgur, geen Cloudinary, geen externe diensten.

---

## Screenshots uploaden zonder externe diensten

Hier zat de uitdaging. GitHub's Issue API accepteert geen directe image uploads. De standaardoplossing die je overal tegenkomt is Imgur of Cloudinary gebruiken, maar daar had ik geen zin in. Weer een account, weer een API key, weer een dienst die over drie jaar niet meer bestaat.

De oplossing bleek simpeler dan gedacht: de screenshot als bestand committen naar de repository zelf. GitHub's Contents API accepteert base64-encoded bestanden. De screenshot komt in een `screenshots/` map terecht, en de raw URL daarvan gebruik je in de issue body:

```text
https://raw.githubusercontent.com/gebruiker/repo/main/screenshots/123456.png
```

Elegant? Mwah. Werkt het? Ja.

---

## De eigenaardigheden van Shortcuts

Het bouwen van deze Shortcut was... een ervaring. Apple's Shortcuts app is krachtig, maar heeft zo zijn nukken.

**Menu's en variabelen mengen niet goed.** Als je twee "Kies uit menu" acties hebt, kan Shortcuts niet onderscheiden welk "Resultaat menu" je bedoelt. De oplossing: binnen elke menu-optie een Tekst-actie zetten met de waarde, en die daarna opslaan in een variabele. Omslachtig, maar het werkt.

**Base64-encoding heeft opties.** Standaard voegt Shortcuts regeleinden toe aan base64-strings. GitHub's API accepteert dat niet. Je moet expliciet "Regeleinden: Geen" instellen. Kostte me een uurtje debuggen voordat ik daarachter kwam.

**Geneste JSON-waarden ophalen is tricky.** `content.download_url` werkt, maar alleen als je het hele pad in één actie ophaalt. Twee aparte "Haal waarde op" acties werken niet betrouwbaar als je meerdere "Haal inhoud van URL" acties hebt. Waarom? Geen idee.

**Datum formatteren is onvoorspelbaar.** Ik wilde timestamps als bestandsnamen (`20251206-143052.png`), maar de aangepaste datumnotatie weigerde gewoon. Uiteindelijk gebruik ik een willekeurig getal — minder elegant, maar ach.

---

## De flow

```text
Ontvang URL uit deelmenu
    ↓
Maak screenshot
    ↓
Codeer naar base64 (zonder regeleinden!)
    ↓
Genereer willekeurig getal voor bestandsnaam
    ↓
[Menu] Kies repository
    ↓
[Menu] Kies type (bug/feature/enhancement)
    ↓
Vraag om titel en beschrijving
    ↓
PUT screenshot naar GitHub Contents API
    ↓
Haal download_url uit response
    ↓
Bouw issue body met URL en screenshot
    ↓
POST naar GitHub Issues API
    ↓
Toon bevestiging
```

---

## Wat je nodig hebt

- Een GitHub Personal Access Token met `repo` scope
- Repositories waar je issues wilt aanmaken
- De Shortcuts app op iOS of macOS

De token sla je direct op in de Shortcut. Niet ideaal vanuit security-perspectief, maar voor persoonlijk gebruik acceptabel. Je deelt de Shortcut toch niet met anderen (en als je dat wel doet: verwijder eerst je token).

---

## Update: te ingewikkeld

Een dag later bleek deze aanpak toch niet zo handig. De screenshots die naar de repo werden gecommit, zaten mijn auto-publish script in de weg. Elke screenshot was een commit op main, waardoor het blog-publicatie script in conflict kwam met de lokale wijzigingen.

Toen ik de screenshot-functionaliteit eruit haalde om dat op te lossen, werkte de hele Shortcut niet meer. De twee API calls (screenshot uploaden en issue aanmaken) waren zo verweven dat het verwijderen van de ene de andere brak.

Conclusie: te veel bewegende delen. Ik ga op zoek naar een eenvoudigere oplossing. Misschien gewoon issues aanmaken zonder screenshot — die kun je later alsnog toevoegen via de GitHub app. Of een compleet andere aanpak.

*Soms is de beste developer tool er eentje die gewoon werkt. Deze was dat (nog) niet.*
