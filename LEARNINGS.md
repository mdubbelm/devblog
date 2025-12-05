# LEARNINGS.md - DevBlog Project

Deze learnings documenteren oplossingen, blokkades en beslissingen tijdens de ontwikkeling van blog.modub.nl.

---

## [2025-12-03] Keyboard navigatie geblokkeerd in PaperMod theme

**Status**: 🔴 KRITIEK - Accessibility blocker (WCAG 2.1.1 Niveau A)

### Problem Statement

Keyboard navigatie in het hoofdmenu werkt niet correct op https://blog.modub.nl/. Tab-toets gaat alleen naar:
- Theme toggle button (dark/light mode)
- "Blog" dropdown button

De volgende menu items worden **overgeslagen** bij keyboard navigatie:
- Now
- Portfolio
- Over

Dit is een **critical accessibility issue** - gebruikers die afhankelijk zijn van keyboard navigatie kunnen niet bij essentiële pagina's.

### Impact Analysis

**User Impact**: 10/10
- Maakt site onbruikbaar voor keyboard-only gebruikers
- WCAG 2.1.1 Level A violation (operability)
- Blokkeert toegang tot 3 van 5 hoofdmenu items

**Business Impact**: 8/10
- Discrimineert gebruikers met motorische beperkingen
- Juridisch risico (EU Accessibility Act 2025)
- Reputatieschade bij accessibility community

**Priority Score**: KRITIEK (moet direct opgelost)

### What We Tried (All Failed)

**Session context**: 3 dec. 2025, ~2 uur debugging

1. **CSS overflow fixes** (`assets/css/extended/submenu.css`)
   - Toegevoegd: `overflow: visible !important` op verschillende selectors
   - Ook inline style geprobeerd: `<nav id="menu" style="overflow:visible!important">`
   - **Resultaat**: Geen effect op keyboard focus

2. **Focus styling** voor visibility check
   - Focus indicators toegevoegd aan alle menu items
   - **Resultaat**: Focus is zichtbaar op Blog button, maar slaat andere items over

3. **JavaScript keyboard handlers** (`layouts/partials/header.html`)
   - Event listeners voor arrow keys op submenu
   - **Resultaat**: Werkt op Blog submenu, maar lost hoofdprobleem niet op

4. **HTML structure verification**
   - Skip link aanwezig en functioneel
   - ARIA attributen correct op Blog dropdown
   - Now/Portfolio/Over zijn normale `<a>` tags zonder speciale attributen
   - **Conclusie**: HTML structuur is correct volgens accessibility guidelines

### Root Cause Hypothesis

**Niet alleen overflow**: PaperMod theme heeft waarschijnlijk:
- JavaScript dat focus hijacked/manipuleert
- CSS die `pointer-events` of `user-select` misbruikt
- Z-index issues die click/focus targets verbergen
- Template logica die bepaalde links onbereikbaar maakt

**Te onderzoeken**:
- `themes/PaperMod/assets/js/` - Theme JavaScript
- `themes/PaperMod/layouts/partials/header.html` - Default template
- Browser DevTools tab order inspection
- Focus management in theme toggle functionaliteit

### Relevante Bestanden

**Site**: https://blog.modub.nl/
**Repository**: `/Users/monique/Projecten/devblog/`

**Aangepaste bestanden**:
- `assets/css/extended/submenu.css` - Custom CSS voor menu (failed attempts)
- `layouts/partials/header.html` - Header override met JS handlers

**Theme bestanden (read-only)**:
- `themes/PaperMod/layouts/partials/header.html` - Original template
- `themes/PaperMod/assets/js/` - Theme JavaScript (mogelijk focus issues)

**Config**:
- `hugo.toml` - Menu definitie (correct geconfigureerd)

### Next Steps

**Sprint Planning**: Volgende sessie

**Required Expertise**:
1. **Anneke (Frontend Developer)** - `/Users/monique/Projecten/_agents/development/frontend-developer.md`
   - Deep dive in PaperMod theme JavaScript
   - Browser DevTools tab order debugging
   - Identificeer alle focus-blocking code

2. **Rian (Accessibility Expert)** - `/Users/monique/Projecten/_agents/design/accessibility-expert.md`
   - WCAG audit van huidige implementatie
   - Tab order verification strategie
   - Alternative navigation patterns indien theme unfixable

**Action Items**:

**Fase 1: Diagnose (Priority: KRITIEK)**
- [ ] Anneke: Inspect PaperMod theme JavaScript voor focus management
- [ ] Anneke: Browser DevTools → Check tab order + computed styles
- [ ] Rian: Document WCAG violations (waarschijnlijk 2.1.1, mogelijk meer)
- [ ] Tessa: Beslissen - fix theme OF switch theme?

**Fase 2: Solution (Afhankelijk van diagnose)**

Optie A: **Theme Fix** (als lokaliseerbaar probleem)
- [ ] Anneke: Remove/override focus-blocking code
- [ ] Test keyboard navigation cross-browser
- [ ] Rian: Full accessibility audit

Optie B: **Theme Switch** (als fundamental theme issue)
- [ ] Tessa + Anneke: Evaluate alternative Hugo themes
- [ ] Requirements: Keyboard nav, dropdown support, dark mode
- [ ] Migration effort estimate

**Fase 3: Verification**
- [ ] Rian: WCAG 2.1 compliance check (target: Level AA)
- [ ] Manual testing: Keyboard-only navigation full site
- [ ] Automated testing: axe-core / WAVE audit
- [ ] Deploy + verify op live site

### Success Metrics

**Pre-fix (current)**:
- Keyboard accessible menu items: 2/5 (40%)
- WCAG 2.1.1 compliance: FAIL
- Tab stops in menu: 2

**Target (post-fix)**:
- Keyboard accessible menu items: 5/5 (100%)
- WCAG 2.1.1 compliance: PASS
- Tab stops in menu: 6 (skip link + 5 menu items, excl. theme toggle)

### Risk Assessment

**If we don't fix this**:
- Legal risk: EU Accessibility Act 2025
- Ethical issue: Excluding users with disabilities
- SEO impact: Mogelijk negatief (Google accessibility signals)
- Brand damage: Contradicts personal values around inclusive tech

**Mitigation**:
- Timeline: Must be fixed before promoting site
- Fallback: Switch theme if PaperMod unfixable
- Budget: Max 8 uur (effort score 2/5)

---

## [2025-12-05] Geen Unicode tree-karakters in code blocks

**Context**: Blogposts met directory structuren renderen niet goed
**Probleem**: Unicode karakters zoals ├, │, └, ─ en ← geven problemen in sommige fonts/renderers. Dit is de 3e keer dat dit mis ging.
**Oplossing**: Gebruik simpele ASCII alternatieven:
- Inspringing met spaties in plaats van │
- `--` in plaats van ←
- Geen tree-karakters (├, └, ─)

**Voorbeeld**:
```text
# NIET DOEN:
├── folder/
│   └── file.md  ← beschrijving

# WEL DOEN:
folder/
  file.md        -- beschrijving
```

**Waarom**: ASCII werkt in alle fonts, terminals en markdown renderers.
**Tags**: #markdown #formatting #hugo #codeblocks

---

## Template voor nieuwe learnings

```markdown
### [Datum] Titel van de learning

**Context**: Wat was de situatie?
**Probleem**: Wat ging er mis / wat was onduidelijk?
**Oplossing**: Hoe is het opgelost?
**Waarom**: Waarom werkt deze oplossing?
**Tags**: #tag1 #tag2
```

---

**Maintained by**: Monique Dubbelman
**Last updated**: 2025-12-03
