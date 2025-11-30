# Blog ideeën

## Idee 1: Mijn virtuele team (agents uitleg)

**Status:** Prioriteit - lezers snappen niet wie Tessa is

**Werktitel:** "Mijn virtuele team: hoe tekstbestanden me helpen denken"

**Kernboodschap:**
Ik heb een map met "agents" - simpele tekstbestanden die Claude vertellen hoe hij zich moet gedragen. Het klinkt technisch, maar het is eigenlijk heel simpel: het zijn gewoon instructies.

**De agents die ik gebruik:**
- **Tessa** (Product Owner) - Helpt me prioriteren. "Wat heeft de meeste impact met de minste moeite?"
- **Anneke** (Frontend Developer) - Technische beslissingen en code kwaliteit
- **Kehrana** (UI Designer) - Hoe moet het eruit zien?
- **Rian** (Accessibility Expert) - Is het voor iedereen bruikbaar?

**Hoe werkt het in de praktijk?**
1. Ik open een gesprek met Claude
2. Ik vraag Claude om "Tessa te laden" (of de AI leest het bestand automatisch)
3. Claude antwoordt vanuit dat perspectief
4. Ik krijg advies dat ik zelf niet zou bedenken

**Voorbeeld (concreet):**
> Ik: "Ik heb 5 ideeën, wat moet ik eerst doen?"
> Tessa (via Claude): "Laten we ze scoren op impact en moeite..."
> [tabel met scores]
> "De quick wins eerst. Dit kost 30 minuten en maakt direct verschil."

**Waarom dit werkt:**
- Dwingt me om vanuit een ander perspectief te denken
- Geen eindeloos twijfelen - er is een framework
- De "expert" is altijd beschikbaar
- Ik hoef niet alles zelf te weten

**Wat het NIET is:**
- Geen magie
- Geen echte mensen
- Gewoon slimme instructies die Claude een rol geven

---

## Idee 2: Projectorganisatie en Obsidian workflow

**Werktitel:** "Mijn setup: hoe ik projecten, AI agents en documentatie centraliseer"

**Kernpunten:**

### Deel 1: Centrale projectstructuur
- `/Projecten/` als root voor alle projecten
- `_agents/` met gespecialiseerde AI personas (Tessa, Kehrana, Anneke, etc.)
- `_knowledge/` kennisbank met herbruikbare learnings
- `CLAUDE.md` op workspace-niveau → geldt voor alle subprojecten
- `LEARNINGS.md` per project voor specifieke inzichten

### Deel 2: Obsidian als centrale hub
- Obsidian vault wijst naar `/Projecten/`
- Alle `.md` bestanden direct leesbaar en bewerkbaar
- Markdown preview voor YAML frontmatter check
- Links tussen documenten voor kennisnetwerk
- Graph view om verbanden te zien

### Deel 3: Van Obsidian naar blog
- Blog posts in markdown → direct bruikbaar voor Hugo
- Symlinks voor content sync (`habittracker/blog/` → `devblog/content/habittracker/`)
- Single source of truth: schrijf in Obsidian, publiceer automatisch
- YAML frontmatter compatible met beide systemen

**Vragen om te beantwoorden:**
- Waarom deze structuur?
- Hoe werkt het in de praktijk?
- Wat zijn de voordelen voor AI-assisted development?
- Hoe voorkom je dat kennis verloren gaat tussen sessies?

**Screenshots nodig:**
- Obsidian graph view van /Projecten
- Folder structuur
- Voorbeeld van agent bestand
- Blog post in Obsidian vs live site

---

*Laatste update: 2025-11-29*
