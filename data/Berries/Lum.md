## Mutation Strategy {#mutation}

### Possible Planting Formations {#planting}

Lum has a chance of mutating when all Generation 1 Berries (#1 Cheri to #8 Sitrus) are touching an empty plot. You can fill your farm in the following way to obtain Lum Berries. Purple squares indicate where mutations can occur.  This is a far more difficult mutation than all the previous berries up to this point, compounded by six other mutations affecting every plot with higher odds than the desired Lum and short lifespans on the eight berries required for its formation.  After mutating, surround the new Lum with [[Berries/Passho]] Berries and apply [[Items/Rich Mulch]] to increase yield, or only one Berry will be harvested.

**Base Formation**
*(Note: You will want to have a lot of [[File:Berry_Shovel.png\|32px]] [[Items/Berry Shovel]] and [[File:Freeze_Mulch.png\|32px]][[Items/Freeze Mulch]] on hand for this. This formation can easily mutate all berries #9 [[File:Persim.png\|32px]] [[Berries/Persim]] to #14 [[File:Pinap.png\|32px]] [[Berries/Pinap]] alongside [[File:Lum.png\|32px]] Lum, so make sure you have those so you can clear the plots for your Lum Berries.)*
::: table-mutations
| :----: | :----: | :----: |
| [[File:Sitrus.png\|32px]] [[Berries/Sitrus]] | [[File:Oran.png\|32px]] [[Berries/Oran]] | [[File:Aspear.png\|32px]] [[Berries/Aspear]] | |
| [[File:Leppa.png\|32px]] [[Berries/Leppa]] | {.mutation} | [[File:Pecha.png\|32px]] [[Berries/Pecha]] | |
| [[File:Rawst.png\|32px]] [[Berries/Rawst]] | [[File:Chesto.png\|32px]] [[Berries/Chesto]] | [[File:Cheri.png\|32px]] [[Berries/Cheri]] | |
:::

**Optimized Formation**
Each plot has a 0.15% (0.375% with Lv.5 [[Items/Sprayduck]]) chance for mutating Lum, and a 3.75% to 5% for the other six possible mutations (5.63% to 7.5% with Lv. 5 Sprayduck).
:::collapsed Lum Mutation - Farm Simulator Code
Copy & paste the line below into the [[Farm Simulator]]'s Import from Text.

eyJzYXZlIjp7ImZhcm1pbmciOnsicGxvdExpc3QiOlt7ImJlcnJ5Ijo3LCJhZ2UiOjEyMDAsIm11bGNoIjo0fSx7ImJlcnJ5Ijo2LCJhZ2UiOjYwMCwibXVsY2giOjR9LHsiYmVycnkiOjQsImFnZSI6MjQwLCJtdWxjaCI6NH0seyJiZXJyeSI6NiwiYWdlIjo2MDAsIm11bGNoIjo0fSx7ImJlcnJ5Ijo3LCJhZ2UiOjEyMDAsIm11bGNoIjo0fSx7ImJlcnJ5Ijo1LCJhZ2UiOjQ4MCwibXVsY2giOjR9LHsiYmVycnkiOi0xLCJhZ2UiOjAsIm11bGNoIjoyfSx7ImJlcnJ5IjoyLCJhZ2UiOjEyMCwibXVsY2giOjR9LHsiYmVycnkiOi0xLCJhZ2UiOjAsIm11bGNoIjoyfSx7ImJlcnJ5Ijo1LCJhZ2UiOjQ4MCwibXVsY2giOjR9LHsiYmVycnkiOjMsImFnZSI6MTYwLCJtdWxjaCI6NH0seyJiZXJyeSI6MSwiYWdlIjo4MCwibXVsY2giOjR9LHsiYmVycnkiOjAsImFnZSI6NjAsIm11bGNoIjo0fSx7ImJlcnJ5IjoxLCJhZ2UiOjgwLCJtdWxjaCI6NH0seyJiZXJyeSI6MywiYWdlIjoxNjAsIm11bGNoIjo0fSx7ImJlcnJ5Ijo1LCJhZ2UiOjQ4MCwibXVsY2giOjR9LHsiYmVycnkiOi0xLCJhZ2UiOjAsIm11bGNoIjoyfSx7ImJlcnJ5IjoyLCJhZ2UiOjEyMCwibXVsY2giOjR9LHsiYmVycnkiOi0xLCJhZ2UiOjAsIm11bGNoIjoyfSx7ImJlcnJ5Ijo1LCJhZ2UiOjQ4MCwibXVsY2giOjR9LHsiYmVycnkiOjcsImFnZSI6MTIwMCwibXVsY2giOjR9LHsiYmVycnkiOjYsImFnZSI6NjAwLCJtdWxjaCI6NH0seyJiZXJyeSI6NCwiYWdlIjoyNDAsIm11bGNoIjo0fSx7ImJlcnJ5Ijo2LCJhZ2UiOjYwMCwibXVsY2giOjR9LHsiYmVycnkiOjcsImFnZSI6MTIwMCwibXVsY2giOjR9XX19fQ==
:::

::: table-mutations
| :----: | :----: | :----: | :----: | :----: |
| [[File:Sitrus.png\|32px]] [[Berries/Sitrus]] {.freeze} | [[File:Oran.png\|32px]] [[Berries/Oran]] {.freeze} | [[File:Aspear.png\|32px]] [[Berries/Aspear]] {.freeze} | [[File:Oran.png\|32px]] [[Berries/Oran]] {.freeze} | [[File:Sitrus.png\|32px]] [[Berries/Sitrus]] {.freeze} | |
| [[File:Leppa.png\|32px]] [[Berries/Leppa]] {.freeze} | {.mutation} | [[File:Pecha.png\|32px]] [[Berries/Pecha]] {.freeze} | {.mutation} | [[File:Leppa.png\|32px]] [[Berries/Leppa]] {.freeze} | |
| [[File:Rawst.png\|32px]] [[Berries/Rawst]] {.freeze} | [[File:Chesto.png\|32px]] [[Berries/Chesto]] {.freeze} | [[File:Cheri.png\|32px]] [[Berries/Cheri]] {.freeze} | [[File:Chesto.png\|32px]] [[Berries/Chesto]] {.freeze} | [[File:Rawst.png\|32px]] [[Berries/Rawst]] {.freeze} | |
| [[File:Leppa.png\|32px]] [[Berries/Leppa]] {.freeze} | {.mutation} | [[File:Pecha.png\|32px]] [[Berries/Pecha]] {.freeze} | {.mutation} | [[File:Leppa.png\|32px]] [[Berries/Leppa]] {.freeze} | |
| [[File:Sitrus.png\|32px]] [[Berries/Sitrus]] {.freeze} | [[File:Oran.png\|32px]] [[Berries/Oran]] {.freeze} | [[File:Aspear.png\|32px]] [[Berries/Aspear]] {.freeze} | [[File:Oran.png\|32px]] [[Berries/Oran]] {.freeze} | [[File:Sitrus.png\|32px]] [[Berries/Sitrus]] {.freeze} | |
:::

**Timing Table**
All planting times refer to the "Until Ripe" value of the first Berry planted.
| Berry                                         | Planting Time | Planting Time (Mulch or Sprayduck)    | Planting Time (Mulch and Sprayduck)   |
| :---:                                         | :---:         | :---:                                 | :---:                                 |
| [[File:Sitrus.png\|32px]] [[Berries/Sitrus]]  | `Planted First` | | |
| [[File:Oran.png\|32px]] [[Berries/Oran]]      | 00:05:00      | 00:03:20                              | 00:02:13                                 |
| [[File:Leppa.png\|32px]] [[Berries/Leppa]]    | 00:04:00      | 00:02:40                              | 00:01:46                                 |
| [[File:Aspear.png\|32px]] [[Berries/Aspear]]  | 00:02:00      | 00:01:20                              | 00:00:53                                 |
| [[File:Rawst.png\|32px]] [[Berries/Rawst]]    | 00:01:20      | 00:00:53                              | 00:00:35                                 |
| [[File:Pecha.png\|32px]] [[Berries/Pecha]]    | 00:01:00      | 00:00:40                              | 00:00:26                                 |
| [[File:Chesto.png\|32px]] [[Berries/Chesto]]  | 00:00:40      | 00:00:26                              | 00:00:17                                 |
| [[File:Cheri.png\|32px]] [[Berries/Cheri]]    | 00:00:30      | 00:00:20                              | 00:00:13                                 |

### Acquisition
Lum Berries can be obtained from the following dungeons.

| Location	                        | Region | Tier	    | Requirement   |
| :---:                             | :---:  | :---:     | :---:         |
| [[Dungeons/Berry Forest]]	        | Kanto (Sevii Islands 123)  | Mythic  	| 400 Clears    |
| [[Dungeons/Pattern Bush]]	        | Kanto (Sevii Islands 4567)  | Mythic  	| 150 Clears    |
| [[Dungeons/Radio Tower]]	        | Johto  | Mythic  	| 250 Clears    |
| [[Dungeons/Cave of Origin]]       | Hoenn  | Mythic  	| 150 Clears    |
| [[Dungeons/Relic Cave]] | Hoenn (Orre)  | Mythic | N/A |
| [[Dungeons/Under Colosseum]] | Hoenn (Orre)  | Legendary | 50 Clears |
| [[Dungeons/Moor of Icirrus]]       | Unova  | Mythic  	| 200 Clears    |
| [[Dungeons/Pinwheel Forest]]      | Unova  | Mythic  	| 200 Clears    |
| [[Dungeons/Thrifty Megamart]]     | Alola  | Mythic  	| 100 Clears    |

#### Dropped by
| :---|
| [[Pokemon/Mew]] |
| [[Pokemon/Celebi]] |
| [[Pokemon/Flowering Celebi]] |
| [[Pokemon/Grinch Celebi]] |
| [[Pokemon/Shaymin (Land)]] |
Base chance of dropping: 1 in 512 (Routes)
Base chance of dropping: 1 in 85.3 (Dungeon Boss)