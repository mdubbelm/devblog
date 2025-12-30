---
title: "Terug naar mijn muziek (via een omweg)"
slug: "terug-naar-mijn-muziek"
date: 2025-12-30T20:00:00+01:00
draft: false
description: "Hoe ik dankzij Plex mijn oude muziekcollectie herontdekte, verdwenen playlists terugvond, en nu wacht op een USB-hub"
tags: [plex, navidrome, muziek, raspberry-pi, open-source]
mastodon:
  host: mastodon.social
  username: Mdubbelm
  id: ""
---

Twee dagen geleden las ik [Frank Meeuwsen's post over zijn eigen muziekserver](https://blog.frankmeeuwsen.com/2025/12/28/mijn-eigen-streaming-muziekserver.html). Een uurtje later had ik Plex draaien.

> Ik hou van serendipiteit! [...] Ik luister al de hele middag naar langvervlogen muziekjes en Claude Code heeft zelfs verloren mappen met platen en oude iTunes playlists geëxporteerd en weer tot leven gewekt. Ik kraai nog net niet van plezier.
>
> — [mijn reactie op Mastodon](https://mastodon.social/@Mdubbelm/115805043306348602)

En eerlijk: ik had dit veel eerder moeten doen.

## De schat op de externe schijf

Ergens op een externe schijf stond nog 15 jaar aan muziek. Geripped van CD's, gedownload in de Napster-jaren, gekocht via iTunes, downloadcodes bij vinyl, gekregen van vrienden. Ik kwam er nooit meer aan. Te veel gedoe om die oude bibliotheek weer aan de praat te krijgen, en Apple Music had het wel overgenomen.

Maar Apple Music heeft niet alles. En sommige muziek *wil* ik gewoon bezitten.

Dus: Plex geïnstalleerd, muziekmap aangesloten, en hè hè – daar waren ze weer. Albums waar ik jaren niet aan gedacht had. Playlists die ik compleet vergeten was.

## Verdwenen muziek teruggevonden

Het mooiste: met Claude Code heb ik zelfs muziek teruggehaald uit oude, kapotte iTunes-bibliotheken. Bestanden die iTunes niet meer herkende, maar die er nog gewoon stonden. Een beetje detective-werk in de XML-bestanden, wat Python-scripts, en ineens had ik playlists terug waarvan ik dacht dat ze voorgoed foetsie waren.

(Ja, ik werd een beetje emotioneel van een playlist uit 2009.)

## In de auto naar mijn eigen muziek

Wat ik niet had verwacht: via de Plexamp-app kan ik in de auto naar muziek luisteren die op mijn laptop thuis staat. Gewoon streamen over 4G. Mijn eigen muziek, mijn eigen server, zonder dat een techbedrijf meekijkt.

En alles is open source. Nou ja, Plex zelf niet helemaal, maar er zijn volledig open alternatieven. Wat me brengt bij...

## De volgende stap: Navidrome

Plex draait nu op mijn Mac, maar die staat niet altijd aan. De volgende stap is een Raspberry Pi met Navidrome – een lichtgewicht, open source muziekserver.

Die Pi had ik eigenlijk al besteld voor een ander project (een persoonlijk dashboard), en ik bleek ook nog een 1TB schijf te hebben liggen. Alles viel op z'n plek.

Althans, bijna.

## USB-gedoe

De externe schijf trekt te veel stroom voor de USB-poorten van de Pi. Typisch. Nu zit ik te wachten op een USB-hub met eigen voeding.

Dus: nog even geduld. Maar het idee van een kleine, stille server die 24/7 draait – volledig in eigen beheer – daar kijk ik naar uit.

*Soms is de omweg naar je eigen muziek langer dan je denkt. Maar wel de moeite waard.*
