---
title: "Van kalender naar stipjes"
date: 2025-12-12
tags: [ux, design, iteratie]
session: 17
user_time: "10 min"
ai_time: "35 min"
mood: "iteratief"
---

Soms begin je ergens en eindig je heel ergens anders.

Ik wilde een kalenderoverzicht. Zoals Daylio dat heeft: een maand met gekleurde cirkeltjes die je stemming per dag laten zien. In één oogopslag zie je patronen. Veel groen? Goede maand. Clusters van rood? Tijd om eens te kijken wat er speelt.

## De eerste versie

Claude bouwde een keurige kalender. Met maandnavigatie, weekdagen bovenaan, dagnummers in de vakjes. Plus een uitklapbaar paneel als je op een dag klikte met alle details van die dag.

Keurig. Compleet. En... te veel.

## "Kan het simpeler?"

Dat vroeg ik. En toen begon het strippen.

Eerst de legenda weg. Toen het detailpaneel vervangen door een compact tooltipje. Toen vroeg ik: "eigenlijk wil ik alleen de bolletjes."

Letterlijk. Alleen gekleurde stipjes. Geen tekst, geen navigatie, geen dagnummers.

## Het virtuele designteam

Ik heb inmiddels een team van AI-agents die ik kan raadplegen. Susan is mijn UI designer, Brenda doet UX. Toen ik twijfelde over de grootte van de stipjes, vroeg ik hun mening.

Susan zei: "16px is te klein voor visuele impact. Voor een at-a-glance overzicht raad ik 20-24px aan."

Brenda voegde toe: "Fitts's Law: grotere elementen zijn makkelijker te zien én te tappen. Als je ooit wilt dat gebruikers erop kunnen tikken, moet je richting 44px."

Dat is het mooie van dit soort agents: ze geven je onderbouwde adviezen gebaseerd op echte designprincipes. Niet "ik vind 20px mooi" maar "volgens het 8pt grid systeem en touch target guidelines..."

## Het resultaat

Een scherm met alleen gekleurde stipjes. Nieuwste bovenaan, oudste onderaan. Een klein tijdlijntje aan de zijkant met de datums. Dat is alles.

Is het af? Nee. Er staat al een ticket (#78) om de stipjes klikbaar te maken zodat je kunt doorklikken naar die dag. Maar dan wel met 44px touch targets, zoals Susan en Brenda adviseerden.

## Wat ik leerde

Soms is de beste feature de helft van wat je eerst bouwde. Begin groot, strip terug tot de essentie. En als je twijfelt: vraag je virtuele experts.

De kunst is niet om veel te bouwen. De kunst is om precies genoeg te bouwen.
