# Laatste sessie: 2026-01-05

## Wat is gedaan
- ListenBrainz profiel toegevoegd aan social icons ([PR #30](https://github.com/mdubbelm/devblog/pull/30), [PR #31](https://github.com/mdubbelm/devblog/pull/31))
- Fix voor submodule issue: svg.html verplaatst naar project layouts folder
- Homepage intro geüpdatet naar "Ex-WordPressionista, vibe coden" ([PR #32](https://github.com/mdubbelm/devblog/pull/32))
- About pagina en meta description aangepast ([PR #33](https://github.com/mdubbelm/devblog/pull/33))
- ListenBrainz toegevoegd aan social profiles op about pagina

## Status
- [x] ListenBrainz icon toegevoegd
- [x] Homepage intro aangepast
- [x] About pagina aangepast
- [x] Meta descriptions aangepast
- [ ] Uncommitted change in `content/blog/2026-01-04-claude-code-vraaggesprek.md`

## Volgende keer
- Check wat de wijziging in `2026-01-04-claude-code-vraaggesprek.md` is en commit of discard
- Netlify koppeling verwijderen in Netlify dashboard (niet in repo)

## Notities
- PaperMod is een submodule - custom SVG icons moeten in `layouts/partials/svg.html` in de project root, niet in de theme folder
- Hugo kijkt eerst in project layouts voordat het naar theme kijkt
