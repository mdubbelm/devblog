---
title: Claude Code in de terminal of in de desktop app?
date: 2025-12-20T14:00:00+01:00
lastmod: 2025-12-25T12:00:00+01:00
draft: false
tags:
  - ai
  - workflow
  - claude-code
  - tools
description: De verschillen tussen Claude Code in de terminal en de Desktop app zijn kleiner dan ik dacht. Het is vooral voorkeur.
---

Op de [Digitale Fitheid meetup](https://start.digitalefitheid.nl/c/agenda/meet-greet-learn-43) deze week vroeg iemand waarom ze de Desktop app van Claude niet kon gebruiken voor haar projecten. Goede vraag. Ik gebruik zelf vooral de terminal, maar waarom eigenlijk?

Tijd om uit te zoeken wat de verschillen zijn. Spoiler: ze zijn kleiner dan ik dacht.

---

## Eerst even context

Claude Code zit pas sinds eind november 2025 in de Desktop app. Daarvoor was het alleen beschikbaar in de terminal. Nu kun je in beide omgevingen coderen, debuggen en projecten managen — inclusief git en andere tools.

Ik werk al een tijdje met Claude Code in de terminal. Vanuit mijn overkoepelende Projecten-folder, waar mijn CLAUDE.md en al mijn agents staan. Werkt prima.

---

## Wat ik dacht dat de verschillen waren

Toen ik dit artikel oorspronkelijk schreef (20 december), had ik een hele vergelijkingstabel gemaakt. Screenshots? Alleen in Desktop. Automatische context laden? Alleen in terminal. Worktrees? Alleen in Desktop.

Maargoed, ik had het niet helemaal bij het rechte eind.

---

## Wat de verschillen écht zijn

**Update 25 dec:** Frank Meeuwsen wees me op een paar dingen die ik gemist had. Laat me de boel rechtzetten.

### Screenshots

Ik schreef dat je in de terminal geen screenshots kon gebruiken. Dat klopt niet. Je kunt wel degelijk een afbeelding toevoegen — alleen anders dan in de Desktop app.

- **Desktop app**: screenshot maken naar clipboard (⇧⌃⌘4 op Mac, ⇧Win+S op Windows), dan direct droppen
- **Terminal**: screenshot opslaan als bestand, dan het bestandspad plakken

Iets meer stappen in de terminal, maar het werkt.

### CLAUDE.md laden

Een CLAUDE.md is een bestand waarin je context voor Claude kunt zetten: projectinformatie, werkafspraken, stijlregels, dat soort dingen. Claude leest dit automatisch en houdt er rekening mee. Scheelt een hoop herhalen.

In de terminal wordt je CLAUDE.md automatisch geladen vanuit de map waar je staat. Ik dacht dat dit in de Desktop app niet kon. Maar als je de working directory goed instelt (Settings → Developer), werkt het daar ook.

### Meerdere taken tegelijk

Soms wil je Claude aan twee dingen tegelijk laten werken. Bijvoorbeeld: één sessie schrijft documentatie terwijl een andere een bug fixt. Zonder dat ze elkaars werk in de war schoppen.

Dat kan in beide. In de Desktop app klik je op "nieuwe sessie". In de terminal start je gewoon een tweede terminal-venster. Claude regelt zelf dat de sessies gescheiden blijven.

### Memory

Claude heeft tegenwoordig ook een memory feature — je projectcontext wordt onthouden tussen sessies. Werkt in de Desktop app, op het web, en op mobiel. Dus ook geen verschil meer.

---

## Wat wél anders is

Eerlijk? Niet zo veel meer. Dit zijn de echte verschillen:

### Snelheid

De terminal is sneller. Tekst verschijnt direct, zonder de overhead van een desktop applicatie. Maar — en dit is belangrijk — dat merk je alleen als je gewend bent aan de terminal. Als je nog nooit met de command line hebt gewerkt, maakt die snelheid niks uit. Dan ben je vooral bezig met "hoe open ik dit" en "welk commando moet ik typen".

### Permissions

Frank merkte op dat het toestemmingensysteem in de Desktop app vervelend kan zijn. Bij elke actie moet je "allow" klikken, en je kunt vaak alleen "allow once" kiezen — niet "always allow". "Best irritant als je veel research doet".

In de terminal kun je een allowlist instellen via settings. Dan hoef je niet steeds op knoppen te klikken. Bijvoorbeeld: `Bash(git commit:*)` toestaan, dan vraagt Claude niet meer om toestemming voor git commits. Fijner. Ook krijg je in de terminal bij opdrachten vaak de keuze: "allow once" of "always allow for (specifiek commando)"
### Meerdere projecten

In de terminal wissel ik makkelijk tussen projecten met `cd`. In de Desktop app moet je de working directory aanpassen via settings. Kan, maar is een extra stap.

---

## Dus: welke moet je kiezen?

Eerlijk? Het maakt niet zo veel uit meer.

**Kies de Desktop app als:**
- Je niet gewend bent aan de terminal
- Je vooral met screenshots en visuele dingen werkt
- Je het fijn vindt om te klikken in plaats van typen

**Kies de terminal als:**
- Je al met de command line werkt
- Je veel tussen projecten wisselt
- Je controle wilt over permissions (allowlist)
- Je die extra snelheid waardeert

Ik blijf zelf bij de terminal. Niet omdat die "beter" is, maar omdat ik er al in werk. Als ik geen terminal-ervaring had, zou ik waarschijnlijk met de Desktop app beginnen.

---

## Wat ik hiervan leerde

**1. Test je aannames.**

Ik had een heel verhaal over verschillen die er niet bleken te zijn. Pas toen Frank reageerde, ging ik het opnieuw checken.

**2. De tools groeien naar elkaar toe.**

Een tijdje geleden waren de verschillen groter. Nu hebben beide dezelfde features, alleen net anders verpakt.

**3. Het gaat om voorkeur, niet om "beter".**

Er is geen winnaar. Kies wat past bij hoe jij werkt.

---

*Dank aan [Frank Meeuwsen](https://blog.frankmeeuwsen.com/) voor de correcties.*

