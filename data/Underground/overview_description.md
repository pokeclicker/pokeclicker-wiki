Jump to:
* [Mines](#mine)
* [Discovery Time](#discovery)
* [Tools](#tool)
* [Trading](#trade)
* [Helpers](#!Underground_Helpers)
* [Levelling](#level)
* [Upgrades](#upgrade)

The **Underground** is a special location in [[Regions/Kanto]] where players can mine for various treasures. These include:
- Items that can be sold for [[Diamonds]]
- Plates that can be sold for [[Gems]]
- Shards, which are used for various trades
- Fossil and Fossil Pieces, which can be revived into new Pokémon
- Evolution Stones for evolving certain Pokémon
- Special Items such as [Mega Stones](/#!Mega%20Pokémon/) or [[Items/Palaeontologist_Token]]

The Underground is unlocked upon buying the [Explorer Kit](#!Key_Items) in [[Towns/Cinnabar Island]] for 5,000 Quest Points [[File:questPoint.svg\|20px]].

Once you've obtained the Explorer Kit, you can enter the Underground by:
- Clicking its location on the map on [[Routes/Kanto Route 14]]
- Using the [U] Shortcut
- Opening it via a dedicated tab on the main page. *(You can toggle these options in the settings.)*

[[Underground Helpers]] are a form of automation that assist with item collection in the Underground.  There are three [[Oak Items]] that provide beneficial effects while exploring the Underground - [[Oak Items/Cell Battery]], [[Oak Items/Treasure Scanner]] and [[Oak Items/Explosive Charge]].

## Mines{#mine}

The Underground features six different mine types, each corresponding to a specific treasure type—except for Special Items, which are handled differently. Additionally, there is a Random Mine that offers a mix of items from the other mine types.

- Random Mine: Contains all possible items except those from a Special mine
- Diamond Mine: Contains only treasures sellable for [[Diamonds]]
- Gem Plate Mine: Contains only gem plate treasures sellable for gems
- Shard Mine: Contains only shard treasures
- Fossil Mine: Contains only Fossils and fossil pieces
- Evolution Item Mine: Contains only Evolution items

Players have two options when starting a new mine:
- if "Find mine" is On, the game automatically searches for the same type of mine as the one just cleared. *This does not skip the discovery time.*
- Select a mine: Any of the six mine types may be chosen.  Random never has any discovery time, while the others do.

#### Special Mines{#special}
When the player - not a helper- discovers a mine, there is a 4% chance for it to become a Special Mine.  Special Mines contain exactly one item which can be an eligible [Mega Stones](/#!Mega%20Pokémon/) or other items such as [[Items/Palaeontologist Token]].  It's possible to get back-to-back Special Mines, though rare.  Helpers have their normal percentage chance to keep items dug up from Special Mines if they collect it.

### Discovery Time{#discovery}

The time required to discover a new mine depends on several factors, primarily the Underground Level.  While waiting for a mine to be found, "Find mine" can be used again to change to a different type but this will reset the discovery time.

- Searching for a non-random mine:
	- Base discovery time: 15 minutes
	- Reduction: -30 seconds for each level above Level 20
- Searching for a random mine:
	- If the current mine is completed or a non-random mine:
		- No discovery time
	- If the current mine is an unfinished random mine:
		- Base time: 15 minutes
		- Reduction: -30 seconds per level above Level 20
		- Further reduced based on the percentage of unmined treasure tiles in the unfinished mine.

### Treasure Amount

Each mine contains a number of treasures that scale with your Underground Level. Both the minimum and maximum number of treasures are inclusive values.

Minimum:
- Starts at 1
- Increases at levels: 3, 9, 6, 15, 21, 27
- Maximum minimum: 6

Maximum:
- Starts at 3
- Increases at levels: 6, 12, 18, 24, 30
- Maximum: 8.

## Tools{#tool}

There are five different tools available for use in the mines. Each tool serves a distinct purpose and operates independently of the others.

### Discharge Battery
The Battery is a special tool that charges based on actions taken in the Mine.  Each second that a tool is used by a player or Helper, the Battery will gain one charge.  Discharging the Battery removes a large number of tiles in the mine based on a randomly chosen pattern determined by the Cell Battery's level when used.  Equipping the [[Oak Item/Cell Battery]] cuts the number of charges needed from 60 to 30.

### Durability

The Chisel, Hammer, Bomb and Survey tools each have an individual durability gauge that determines how many times it can be used before needing to recharge. Tools consume durability at different rates depending on their power or area of effect. They regenerate durability over time, and the repair rate improves as your Underground Level increases. When your Underground Level reaches a certain point the repair rate becomes 0 seconds for Chisel (Lv.22), Hammer(Lv.23) and Bomb(Lv.24). In practice, all three become infinite 1 level earlier due to recharging faster than the player can click.  Survey and Discharge always have recharge time regardless of level.

### Tool Overview
| Tool | Action | Base Repair Rate | Repair amount per Repair Rate | Damage per Use | Infinite Use
|---|---|---|---|---|---|
| [[File:Chisel.png]] Chisel | Mines 2 layers on the selected spot. | 20 seconds | 2% | 2% | Lv.22 |
| [[File:Hammer.png]] Hammer | Mines 1 layer on all 9 tiles in a 3x3 grid. | 20 seconds | 2% | 6% | Lv.23 |
| [[File:Bomb.png]] Bomb | Mines 2 layers on each of 10 random tiles (including cleared). The number of tiles can be increased by equipping the [[Oak_Items/Explosive_Charge]] Oak Item. Items collected by the Bomb have a 87.5% chance of being destroyed with no EXP gain. | 20 seconds | 2% | 18% | Lv.24 |
| [[File:Survey.png]] Survey| Indicates a 9x9 grid where at least one tile contains an item. The grid shrinks by two tiles in each direction every 15 levels. | 900 seconds | 100% | 100% | Never |
| [[File:Cell_Battery.png\|40px]] Discharge| Clears a large number of tiles with a randomly selected pattern based on [[Oak Item/Cell Battery]]'s level. | 30sec / 60sec | None | 100% | Never |

## Helpers
[[Underground Helpers]] can be hired from the Helpers tab in the Underground interface.  They do not charge for their services, but instead keep a percentage of the items they find, with the rest going into the player's Treasures.  Each of the five Helpers has a thematically linked favorite mine and performance statistics.

## Trading{#trade}
You can trade treasures within the same category —such as Plates, Fossils, or Shards— with each other at an exchange rate of 3:1.  Example: 3 Draco Plates can be traded for 1 Pixie Plate, 3 Dome Fossils for 1 Old Amber, etc. Diamond treasures cannot be traded, only sold for [[Diamonds]].  Plates can also be exchanged for [[Gems]], at the rate of 1 plate per 100 Gems of the same type only.  To trade, open the Underground window, go to the Treasures tab, and click on the item to be exchanged.

## Experience and Leveling{#level}

Both the player and the Underground Helper (if hired) gain experience while mining.

- Digging up a treasure will grant 25 Experience.
- Completing a mine will grant an additional 100 experience.
- The non-active party (player or helper) receives 25% of the XP gained by the active one. Hiring a helper does not reduce the experience earned by the player.
- Leveling up improves various aspects of Underground gameplay (see next section).

$$\text{TotalExp}(\text{level}) = \left\lceil 2000 \cdot \left(1.15^{\text{level}} - 1 \right) \right\rceil$$

### Upgrades to the Underground{#upgrade}

As your Underground Level increases, several gameplay elements improve. The system starts at Level 0 and evolves through progression up to Level 60, beyond which no further upgrades are applied.
Upgradeable Stats

- Tool Repair Rate (for non-Survey Tools)
- Survey Tool Size
- Minimum number of treasures per mine
- Maximum number of treasures per mine
-  Discovery Time (for non-random and unfinished random mines)

Below are key milestones where major upgrades are unlocked. At these levels, specific mechanics reach their maximum potential:

| Level | Total Experience Needed | Non-Survey Tool Repair Rate | Minimum Treasures | Maximum Treasures | Mine Discovery Time | Survey Size |
|---|---|---|---|---|---|---|
| 0 | 0 | 2% every 20s | 1 | 3 | 15m 00s | 9x9 |
| 20 | 55,250 | **Infinite** | 4 | 6 | 15m 00s | 7x7 |
| 27 | 85,071 | Infinite | **6** | 7 | 11m 30s | 7x7 |
| 30 | 130,424 | Infinite | 6 | **8** | 10m 00s | 5x5 |
| 50 | 2,165,315 | Infinite | 6 | 8 | **00m 00s** | 3x3 |
| 60 | 8,765,998 | Infinite | 6 | 8 | 00m 00s | **1x1** |