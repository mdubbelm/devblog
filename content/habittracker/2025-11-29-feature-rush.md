---
title: "Feature rush - vijf issues in één sessie"
date: 2025-11-29T19:00:00+01:00
session: 9
tags: [features, productivity, settings, ux]
user_time: "20 min"
ai_time: "2.5 uur"
efficiency: "1:7.5"
version: "0.2.0"
mood: "🚀"
---

# Feature rush

## Vijf issues in één sessie

Soms stroomt het gewoon. Je begint met "waar was ik gebleven?" en twee uur later heb je vijf issues gesloten.

Vandaag was zo'n dag.

---

## De vraag die alles veranderde

> "Wat zou de product owner prioriteren?"

Ik had Tessa's framework geladen - impact/effort scoring - en plotseling werd alles helder:

| Issue | Score | Verdict |
|-------|-------|---------|
| #31 Lezen habit | 12.0 | Quick win! |
| #30 Design polish | 10.0 | Quick win! |
| #29 Energieniveau | 7.0 | Do it |

De quick wins eerst. Niet de shiny features. De dingen die in 30 minuten de app beter maken.

---

## Lezen als habit (5 min)

Eén checkbox. Vijf punten health score. Klaar.

```javascript
// In healthScore.js
reading: 5, // Reading/learning
```

Soms is de beste feature de simpelste.

---

## Flat design nav icons (15 min)

De emoji's in de navigatie (📝 📊 ⚙️) waren... niet professioneel. SVG icons erin, emoji's eruit.

```html
<svg class="nav-icon" viewBox="0 0 24 24">
  <path d="M12 20h9"></path>
  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
</svg>
```

Het verschil? Subtiel. Maar het voelt nu als een echte app.

---

## Energieniveau picker (30 min)

Net als de mood picker, maar dan voor energie. Vijf levels:

😫 → 😴 → 😐 → 😊 → 💪

Van "uitgeput" tot "vol energie". Simpel, visueel, snel in te vullen.

---

## Toast notifications (45 min)

Weg met die lelijke groene knop die zegt "Opgeslagen!". In plaats daarvan: een elegant toast systeem.

```javascript
showSuccess('Data opgeslagen');
showError('Fout bij opslaan');
showWarning('Geen verbinding');
```

Plus een offline indicator bovenin. Want een PWA moet weten wanneer je offline bent.

---

## De grote: aanpasbare velden (1 uur)

Dit was de "medium effort" feature. In de settings: toggles voor elk tracking veld.

- Slaap? Aan/uit
- Rugpijn? Aan/uit
- Gewicht? Aan/uit
- ...

Twaalf toggles. Persoonlijke tracking.

### Waarom dit belangrijk is

Niet iedereen wil alles tracken. Sommigen willen alleen slaap en water. Anderen alles behalve gewicht.

Nu kan dat.

---

## Roadmap reality check

Ondertussen keek ik naar de roadmap. Die was... optimistisch. Week-gebaseerde planning, sprints, allemaal heel mooi.

Maar de realiteit? Phase 0 en 1 zijn gewoon *klaar*.

Nieuwe roadmap:

```
Phase 0: Foundation    ████████████████████ DONE ✅
Phase 1: MVP           ████████████████████ DONE ✅
Phase 2: Enhancement   ████████░░░░░░░░░░░░ IN PROGRESS
```

Geen weken meer. Gewoon: wat is af, wat niet.

---

## Tests gefixed

Oh ja, de tests faalden. Waarom? De health score weights telden op tot 105 in plaats van 100 (door reading).

```javascript
// Was: 105 totaal
// Nu: hydration 20 → 15, totaal weer 100
```

Kleine fix. Grote les: tests zijn er om dit te vangen.

---

## Accessibility audit

Geen Lighthouse (geen Chrome), dus handmatige check:

- 92 ARIA attributen ✅
- 29 role attributen ✅
- Skip link ✅
- Focus styles ✅

Geen kritieke issues. De basis is goed.

---

## De cijfers

| Metric | Waarde |
|--------|--------|
| Issues gesloten | 5 (#25, #28, #29, #30, #31) |
| Issues aangemaakt | 2 (#32, #33) |
| Commits | 5 |
| Tests | 51 passing |
| Accessibility | Geen kritieke issues |

---

## Wat ik leerde

### Quick wins stapelen
Vijf kleine dingen > één grote feature. De momentum van "done, done, done" is verslavend.

### Prioriteer met een framework
Impact/effort scoring werkt. Het haalt de emotie uit de beslissing.

### De roadmap is een levend document
Plan je wat je denkt te doen, update met wat je echt deed.

---

## Volgende keer

1. **#33** - iOS PWA update bug fixen
2. **#32** - Backfill (eerdere dagen bewerken)

Maar voor nu? Vijf issues. Één sessie. Dat is een goede dag.

---

*Soms is productiviteit gewoon: de juiste dingen in de juiste volgorde doen.*
