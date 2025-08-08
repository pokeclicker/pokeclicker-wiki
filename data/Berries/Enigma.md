## Mutation Strategy {#mutation}

### Possible Planting Formations {#planting}

Enigma can be obtained by getting 4 different hints from the Kanto [Berry Master](#!Berry_Masters) and surrounding an empty plot with berries according to those hints. Enigma hints contain a cardinal direction and a berry. If the hint does not have a cardinal direction, then it's **not** an Enigma hint and it's instead a hint from a berry the player hasn't unlocked yet. These hints depend on the Trainer ID, so each profile will have a different Enigma configuration.

You can fill your farm in the following way to obtain Enigma Berries. Purple squares indicate where mutations can occur.

::: table-mutations
| :----: | :----: | :----: | :----: | :----: |
|  | North Hint |  |  |  | |
| West Hint | {.mutation} | East Hint |  |  | |
|  | South Hint |  | North Hint |  | |
|  |  | West Hint | {.mutation} | East Hint | |
|  |  |  | South Hint |  | |
:::

### Enigma Nonsense
For a more efficient method with a forced center Enigma Berry, you can instead op to surround the farm with [[File:Babiri.png\|32px]] [[Berries/Babiri]] and [[File:Kebia.png\|32px]] [[Berries/Kebia]] berries in the following formation. The [[File:Petaya.png\|32px]] [[Berries/Petaya]] Berry is optional for longer mutation period. Planting times are based on the [[File:Babiri.png\|32px]] [[Berries/Babiri]] or [[File:Petaya.png\|32px]] [[Berries/Petaya]] Berry's remaining time if the [[File:Petaya.png\|32px]] [[Berries/Petaya]] is used. You can add [[File:Wacan.png\|32px]] [[Berries/Wacan]] Berries on the corners for the [[File:Babiri.png\|32px]] [[Berries/Babiri]] Berries.
* Disclaimer: [[File:Petaya.png\|32px]] [[Berries/Petaya]] is optional for this setup.

:::collapsed Enigma Nonsense - Farm Simulator Code
Copy & paste the line below into the [[Farm Simulator]]'s Import from Text.

`eyJzYXZlIjp7ImZhcm1pbmciOnsicGxvdExpc3QiOlt7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6LTF9LHsiYmVycnkiOjUxLCJhZ2UiOjEyOTYwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjoxOSwiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6LTF9LHsiYmVycnkiOi0xLCJhZ2UiOjAsIm11bGNoIjotMX0seyJiZXJyeSI6NjQsImFnZSI6NDMyMDAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOjQyLCJhZ2UiOjg2NDAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOi0xLCJhZ2UiOjAsIm11bGNoIjotMX0seyJiZXJyeSI6NDIsImFnZSI6ODY0MDAsIm11bGNoIjotMX0seyJiZXJyeSI6NTEsImFnZSI6MTI5NjAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOi0xLCJhZ2UiOjAsIm11bGNoIjotMX0seyJiZXJyeSI6LTEsImFnZSI6MCwibXVsY2giOi0xfSx7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6Mn0seyJiZXJyeSI6LTEsImFnZSI6MCwibXVsY2giOi0xfSx7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6LTF9LHsiYmVycnkiOjUxLCJhZ2UiOjEyOTYwMCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo0MiwiYWdlIjo4NjQwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6LTF9LHsiYmVycnkiOjQyLCJhZ2UiOjg2NDAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOi0xLCJhZ2UiOjAsIm11bGNoIjotMX0seyJiZXJyeSI6LTEsImFnZSI6MCwibXVsY2giOi0xfSx7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6LTF9LHsiYmVycnkiOjE5LCJhZ2UiOjQzMjAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOjUxLCJhZ2UiOjEyOTYwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjozOCwiYWdlIjozNjAwLCJtdWxjaCI6LTF9XX19fQ`
:::
::: table-mutations
| :----: | :----: | :----: | :----: | :----: |
| | [[File:Babiri.png\|32px]] [[Berries/Babiri]] | [[File:Lum.png\|32px]] [[Berries/Lum]] |  | | |
| [[File:Petaya.png\|32px]] [[Berries/Petaya]] | [[File:Kebia.png\|32px]] [[Berries/Kebia]] | North Hint | [[File:Kebia.png\|32px]] [[Berries/Kebia]] | [[File:Babiri.png\|32px]] [[Berries/Babiri]] | |
| | West Hint | {.mutation} | East Hint | | |
| [[File:Babiri.png\|32px]] [[Berries/Babiri]] | [[File:Kebia.png\|32px]] [[Berries/Kebia]] | South Hint | [[File:Kebia.png\|32px]] [[Berries/Kebia]] | | |
| | | [[File:Lum.png\|32px]] [[Berries/Lum]] | [[File:Babiri.png\|32px]] [[Berries/Babiri]] | | |
:::

### Timing Table {#timing-table}
All planting times use the time-to-ripe remaining of the first planted berry for subsequent planting times
| Berry | Planting Time with No Modifier | Planting Time with Mulch or Sprayduck | Planting Time with  Mulch & Sprayduck |
|:---:|:---:|:---:|:---:|
| [[File:Petaya.png\|32px]] [[Berries/Petaya]] | `Planted First` | | |
| [[File:Babiri.png\|32px]] [[Berries/Babiri]] | 20:00:00 | 14:00:00 | 10:00:00 |
| [[File:Roseli.png\|32px]] [[Berries/Roseli]] |  07:00:00 |	4:45:00 |	03:30:00 |
| North, West, East, and South Hint Berries |  `Growth Duration` |	|	|
| [[File:Kebia.png\|32px]] [[Berries/Kebia]] |  00:10:00 |	00:07:30 |	00:05:00 |

### Important notes
Once the Enigma Berry Mutates, you have a six hour window to harvest or shovel the [[File:Kebia.png\|32px]] [[Berries/Kebia]] Berries.

## Possible Hints
Due to inconvenience, some berries cannot be selected as hints. Any Gen 3 or 4 berry can be selected, except the following:

* Parasitic berries ([[File:Occa.png\|32px]] [[Berries/Occa]], [[File:Kebia.png\|32px]] [[Berries/Kebia]] or [[File:Colbur.png\|32px]] [[Berries/Colbur]])
* Berries that prevent mutation ([[File:Babiri.png\|32px]] [[Berries/Babiri]])

Here is a list of berries that can be given as hints:
| Berry Gen | Possible Berries |
| :---: | :---: |
| Gen 3  | [[File:Pomeg.png\|32px]] [[Berries/Pomeg]], [[File:Kelpsy.png\|32px]] [[Berries/Kelpsy]], [[File:Qualot.png\|32px]] [[Berries/Qualot]], [[File:Hondew.png\|32px]] [[Berries/Hondew]], [[File:Grepa.png\|32px]] [[Berries/Grepa]], [[File:Tamato.png\|32px]] [[Berries/Tamato]], [[File:Cornn.png\|32px]] [[Berries/Cornn]], [[File:Magost.png\|32px]] [[Berries/Magost]], [[File:Rabuta.png\|32px]] [[Berries/Rabuta]], [[File:Nomel.png\|32px]] [[Berries/Nomel]], [[File:Spelon.png\|32px]] [[Berries/Spelon]], [[File:Pamtre.png\|32px]] [[Berries/Pamtre]], [[File:Watmel.png\|32px]] [[Berries/Watmel]], [[File:Durin.png\|32px]] [[Berries/Durin]], [[File:Belue.png\|32px]] [[Berries/Belue]], [[File:Pinkan.png\|32px]] [[Berries/Pinkan]] |
| Gen 4 | [[File:Passho.png\|32px]] [[Berries/Passho]], [[File:Wacan.png\|32px]] [[Berries/Wacan]], [[File:Rindo.png\|32px]] [[Berries/Rindo]], [[File:Yache.png\|32px]] [[Berries/Yache]], [[File:Chople.png\|32px]] [[Berries/Chople]], [[File:Shuca.png\|32px]] [[Berries/Shuca]], [[File:Coba.png\|32px]] [[Berries/Coba]], [[File:Payapa.png\|32px]] [[Berries/Payapa]], [[File:Tanga.png\|32px]] [[Berries/Tanga]], [[File:Charti.png\|32px]] [[Berries/Charti]], [[File:Kasib.png\|32px]] [[Berries/Kasib]], [[File:Haban.png\|32px]] [[Berries/Haban]], [[File:Chilan.png\|32px]] [[Berries/Chilan]], [[File:Roseli.png\|32px]] [[Berries/Roseli]] |

## Additional Mutations
Planting Enigma berries next to certain other berries will cause them to mutate. For all of these mutations, the goal berry must already be unlocked for the mutation to occur. Each berry has a 0.04% chance of mutation.

| Original Berry | Mutated Berry |
| :---: | :---: |
| [[File:Passho.png\|32px]] [[Berries/Passho]] | [[File:Liechi.png\|32px]] [[Berries/Liechi]] |
| [[File:Shuca.png\|32px]] [[Berries/Shuca]] | [[File:Ganlon.png\|32px]] [[Berries/Ganlon]] |
| [[File:Coba.png\|32px]] [[Berries/Coba]] | [[File:Salac.png\|32px]] [[Berries/Salac]] |
| [[File:Payapa.png\|32px]] [[Berries/Payapa]] | [[File:Petaya.png\|32px]] [[Berries/Petaya]] |
| [[File:Chilan.png\|32px]] [[Berries/Chilan]] | [[File:Apicot.png\|32px]] [[Berries/Apicot]] |
| [[File:Roseli.png\|32px]] [[Berries/Roseli]] | [[File:Lansat.png\|32px]] [[Berries/Lansat]] |
| [[File:Haban.png\|32px]] [[Berries/Haban]] | [[File:Starf.png\|32px]] [[Berries/Starf]] |

## Propagation
Due to Enigma's unique mutation effect, it requires slightly modified planting formations when attempting to increase harvests or it will mutate [[File:Passho.png\|32px]][[Berries/Passho]] into [[File:Liechi.png\|32px]][[Berries/Liechi]].  If only one [[File:Enigma.png\|32px]]Enigma berry is available, use a Passho-Wacan Ring Handoff formation.  If at least five Enigma Berries are already owned, the slightly more profitable Wacan-Passho Rows formation can be used instead.  The [[File:Petaya.png\|32px]] [[Berries/Petaya]] Berry is optional to both make the timing easier, faster and avoid having to replant [[File:Wacan.png\|32px]][[Berries/Wacan]] Berries.   It can be placed in any corner without changing the final harvest values.  Without Petaya, the Wacans will have to be replanted every 30 minutes.

#### Enigma Ring Handoff
It takes 10h 40m to get the Petaya to maturity with Boost Mulch + Lv.5 Sprayduck, so if one is not currently already mature on the [[Farm]], it can be placed in any corner in preparation for the Row Handoff after doing this setup once.  A more risky but faster alternative is to skip the Babiris and use the standard Ring formation, ensuring that the Passhos mature before the Enigma does and harvesting it immediately.  This leaves more space for additional Wacans to accelerate the Passho growth.
* Disclaimer: [[File:Petaya.png\|32px]][[Berries/Petaya]] is optional for this setup.
* Plant [[File:Wacan.png\|32px]][[Berries/Wacan]] in a ring around the [[File:Enigma.png\|32px]] Enigma until switching over to [[File:Passho.png\|32px]][[Berries/Passho]].
* Yield: 10 Enigmas

:::collapsed Enigma Ring Handoff - Farm Simulator Code
Copy & paste the line below into the [[Farm Simulator]]'s Import from Text.

`eyJzYXZlIjp7ImZhcm1pbmciOnsicGxvdExpc3QiOlt7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6LTF9LHsiYmVycnkiOjE5LCJhZ2UiOjQzMjAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOjUxLCJhZ2UiOjEyOTYwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6LTF9LHsiYmVycnkiOi0xLCJhZ2UiOjAsIm11bGNoIjotMX0seyJiZXJyeSI6LTEsImFnZSI6MCwibXVsY2giOi0xfSx7ImJlcnJ5IjozNywiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjozNywiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjozNywiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjoxOSwiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1MSwiYWdlIjoxMjk2MDAsIm11bGNoIjotMX0seyJiZXJyeSI6MzcsImFnZSI6NDMyMDAsIm11bGNoIjotMX0seyJiZXJyeSI6NjgsImFnZSI6NjA0ODAwLCJtdWxjaCI6MX0seyJiZXJyeSI6MzcsImFnZSI6NDMyMDAsIm11bGNoIjotMX0seyJiZXJyeSI6NTEsImFnZSI6MTI5NjAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOjE5LCJhZ2UiOjQzMjAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOjM3LCJhZ2UiOjQzMjAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOjM3LCJhZ2UiOjQzMjAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOjM3LCJhZ2UiOjQzMjAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOi0xLCJhZ2UiOjAsIm11bGNoIjotMX0seyJiZXJyeSI6LTEsImFnZSI6MCwibXVsY2giOi0xfSx7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6LTF9LHsiYmVycnkiOjUxLCJhZ2UiOjEyOTYwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjoxOSwiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo2NCwiYWdlIjo0MzIwMDAsIm11bGNoIjotMX1dfX19`
:::
::: table-mutations
| :----: | :----: | :----: | :----: | :----: |
| | | [[File:Babiri.png\|32px]] [[Berries/Babiri]] | [[File:Lum.png\|32px]][[Berries/Lum]] | | |
| [[File:Lum.png\|32px]][[Berries/Lum]] | [[File:Passho.png\|32px]] [[Berries/Passho]] | [[File:Passho.png\|32px]] [[Berries/Passho]] | [[File:Passho.png\|32px]] [[Berries/Passho]] | | |
| [[File:Babiri.png\|32px]] [[Berries/Babiri]] | [[File:Passho.png\|32px]] [[Berries/Passho]] | [[File:Enigma.png\|32px]] [[Berries/Enigma]]{.rich} | [[File:Passho.png\|32px]] [[Berries/Passho]] | [[File:Babiri.png\|32px]] [[Berries/Babiri]] | |
| | [[File:Passho.png\|32px]] [[Berries/Passho]] | [[File:Passho.png\|32px]] [[Berries/Passho]] | [[File:Passho.png\|32px]] [[Berries/Passho]] | [[File:Lum.png\|32px]][[Berries/Lum]] | |
| | [[File:Lum.png\|32px]][[Berries/Lum]] | [[File:Babiri.png\|32px]] [[Berries/Babiri]] | | [[File:Petaya.png\|32px]] [[Berries/Petaya]] | |
:::
#### Enigma Row Handoff
Use this setup with at least five [[File:Enigma.png\|32px]] Enigmas  and if [[File:Petaya.png\|32px]] [[Berries/Petaya]] is available.  With no Petaya, duplicate row two (Enigma-Babiri-Enigma-Babiri-Enigma) in row four instead and all Wacan/Passho in the other rows.  Both have the same yield and growth time if Petaya is already mature.
* Disclaimer: [[File:Petaya.png\|32px]][[Berries/Petaya]] is optional for this setup.
* Plant [[File:Wacan.png\|32px]][[Berries/Wacan]] in rows 1, 3 and 5 until switching over to [[File:Passho.png\|32px]][[Berries/Passho]].
* [[File:Boost_Mulch.png\|32px]][[Items/Boost Mulch]] can be used on the three/four edge-adjacent Enigmas to get them to mature closer to the central two.
* Yield: 16 Enigmas

:::collapsed Enigma Row Handoff - Farm Simulator Code
Copy & paste the line below into the [[Farm Simulator]]'s Import from Text.

`eyJzYXZlIjp7ImZhcm1pbmciOnsicGxvdExpc3QiOlt7ImJlcnJ5IjozNywiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjozNywiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjozNywiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjozNywiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjozNywiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo2OCwiYWdlIjo2MDQ4MDAsIm11bGNoIjoxfSx7ImJlcnJ5Ijo1MSwiYWdlIjoxMjk2MDAsIm11bGNoIjotMX0seyJiZXJyeSI6NjgsImFnZSI6NjA0ODAwLCJtdWxjaCI6MX0seyJiZXJyeSI6NTEsImFnZSI6MTI5NjAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOjY4LCJhZ2UiOjYwNDgwMCwibXVsY2giOjF9LHsiYmVycnkiOjM3LCJhZ2UiOjQzMjAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOjM3LCJhZ2UiOjQzMjAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOjM3LCJhZ2UiOjQzMjAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOjM3LCJhZ2UiOjQzMjAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOjM3LCJhZ2UiOjQzMjAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOjY4LCJhZ2UiOjYwNDgwMCwibXVsY2giOjF9LHsiYmVycnkiOjUxLCJhZ2UiOjEyOTYwMCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo2OCwiYWdlIjo2MDQ4MDAsIm11bGNoIjoxfSx7ImJlcnJ5IjozNywiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1MSwiYWdlIjoxMjk2MDAsIm11bGNoIjotMX0seyJiZXJyeSI6MzcsImFnZSI6NDMyMDAsIm11bGNoIjotMX0seyJiZXJyeSI6MzcsImFnZSI6NDMyMDAsIm11bGNoIjotMX0seyJiZXJyeSI6MzcsImFnZSI6NDMyMDAsIm11bGNoIjotMX0seyJiZXJyeSI6MzcsImFnZSI6NDMyMDAsIm11bGNoIjotMX0seyJiZXJyeSI6NjQsImFnZSI6NDMyMDAwLCJtdWxjaCI6LTF9XX19fQ==`
:::

::: table-mutations
| :----: | :----: | :----: | :----: | :----: |
| [[File:Passho.png\|32px]] [[Berries/Passho]] | [[File:Passho.png\|32px]] [[Berries/Passho]] | [[File:Passho.png\|32px]] [[Berries/Passho]] | [[File:Passho.png\|32px]] [[Berries/Passho]] | [[File:Passho.png\|32px]] [[Berries/Passho]] | |
| [[File:Enigma.png\|32px]] [[Berries/Enigma]] {.rich} | [[File:Babiri.png\|32px]] [[Berries/Babiri]] | [[File:Enigma.png\|32px]] [[Berries/Enigma]] {.rich} | [[File:Babiri.png\|32px]] [[Berries/Babiri]] | [[File:Enigma.png\|32px]] [[Berries/Enigma]] {.rich} | |
| [[File:Passho.png\|32px]] [[Berries/Passho]] | [[File:Passho.png\|32px]] [[Berries/Passho]] | [[File:Passho.png\|32px]] [[Berries/Passho]] | [[File:Passho.png\|32px]] [[Berries/Passho]] | [[File:Passho.png\|32px]] [[Berries/Passho]] | |
| [[File:Enigma.png\|32px]] [[Berries/Enigma]] {.rich} | [[File:Babiri.png\|32px]] [[Berries/Babiri]] | [[File:Enigma.png\|32px]] [[Berries/Enigma]] {.rich} | [[File:Passho.png\|32px]] [[Berries/Passho]] | [[File:Babiri.png\|32px]] [[Berries/Babiri]] | |
| [[File:Passho.png\|32px]] [[Berries/Passho]] | [[File:Passho.png\|32px]] [[Berries/Passho]] | [[File:Passho.png\|32px]] [[Berries/Passho]] | [[File:Passho.png\|32px]] [[Berries/Passho]] | [[File:Petaya.png\|32px]] [[Berries/Petaya]] | |
:::