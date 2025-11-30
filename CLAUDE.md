# CLAUDE.md - Devblog

Persoonlijke blog over bouwen met AI en andere experimenten.

## Tech stack

- **Hugo** (static site generator)
- **PaperMod** theme
- **Netlify** hosting

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

1. Kopieer post van `~/Projecten/habittracker/blog/` naar `content/habittracker/`
2. Check frontmatter (geen nested `stats:`)
3. Test lokaal met `hugo server`

## Schrijfstijl

Zie `~/Projecten/CLAUDE.md` voor schrijfrichtlijnen:
- Sentence case voor koppen
- Persoonlijk maar professioneel (zoals modub.nl)
- Direct en toegankelijk

## Deployment

- Push naar GitHub → GitHub Pages auto-deploy
- URL: https://blog.modub.nl

### DNS setup (TransIP)

Voeg dit CNAME record toe in TransIP:

```
blog.modub.nl  CNAME  mdubbelm.github.io.
```

### GitHub Pages aanzetten

1. Ga naar repo Settings → Pages
2. Source: "GitHub Actions"
3. Wacht op eerste deploy
4. Custom domain: `blog.modub.nl`
