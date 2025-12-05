---
title: "De onzichtbare poortwachter"
date: 2025-12-05
tags: [bugs, debugging, data, learnings]
user_time: "30 min"
ai_time: "1.5 uur"
efficiency: "1:3"
mood: "🔓"
---

Twee dagen lang werkte hetzelfde veld niet. Ik vulde "lezen" in, klikte opslaan, ging terug - en het vakje was weer leeg. Elke keer opnieuw.

Dit is het verhaal van een bug die me leerde dat de gevaarlijkste code vaak de code is die je beschermt.

---

## De frustratie

Het begon simpel. Ik had twee nieuwe velden toegevoegd: "lezen" (een checkbox) en "energie" (een emoji selector). De code zag er goed uit. De tests slaagden. Maar op mijn telefoon verdween de data gewoon.

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

```
saveData() → saveDataForDate() → sanitizeTrackerData() → localStorage
```

En daar was het. `sanitizeTrackerData()`. Een functie die ik maanden geleden had geschreven om te voorkomen dat rommel in de database kwam. Een functie die alleen bekende velden doorliet.

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

Mijn eigen beveiligingscode was de saboteur.

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

## De les

Ik heb nu een checklist. Bij elk nieuw veld:

1. HTML element toevoegen
2. Event listener toevoegen
3. Veld verzamelen in saveData()
4. Veld laden in loadDataForDate()
5. **KRITIEK: Veld toevoegen aan sanitizeTrackerData()**
6. Statistieken updaten

Stap 5 had ik twee keer gemist. Omdat de functie geen error gaf. Omdat alles "werkte". Omdat de poortwachter stil zijn werk deed.

---

## Reflectie

De gevaarlijkste bugs zijn de stille bugs. Code die faalt zonder foutmelding. Beveiliging die te goed werkt.

Ik had deze functie geschreven om mezelf te beschermen tegen slechte data. En hij deed precies wat ik vroeg. Het probleem was dat ik vergeten was hem te vertellen over de nieuwe gasten.

Soms is de vijand niet de bug. Soms is de vijand de vergeetachtige ontwikkelaar die drie maanden eerder een slimme oplossing bedacht.

---

*Beveiliging is pas compleet als je ook jezelf erbij betrekt.*
