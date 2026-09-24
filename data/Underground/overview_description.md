
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

- Chaos Cavern: Contains all possible items except those from a Special mine
- Treasure Trove: Contains only treasures sellable for [[Diamonds]]
- Arceus' Forge: Contains only gem plate treasures sellable for gems
- Fractured Quarry: Contains only shard treasures
- Ancient Excavation: Contains only Fossils and fossil pieces
- Evolution Nexus: Contains only Evolution items

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
- Increases at levels: 3, 9, 15, 21, 27
- Maximum minimum: 6

Maximum:
- Starts at 3
- Increases at levels: 6, 12, 18, 24, 30
- Maximum: 8.

## Tools{#tool}

There are five different tools available for use in the mines. Each tool serves a distinct purpose and operates independently of the others.

### Discharge Battery
The Battery is a special tool that charges based on actions taken in the Mine.  Each second that a tool is used by a player or Helper, the Battery will gain one charge.  Discharging the Battery removes a large number of tiles in the mine based on a randomly chosen pattern determined by the Cell Battery's level when used.  Equipping the [[Oak Items/Cell Battery]] cuts the number of charges needed from 60 to 30.

#### Patterns
All possible discharge patterns and their odds of occurrence based on your Underground Level.
Tier | Name | Weight | Lv 0-4 | Lv.5-9 | Lv.10-14 | Lv.15-19 | Lv.20-29 | Lv.30+
:---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---:
0 | Eruption | 1 | 100% | 37% | 8.8% | 3.8% | 2.3% | 1.2%
1 | Hydro Cannon | 1.7 |  | 63% | 15.0% | 6.5% | 4.0% | 2.0%
2 | Dragon Breath | 3.4 |  |  | 25.4% | 11.1% | 6.8% | 3.4%
2 | Leaf Tornado | 3.4 |  |  | 25.4% | 11.1% | 6.8% | 3.4%
2 | Overdrive | 3.4 |  |  | 25.4% | 11.1% | 6.8% | 3.4%
3 | 10m Volt Thunderbolt | 5.1 |  |  |  | 18.8% | 11.5% | 5.8%
3 | Draco Meteor | 5.1 |  |  |  | 18.8% | 11.5% | 5.8%
3 | Heart Stamp | 5.1 |  |  |  | 18.8% | 11.5% | 5.8%
4 | Pokéball | 6.8 |  |  |  |  | 19.5% | 9.8%
4 | Surf | 6.8 |  |  |  |  | 19.5% | 9.8%
5 | Explosion | 8.5 |  |  |  |  |  | 16.6%
5 | Fleur Cannon | 8.5 |  |  |  |  |  | 16.6%
5 | Hyper Beam | 8.5 |  |  |  |  |  | 16.6%

### Durability

The Chisel, Hammer, Bomb and Survey tools each have an individual durability gauge that determines how many times it can be used before needing to recharge. Tools consume durability at different rates depending on their power or area of effect. They regenerate durability over time, and the repair rate improves as your Underground Level increases. When your Underground Level reaches a certain point the repair rate becomes 0 seconds for Chisel (Lv.22), Hammer(Lv.23) and Bomb(Lv.24). In practice, all three become infinite 1 level earlier due to recharging faster than the player can click.  Survey and Discharge always have recharge time regardless of level.

### Tool Overview
| Tool | Action | Base Repair Rate | Repair amount per Repair Rate | Damage per Use | Infinite Use
|---|---|---|---|---|---|
| [[File:Chisel.png]] Chisel | Mines 2 layers on the selected spot. | 20 seconds | 2% | 2% | Lv.22 |
| [[File:Hammer.png]] Hammer | Mines 1 layer on all 9 tiles in a 3x3 grid. | 20 seconds | 2% | 6% | Lv.23 |
| [[File:Bomb.png]] Bomb | Mines 2 layers on each of 10 random tiles (including cleared). The number of tiles can be increased by equipping the [[Oak_Items/Explosive_Charge]] Oak Item. Items collected by the Bomb have a 87.5% chance of being destroyed with no EXP gain. | 20 seconds | 2% | 18% | Lv.24 |
| [[File:Survey.png]] Survey| Indicates a 9x9 grid where at least one tile contains an item. The grid shrinks by two tiles in each direction every 15 levels. | 900 seconds | 100% | 100% | Never |
| [[File:Cell_Battery.png\|40px]] Discharge| Clears a large number of tiles with a randomly selected pattern based on [[Oak Items/Cell Battery]]'s level. | 30sec / 60sec | None | 100% | Never |

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

:::collapsed Table of experience per level
|Level|Experience|Total|
|--:|--:|--:|
|1 | 300|300|
|2 | 345|645|
|3 | 397|1,042|
|4 | 457|1,499|
|5 | 524|2,023|
|6 | 604|2,627|
|7 | 694|3,321|
|8 | 798|4,119|
|9 | 917|5,036|
|10 | 1,056|6,092|
|11 | 1,213|7,305|
|12 | 1,396|8,701|
|13 | 1,605|10,306|
|14 | 1,846|12,152|
|15 | 2,123|14,275|
|16 | 2,441|16,716|
|17 | 2,807|19,523|
|18 | 3,228|22,751|
|19 | 3,713|26,464|
|20 | 4,270|30,734|
|21 | 4,910|35,644|
|22 | 5,646|41,290|
|23 | 6,493|47,783|
|24 | 7,468|55,251|
|25 | 8,587|63,838|
|26 | 9,876|73,714|
|27 | 11,357|85,071|
|28 | 13,061|98,132|
|29 | 15,019|113,151|
|30 | 17,273|130,424|
|31 | 19,864|150,288|
|32 | 22,843|173,131|
|33 | 26,269|199,400|
|34 | 30,210|229,610|
|35 | 34,742|264,352|
|36 | 39,952|304,304|
|37 | 45,946|350,250|
|38 | 52,837|403,087|
|39 | 60,763|463,850|
|40 | 69,878|533,728|
|41 | 80,359|614,087|
|42 | 92,413|706,500|
|43 | 106,274|812,774|
|44 | 122,217|934,991|
|45 | 140,548|1,075,539|
|46 | 161,631|1,237,170|
|47 | 185,875|1,423,045|
|48 | 213,757|1,636,802|
|49 | 245,820|1,882,622|
|50 | 282,693|2,165,315|
:::


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
| 24 | 55,251 | **Infinite** | 5 | 7 | 13m 00s | 7x7 |
| 27 | 85,071 | Infinite | **6** | 7 | 11m 30s | 7x7 |
| 30 | 130,424 | Infinite | 6 | **8** | 10m 00s | 5x5 |
| 50 | 2,165,315 | Infinite | 6 | 8 | **00m 00s** | 3x3 |
| 60 | 8,765,998 | Infinite | 6 | 8 | 00m 00s | **1x1** |