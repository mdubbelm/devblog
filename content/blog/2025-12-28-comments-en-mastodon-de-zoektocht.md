+++
date = '2025-12-28T17:00:00+01:00'
draft = false
title = 'Comments en Mastodon: op zoek naar een simpele workflow'
description = 'Hoe ik onderzocht hoe andere bloggers Mastodon integreren, en waarom ik voor de simpelste oplossing koos'
tags = ['mastodon', 'indieweb', 'hugo', 'workflow']

# Mastodon comments - vul de toot ID in na publicatie
# (het getal aan het eind van de URL, bijv. 113737583901234567)
[mastodon]
host = 'mastodon.social'
username = 'Mdubbelm'
id = ''
+++

Ik wilde twee dingen: mijn blogposts automatisch op Mastodon krijgen, en reacties vanuit Mastodon onder mijn posts tonen. Klinkt simpel toch? Nou, dat viel tegen.

## Eerst maar eens kijken hoe anderen het doen

Ik begon met drie blogs die ik regelmatig lees en waarvan ik wist dat ze iets met Mastodon doen:

**[Darice de Cuba](https://darice.org/)** gebruikt WordPress met Webmentions. Haar comments komen via de IndieWeb-standaard binnen. Mooi, maar ik zit niet op WordPress.

**[Frank Meeuwsen](https://blog.frankmeeuwsen.com/)** zit op Micro.blog. Dat platform heeft ActivityPub ingebouwd — zijn blog IS een Fediverse-account. Mensen kunnen hem rechtstreeks volgen vanuit Mastodon.

**[Hidde de Vries](https://hidde.blog/)** combineert Webmentions met Mastodon. Onder zijn posts zie je likes, boosts én replies van Mastodon. Dat zag er gaaf uit: 60 interacties onder één post!

## De opties

Na wat onderzoek bleken er grofweg drie routes:

| Optie | Wat het doet | Complexiteit |
|-------|--------------|--------------|
| **MastoFeed** | RSS → Mastodon posts | Simpel |
| **Brid.gy Fed** | Blog wordt volgbaar als @site@site | Medium |
| **Micro.blog** | Alles-in-één platform | Migratie nodig |

### Micro.blog: verleidelijk maar...

Even serieus overwogen: overstappen naar Micro.blog. €5/maand, native Fediverse, geen gedoe. Maar toen ik de trade-offs op een rijtje zette:

- Al mijn Hugo-specifieke dingen (shortcodes, thema) → weg
- 40+ posts migreren met risico op broken links
- Minder controle over de techniek
- Vendor lock-in

Ik vroeg mijn AI-agents om mee te denken (ja, ik heb een heel team, maar dat is een ander verhaal). Johanna, mijn virtuele Product Owner, was duidelijk: "80% van de voordelen met 0% lock-in? Blijf bij Hugo."

### Brid.gy Fed: cool maar overkill

Brid.gy Fed zou mijn blog een eigen Fediverse-identiteit geven. Mensen zouden `@modub.nl@modub.nl` kunnen volgen. Klinkt fancy, maar toen ik doorvroeg: wat wil ik eigenlijk?

Ik wil gewoon posten op mijn bestaande Mastodon-account. Niet een tweede identiteit beheren.

## De simpelste oplossing

Uiteindelijk werd het:

1. **MastoFeed** voor auto-posting (RSS → mijn Mastodon)
2. **Mastodon Comments** die al in mijn thema zaten

De comments-code bestond al in mijn Hugo-setup. Ik heb er nog wat security (DOMPurify tegen XSS) en accessibility aan toegevoegd, maar de basis was er.

### Hoe het nu werkt

```
1. Ik publiceer een blogpost
2. MastoFeed ziet de RSS update, post naar Mastodon
3. Mensen reageren op die toot
4. Ik kopieer de toot-ID naar de frontmatter van mijn post
5. Reacties verschijnen onder de blogpost
```

Stap 4 is handmatig, ja. Ik heb gekeken of dat te automatiseren is, maar dat wordt al snel complex (API polling, GitHub Actions, timing issues). Voor iemand die niet dagelijks blogt is 30 seconden copy-pasten prima.

## Wat ik wel geautomatiseerd heb

De Hugo-template voor nieuwe posts heeft nu de Mastodon-velden al klaarstaan:

```toml
[mastodon]
host = 'mastodon.social'
username = 'Mdubbelm'
id = ''
```

Alleen die `id` moet ik invullen. De rest staat er al.

## De bonus: IndieWeb-ready

Terwijl ik bezig was heb ik ook microformats toegevoegd aan mijn templates. Niet omdat ik het nu nodig heb, maar het kan geen kwaad. Mijn posts hebben nu `h-entry` markup, mijn homepage een `h-card`. Mocht ik ooit wel Webmentions of Brid.gy Fed willen, dan is de basis er.

## Wat ik leerde

**Begin simpel.** Ik had uren kunnen besteden aan een volledig geautomatiseerde Fediverse-integratie. In plaats daarvan werkt het nu, met minimale technische schuld.

**Kijk hoe anderen het doen.** Die drie blogs bekijken gaf me snel een beeld van de opties. Veel sneller dan documentatie spitten.

**Vraag je af wat je écht wilt.** Ik dacht dat ik wilde dat mijn blog een Fediverse-actor zou worden. Wat ik eigenlijk wilde: posts op mijn bestaande Mastodon, comments zichtbaar op mijn blog. Dat is veel simpeler.

*Soms is de saaie oplossing de beste.*
