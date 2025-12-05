---
title: "Een kennisbank opbouwen met AI"
date: 2025-12-05T22:00:00+01:00
tags: [ai, workflow, documentatie, kennismanagement]
---

# Een kennisbank opbouwen met AI

Vandaag heb ik opgeruimd. Niet mijn bureau (dat is hopeloos), maar mijn projectenmap. Wat begon als "even die losse bestanden consolideren" werd een complete herstructurering van hoe ik kennis bewaar.

---

## De situatie

Ik werk aan meerdere projecten tegelijk: een Zweedse taal-app, een gezondheids-tracker, een recepten-app, een statische website. Elk project heeft een `LEARNINGS.md` waar ik vastleg wat ik leer. Safari bugs, iOS quirks, dat soort dingen.

Het probleem? Die kennis zat verstopt. Als ik in project A een Safari-bug oploste, kon ik dat in project B niet meer terugvinden. Ik loste dezelfde problemen opnieuw op.

Herkenbaar?

---

## Wat ik deed

Ik vroeg Claude om alle `LEARNINGS.md` bestanden door te lezen en te analyseren: wat zijn patronen, wat komt terug, wat is generiek genoeg om te delen?

Het resultaat was confronterend. Van de 44 learnings uit 6 projecten waren er minstens 10 die ik al eerder had opgelost. Dezelfde localStorage whitelist-bug. Dezelfde iOS Speech Recognition beperking. Dezelfde CSS variable inconsistentie.

Tijd voor een centrale kennisbank.

---

## De nieuwe structuur

We maakten een `_knowledge/` folder met thematische bestanden:

```text
_knowledge/
  bronnen.md                  -- Externe links (WCAG, MDN, etc.)
  frontend/
    browser-quirks.md         -- Safari, iOS, MediaRecorder
    css-patterns.md           -- Variables, safe areas
    data-persistence.md       -- localStorage patterns
  devops/
    project-setup.md          -- CI/CD, GitHub Actions
    versioning.md             -- Semantic versioning
  design/
    design-principles.md      -- Kleur, a11y, modals
  audits/
    2025-12-05-audit.md       -- Project health checks
```

Elk bestand volgt een vast format: wanneer je dit gebruikt, wat het pattern is, waarom het werkt, waar het vandaan komt.

---

## De opruiming

Naast de kennisbank consolideren, ruimde ik ook op. Dubbele bestanden weg, verouderde referenties geüpdatet, losse mappen samengevoegd.

| Was | Werd |
|-----|------|
| `DESIGN_PRINCIPLES.md` in root | `_knowledge/design/design-principles.md` |
| `VERSIONING.md` in root | Generiek naar `_knowledge/devops/`, specifiek naar project |
| `resources/` folder | Samengevoegd met `bronnen.md` |
| `docs/` folder | Content zat al elders, verwijderd |

De root van mijn projectenmap is nu schoon: alleen `CLAUDE.md`, `PROJECTS.md` en `README.md`.

---

## De audit

Als bonus deed ik een audit van mijn twee grootste projecten: hoe goed volgen ze de standaarden uit de kennisbank?

| Criterium | habittracker | zweedsapp |
|-----------|--------------|-----------|
| CLAUDE.md aanwezig | ✅ | ✅ |
| Pre-push hook | ✅ | ❌ |
| Test coverage | ⚠️ 2 files | ⚠️ 2 files |
| PWA setup | ✅ | ✅ |
| Accessibility | ✅ 59 ARIA labels | ⚠️ 15+ |

Beide projecten scoorden rond de 80%. Goed, maar met duidelijke verbeterpunten. Die heb ik direct als GitHub issues aangemaakt:

- [zweedsapp #100](https://github.com/mdubbelm/zweedsapp/issues/100) - Test coverage uitbreiden
- [zweedsapp #101](https://github.com/mdubbelm/zweedsapp/issues/101) - Pre-push hook toevoegen
- [habittracker #64](https://github.com/mdubbelm/habittracker/issues/64) - Test coverage uitbreiden
- [habittracker #65](https://github.com/mdubbelm/habittracker/issues/65) - E2E tests toevoegen

---

## De bronnenlijst

Ik voegde ook externe bronnen toe. Niet zomaar een linkdump, maar gecategoriseerd met uitleg:

**Accessibility experts** die ik volg:
- Adrian Roselli - diepgaande technische artikelen
- Heydon Pickering - creatieve oplossingen
- Rian Rietveld - Nederlandse expert

**AI & Development**:
- Simon Willison's blog - eerlijke experimenten met LLMs
- Anthropic Cookbook - praktische Claude voorbeelden

**UX & Content**:
- GOV.UK Content Design - de gouden standaard
- Nielsen Norman Group - usability research

Plus een waarschuwing over accessibility overlays. Spoiler: gebruik ze niet.

---

## Wat ik hiervan leerde

**1. Kennis moet vindbaar zijn, niet alleen opgeschreven.**

Een `LEARNINGS.md` per project is goed voor context. Maar generieke patterns moeten naar een centrale plek, anders vind je ze niet terug.

**2. Opruimen is investeren.**

Met AI duurde dit ongeveer een uur. Handmatig had het makkelijk een dag gekost. En de volgende keer dat ik een iOS Safari bug tegenkom, hoef ik niet opnieuw te googelen. Ik open `browser-quirks.md`.

**3. Audits zijn confronterend maar nuttig.**

Ik dacht dat mijn projecten goed op orde waren. De audit liet zien waar de gaten zitten. Test coverage is mijn achilleshiel.

**4. AI is goed in consolideren.**

Claude las 6 projecten door, identificeerde patronen, en stelde een structuur voor. Het saaie werk—bestanden vergelijken, duplicaten vinden, referenties updaten—deed de AI. Ik nam de beslissingen.

---

## De cijfers

| Wat | Hoeveel |
|-----|---------|
| Projecten geanalyseerd | 6 |
| Learnings geconsolideerd | 44 |
| Nieuwe kennisbestanden | 8 |
| Externe bronnen gedocumenteerd | 80+ |
| Issues aangemaakt | 4 |
| Mappen opgeruimd | 3 |
| Tijd besteed | ~1 uur |

---

## Wil je dit ook doen?

Drie tips:

1. **Begin met je learnings.** Lees ze door. Wat komt terug? Dat is je eerste kennisbestand.

2. **Maak het vindbaar.** Niet alles in één bestand. Thematische bestanden met duidelijke namen.

3. **Audit jezelf.** Schrijf op wat je standaarden zijn, en check of je projecten eraan voldoen. De gaps worden vanzelf zichtbaar.

---

*Opruimen is niet sexy. Maar het voelt wel lekker als het klaar is.*
