Safari are areas available in a few regions where the player may spend Quest Points to try and catch unique Pokémon. To unlock this area the player must first have the Safari Ticket unlocked after beating [[Gyms/Fuchsia City]]'s Gym. The Pokémon can randomly spawn both on water and grass tiles, and also as sprites that can show up in both these environments.

Currently there are 4 Safari Zones:
- [[Towns/Safari Zone]] in Kanto.
- [[Towns/National Park]] in Johto.
- [[Towns/Great Marsh]] in Sinnoh.
- [[Towns/Friend Safari]] in Kalos.

Also, National Park in Johto is unique in the sense that each successful capture in this location will award the player with **Contest Tokens**.

## Actions
Upon entering the Safari, the player receives 30 Safari Balls. The player may exit and reenter the Safari without paying the Quest Point fee again provided they still have Safari balls. As long as the game isn't closed, they only need to pay the fee if they run out of Safari balls and need to reenter to get more.

Once inside the Safari, the player has the option to either catch, throw a rock, bait the Pokémon, or flee. These actions award Safari XP and increase your Safari Level. Capturing a Pokémon has a chance of spawning an item. The actions that can be taken are as follows:

|**Action** | **Effect** {.no-data-tables}
|---|---|
|Ball | Attempt to catch the Pokémon with a Safari Ball. Based on catch chance, this action may fail, after which the Pokémon might flee (based on escape chance), watch carefully / be angry (i.e. do nothing), or resume eating bait. Upon running out of Safari Balls, the player will be forced out of the Safari, requiring them to pay the entrance fee again to re-enter. Throwing a ball awards **10 Safari experience** and succesfully capturing a Pokémon awards **50 Safari experience**. This value is multiplied by **5x** if the Pokémon is a shiny.
|Rock | Toss a rock at the Pokémon, removing "eating" status and making it angry for 2 - 7 turns. When angry, a Pokémon's catch chance and escape chance are both doubled.  Awards **10 Safari experience**.
|Bait (generic) | Gives the Pokémon "eating" status for 2 - 7 turns. No other effects.
|Bait (Razz Berry) | Gives the Pokémon "eating" status for 2 - 8 turns. Divides escape chance by 1.5x for the rest of the encounter unless another type of bait is used.
|Bait (Nanab Berry) | Gives the Pokémon "eating" status for 2 - 8 turns. Boosts catch chance by 1.5x for the rest of the encounter unless another type of bait is used.
|Run | Flee the encounter and return to the Safari overworld without penalty.

**Note:** All three types of bait give the Pokémon "eating" status and remove "angry" status. While eating, a Pokémon's catch chance is halved, and its escape chance is quartered. All 3 types of bait award **5 Safari experience**.

## Safari Level
All actions performed in the Safari (except walking and fleeing encounters) awards Safari experience. Max level is 40 and this level is shared in all Safari locations. Safari Level increases the effectiveness of Rocks and Baits, the catch chance, the Egg Steps gained from walking, and the odds that an item will spawn when a Pokémon is caught. Some items are not available until a certain Safari Level is reached. The player starts at Safari Level 1 and the experience needed to reach a new Safari Level is calculated as such:

$ExperienceRequiredForLevel=⌈2000 * (1.2 ^ {(Safari Level - 1)} - 1)⌉$
:::collapsed XP Table
|**Level** | **XP** | **Cumulative XP** {.no-data-tables}
| --- | --- | --- |
| 1 | 0 | 0 |
| 2 | 400 | 400 |
| 3 | 480 | 880 |
| 4 | 576 | 1,456 |
| 5 | 692 | 2,148 |
| 6 | 829 | 2,977 |
| 7 | 995 | 3,972 |
| 8 | 1,195 | 5,167 |
| 9 | 1,433 | 6,600 |
| 10 | 1,720 | 8,320 |
| 11 | 2,064 | 10,384 |
| 12 | 2,477 | 12,861 |
| 13 | 2,972 | 15,833 |
| 14 | 3,566 | 19,399 |
| 15 | 4,280 | 23,679 |
| 16 | 5,136 | 28,815 |
| 17 | 6,162 | 34,977 |
| 18 | 7,396 | 42,373 |
| 19 | 8,874 | 51,247 |
| 20 | 10,649 | 61,896 |
| 21 | 12,780 | 74,676 |
| 22 | 15,335 | 90,011 |
| 23 | 18,402 | 108,413 |
| 24 | 22,082 | 130,495 |
| 25 | 26,499 | 156,994 |
| 26 | 31,799 | 188,793 |
| 27 | 38,158 | 226,951 |
| 28 | 45,791 | 272,742 |
| 29 | 54,948 | 327,690 |
| 30 | 65,938 | 393,628 |
| 31 | 79,125 | 472,753 |
| 32 | 94,951 | 567,704 |
| 33 | 113,940 | 681,644 |
| 34 | 136,729 | 818,373 |
| 35 | 164,075 | 982,448 |
| 36 | 196,889 | 1,179,337 |
| 37 | 236,267 | 1,415,604 |
| 38 | 283,521 | 1,699,125 |
| 39 | 340,225 | 2,039,350 |
| 40 | 408,270 | 2,447,620 |
:::

Safari Level acts as a multiplier following this formula:

$Multiplier=\frac{(Safari Level - 1)}{50}$

### Capture Chance
Safari Level affects this value using the following formula:

$Catch Chance = (\frac{CatchRate}{6}) + Magic Ball + (Multiplier * 10)$

Where **CatchRate** is the Pokémon's base catch rate.

This is further modified by the effect of rocks (Angry status) and berries (Eating status). If **Eating** status:

$Catch Chance = \frac{Catch Chance}{2 - Multiplier}$

If **Angry** status:

$Catch Chance = Catch Chance * (2 + Multiplier)$

Also, if [[Berries/Nanab]] berry is used, it further modifies Catch Chance with the following formula:

$Catch Chance = Catch Chance * (1.5 + Multiplier)$

Note that **CatchChance** can never go above 100%.

### Escape Chance
Pokémon's escape chance begins at 30%. This value is modified by Safari Level according to the statuses previously mentioned. If **Eating** status:

$EscapeChance = \frac{EscapeChance}{4 + Multiplier}$

If **Angry** status:

$EscapeChance = EscapeChance * (2 - Multiplier)$

Also, if [[Berries/Razz]] berry is used, it further modifies Escape Chance with the following formula:

$EscapeChance = \frac{EscapeChance}{1.5 + Multiplier}$

### Egg Steps
Walking on the Safari gives egg steps, starting with 1 Egg Step at level 1 and increasing as the Safari Level progresses. The formula is as follows:

$Egg Steps = 1 + \lfloor\frac{SafariLevel}{10}\rfloor$

This value can then be further modified by Egg Steps multipliers, for example, using the Farm setups shown in [[Hatchery]] page or equipping [[Oak Items/Magma Stone]].

### Animation Speed Up Tiers
Every 10 Safari Levels, the animation will speed up by the following values:

|**Level** | **Value** {.no-data-tables}
|---|---|
|Level 10 | 11% faster
|Level 20 | 33% faster
|Level 30 | 75% faster
|Level 40 | 122% faster


### Item Loot
After successfully capturing a Pokémon, there is a chance for an item to spawn. This chance is:

$ItemChance = 39\% + (1\% * Safari Level)$

The items that can be obtained are different between the Safari locations. Check each individual Safari page for more information.