Safari is an area available in Kanto ([[Towns/Safari Zone]]) and Kalos ([[Towns/Friend Safari]]) where the player may spend Quest Points to try and catch unique Pokémon. To unlock this area the player must first have the Safari Ticket.

The Pokémon can randomly spawn both on water and grass tiles, and also as sprites that can show up in both these environments. In Kanto, some Pokémon, like in the original games, only appear here.

In Kalos' Friend Safari, the Pokémon that show up change daily according to the player's trainer ID. Each day, 5 Pokémon will get randomly chosen which can be checked with the Safari Ranger NPC. Only those Pokémon that **cannot gain EVs in any other place** may show up in the Friend Safari and only if the player has captured them previously. If the player hasn't, then the Pokémon will show up as a silhouette and cannot be encountered. Even if all daily Pokémon are currently unavailable to the player, Friend Safari has a list of Pokémon that always show up, no matter what. These Pokémon have a lower encounter rate in comparison to the 5 daily ones.

To check the encounter list, please check the appropriate page: [[Towns/Safari Zone]] for Kanto and [[Towns/Friend Safari]] for Kalos.

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

$ExperienceToNextLevel=⌈2000 * (1.2 ^ {(Safari Level - 1)} - 1)⌉$

Safari Level acts as a multiplier following this formula:

$Multiplier=\frac{(Safari Level - 1)}{50}$

### Capture Chance
Safari Level affects this value using the following formula:

$Catch Chance = (\frac{CatchRate}{6}) + Magic Ball + (Multiplier * 10)$

Where **CatchRate** is the Pokémon's base catch rate. Check [[Pokémon]] page for this value.

This is further modified by the effect of rocks (Angry status) and berries (Eating status). If **Eating** status:

$Catch Chance = \frac{Catch Chance}{2} - Multiplier$

If **Angry** status:

$Catch Chance = Catch Chance * 2 + Multiplier$

Also, if [[Berries/Nanab]] berry is used, it further modifies Catch Chance with the following formula:

$Catch Chance = Catch Chance * 1.5 + Multiplier$

Note that **CatchChance** can never go above 100%.

### Escape Chance
Pokémon's escape chance begins at 30%. This value is modified by Safari Level according to the statuses previously mentioned. If **Eating** status:

$EscapeChance = \frac{EscapeChance}{4} + Multiplier$

If **Angry** status:

$EscapeChance = EscapeChance * 2 - Multiplier$

Also, if [[Berries/Razz]] berry is used, it further modifies Escape Chance with the following formula:

$EscapeChance = \frac{EscapeChance}{1.5} + Multiplier$

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

The items that can be obtained are different between the Safari locations.