## Mutation Strategy {#mutation}

### Possible Planting Formations {#planting}

Haban has a chance of mutating when [[Berries/Occa]], [[Berries/Passho]], [[Berries/Rindo]], and [[Berries/Wacan]] are touching an empty plot. You can fill your farm in the following way to obtain Haban Berries. Purple squares indicate where mutations can occur.

**Base Formation**
::: table-mutations
| :----: | :----: | :----: |
| [[File:Passho.png\|32px]] [[Berries/Passho]] | {.mutation} | | |
| [[File:Wacan.png\|32px]] [[Berries/Wacan]] | {.mutation} | [[File:Occa.png\|32px]] [[Berries/Occa]]  | |
| [[File:Rindo.png\|32px]] [[Berries/Rindo]] | {.mutation} | | |
:::

**Optimized Formation**
:::collapsed  Haban Mutation - Farm Simulator Code
Copy & paste the line below into the [[Farm Simulator]]'s Import from Text.

`eyJzYXZlIjp7ImZhcm1pbmciOnsicGxvdExpc3QiOlt7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6LTF9LHsiYmVycnkiOjM5LCJhZ2UiOjU3NjAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOjM4LCJhZ2UiOjM2MDAsIm11bGNoIjotMX0seyJiZXJyeSI6MzcsImFnZSI6NDMyMDAsIm11bGNoIjotMX0seyJiZXJyeSI6LTEsImFnZSI6MCwibXVsY2giOi0xfSx7ImJlcnJ5IjozNywiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6Mn0seyJiZXJyeSI6LTEsImFnZSI6MCwibXVsY2giOjJ9LHsiYmVycnkiOi0xLCJhZ2UiOjAsIm11bGNoIjoyfSx7ImJlcnJ5IjozOSwiYWdlIjo1NzYwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjozOCwiYWdlIjozNjAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOi0xLCJhZ2UiOjAsIm11bGNoIjoyfSx7ImJlcnJ5IjozNiwiYWdlIjo0MzkyMCwibXVsY2giOi0xfSx7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6Mn0seyJiZXJyeSI6MzgsImFnZSI6MzYwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjozOSwiYWdlIjo1NzYwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6Mn0seyJiZXJyeSI6LTEsImFnZSI6MCwibXVsY2giOjJ9LHsiYmVycnkiOi0xLCJhZ2UiOjAsIm11bGNoIjoyfSx7ImJlcnJ5IjozNywiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6LTF9LHsiYmVycnkiOjM3LCJhZ2UiOjQzMjAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOjM4LCJhZ2UiOjM2MDAsIm11bGNoIjotMX0seyJiZXJyeSI6MzksImFnZSI6NTc2MDAsIm11bGNoIjotMX0seyJiZXJyeSI6LTEsImFnZSI6MCwibXVsY2giOi0xfV19fX0=`
:::
Since [[Berries/Occa]] is a parasite berry and can take over other berries, it's recommended to use this specific formation to prevent that from happening:
::: table-mutations
| :----: | :----: | :----: | :----: | :----: |
| | [[File:Rindo.png\|32px]] [[Berries/Rindo]] | [[File:Wacan.png\|32px]] [[Berries/Wacan]] | [[File:Passho.png\|32px]] [[Berries/Passho]] | | |
| [[File:Passho.png\|32px]] [[Berries/Passho]] | {.mutation} | {.mutation} | {.mutation} | [[File:Rindo.png\|32px]] [[Berries/Rindo]] | |
| [[File:Wacan.png\|32px]] [[Berries/Wacan]] | {.mutation} | [[File:Occa.png\|32px]] [[Berries/Occa]]  | {.mutation} | [[File:Wacan.png\|32px]] [[Berries/Wacan]] | |
| [[File:Rindo.png\|32px]] [[Berries/Rindo]] | {.mutation} | {.mutation} | {.mutation} | [[File:Passho.png\|32px]] [[Berries/Passho]] | |
|  | [[File:Passho.png\|32px]] [[Berries/Passho]] | [[File:Wacan.png\|32px]] [[Berries/Wacan]] | [[File:Rindo.png\|32px]] [[Berries/Rindo]] | | |
:::

**Timing Table**
All planting times refer to the "Until Ripe" value of the first Berry planted.
| Berry                                         | Planting Time | Planting Time (Mulch or Sprayduck)    | Planting Time (Mulch and Sprayduck)   |
| :---:                                         | :---:         | :---:                                 | :---:                                 |
| [[File:Rindo.png\|32px]] [[Berries/Rindo]]    | `Planted First` | | |
| [[File:Occa.png\|32px]] [[Berries/Occa]]      | 06:06:00      | 04:04:00                              | 02:42:40                              |
| [[File:Passho.png\|32px]] [[Berries/Passho]]  | 06:00:00      | 04:00:00                              | 02:40:00                              |
| [[File:Wacan.png\|32px]] [[Berries/Wacan]]    | 00:30:00      | 00:20:00                              | 00:13:20                              |

#### Mutations
Haban Berries can be used to mutate the following Berries.

| Used In                                       | Other Requirements |
| :---:                                         | :---: |
| [[File:Petaya.png\|32px]] [[Berries/Petaya]]  | [[File:Occa.png\|32px]] [[Berries/Occa]] [[File:Passho.png\|32px]] [[Berries/Passho]] [[File:Wacan.png\|32px]] [[Berries/Wacan]] [[File:Rindo.png\|32px]] [[Berries/Rindo]] [[File:Yache.png\|32px]] [[Berries/Yache]] [[File:Chople.png\|32px]] [[Berries/Chople]] [[File:Kebia.png\|32px]] [[Berries/Kebia]] [[File:Shuca.png\|32px]] [[Berries/Shuca]] [[File:Coba.png\|32px]] [[Berries/Coba]] [[File:Payapa.png\|32px]] [[Berries/Payapa]] [[File:Tanga.png\|32px]] [[Berries/Tanga]] [[File:Charti.png\|32px]] [[Berries/Charti]] [[File:Kasib.png\|32px]] [[Berries/Kasib]] [[File:Colbur.png\|32px]] [[Berries/Colbur]] [[File:Babiri.png\|32px]] [[Berries/Babiri]] [[File:Chilan.png\|32px]] [[Berries/Chilan]] [[File:Roseli.png\|32px]] [[Berries/Roseli]] |