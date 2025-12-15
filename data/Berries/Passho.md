## Mutation Strategy {#mutation}

### Possible Planting Formations {#planting}

Passho has a chance of mutating when [[Berries/Chesto]], [[Berries/Oran]], [[Berries/Kelpsy]], and [[Berries/Coba]] are touching an empty plot. You can fill your farm in the following way to obtain Passho Berries. Purple squares indicate where mutations can occur.  Use [[Items/Freeze Mulch]] on the Chesto and Oran to avoid having to replant them while waiting for the mutation.
**WARNING:** When a Passho berry is not surrounded by at least one other berry, there is a chance it may mutate into a [[Berries/Yache]]. On obtaining your first Passho berry, plant a berry (preferably one that lives at least six hours) next to it to avoid unintentionally mutating the Passho and then needing to reobtain it.

**Base Formation**
::: table-mutations
| :----: | :----: | :----: |
| [[File:Chesto.png\|32px]] [[Berries/Chesto]] | {.mutation} | [[File:Oran.png\|32px]] [[Berries/Oran]] | |
| [[File:Kelpsy.png\|32px]] [[Berries/Kelpsy]] | {.mutation} | [[File:Coba.png\|32px]] [[Berries/Coba]] | |
:::

**Optimized Formation**
:::collapsed  Passho Mutation - Farm Simulator Code
Copy & paste the line below into the [[Farm Simulator]]'s Import from Text.

`eyJzYXZlIjp7ImZhcm1pbmciOnsicGxvdExpc3QiOlt7ImJlcnJ5IjoxLCJhZ2UiOjgwLCJtdWxjaCI6NH0seyJiZXJyeSI6LTEsImFnZSI6MCwibXVsY2giOjJ9LHsiYmVycnkiOjYsImFnZSI6NjAwLCJtdWxjaCI6NH0seyJiZXJyeSI6LTEsImFnZSI6MCwibXVsY2giOjJ9LHsiYmVycnkiOjEsImFnZSI6ODAsIm11bGNoIjo0fSx7ImJlcnJ5IjoyMSwiYWdlIjoxMjAwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6Mn0seyJiZXJyeSI6NDQsImFnZSI6Mzk2MDAsIm11bGNoIjotMX0seyJiZXJyeSI6LTEsImFnZSI6MCwibXVsY2giOjJ9LHsiYmVycnkiOjIxLCJhZ2UiOjEyMDAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOi0xLCJhZ2UiOjAsIm11bGNoIjotMX0seyJiZXJyeSI6LTEsImFnZSI6MCwibXVsY2giOjJ9LHsiYmVycnkiOi0xLCJhZ2UiOjAsIm11bGNoIjotMX0seyJiZXJyeSI6LTEsImFnZSI6MCwibXVsY2giOjJ9LHsiYmVycnkiOi0xLCJhZ2UiOjAsIm11bGNoIjotMX0seyJiZXJyeSI6NiwiYWdlIjo2MDAsIm11bGNoIjo0fSx7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6Mn0seyJiZXJyeSI6MSwiYWdlIjo4MCwibXVsY2giOjR9LHsiYmVycnkiOi0xLCJhZ2UiOjAsIm11bGNoIjoyfSx7ImJlcnJ5Ijo2LCJhZ2UiOjYwMCwibXVsY2giOjR9LHsiYmVycnkiOjQ0LCJhZ2UiOjM5NjAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOi0xLCJhZ2UiOjAsIm11bGNoIjoyfSx7ImJlcnJ5IjoyMSwiYWdlIjoxMjAwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjotMSwiYWdlIjowLCJtdWxjaCI6Mn0seyJiZXJyeSI6NDQsImFnZSI6Mzk2MDAsIm11bGNoIjotMX1dfX19`
:::
::: table-mutations
| :----: | :----: | :----: | :----: | :----: |
| [[File:Chesto.png\|32px]] [[Berries/Chesto]] {.freeze} | {.mutation} | [[File:Oran.png\|32px]] [[Berries/Oran]] {.freeze} | {.mutation} | [[File:Chesto.png\|32px]] [[Berries/Chesto]] {.freeze} | |
| [[File:Kelpsy.png\|32px]] [[Berries/Kelpsy]] | {.mutation} | [[File:Coba.png\|32px]] [[Berries/Coba]] | {.mutation} | [[File:Kelpsy.png\|32px]] [[Berries/Kelpsy]] | |
| | {.mutation} | | {.mutation} | | |
| [[File:Oran.png\|32px]] [[Berries/Oran]] {.freeze} | {.mutation} | [[File:Chesto.png\|32px]] [[Berries/Chesto]] {.freeze} | {.mutation} | [[File:Oran.png\|32px]] [[Berries/Oran]] {.freeze} | |
| [[File:Coba.png\|32px]] [[Berries/Coba]] | {.mutation} | [[File:Kelpsy.png\|32px]] [[Berries/Kelpsy]] | {.mutation} | [[File:Coba.png\|32px]] [[Berries/Coba]] | |
:::

**Timing Table**
All planting times refer to the "Until Ripe" value of the first Berry planted.
| Berry                                         | Planting Time | Planting Time (Mulch or Sprayduck)    | Planting Time (Mulch and Sprayduck)   |
| :---:                                         | :---:         | :---:                                 | :---:                                 |
| [[File:Coba.png\|32px]] [[Berries/Coba]]      | `Planted First` | | |
| [[File:Kelpsy.png\|32px]] [[Berries/Kelpsy]]  | 01:40:00      | 01:06:40                              | 00:44:27                              |
| [[File:Oran.png\|32px]] [[Berries/Oran]]      | 00:05:00      | 00:03:20                              | 00:02:13                                |
| [[File:Chesto.png\|32px]] [[Berries/Chesto]]  | 00:00:40      | 00:00:27                              | 00:00:17                               |

#### Mutations
Passho Berries can mutate into the following Berries.

| Used In                                       | Other Requirements |
| :---:                                         | :---: |
| [[File:Yache.png\|32px]] [[Berries/Yache]]    | `N/A` |
| [[File:Haban.png\|32px]] [[Berries/Haban]]    | [[File:Occa.png\|32px]] [[Berries/Occa]] [[File:Wacan.png\|32px]] [[Berries/Wacan]] [[File:Rindo.png\|32px]] [[Berries/Rindo]] |
| [[File:Liechi.png\|32px]] [[Berries/Liechi]]  | `N/A` |
| [[File:Petaya.png\|32px]] [[Berries/Petaya]]  | [[File:Occa.png\|32px]] [[Berries/Occa]] [[File:Wacan.png\|32px]] [[Berries/Wacan]] [[File:Rindo.png\|32px]] [[Berries/Rindo]] [[File:Yache.png\|32px]] [[Berries/Yache]] [[File:Chople.png\|32px]] [[Berries/Chople]] [[File:Kebia.png\|32px]] [[Berries/Kebia]] [[File:Shuca.png\|32px]] [[Berries/Shuca]] [[File:Coba.png\|32px]] [[Berries/Coba]] [[File:Payapa.png\|32px]] [[Berries/Payapa]] [[File:Tanga.png\|32px]] [[Berries/Tanga]] [[File:Charti.png\|32px]] [[Berries/Charti]] [[File:Kasib.png\|32px]] [[Berries/Kasib]] [[File:Haban.png\|32px]] [[Berries/Haban]] [[File:Colbur.png\|32px]] [[Berries/Colbur]] [[File:Babiri.png\|32px]] [[Berries/Babiri]] [[File:Chilan.png\|32px]] [[Berries/Chilan]] [[File:Roseli.png\|32px]] [[Berries/Roseli]] |