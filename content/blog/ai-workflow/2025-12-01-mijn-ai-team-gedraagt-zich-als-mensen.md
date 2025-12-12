---
title: "Mijn AI-team gedraagt zich als mensen"
date: 2025-12-01T19:30:00+01:00
tags: [ai, workflow, proces]
---

Gisteren was ik gefrustreerd. Mijn AI-team negeerde de regels. Pushte direct naar main. Sloeg lokaal testen over. Vergat de design principles te checken.

Het leken wel echte mensen.

---

## Wat er mis ging

Twee projecten. Zweedsapp en habittracker. Dezelfde problemen.

Features gingen live zonder testen. Functionaliteit die werkte, werkte ineens niet meer. Design principes die ik zorgvuldig had opgeschreven werden genegeerd.

De CLAUDE.md bestanden waren uitgebreid. De regels stonden er. Maar ze werden niet gevolgd.

Net als bij een echt team: documentatie schrijven is niet genoeg. Je moet het proces ook ondersteunen met ingebouwde checks.

---

## De oplossing: controlestappen inbouwen

Vandaag heb ik drie lagen van ondersteuning toegevoegd:

### 1. STOP-sectie in de centrale CLAUDE.md

Bovenaan. Niet te missen. Vijf duidelijke afspraken:

1. Werk op een feature branch, niet op main
2. Test lokaal voordat je pusht
3. Bij UI werk: check eerst de design principles
4. Loop de checklist door voor deployment
5. Bij problemen: eerst revert, dan fixen

Met de "waarom" erbij. Zodat het geen willekeurige regels zijn, maar logische stappen.

### 2. Pre-push hook

Een script dat automatisch runt voordat je pusht. Tests falen? Je krijgt een melding en de push stopt. Build faalt? Zelfde verhaal.

Het vangt fouten op voordat ze remote komen. Niet als straf, maar als vangnet.

### 3. Een tussenstap op GitHub

Vroeger kon je code direct naar de live versie sturen. Nu zit er een tussenstap in: je maakt eerst een voorstel (pull request), en pas als alle tests slagen mag het door.

Klinkt als extra werk, maar het is eigenlijk bevrijdend. Je hoeft niet meer na te denken of je wel alles hebt gecheckt. Het systeem helpt je onthouden.

---

## Het werkt

Letterlijk vandaag getest. Ik wilde de pre-push hook committen. Push naar main... ging niet.

Feature branch maken. PR aanmaken. Wachten op CI. Dan mergen.

Drie extra stappen. Maar ook: drie momenten waarop fouten worden opgevangen.

---

## De ironie

Ik bouw tools met AI. Die AI maakt dezelfde fouten als mensen. Dus ik bouw dezelfde ondersteuning die je voor een mensenteam zou bouwen.

Code reviews. Automatische tests. Tussenstappen. Checklists.

Blijkbaar werkt goede teamondersteuning universeel.

---

## Wat ik hiervan leerde

- **Regels zonder ondersteuning zijn suggesties.** Zowel voor mensen als voor AI.
- **Controlestappen zijn geen wantrouwen.** Ze zijn hulpmiddelen voor je toekomstige zelf.
- **Automatiseer wat je kunt automatiseren.** Pre-push hooks zijn minder vermoeiend dan handmatige checklists.
- **Centraliseer waar mogelijk.** Eén CLAUDE.md voor alle projecten = één plek om afspraken te updaten.

---

*Mijn AI-team gedraagt zich als mensen. Dus ik help ze ook zo.*
