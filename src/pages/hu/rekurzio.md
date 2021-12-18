---
tags: [dimat]
title: 1. Rekurzió és teljes indukció
layout: ../../layouts/MainLayout.astro
created: "2021-12-18T13:28:16.521Z"
modified: "2021-12-18T14:13:45.766Z"
---

### Rekurzív függvények

Egy függvényről azt mondjuk, hogy rekurzív módon adott, ha a függvényérték (bizonyos helyeken) nem explicit módon adott, hanem más helyen (helyeken) felvett függvényértékek segítségével van definiálva.

A rekurzív módon adott a függvény a D~f~ halmazon jól definiált, ha

- Létezik D~f~-nek egy részhalmaza (báziésértékek halmaza, egy báziskritérium alapján általában), amely értékekre a függvény értéke expliciten adott.

- Valahányszor a függvény magára hivatkozik "közelebb kerül" a báziskritérium teljesüléséhez és azt véges sok lépésben eléri.

### Teljes indukciós bizonyítás

A teljes indukció megszámlálhatóan végtelen sok állítás bizonyítására szolgáló módszer:

Két lépésből áll:

1. Belátjuk hogy _P_ állítás igaz egy alapestben (pl. n = 0)
2. A második lépés neve az indukciós lépés. Ebben belátjuk, hogy ha az állításunk igaz tetszőleges k-ra (indukciós hipotézis) akkor k+1-re is igaznak kell lennie.

[Teljes indukció, indirekt bizonyítás feladatsor](https://unidoc.hanubence.tech/attachments/DiMat1_rekurzio_feladatsor.pdf)
