---
title: "AI agents als virtueel team"
date: 2025-12-04T21:00:00+01:00
tags: [ai, workflow, agents, svenska-kat]
---

Vandaag deed ik iets raars. Ik stelde een vraag aan een Product Owner, liet een UX Designer wireframes maken, en vroeg een Developer om te implementeren. Niemand van hen bestaat.

---

## De situatie

Svenska Kat is mijn Zweedse taal-app. Na maanden van feature-toevoegingen was het een rommeltje geworden: te veel klikken, te veel keuzes. Je kent het wel.

Tijd om op te ruimen dus. Maar waar begin je? En hoe voorkom je dat je zomaar wat gaat slopen zonder na te denken?

---

## Mijn team

Ik werk met Claude Code, en daarin heb ik een "team" van agents geconfigureerd:

| Naam | Rol | Wat ze doet |
|------|-----|-------------|
| Tessa | Product Owner | Prioriteert, scoort, zegt nee |
| Veerle | UX Designer | Tekent flows, denkt in gebruikers |
| Anneke | Frontend Dev | Bouwt, test, klaagt over Safari |
| Vanya | Eindredacteur | Checkt Zweeds, corrigeert fouten |

Het zijn markdown bestanden met een persoonlijkheid, frameworks, en output templates. Die heb ik niet zelf geschreven - ik heb Claude gevraagd om ze te maken. "Maak een Product Owner agent die goed is in prioriteren en impact/effort analyses kan doen." Claude schrijft dan het volledige bestand, inclusief werkwijze en voorbeelden.

Als ik vervolgens zeg "vraag dit aan Tessa", laadt Claude dat bestand en *wordt* Tessa.

Klinkt gek, maar het werkt verrassend goed.

---

## Hoe het ging

### Stap 1: De vraag

Ik begon met een simpele vraag:
> "Issue #40 - 'Alle categorieën' optie. Is die nog relevant? Wie van de agents kan dat beoordelen?"

Claude stelde voor om Tessa erbij te halen. Logisch: dit is geen technische vraag, maar een productvraag.

### Stap 2: Tessa aan het werk

Ze analyseerde de feature met haar standaard framework:

```text
IMPACT SCORE: 3/10 (Daily Program lost dit al op)
EFFORT SCORE: 3/5
PRIORITY SCORE: 2.0 → Backlog
```text

Haar conclusie was helder: "Defer naar M4." Mijn rol? Gewoon "ok" zeggen. De onderbouwing was er al.

### Stap 3: Onderzoek

De volgende issue op de lijst: "Onderzoek Duolingo's leerfunctionaliteit."

Claude deed webresearch, las een paar artikelen, en vatte het samen in drie punten:

- Duolingo: 2 klikken tot start
- Wij: 4 klikken tot start
- Hun principe: "App kiest, gebruiker doet"

Pijnlijk duidelijk waar het probleem zat.

### Stap 4: Opties scoren

Tessa presenteerde vier mogelijke oplossingen, elk met een score:

| Optie | Score |
|-------|-------|
| A: Categoriekeuze weg | 7.0 |
| B: Streak toevoegen | 4.0 |
| C: Lineair leerpad | 3.2 |
| D: Exercise keuze weg | 5.0 |

Ik koos A: hoogste score, laagste effort. Logische keuze.

### Stap 5: UX ontwerp

Nu was Veerle aan de beurt. Ze schetste de nieuwe flow:

```text
[Home] → Tap "Dagelijkse Oefening"
         → [Daily Screen] met preview
         → Tap "Start"
         → [Practice]
```text

Mijn feedback was kort: "Geen modals toch?" Ze paste het direct aan en de "Bekijk alle items" link verdween.

### Stap 6: Bouwen

Tot slot Anneke. Ze maakte een nieuwe `DailyView.js`, voegde de DAILY tab toe, implementeerde `startDailyFromBeginning()` en paste de HomeView aan.

Build geslaagd, tests groen. Klaar om te mergen.

---

## Wat ik hiervan leerde

**1. "Wie kan dit beoordelen?" is een goede vraag om jezelf te stellen.**

Het voorkomt dat je direct in de code duikt. Eerst nadenken over het type probleem, dan pas oplossen.

**2. Scores zijn beter dan buikgevoel.**

Tessa's Impact/Effort matrix is niet magisch, maar "score 7.0" is een stuk beter te verdedigen dan "voelt goed".

**3. Ik blijf de baas.**

De agents adviseren, ik beslis. Dat is precies hoe het moet werken.

**4. Context-switchen kost niks.**

In een echt team zou je een meeting moeten plannen om van PO naar UX naar Dev te gaan. Hier laad ik gewoon het volgende bestand.

---

## De resultaten

In één sessie heb ik het volgende afgerond:
- Issue #40 → uitgesteld naar M4
- Issue #58 → onderzoek af
- Issue #83 → gebouwd en gemerged
- Issue #38 → 250 zinnen gecheckt, 11 correcties
- Milestone M1 → gesloten

Plus deze blogpost. Die is ook geschreven door... ja, ook door hen.

---

## Wil je dit ook proberen?

Vier tips om te beginnen:

1. **Maak agent files.** Markdown bestanden met naam, expertise, frameworks en output format.
2. **Wijs de juiste agent toe.** Productvragen naar de PO, UX naar de Designer, code naar de Developer.
3. **Blijf zelf beslissen.** AI adviseert, jij beslist.
4. **Documenteer alles.** Issues, commits, learnings. Niet voor de AI, maar voor jezelf over 3 maanden.

---

*Geschreven tijdens een sessie met Claude Code en de agents Tessa, Veerle, Vanya en Anneke.*
