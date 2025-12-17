---
title: "Van kennisbank naar zelflerende kennisbank"
date: 2025-12-17T14:00:00+01:00
draft: false
tags: [ai, workflow, documentatie, kennismanagement, iso]
description: "Hoe ik ISO-normen en Architecture Decision Records toevoegde aan mijn kennissysteem, geïnspireerd door Martijn Aslander."
---

Twee weken geleden schreef ik over [mijn kennisbank opbouwen](/blog/ai-workflow/2025-12-05-kennisbank-opbouwen-met-ai/). Vandaag maakte ik hem slimmer. De aanleiding? Een blogartikel van Martijn Aslander.

---

## De aanleiding

Martijn Aslander schreef een artikel met de titel ["Ik zit op iets bijzonders en ik krijg het niet uitgelegd"](https://world.hey.com/martijnaslander/ik-zit-op-iets-bijzonders-en-ik-krijg-het-niet-uitgelegd-294621fa). Hij bouwt apps met AI, maar waar hij echt over schrijft is *informatieliquiditeit*: kennis die niet opgesloten zit in losse bestanden, maar doorzoekbaar en verbonden is op basis van betekenis.

Wat me triggerde was zijn auditsysteem. Hij valideert zijn code tegen ISO-normen. Niet omdat hij enterprise software bouwt, maar omdat het hem dwingt om kwaliteit te meten in plaats van te voelen.

Dat wilde ik ook proberen.

---

## Wat zijn die ISO-normen?

Kort samengevat:

| Norm | Meet | Toepassing |
|------|------|------------|
| **ISO 25010** | Softwarekwaliteit op 8 kenmerken | Checklist bij audits |
| **ISO 5055** | Codekwaliteit (geautomatiseerd) | Lint, tests, build |
| **ISO/IEEE 42010** | Architectuurdocumentatie | ADRs (Architecture Decision Records) |
| **IEEE 1028** | Hoe audits uitvoeren | Audit-structuur |

ISO 5055 had ik al zonder het te weten: voordat ik code naar GitHub kan sturen, draait er automatisch een check die controleert of alles nog werkt. Geen fouten? Dan mag het door. IEEE 1028 had ik ook deels: mijn audits volgen een vast format.

Wat ik miste: ISO 25010 (die 8 kwaliteitskenmerken) en ISO/IEEE 42010 (architectuurbeslissingen vastleggen).

---

## De 8 kwaliteitskenmerken

ISO 25010 definieert 8 dingen die software "goed" maken:

1. **Functionaliteit** - Doet het wat het moet doen?
2. **Prestaties** - Is het snel genoeg?
3. **Compatibiliteit** - Werkt het overal?
4. **Bruikbaarheid** - Kunnen gebruikers ermee werken?
5. **Betrouwbaarheid** - Werkt het consistent?
6. **Beveiliging** - Is het veilig?
7. **Onderhoudbaarheid** - Kan ik het makkelijk aanpassen?
8. **Overdraagbaarheid** - Kan iemand anders het overnemen?

Ik voegde dit toe als checklist bovenaan mijn audit-template. Niet om te scoren, maar om na te denken. "Overdraagbaarheid" dwong me meteen om te reflecteren: zou iemand anders mijn zweedsapp kunnen overnemen? Met de CLAUDE.md die ik heb: ja, waarschijnlijk wel. Zonder: geen schijn van kans.

---

## Architecture Decision Records

Het interessantste concept was de ADR: een kort document dat vastlegt *waarom* je iets zo hebt gebouwd.

Het verschil met mijn bestaande systeem:

| LEARNINGS.md | ADR |
|--------------|-----|
| "Hoe ik een probleem oploste" | "Waarom ik deze aanpak koos" |
| Achteraf (discovery) | Vooraf (beslissing) |
| Implementatieniveau | Architectuurniveau |

Een ADR beantwoordt:
- Wat was de context?
- Welke alternatieven overwoog je?
- Wat besloot je en waarom?
- Wat zijn de consequenties?

---

## Mijn eerste ADR

Ik liet Claude een ADR schrijven voor zweedsapp: waarom Vanilla JS en geen framework?

```markdown
# ADR-001: Vanilla JavaScript zonder framework

**Status**: Geaccepteerd
**Project**: zweedsapp

## Context
Zweedse taal-leer PWA met ~10 schermen,
audio recording, gamification, offline support.

## Beslissing
Vanilla JS (ES6 modules) met Vite als build tool.

## Alternatieven overwogen
- React: overkill, 40kb bundle, virtual DOM overhead
- Vue: extra abstractielaag zonder duidelijke winst
- Svelte: serieuze kandidaat, maar vanilla bleek voldoende

## Gevolgen
+ Kleine bundle, geen framework lock-in
+ Transparante code, makkelijk te debuggen
- Handmatige state management (this.render())
- Geen component systeem
```

Wat ik interessant vond: door dit te laten opschrijven, leerde ik waarom mijn app zo gebouwd is. Claude analyseerde de code en legde uit welke keuzes er zijn gemaakt en waarom. Kennis die ik zelf niet had, maar nu wel kan terugvinden.

---

## Learnings doorzoekbaar maken

Ik had al een bestand met learnings uit mijn projecten. Maar het was niet *vindbaar*. Als ik wilde weten "wat weet ik over Safari bugs?", moest ik door 400+ regels scrollen.

Oplossing: een index per tag.

```text
## Per technologie

### #safari / #ios
- iOS Speech Recognition blokkade
- iOS controllerchange event
- Safe Area Insets

### #pwa
- Service Worker update notification
- Version-based caching

### #javascript
- Timezone-safe date navigatie
- parseInt met || operator
```

Nu kan ik snel vinden wat ik eerder leerde. Het "zelflerende" aspect uit Martijn's artikel.

---

## De nieuwe structuur

Mijn kennisbank heeft nu drie lagen:

```text
_knowledge/
├── decisions/           ← WAAROM (architectuur)
│   ├── ADR-001-*.md
│   └── ADR-000-template.md
├── learnings/           ← HOE (opgeloste problemen)
│   ├── INDEX.md         ← doorzoekbaar per tag
│   └── 2025-Q4.md
└── audits/              ← KWALITEIT (ISO 25010 check)
    └── 2025-12-*.md
```

Plus de design principles voor *wat wel en niet*.

---

## Wat is nu het verschil?

Eerlijk: niet gigantisch. Het zijn dezelfde problemen en oplossingen. Maar het is nu gestructureerder.

De echte winst zit in de ADRs. Toen ik "geen modals" als regel wilde documenteren, dwong het format me om te kiezen: is dit een ADR of een design principle?

Antwoord: design principle. Het is een herbruikbare richtlijn, geen eenmalige architectuurbeslissing.

Dat onderscheid maken is waardevoller dan het klinkt.

---

## Verschillende focus

Wat me opvalt: Martijn en ik bouwen allebei met AI, maar onze focus is heel anders.

Martijn komt uit de informatiekant. Hij focust op robuuste, duurzame code. Audits, ISO-normen, validatiesystemen. Hij wil zekerheid dat wat hij bouwt niet omvalt.

Ik kom uit design. Mijn focus ligt op gebruiksvriendelijkheid, goede content en accessibility. Mijn audits checken of de kleuren genoeg contrast hebben, of de navigatie logisch is, of iemand met een screenreader de app kan gebruiken.

Allebei belangrijk. Allebei nodig. Maar grappig hoe je achtergrond bepaalt waar je als eerste naar kijkt.

---

## De praktische toevoeging

| Nieuw bestand | Doel |
|---------------|------|
| `decisions/README.md` | Uitleg over ADRs |
| `decisions/ADR-000-template.md` | Template |
| `decisions/ADR-001-vanilla-js-*.md` | Eerste echte ADR |
| `learnings/INDEX.md` | Doorzoekbare index |
| `templates/AUDIT.md` | Met ISO 25010 checklist |

Kostte ongeveer een uur om op te zetten. Met AI.

---

## Wat ik hiervan leerde

**1. ISO-normen zijn niet alleen voor enterprise.**

Ze zijn een checklist voor nadenken. "Is dit overdraagbaar?" is een betere vraag dan "is dit goed?".

**2. ADRs maken kennis expliciet.**

Als je met AI bouwt, worden er keuzes gemaakt die je zelf niet altijd begrijpt. Een ADR laat de AI die keuzes uitleggen. Nu heb ik die kennis ook. En kan ik hem terugvinden.

**3. Tags maken kennis vloeibaar.**

Het verschil tussen "ik heb dit ergens" en "ik kan dit vinden" is een index.

---

## Het gaat niet om de apps

Martijn schrijft in zijn artikel dat er vier verhalen tegelijk spelen:

1. **Het zichtbare verhaal**: kijk wat ik kan bouwen met AI. Apps, dashboards, snelheid.
2. **Het onderliggende verhaal**: informatieliquiditeit. Kennis die niet opgesloten zit in losse apps, maar verbonden is op basis van betekenis.
3. **Het procesverhaal**: het leren bouwen met AI. Trial-and-error, auditsystemen, controle krijgen.
4. **Het transformationele verhaal**: je bent geen appbouwer, je bent een informatiearchitect die voor het eerst zelf gereedschap kan maken.

Dat laatste resoneert. Ik bouw geen apps. Ik bouw een systeem waarmee ik problemen kan oplossen. De apps zijn bijproducten.

En er is nog een laag: ik bouw om de regie te houden. [Ik schreef daar eerder over](/blog/ai-workflow/2025-12-06-ik-kan-nu-alles-maken/) — mijn data blijft van mij, mijn logica bepaal ik zelf. Geen compromissen omdat iets "voor iedereen moet werken". Geen privacy policies van bedrijven die ik moet vertrouwen.

Eigenaarschap. Dat is misschien wel het vijfde verhaal.

---

## Bronnen

- [Martijn Aslander's artikel](https://world.hey.com/martijnaslander/ik-zit-op-iets-bijzonders-en-ik-krijg-het-niet-uitgelegd-294621fa) - de aanleiding
- [ISO 25010](https://iso25000.com/index.php/en/iso-25000-standards/iso-25010) - softwarekwaliteit
- [ADR GitHub](https://adr.github.io/) - Architecture Decision Records

---

*Documentatie is niet sexy. Maar vindbare documentatie is een superpower.*
