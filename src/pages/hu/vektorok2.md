---
attachments: [DiMat1_koordinata_geometria_feladatsor.pdf]
title: 4. Vektor- és koordinátageometria II.
created: "2021-12-18T15:23:53.549Z"
modified: "2021-12-18T15:27:24.828Z"
layout: ../../layouts/MainLayout.astro
---

#### IV. Skaláris szorzat

Két vektor skaláris szorzata két vektor hosszának és közrezárt szögük koszinuszának szorzata.

$ab = |a||b|\cos \gamma$

##### Tulajdonságok

- a^2^ = aa = |a|^2^
- Kommutatív: ab = ba
- $\lambda(ab) = (\lambda a)b = a(\lambda b)$
- NEM asszociatív: $a(bc) \ne (ab)c$
- a(b + c) = ab + ac ("disztributív szerű")
- **ab = 0 ha $a\perp b$**
- **ab > 0 ha $0° \leq \gamma \lt 90°$**
- **ab < 0 ha $90° \lt \gamma \leq 180°$**

#### V. Vektoriális szorzat

Két vektor vektoriális szorzata (**a** x **b**) az a vektor,

- amelynek hossza $|a \times b| = |a||b|\sin\gamma$,
- amely merőleges a-ra és b-re is,
  amellyel három vektor, a, b, a x b sorrendben jobbsodrású rendszert alkot.

##### Geometriai jelentés

Az **a** és **b** által kifeszített paralelogramma területvektora:

- Hossza megegyezik a paralelogramma területével.
- Iránya kijelöli a paralelogramma síkját (merőleges rá).

##### Tulajdonságok

- Antikommutatív: $a \times b = -b \times a$
- $\lambda(a \times b) = (\lambda a) \times b = a \times (\lambda b)$
- NEM asszociatív: $a \times (b \times c) \neq (a \times b) \times c$
- Disztributív az összeadásra nézve: $a \times (b + c) = a \times b + a \times c$
- $a \times b = 0 \iff |a| = 0\ vagy\ |b| = 0\ vagy\ \sin\gamma = 0$

#### VI. Vegyes szorzat

Az a, b, c vektorok vegyes szorzata:
$abc = (a \times b)c$

##### Geometriai jelentés

Az a, b, c vektorok által kifeszített paralelepipedon térfogata.

##### Tulajdonságok

- $abc = 0 \iff$ ha egy síkban vannak (komplanárisak)
- $abc > 0 \iff$ ha a, b, c sorrendben jobbsodrásúak
- $abc < 0 \iff$ ha a, b, c sorrendben balsodrásúak
- $abc = bca = cab = -acb = -bac = -cba$
- Felcserélési tétel: $(a \times b)c = a(b \times c)$, ezért is korrekt az _abc_ jelölés.

[Feladatsor](https://unidoc.hanubence.tech/attachments/DiMat1_koordinata_geometria_feladatsor.pdf)
