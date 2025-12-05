---
title: "De onzichtbare poortwachter"
date: 2025-12-05
tags: [bugs, debugging, data, learnings, proces]
user_time: "30 min"
ai_time: "1.5 uur"
efficiency: "1:3"
mood: "😤"
---

Twee dagen lang werkte hetzelfde veld niet. Ik vulde "lezen" in, klikte opslaan, ging terug - en het vakje was weer leeg. Elke keer opnieuw.

Dit is het verhaal van een bug die me leerde dat AI-gegenereerde code zijn eigen valkuilen heeft. En dat mijn samenwerking met Claude nog lang niet vlekkeloos is.

---

## De frustratie

Het begon simpel. Claude had twee nieuwe velden toegevoegd: "lezen" (een checkbox) en "energie" (een emoji selector). De code zag er goed uit. De tests slaagden. Maar op mijn telefoon verdween de data gewoon.

Ik probeerde het opnieuw. En opnieuw. Drie keer vulde ik dezelfde dag in.

"Kun je niet naar eerder in deze sessie kijken?" vroeg ik Claude. "Dit was bij het testen op de dev server ook al zo."

---

## De zoektocht

Het probleem was: geen console op een iPhone. Hoe debug je iets wat je niet kunt zien?

Claude's oplossing was briljant in zijn eenvoud: een alert box. Ouderwets, maar effectief.

```javascript
alert(`Opslaan voor ${date}:
reading: ${data.reading}
energyLevel: ${data.energyLevel}`);
```

De alert verscheen. De data was correct: `reading: true`, `energyLevel: 2`.

Dat was het moment waarop ik besefte: de data werd wél verzameld. Het probleem zat ergens anders.

---

## De poortwachter

Ergens tussen "data verzamelen" en "data opslaan" verdween alles. Claude volgde de code stap voor stap:

```text
saveData() -> saveDataForDate() -> sanitizeTrackerData() -> localStorage
```

En daar was het. `sanitizeTrackerData()`. Een functie die Claude een paar weken geleden had geschreven, aan het begin van dit project, om te voorkomen dat rommel in de database kwam. Een functie die alleen bekende velden doorliet.

Een whitelist.

```javascript
function sanitizeTrackerData(data) {
    const sanitized = {};

    if (data.sleepScore !== undefined) {
        sanitized.sleepScore = sanitizeNumber(data.sleepScore, 1, 10, 7);
    }
    // ... alle andere velden

    // reading en energyLevel stonden hier NIET

    return sanitized;
}
```

Claude's eigen beveiligingscode was de saboteur. De AI had een pattern geïntroduceerd en was het vervolgens zelf vergeten.

---

## De fix

Twee regels code:

```javascript
if (data.reading !== undefined) {
    sanitized.reading = sanitizeBoolean(data.reading);
}

if (data.energyLevel !== undefined) {
    sanitized.energyLevel = sanitizeNumber(data.energyLevel, 1, 5, null);
}
```

En een grote waarschuwingscomment erboven:

```javascript
/**
 * ⚠️  BELANGRIJK: Dit is een WHITELIST functie!
 * Bij een nieuw form veld MOET je het hier ook toevoegen,
 * anders wordt de data stilzwijgend gefilterd.
 */
```

---

## Meer frustratie: het proces

Dit was niet de enige frustratie van vandaag. Toen ik de sessie wilde afsluiten, bleek dat de vorige sessie niet goed was afgesloten. Geen blog geschreven. Geen uren bijgehouden.

Ik heb uitgebreide documentatie in CLAUDE.md met een end-of-session checklist. Stap voor stap staat erin wat er moet gebeuren. Maar Claude leest het niet consequent. Of vergeet het. Of slaat stappen over.

Het resultaat: ik moet er zelf achteraan. "Uh, vergeet je de blog niet te schrijven? En de uren?"

Dat is precies het soort micro-management dat ik wilde vermijden door met AI te werken. Het proces is onbetrouwbaar. En dat moet beter.

Misschien moet ik hooks inrichten die automatisch checken of alles is gedaan. Of een strenger template. Of gewoon accepteren dat AI-assistenten net zo vergeetachtig zijn als menselijke collega's.

---

## De lessen

**Over code:**
Bij elk nieuw veld deze checklist:

1. HTML element toevoegen
2. Event listener toevoegen
3. Veld verzamelen in saveData()
4. Veld laden in loadDataForDate()
5. **KRITIEK: Veld toevoegen aan sanitizeTrackerData()**
6. Statistieken updaten

**Over samenwerking met AI:**
- AI-gegenereerde code heeft patronen die de AI zelf vergeet
- Documentatie alleen is niet genoeg - het moet afgedwongen worden
- Vertrouwen maar verifiëren blijft nodig

---

## Reflectie

De gevaarlijkste bugs zijn de stille bugs. Code die faalt zonder foutmelding. Beveiliging die te goed werkt.

Maar er is nog iets gevaarlijks: aannemen dat je AI-assistent alles onthoudt en alle instructies volgt. Claude is krachtig, maar niet consistent. En dat betekent dat ik als mens de kwaliteitsbewaker blijf.

Het is een partnerschap, geen delegatie.

---

*De beste assistent is er een die je niet hoeft te controleren. Daar zijn we nog niet.*
