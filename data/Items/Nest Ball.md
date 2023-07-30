### Catch Rate
Nest Ball's catch rate depends on the player's highest Region and the max Route from said Region. It uses the following formula:

**Catch Rate** = min(15, max(1, Highest Region) * max(1, (Max Route / Current Route)))

In other words, Nest Ball's pool of maximum catch rate routes increases with Region progression, resulting in the following table:

Region Route Order |Catch Chance (+5, Equal to Great Ball) |Catch Chance (+10, Equal to Ultra Ball) |Catch Chance (+15)
|---|---|---|---|
|Max Region Kanto |Kanto Route 24 |Kanto Route 2 |Kanto Route 1
|Max Region Johto |Kanto Route 11 |Kanto Route 4 |Kanto Route 2
|Max Region Hoenn |Johto Route 41 |Kanto Route 17 |Kanto Route 8
|Max Region Sinnoh |Hoenn Route 119 |Johto Route 36 |Kanto Route 19
|Max Region Unova |Sinnoh Route 226 |Hoenn Route 117 |Johto Route 38
|Max Region Kalos |Kalos Route 21* |Hoenn Route 132 |Hoenn Route 116
|Max Region Alola |Master League Pier* |Unova Route 9 |Sinnoh Route 201
|Max Region Galar |Path to the Peak* |Alola Route 9 |Unova Route 19

***Note:** Nest Ball's minimum catch rate is equal to the ID of the highest Region the player has reached and goes from +0 (Kanto) to +7 (Galar). In other words, once the player is in Galar, any Route will have at least +7 catch rate which is a bit better than using a Great Ball. Also, any Route below the one shown in the last column will also have the +15 bonus.