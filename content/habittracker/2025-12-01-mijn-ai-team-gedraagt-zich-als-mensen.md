---
title: "Mijn AI-team gedraagt zich als mensen"
date: 2025-12-01T19:30:00+01:00
session: 13
tags: [workflow, proces, frustratie, guardrails]
user_time: "45 min"
ai_time: "3 uur"
efficiency: "1:4"
mood: "😤→😌"
---

# Mijn AI-team gedraagt zich als mensen

Gisteren was ik gefrustreerd. Mijn AI-team negeerde de regels. Pushte direct naar main. Sloeg lokaal testen over. Vergat de design principles te checken.

Het leken wel echte mensen.

---

## Wat er mis ging

Twee projecten. Zweedsapp en habittracker. Dezelfde problemen.

Features gingen live zonder testen. Functionaliteit die werkte, werkte ineens niet meer. Design principes die ik zorgvuldig had opgeschreven werden genegeerd.

De CLAUDE.md bestanden waren uitgebreid. De regels stonden er. Maar ze werden niet gevolgd.

Net als bij een echt team: documentatie schrijven is niet genoeg. Je hebt afdwinging nodig.

---

## De oplossing: guardrails

Vandaag heb ik drie lagen van bescherming toegevoegd:

### 1. STOP-sectie in de centrale CLAUDE.md

Bovenaan. Niet te missen. Vijf harde regels:

1. NOOIT direct op main werken
2. ALTIJD lokaal testen VOOR push
3. Bij UI werk: design principles EERST checken
4. Checklist afvinken voor deployment
5. Bij problemen: direct revert

Met de "waarom" erbij. En een dikgedrukte reminder dat dit HERHAALDELIJK is misgegaan.

### 2. Pre-push hook

Een script dat runt voordat je pusht. Test falen? Push geblokkeerd. Build faalt? Push geblokkeerd.

Geen discussie. Geen "ik doe het straks wel". Gewoon: nee.

### 3. Branch protection op GitHub

Direct naar main pushen? Niet meer mogelijk. Alles moet via een pull request. En die PR kan pas mergen als de CI groen is.

---

## Het werkt

Letterlijk vandaag getest. Ik wilde de pre-push hook committen. Push naar main... geblokkeerd.

Moest een feature branch maken. PR aanmaken. Wachten op CI. Dan pas mergen.

Precies zoals het hoort.

---

## De ironie

Ik bouw tools met AI. Die AI maakt dezelfde fouten als mensen. Dus ik bouw dezelfde safeguards die je voor een mensenteam zou bouwen.

Code reviews. Automatische tests. Branch protection. Checklists.

Het verschil? De AI klaagt niet over de extra stappen.

---

## Wat ik hiervan leerde

- **Regels zonder afdwinging zijn suggesties.** Zowel voor mensen als voor AI.
- **Guardrails zijn geen wantrouwen.** Ze zijn liefde voor je toekomstige zelf.
- **Automatiseer wat je kunt automatiseren.** Pre-push hooks zijn minder vermoeiend dan handmatige checklists.
- **Centraliseer waar mogelijk.** Eén CLAUDE.md voor alle projecten = één plek om regels te updaten.

---

*Mijn AI-team gedraagt zich als mensen. Dus ik behandel ze ook zo.*
