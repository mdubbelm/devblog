# CLAUDE.md - Devblog

Persoonlijke blog over bouwen met AI en andere experimenten.

## Tech stack

- **Hugo** (static site generator)
- **PaperMod** theme
- **GitHub Pages** hosting

## Commands

```bash
# Lokaal ontwikkelen
hugo server --buildDrafts

# Build voor productie
hugo --gc --minify
```

## Content structuur

```
content/
├── habittracker/     # Health tracker serie
│   ├── _index.md     # Serie intro
│   └── 2025-*.md     # Posts
└── about/
    └── index.md
```

## Nieuwe post toevoegen

### Workflow

1. Maak een nieuw `.md` bestand in de juiste map:
   - `content/blog/ai-workflow/` - Posts over AI en agents
   - `content/blog/habittracker/` - Health tracker serie
   - `content/blog/archief/` - Overige posts

2. Voeg frontmatter toe (zie template hieronder)

3. Test lokaal: `hugo server --buildDrafts`

4. Commit lokaal: `git add . && git commit -m "Add: [titel]"`

5. **Auto-publish** pakt het op (dagelijks tussen 7:00-13:00)
   - Of handmatig pushen: `git push`

### Draft en scheduled publishing

**BELANGRIJK: Alle nieuwe posts krijgen `draft: true`**

Het auto-publish script publiceert posts automatisch wanneer hun datum is aangebroken:
- Post met `draft: true` en datum vandaag of eerder → wordt automatisch gepubliceerd
- Post met `draft: true` en datum in de toekomst → blijft draft tot die datum

```yaml
---
title: "Mijn nieuwe post"
date: 2025-12-10T10:00:00+01:00   # ← Geplande publicatiedatum
draft: true                        # ← ALTIJD toevoegen bij nieuwe posts
tags: [ai]
---
```

Dit zorgt voor scheduled publishing: schrijf posts vooruit, zet de gewenste publicatiedatum, en het script doet de rest.

### Bestandsnaam conventie

```
YYYY-MM-DD-korte-beschrijving.md
```

Voorbeeld: `2025-12-06-ik-kan-nu-alles-maken.md`

## Schrijfstijl van Monique

**BELANGRIJK:** Dit is Monique's persoonlijke blog. Schrijf in HAAR stijl, niet in een generieke AI-stijl.

### Kernkenmerken

1. **Toegankelijk en persoonlijk**
   - Spreek de lezer aan met "je" en "jouw"
   - Schrijf alsof je tegen een collega praat
   - Deel persoonlijke observaties en twijfels

2. **Informeel maar niet slordig**
   - Colloquialismen zijn OK: "joehoe!", "hey, het oog wil ook wat"
   - Zelfspot om technische onderwerpen lichter te maken
   - Geen academisch of corporate taalgebruik

3. **Afwisseling in zinslengte**
   - Korte zinnen voor impact: "Design is een vak, laat dat duidelijk zijn."
   - Langere zinnen voor uitleg
   - Dit creëert ritme en houdt aandacht vast

4. **Concrete voorbeelden**
   - Geen abstracte theorie
   - Noem specifieke tools, websites, situaties
   - "Toen ik zei X, kreeg ik Y" in plaats van "Als men X doet, gebeurt Y"

5. **Plain language**
   - Vermijd vakjargon zonder uitleg
   - Als je een term gebruikt, leg hem uit
   - Referentie: Episode 30 rethink.fm "Designer-isms: Speak Plain Language"

### Structuur

```markdown
# Titel (sentence case)

Korte intro die het probleem of de vraag stelt. Max 2-3 zinnen.

---

## Het probleem / De situatie

Wat was er aan de hand? Persoonlijk verteld.

---

## De oplossing / Wat ik deed

Concreet, met voorbeelden.

---

## Wat ik hiervan leerde

Reflectie, inzichten. Vaak in bullet points.

---

*Poëtische one-liner als afsluiter.*
```

### Frontmatter

```yaml
---
title: "Titel in sentence case"
date: 2025-11-30T22:00:00+01:00
draft: true                    # ← ALTIJD bij nieuwe posts
session: 12                    # Sessienummer
tags: [features, ux, reflectie]
user_time: "30 min"            # Jouw tijdsinvestering
ai_time: "2 uur"               # AI tijdsinvestering
efficiency: "1:4"              # Ratio user:ai
version: "0.3.0"               # App versie (optioneel)
mood: "🎯"                     # Emoji die de sessie typeert
---
```

### Anti-patterns (NIET doen)

- ❌ "In dit artikel zullen we bespreken..." → te formeel
- ❌ Lange inleidingen voordat je to the point komt
- ❌ Passive voice: "Er werd besloten..." → "Ik besloot..."
- ❌ Buzzwords zonder uitleg: "leveraging synergies"
- ❌ Overdreven enthousiast: "Super geweldig fantastisch!"
- ❌ Geen persoonlijke stem of mening

### Goede voorbeelden uit Monique's werk

**Fronteers Adventskalender 2018 - "Mooi rood is niet lelijk":**
> "Daarom geef ik je in dit artikel 7 tips."
> "Misschien heeft de ontwerper gedacht: wat voor Coolblue werkt, werkt vast ook voor ons."

**modub.nl:**
> Direct, to the point, geen omhaal

**rethink.fm podcasts:**
> Toegankelijke uitleg van complexe UX concepten
> Focus op praktische toepasbaarheid

### Data en stats

Voeg waar mogelijk toe:
- Tijdsinvestering (user vs AI)
- Versienummers
- Concrete metrics (accessibility score, test coverage, etc.)
- Vergelijkingen in tabellen

### Bronnen voor meer context

- [Fronteers Adventskalender 2018](https://fronteers.nl/blog/2018/12/mooi-rood-is-niet-lelijk)
- [modub.nl](https://modub.nl)
- [rethink.fm podcasts](https://rethink.fm/author/monique/)
- [UXATT](https://uxatt.com/author/monique/)

**TODO:** Aanvullen met voorbeelden uit WordPress exports van modub.nl en prilgroen.nl

## Deployment

- Push naar GitHub → GitHub Pages auto-deploy
- URL: https://modub.nl

### DNS setup (TransIP)

```
@            A      185.199.108.153
@            A      185.199.109.153
@            A      185.199.110.153
@            A      185.199.111.153
www          CNAME  mdubbelm.github.io.
```

### GitHub Pages

1. Ga naar repo Settings → Pages
2. Source: "GitHub Actions"
3. Custom domain: `modub.nl`
4. Enforce HTTPS: aan
