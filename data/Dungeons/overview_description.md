#### Jump to:
* [Dungeon Basics](#basics)
	* [Controls](#navigation)
	* [Dungeon Tiles](#tiles)
	* [Encounters](#encounters)
		* [Mimics](#mimic)
	* [Timer](#time)
	* [Multiple Clears](#clearing)
* [Map Size and Layout](#size)
	* [Tiles Per Floor](#tilesPerFloor)
	* [Flash Ability](#flash)
* [Chests](#chest)
	* [Loot Odds](#tiers)
	* [Regional Debuff](#debuff)
	* [Bonus Loot](#bonusLoot)
* [Dungeon List](#list)
#### See Also:
* [[Dungeon Guides]]
* [[Dungeon Tokens]]

## Dungeon Basics{#basics}

Dungeons are locations where you can encounter wild Pokémon and Trainers and loot items from chests. Dungeons cost [[Dungeon Tokens]] [[File:dungeonToken.svg|18px]] to enter. Once inside, you have a time limit to explore. To **clear** a dungeon, you must find and defeat the Dungeon Boss within the time limit.

Dungeons become available in the game after you purchase a [Dungeon Ticket](#!Key_Items) in [[Town/Viridian City]].

#### Controls{#navigation}

- **To enter a dungeon**, select the dungeon on the Town Map and click "Start" or press Spacebar. You must be able to pay the Dungeon Token cost.
- **To move to a dungeon tile,** click on the dungeon tile or use the arrow keys or WASD keys. You can only move to adjacent tiles.
- Dungeon tiles with interactions will have a button prompt. **To interact**, click on the button or press Spacebar.

On the dungeon overview, you can click the [[File:encountersInfo/encountersInfo.png|24px]] icon to see what loot can be found in the dungeon.

#### Dungeon Tiles{#tiles}

 Icon {.col-1}| Tile {.col-2}| Description {.no-data-tables}
|:-------:|:-------:|------|
|  {.bg-dark .opacity-75}    | **Unexplored**   | Dark grey tiles are unexplored. Move onto the tile to uncover it. |
|   | **Explored**   | An empty, explored tile. |
|  { .bg-danger}   | **Regular Enemy**| Red tiles indicate wild Pokémon or Trainer encounters. |
| [[File:dungeons/boss.svg\|30px]] {.bg-dark .align-middle} | **Dungeon Boss** | Like regular enemies, the Dungeon Boss can be wild Pokémon or a Trainer, but they will have more HP than a regular enemy. The dungeon boss must be defeated to clear the dungeon. After defeating them, you will automatically exit the dungeon. |
| [[File:chest-common.png\|40px]] {.bg-dark .align-middle} | **Chest** | Contains loot of various rarities or Mimic encounters. Opening a chest will increase the enemy HP of encounters in the dungeon. Opening enough chests will reveal unexplored portions of the dungeon map. |
| [[File:dungeons/ladder.png\|40px]] {.bg-dark .align-middle } | **Ladder** | Allows the player to progress to the next floor of a multi-floor dungeon. Adds 10 seconds to the timer. (Only available in dungeons from Alola onwards) |

#### Encounters{#encounters}
Encounters can have different weights, making some enemies and bosses more likely to appear than others.

**Wild Pokémon** can be captured, and a successful capture will also reward you Dungeon Tokens.
- Pokémon captured in dungeons provide higher base [Effort Value](#!Pokérus/#EV) yields. These modifiers stack with any other multipliers that affect EVs.
- Dungeons encounters benefit from a +15% catch rate when using a [[Items/Dusk Ball]].

**Mimics**{#mimic} are wild Pokémon are hiding as chests, and opening a chest with a Mimic will result in a battle. Mimics will **not** be displayed on the Dungeon location summary card until encountered at least once. Some Pokémon are exclusive to Mimic encounters.

- Mimic Exclusives: @[[Pokemon/Pikachu (Partner Cap)]] @[[Pokemon/Pinkan Pikachu]] @[[Pokemon/Snorlax (Snowman)]] @[[Pokemon/Spiky-eared Pichu]] @[[Pokemon/Flowering Celebi]] @[[Pokemon/Darmanitan (Zen)]] @[[Pokemon/Galarian Darmanitan (Zen)]]

**Trainers** will award you with Dungeon Tokens [[File:dungeonToken.svg|18px]] and Pokédollars [[File:money.svg|18px]] once defeated. Amulet Coin and other items that grant increased amounts of Pokédollars **do not** affect the amount of money that you receive from Dungeon Trainers.
- Defeating non-boss Trainers rewards 4% of the dungeon cost as Dungeon Tokens and 50% of the dungeon cost as Pokédollars.
- Defeating boss Trainers rewards 10% of the dungeon cost as Dungeon Tokens and 100% of the dungeon cost as Pokédollars.

#### Timer{#time}

Dungeons timers are **60 seconds** by default. If the timer expires before you defeat the Dungeon Boss, you are forced to exit the dungeon. The timer does not pause when opening menus and you cannot save dungeon progress. Exiting the game while in a dungeon will forfeit the run.

Ways to increase the timer:
- Having the [[Items/Time Flute]] active
- Using a ladder in a multi-floor dungeon (adds 10 seconds)

#### Multiple Clears{#clearing}
- Clearing a dungeon 10 times will allow you to **hire [[Dungeon Guides]]** to automatically explore the dungeon for you (for a fee).
- Clearing a dungeon 10, 100, 250 and 500 times will **award an [achievement](#!Achievements)**.
- Clearing a dungeon 10, 100, 1000, etc. times (any amount that is a power of ten) will **shrink the dungeon size by 1 permanently**.
- Clearing a dungeon 100, 250, and 400 times will **increase your [Flash Ability](#flash)** for that dungeon, allowing you to see the contents of unexplored tiles.

---
## Map Size and Layout{#size}

Dungeons floors have a **minimum size of 5x5 tiles** and a **maximum size of 10x10 tiles**. Each subsequent region increases the dungeon dimensions by 1 in each direction. Starting from Alola, base dungeons have two floors: a 10x10 first floor and a second floor that starts at 5x5 and increases in size in subsequent regions.

A dungeon's dimensions will **shrink** by 1 when the number of clears reaches a power of ten (at 10, 100, 1000 etc. clears), until it reaches the minimum size. If a dungeon has a second floor, the size of the second floor will be reduced first. If the second floor is already at the minimum size, then the entire floor will be removed and the dungeon will become a single-floor dungeon.

***Example:** A base Alola dungeon has a 10x10 first floor and 5x5 second floor. After clearing it 10 times, it will become a single-floor 10x10 dungeon. After clearing it 100 times, it will become a 9x9 dungeon.*

#### Tiles Per Floor{#tilesPerFloor}

For an $n\times n$ dungeon floor, the number of tiles will be:
- **Empty*** = $(n + 1)(n - 4)$
- **Chests** = $n$
- **Regular Enemies** = $2 * n + 3$
- **Boss Encounters** = $1$

**Including the entrance tile*

Floor Size | Empty Tiles | Chests | Regular Enemies | Bosses {.no-data-tables}
:--- | :---: | :---: | :---: | :---:
**5x5** | 6 | 5 | 13 | 1
**6x6** | 14 | 6 | 15 | 1
**7x7** | 24| 7 | 17 | 1
**8x8** | 36 | 8 | 19 | 1
**9x9** | 50 | 9 | 21 | 1
**10x10** | 66 | 10 | 23 | 1

#### Flash Ability{#flash}

After clearing a dungeon 100 times, you gain the Flash ability, which reveals the contents of adjacent tiles before you explore them. At 250 and 400 clears, your ability improves, revealing even more tiles.

Number of Clears | Tiles Revealed with Flash {.no-data-tables}
:--- | :---
**100 clears** | 1 tile top, 1 bottom, 1 left, 1 right
**250 clears** | 1 tile in each direction
**400 clears** | 2 tiles top, 2 bottom, 2 left, 2 right, 1 diagonally

----

## Chests{#chest}

Chests come in **Common, Rare, Epic, Legendary** and **Mythic** tiers. Dungeon loot always belongs to a specific tier (i.e you can only find Rare-tier loot in a Rare-tier chest). Some chests contain [Mimic](#mimic) encounters.

Opening chests will grant you the loot inside, but it will also increase all enemies' HP by 20%. Opening enough chests will also reveal parts of the map.
- When $DungeonSize/3$ chests are opened, rounded down (e.g. 2 chests in a 6x6 dungeon), all chest tiles are revealed on the map.
- When $DungeonSize/2$ chests are opened, rounded up, the entire dungeon is revealed.


#### Loot Odds{#tiers}
The chance of a specific loot appearing is affected by **tier, weight, number of dungeon clears**, and any **[regional debuff](#debuff)**. Each [dungeon page](#list) lists the odds of obtaining a specific loot.

The chances to encounter Rare or higher-tier chests increases with every clear, while the chance to encounter Common chests decreases up until the player reaches 500 clears. *Note: While individual dungeon pages show loot percentages at thresholds of 0/100/250/500 clears, it doesn't mean that the chance **only** increases at these specific number of clears!*

The following chart shows the base chance of encountering chests of a certain tier. Dungeons that lack chests in a particular tier have the remaining odds from the non-present tier(s) distributed proportionally among the present tiers.

Tier | 0 clears | 100 clears | 250 clears | 500 clears | Debuffed {.no-data-tables}
:--- | --- | --- | --- | --- | ---
[[File:chest-common.png\|40px]] **Common** | 75% | 72% | 67.5% | 60% | 75%
[[File:chest-rare.png\|40px]] **Rare** | 20% | 20.99% | 22.475% | 24.95% | 24%
[[File:chest-epic.png\|40px]] **Epic** | 4% | 5.2% | 7% | 10% | 0.9%
[[File:chest-legendary.png\|40px]] **Legendary** | 0.99% | 1.59% | 2.49% | 3.99% | 0.099%
[[File:chest-mythic.png\|40px]] **Mythic** | 0.01% | 0.22% | 0.535% | 1.06% | 0.001%

***Example:** [[Dungeons/Mt. Moon]] has Great Ball, Small Restore and Star Piece as 3 of its 5 lootable items from Dungeon chests. All 3 items are in the Mythic tier, but the Great Ball has a weight of 2, while the Small Restore and Star Piece have a weight of 1. This means the Great Ball is twice as likely to be dropped as the other 2 items. In other words, on average when looting a Mythic-tier chest from Mt. Moon, 50% of the time it will be a Great Ball, 25% of the time it will be a Small Restore, 25% of the time it will be a Star Piece.*

#### Regional Debuff{#debuff}
When you reach a region that is 3 regions *beyond* a dungeon's region, all Epic, Legendary, and Mythic loot in that dungeon receives a dramatically diminished drop rate. The first time this happens is upon reaching Sinnoh—all Kanto dungeons become debuffed.

**Note:** Items and mimics that cannot be obtained in a non-debuffed location are excluded from debuffs. Certain subregions and dungeons that are unlocked later may be excluded from debuffs until a further region.

Highest Region Reached	| Debuffed Region(s) {.no-data-tables}
:--- | :---
**Kanto** | N/A
**Johto** | N/A
**Hoenn** | N/A
**Sinnoh** | Kanto, Sevii123 (except [[Dungeons/Ruby Path]])
**Unova** | Kanto, Sevii123 (except Ruby Path), Johto
**Kalos** | Kanto, Sevii123, Johto, Hoenn (except [[Dungeons/Near Space]]), Orre1, Sevii4567
**Alola** | Kanto, Sevii123, Johto, Hoenn (except Near Space), Orre1, Sevii4567, Sinnoh
**Galar** | Kanto, Sevii123, Johto, Hoenn (except Near Space), Orre1, Sevii4567, Sinnoh, Unova, Orre2

#### Bonus Loot{#bonusLoot}

Each time a chest is opened, there is a chance to get multiple loot items. The chance of occuring depends on the loot tier and can be increased by 50% by having a [[Items/Dowsing Machine]] active. The amount of bonus loot depends on the region and tier (where Common-tier loot and later regions have higher multipliers).

Tier | Base Chance of Bonus Loot | With Dowsing Machine | Total Loot Gained (Varies by Region)
--- | --- | --- | ---
|Common | 41.7% | 62.5% | 2-5 items
|Rare | 33.3% | 50% | 2-4 items
|Epic | 25% | 37.5% | 2-3 items
|Legendary | 16.7% | 25% | 2-3 items
|Mythic | 8.3% | 12.5% | 2-3 items

The formulas for calculating bonus loot is as follows:

**Bonus Loot Chance** = $0.0833 * (1 + Tier)${.overflow-auto}

**Loot Multiplier** = $1 + \max(1,Round(\frac{\max(Tier, 2)}{8} * (Region + 1)))${.overflow-auto}

$Tier$ is a value from 4 (Common) to 0 (Mythic) and $Region$ is a value from 0 (Kanto) to 7 (Galar).

:::collapsed Show Loot Yield By Region Chart
Tier | Kanto Yield | Johto Yield | Hoenn Yield | Sinnoh Yield | Unova Yield | Kalos Yield | Alola Yield | Galar Yield
--- | --- | --- | --- | --- | --- | --- | --- | --- |
|Common |2 Items |2 Items |3 Items |3 Items |4 Items |4 Items |5 Items |5 Items
|Rare |2 Items |2 Items |2 Items |3 Items |3 Items |3 Items |4 Items |4 Items
|Epic |2 Items |2 Items |2 Items |2 Items |2 Items |3 Items |3 Items |3 Items
|Legendary |2 Items |2 Items |2 Items |2 Items |2 Items |3 Items |3 Items |3 Items
|Mythic |2 Items |2 Items |2 Items |2 Items |2 Items |3 Items |3 Items |3 Items
:::
&nbsp;&nbsp;

---
## Dungeon Locations{#list}
