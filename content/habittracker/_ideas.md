# Blog ideeën

## Idee 1: Projectorganisatie en Obsidian workflow

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
