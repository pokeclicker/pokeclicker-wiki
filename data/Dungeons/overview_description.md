#### Jump to:
* [Dungeon Basics](#basics)
	* [Controls](#navigation)
	* [Dungeon Tiles](#tiles)
	* [Encounters](#encounters)
		* [Mimics](#mimic)
	* [Timer](#time)
	* [Multiple Clears](#clearing)
* [Size & Layout](#size)
* [Visibility (Flash)](#flash)
* [Loot Chests](#chest)
* [Regional Debuff](#debuff)
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
|&nbsp; {.bg-dark .opacity-75}    | **Unexplored**   | Dark grey tiles are unexplored. Move onto the tile to uncover it. |
|&nbsp;  | **Explored**   | An empty, explored tile. |
|&nbsp; { .bg-danger}   | **Regular Enemy**| Red tiles indicate wild Pokémon or Trainer encounters. |
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

### Size & Layout{#size}

Dungeons have a minimum size floor of 5x5 and a maximum of 10x10. From Alola onwards, dungeons have two floors: the first one with maximum size (10x10) and a second floor that starts with minimum size (5x5) and that increases with each subsequent region. Galar dungeons, for example, have a first floor that is 10x10 in size and a second floor that is 6x6 in size.
Certain perks are granted to the player after clearing a Dungeon some number of times - these perks make clearing that particular Dungeon easier. When the number of clears reaches a power of ten (10, 100, 1000, etc.), the Dungeon size will shrink by 1 row and 1 column until it reaches the minimum size.

 *For example, a Hoenn dungeon cleared 100 times will now be a 5x5 sized Hoenn Dungeon instead of the base 7x7 sized Hoenn Dungeon.*

 If the dungeon has a second floor, then the second floor will get reduced first. If the second floor is already at minimum size, then the size reduction will remove this floor instead.

 *For example, clearing an Alola dungeon 10 times will remove the second floor.*

 The number of each type of tile decreases with the size of the dungeon. All dungeons will be square. Here is the breakdown of each type of tile based on size: For an NxN dungeon there are:

 **1 Boss Encounter Tile**
**N chest Tiles**
**2\*N+3 Non-Boss Encounter Tiles**
**(N+1)\*(N-4) Empty Tiles**

*Note: The entrance tile counts as an empty tile*

Dungeon Size | Chests | Non-Boss Encounter Tiles | Empty Tiles {.no-data-tables}
:--- | :---: | :---: | ---:
**5x5** | 5 | 13 | 6
**6x6** | 6 | 15 | 14
**7x7** | 7 | 17 | 24
**8x8** | 8 | 19 | 36
**9x9** | 9 | 21 | 50
**10x10** | 10 | 23 | 66

### Flash Ability{#flash}

The Flash ability permanently reveals the contents (Chest, Encounter, Empty) of adjacent unexplored tiles.
There are 3 different levels of flash that unlocks in function of the times the dungeon have been cleared:

Number of Clears | Flash layout {.no-data-tables}
:--- | ---:
**100** | 1 tile top, 1 bottom, 1 left and 1 right
**250** | 1 tile in each direction
**400** | 2 tiles top, 2 bottom, 2 left, 2 right and 1 in diagonal

## Chests{#chest}

When a number of chests equal to a third of the dungeon's size rounded down are opened (for example, 2 chests in a 6x6 dungeon), all chest tiles are revealed. When a number of chests equal to half the dungeon's size rounded up are opened, the entire dungeon is revealed. However, each chest opened will also increase the HP of all encounters in the dungeon by 20%.

### Tier

Dungeon chest loot is classified as belonging to a specific Tier of loot in a Dungeon. The Tier of a loot-able item indicates the Rarity of obtaining that item from a Chest.
Loot is classified into 5 tier types: Common, Rare, Epic, Legendary and Mythic from least rare to most rare.
Additionally, loot items can have weights inside of their tier. Items with a higher weight in a tier have greater odds of dropping than lower weight items in a tier. Loot items have a base weight of 1.
The chances to encounter loot from **Rare tier** and rarer **increases with every clear**, while the chance to encounter **Common tier** items **decreases** up until the player reaches **500 clears**. After that, the chances will not continue increasing / decreasing. The following table only represents the base loot chance, as in, the chances of getting an item with a dungeon at 0 clears. Note that while individual dungeon pages show certain thresholds (0 / 100 / 250 / 500), it doesn't mean that the chance will **only** increase at these specific number of clears!

*Note: Dungeons that lack any items in a particular loot tier have the remaining odds from the non-present tier(s) distributed proportionally among the present tiers*

#### Tier Odds
The chances for each tier are the sum of the chances of all items within said tier.
Tier | 0 clears | 100 clears | 250 clears | 500 clears | Debuffed {.no-data-tables}
:--- | ---: | ---: | ---: | ---: | ---:
[[File:chest-common.png\|40px]] Common | 75% | 72% | 67.5% | 60% | 75%
[[File:chest-rare.png\|40px]] Rare | 20% | 20.99% | 22.475% | 24.95% | 24%
[[File:chest-epic.png\|40px]] Epic | 4% | 5.2% | 7% | 10% | 0.9%
[[File:chest-legendary.png\|40px]] Legendary | 0.99% | 1.59% | 2.49% | 3.99% | 0.099%
[[File:chest-mythic.png\|40px]] Mythic | 0.01% | 0.22% | 0.535% | 1.06% | 0.001%

**Example 1:** Mt. Moon has XClick and Greatball as 2 of its 5 lootable items from Dungeon chests. The XClick is in the **Common** Tier while the Greatball has the **Mythic** Tier. This means that the XClick is much more likely to drop from a chest than a Greatball.

**Example 2:** Mt. Moon has Greatball, Small Restore and Star Piece as 3 of its 5 lootable items from Dungeon chests. All 3 items are in the Mythic tier, but the Greatball Has Weight 2 while the Small Restore and Star Piece have the base weight of 1. This means the Greatball will be twice as likely to be dropped as the other 2 items. In other words, on average when an item looted from Mt. Moon is from the Mythic Tier, 50% of the time it will be a Greatball, 25% of the time it will be a Small Restore, 25% of the time it will be a Star Piece.

### Loot multiplication{#bonusLoot}

Each time a chest is picked, there is a chance of getting the looted item multiple times. The odds depend on the loot tier, and increase by 50% when [[Items/Dowsing Machine]] is equipped.  The final bonus amount of items looted and chance of triggering depends on both the region of the dungeon and the tier of the looted item.

Tier | Base Chance | With Dowsing Machine
--- | --- | ---
|Common | 41.7% | 62.5%
|Rare | 33.3% | 50%
|Epic | 25% | 37.5%
|Legendary | 16.7% | 25%
|Mythic | 8.3% | 12.5%

The number of items one obtains depends on both the Tier of said loot-able item and the Region of the Dungeon the player is in. The Common Tier yields more items, while the Mythic Tier yields fewer. On the other hand, the higher the Region, the more items will be obtained. The formula is:

**Item Yield** = BaseAmount * (1 + Max(1, Round(Max(Tier, 2) / 8 * (Region + 1))))

The **Tier** variable takes a value from 4 (Common) to 0 (Mythic) and **Region** takes a value from 0 (Kanto) to the highest available Region, 7 (Galar).
**BaseAmount** is how many of the item is to be yielded before multiplication, usually 1. This translates to the following table:

Tier | Kanto Yield | Johto Yield | Hoenn Yield | Sinnoh Yield | Unova Yield | Kalos Yield | Alola Yield | Galar Yield
--- | --- | --- | --- | --- | --- | --- | --- | --- |
|Common |2 Items |2 Items |3 Items |3 Items |4 Items |4 Items |5 Items |5 Items
|Rare |2 Items |2 Items |2 Items |3 Items |3 Items |3 Items |4 Items |4 Items
|Epic |2 Items |2 Items |2 Items |2 Items |2 Items |3 Items |3 Items |3 Items
|Legendary |2 Items |2 Items |2 Items |2 Items |2 Items |3 Items |3 Items |3 Items
|Mythic |2 Items |2 Items |2 Items |2 Items |2 Items |3 Items |3 Items |3 Items

### Dungeon Loot Regional Debuff{#debuff}

When the furthest region reached is greater than 2 regions beyond a dungeon's region, all loot of a tier rarity greater than **Rare** (e.g: *Epic, Legendary, Mythic*) has a dramatically diminished drop rate. The below chart displays the relationship between the Highest Region Reached by the player and the Debuff Region. All Dungeons found in the Debuff Region, or in regions accessed prior to the Debuff Region, will have the debuff applied to the loot drop rate of all loot that belongs to one of the specified Tiers.  Items/mimics that cannot be obtained in a non-debuffed location are excluded so their drop rate is unchanged.

#### Regional Loot Debuff Chart

Highest Region Reached	| Debuffed Region(s) {.no-data-tables}
:--- | ---:
Kanto | N/A
Johto | N/A
Hoenn | N/A
Sinnoh | Kanto, Sevii123 (except [[Dungeons/Ruby Path]])
Unova | Johto
Kalos | Hoenn (except [[Dungeons/Near Space]]), Orre1, Sevii4567 + Ruby Path
Alola | Sinnoh
Galar | Unova, Orre2

**Example:** Viridian Forest has four dungeon chest drops. Two loot items, Small Restore and Pokéball, are in Rarity Tiers of a greater rarity than Rare. **Before** the player reaches Sinnoh, the odds of finding these items increases with increasing dungeon clears, and the items will not have the Regional Debuff applied to their drop chances.
**After** the player reaches Sinnoh, only those two loot items would be impacted by the Dungeon Loot Regional Debuff in Viridian Forest. Consequently, those two loot items would become roughly 20x as rare. In general, it is better to go for rare item drops before you are affected by the debuff; however, it is more difficult to clear those early game dungeons early on.

## Dungeon Locations{#list}
