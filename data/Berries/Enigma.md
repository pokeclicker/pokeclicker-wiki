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
- Disclaimer: [[File:Petaya.png\|32px]] [[Berries/Petaya]] is not needed for this setup.

:::collapsed Enigma Nonsense - Farm Simulator Code
Copy & paste the line below into the [[Farm Simulator]]'s Import from Text.

eyJzYXZlIjp7ImZhcm1pbmciOnsicGxvdExpc3QiOlt7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6LTF9LHsiYmVycnkiOjUxLCJhZ2UiOjEyOTYwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjoxOSwiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6LTF9LHsiYmVycnkiOi0xLCJhZ2UiOjAsIm11bGNoIjotMX0seyJiZXJyeSI6NjQsImFnZSI6NDMyMDAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOjQyLCJhZ2UiOjg2NDAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOi0xLCJhZ2UiOjAsIm11bGNoIjotMX0seyJiZXJyeSI6NDIsImFnZSI6ODY0MDAsIm11bGNoIjotMX0seyJiZXJyeSI6NTEsImFnZSI6MTI5NjAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOi0xLCJhZ2UiOjAsIm11bGNoIjotMX0seyJiZXJyeSI6LTEsImFnZSI6MCwibXVsY2giOi0xfSx7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6Mn0seyJiZXJyeSI6LTEsImFnZSI6MCwibXVsY2giOi0xfSx7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6LTF9LHsiYmVycnkiOjUxLCJhZ2UiOjEyOTYwMCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo0MiwiYWdlIjo4NjQwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6LTF9LHsiYmVycnkiOjQyLCJhZ2UiOjg2NDAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOi0xLCJhZ2UiOjAsIm11bGNoIjotMX0seyJiZXJyeSI6LTEsImFnZSI6MCwibXVsY2giOi0xfSx7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6LTF9LHsiYmVycnkiOjE5LCJhZ2UiOjQzMjAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOjUxLCJhZ2UiOjEyOTYwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjozOCwiYWdlIjozNjAwLCJtdWxjaCI6LTF9XX19fQ
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