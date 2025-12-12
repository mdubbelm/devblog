---
title: "Een onderwijskundige in mijn AI-team"
date: 2025-12-03T14:00:00+01:00
tags: [ai, workflow, agents, leren]
---

Vandaag realiseerde ik me dat mijn taalleer-app geen idee heeft hoe mensen leren.

---

## Het probleem

Ik bouw Svenska Kat, een app om Zweeds te leren. Er zit een "Daily Program" in: elke dag 10 zinnen oefenen. Klinkt logisch.

Maar toen ik kritisch keek, zag ik het probleem:

- 10 willekeurige zinnen, geen didactische logica
- Alleen typen en uitspraak, geen variatie
- Grammatica staat los van de oefeningen
- Geen spaced repetition, geen review

Het was alsof ik een fitness-app had gebouwd die zegt "doe elke dag 10 oefeningen" zonder te weten welke spiergroepen je traint.

---

## De ontbrekende expertise

Mijn AI-team heeft specialisten. Een UX designer, een UI designer, een accessibility expert, een frontend developer. Ze hebben allemaal hun eigen "agent file" met expertise en frameworks.

Maar niemand die weet hoe mensen leren.

Dus vroeg ik me af: wat zou een Learning Specialist zeggen over mijn Daily Program?

---

## Lotte, de Learning Specialist

Ik heb een nieuwe agent aangemaakt: Lotte. Haar expertise:

- **Spaced repetition**: wanneer herhaal je iets voor maximale retentie?
- **Active recall**: actief ophalen werkt beter dan passief herlezen
- **Cognitive load**: niet te veel nieuwe dingen tegelijk
- **i+1 principe**: net iets moeilijker dan je huidige niveau

Ze heeft concrete frameworks. Bijvoorbeeld voor een Daily Program:

```text
2 zinnen - Review (gisteren geleerd)
3 zinnen - Herhaling (oudere items, SRS-schema)
3 zinnen - Nieuw (op gebruikersniveau)
2 items  - Grammatica-mini (werkwoord/voornaamwoord)
```text

In plaats van 10 willekeurige zinnen.

---

## Wat dit verandert

Met Lotte's expertise kan ik nu:

1. **Grammatica integreren** in de dagelijkse oefeningen
   Niet als aparte sectie, maar als "vul het werkwoord in" tussen de zinnen door

2. **Moeilijkheid automatisch aanpassen**
   Level 1-5? Alleen makkelijke zinnen. Level 11+? Medium en hard.

3. **Variatie in oefenvormen**
   Niet alleen typen, ook: conjugatie invullen, voornaamwoord kiezen, multiple choice

4. **Slimmer herhalen**
   Zinnen die je fout had komen vaker terug. Zinnen die je kent, minder.

---

## De ironie (opnieuw)

Vorige week schreef ik dat mijn AI-team zich gedraagt als mensen. Ze negeren regels, slaan stappen over, vergeten de design principles.

Nu zie ik de andere kant: ze missen ook expertise die mensen wel hebben. Niemand in mijn team wist hoe didactiek werkt. Totdat ik iemand aanstelde die dat wel weet.

---

## Wat ik hiervan leerde

- **Expertise die je mist, krijg je niet vanzelf.** Je moet actief bedenken welke kennis ontbreekt.
- **Agent files zijn kennisdragers.** Ze kunnen frameworks en checklists bevatten die je anders elke keer opnieuw zou moeten uitleggen.
- **Domeinkennis maakt het verschil.** Een UX designer weet hoe interfaces werken. Een onderwijskundige weet hoe leren werkt. Beide zijn nodig voor een leer-app.

---

*Mijn app leert mensen Zweeds. Nu leert mijn team hoe mensen leren.*
