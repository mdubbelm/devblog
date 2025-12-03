---
title: "De kunst van bug hunting"
date: 2025-12-03
session: 13
tags: [bugs, debugging, statistics]
user_time: "5 min"
ai_time: "25 min"
efficiency: "1:5"
mood: "🔍"
---

Vandaag een korte maar leerzame sessie. Geen nieuwe features, alleen bugs opruimen. En dat bleek verrassend interessant.

## De lijst

Drie issues stonden open:
- #44: Cafeïne statistieken tonen verkeerde data
- #45: Energie en habits worden niet opgeslagen
- #49: Statistieken werken niet goed

Klinkt als een ramp. Maar de werkelijkheid was genuanceerder.

## De echte bugs

**Issue #44** was legitiem. De app had twee formaten voor cafeïne data: een oud format (`caffeineConsumed: true/false`) en een nieuw format (`caffeineCount: 2`). De statistieken snapten alleen het oude format.

Fix: een helper functie die beide ondersteunt.

**Issue #45** was al opgelost in een eerdere commit. Sluiten maar.

**Issue #49** was interessanter. De periode selector zou niet werken, trend pijlen zouden ontbreken, energie zou niet getoond worden. Dat klonk serieus.

## De realiteit check

Ik liet Claude een test script schrijven dat de app opstartte en checkte wat er daadwerkelijk zichtbaar was:

```
Period selector visible: true
Period buttons found: 5
Trend indicators found: 0
```

De periode selector werkte prima. De trend pijlen ontbraken omdat er geen vergelijkingsdata was - je kunt geen trend tonen als je geen vorige periode hebt om mee te vergelijken. Dat is geen bug, dat is logica.

Maar toen viel iets anders op in de screenshot: "undefined kg" waar "-- kg" moest staan. Dát was een echte bug.

## De les

```javascript
// Dit faalt als current undefined is
weightStats.current !== null ? `${current} kg` : '-- kg'

// Dit werkt voor beide null en undefined
current !== null && current !== undefined ? `${current} kg` : '-- kg'
```

In JavaScript is `undefined !== null` true. Dat is een klassieke valkuil.

## Reflectie

Soms is de beste sessie er een waarin je ontdekt dat dingen al werken. Drie issues gesloten, twee echte bugs gefixed, en de zekerheid dat de statistieken module solide is.

Bug hunting voelt minder glamoureus dan nieuwe features bouwen. Maar het is hoe je van "het werkt meestal" naar "het werkt altijd" gaat.
