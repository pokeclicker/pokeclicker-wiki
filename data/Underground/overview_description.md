The **Underground** is a special location in [[Kanto]] where players can obtain various treasures. These include:
- Items that can be sold for [[Diamonds]]
- Plates that can be sold for [[Gems]]
- Shards, which are used for various trades
- Fossil and Fossil Pieces, which can be revived into new Pokémon
- Evolution Stones
- Special Items such as [Mega Stones](/#!Mega%20Pokémon/) or an [exclusive Pikachu](/#!Pokémon/Pikachu_(Palaeontologist)).

The Underground is unlocked upon buying the [[Key Items]] Explorer Kit on [[Towns/Cinnabar Island]] for 5,000 Quest Points [[File:questPoint.svg\|20px]].

Once you've obtained the Explorer Kit, you can enter the Underground by:
- Clicking its location on the map on [[Routes/Kanto Route 11]]
- Using the [U] Shortcut or opening it via a dedicated tab on the main page. *(You can toggle these options in the settings.)*

[[Underground Helpers]] are a form of automation that assist with item collection in the Underground.
There are three [[Oak Items]] that provide beneficial effects while exploring the Underground.

## Mines

The Underground features six different mine types, each corresponding to a specific treasure type—except for Special Items, which are handled differently. Additionally, there is a Random Mine that offers a mix of items from the other mine types.
Players have two options when starting a new mine:

- Search for a specific mine: Select a desired treasure type.
- Automatically find a mine of the last completed type. *This does not skip the discovery time.*

When the player - not a helper- is searching for a mine, there is a 4% chance for it to become a Special Mine

### Discovery Time

The time required to discover a new mine depends on several factors, primarily the Underground Level.

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

## Tools

There are four different tools available for use in the mines. Each tool serves a distinct purpose and operates independently of the others.

### Durability

Each tool has an individual durability gauge that determines how many times it can be used before needing to recharge. Tools consume durability at different rates depending on their power or area of effect. Tools regenerate durability over time, and the repair rate improves as your Underground Level increases. When your Underground Level reaches 20, the repair rate becomes 0 seconds, they can be used without limits.


### Tool Overview
| Tool | Action | Base Repair Rate | Repair amount per Repair Rate | Damage per Use |
|---|---|---|---|---|
| [[File:Chisel.png]] Chisel | Mines 2 layers on the selected spot. | 20 seconds | 2% | 2% |
| [[File:Hammer.png]] Hammer | Mines 1 layer on all 9 tiles in a 3x3 grid. | 20 seconds | 2% | 6% |
| [[File:Bomb.png]] Bomb | Mines 2 layers on each of 10 random tiles (including cleared). The number of tiles can be increased by equipping the [[Oak_Items/Explosive_Charge]] Oak Item. | 20 seconds | 2% | 18% |
| [[File:Survey.png]] Survey| Indicates a 9x9 grid where at least one tile contains an item. The grid shrinks by two tiles in each direction every 15 levels. | 900 seconds | 100% | 100% |


## Trading
You can trade treasures within the same category—such as Plates, Fossils, or Shards—with each other. However, Diamond treasures are excluded from trading. Trade 3 items of one type for 1 item of the desired type in the same category.

## Experience and Leveling

Both the player and the Underground Helper (if hired) gain experience while mining.

- Digging up a treasure will grant 25 Experience.
- Completing a mine will grant an additional 100 experience.
- The non-active party (player or helper) receives 25% of the XP gained by the active one. Hiring a helper does not reduce the experience earned by the player.
- Leveling up improves various aspects of Underground gameplay (see next section).

$$\text{TotalExp}(\text{level}) = \left\lceil 2000 \cdot \left(1.15^{\text{level}} - 1 \right) \right\rceil$$

### Upgrades to the Underground

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
| 20 | 30,734 | **Infinite** | 4 | 6 | 15m 00s | 7x7 |
| 27 | 85,071 | Infinite | **6** | 7 | 11m 30s | 7x7 |
| 30 | 130,424 | Infinite | 6 | **8** | 10m 00s | 5x5 |
| 50 | 2,165,315 | Infinite | 6 | 8 | **00m 00s** | 3x3 |
| 60 | 8,765,998 | Infinite | 6 | 8 | 00m 00s | **1x1** |