Pokémon are your partners in this adventure and your main source of power. Currently the game has **1,395** different Pokémon forms. Most of them based on main games, with 33 coming from side games, 53 coming from anime and films, and 18 custom forms.

## Statistics

Pokémon performance is defined by some statistics based on their main games' values as described here:

### Base attack

The formula for a Pokémon’s Base Attack is loosely derived from Pokemon Go’s formula for CP. It can be described through the following equations:

Base offense = 2 \* [√(Atk\*SAtack) + √Spe]
Base defense = 2 \* [√(Def\*SDef) + √Spe]
Base stamina = 2 \* HP
Base attack = √(Base Defense \* Base stamina) \* (Base offense/250)
* When this value is \<10 then 10 is applied instead.
* This value is floored.
*This formula means that all Pokémon stats contribute to Pokémon attack, but not in the same amount. HP and attack values are more significant than defense or speed.*

### Attack

When first caught, a Pokémon will, at level 100, have an Attack stat equal to their Base Attack. Beneath level 100, their Attack scales linearly from 0 to their maximum Attack. However, at no point may a Pokémon’s Attack be less than 1.

Total Pokémon attack will increase while breeding according to the attack bonus.

### Attack Bonus

The attack bonus is the extra damage that a Pokémon will get each breeding cycle.
This is **always** calculated using the base attack, not the current attack.
The **base** Attack bonus is **25%** of the base attack.
*Example: Metapod, that has 20 base attack, will have an attack bonus of 5. After 1 hatch its total attack will be 25, after 2 hatches it will be 30 and after 10 hatches it will be 70.*

The **Attack bonus** can be increased using 2 different [[Vitamins]]: [[Items/Protein]] and [[Items/Calcium]]:
* **Protein** gives +1 attack bonus. *In our example, Metapod will have 6 attack bonus after using 1 Protein and 15 attack bonus after using 10 Proteins. While Pidgeot (with 112 base attack) will have 29 attack bonus after 1 Protein and 38 after 10 Proteins.*
* **Calcium** gives 1% base attack as attack bonus. *In our example, Metapod will have 5.2 attack bonus after 1 Calcium and 7 attack bonus after 10 Calcium. While Pidgeot will have 29.12 attack bonus after 1 Calcium and 39.2 after 10 Calcium.*

### Breeding Efficiency (BE)
A Pokémon with a high base attack and a low number of egg steps will have a high Breeding Efficiency stat, which is calculated with the following formula:

$BE = \frac{Attack Bonus}{Egg Cycles} * EV Bonus * Shadow Status * Held Item Bonus$

*Attack Bonus refers to the same value from the previous section. An Egg Cycle equals to 40 Egg Steps. Also, Held Item Bonus only applies if the Pokémon is holding an item that explicitly raises the attack.*

Since [[Vitamins]] modify the Attack Bonus value, they also affect Breeding Efficiency. Individual Pokémon pages have the best Vitamin distribution to increase this statistic.

The table in this page shows only Base BE, in other words, the stat without Vitamins nor any kind of multiplier (like the ones mentioned in the formula).

### Egg Steps

Egg Steps is the value that determines how long it will take for an egg to hatch.
Routes give a different number of egg steps depending on their difficulty.
Egg steps are grouped in egg cycles (1 egg cycle = 40 egg steps).

The egg cycle value for each species begins with the canonical value, with alternate forms using the same value as the base form, and it's subject to a few modifiers:

* An evolved Pokémon’s egg cycle value is 1.5 times the egg cycle value of their pre-evolved form. In the case of third-stage Pokémon, their egg cycle value is 1.5 times the egg cycle value of the second-stage Pokémon.
* A baby Pokémon’s egg cycle value is 0.8 times the egg cycle value of the base species.
There is a hard cap of 120 egg cycles, equaling 4,800 egg steps, after all factors have been accounted for.

There are exceptions to this rule:

* Although [[Mega Pokémon]] are technically evolutions, they share the same egg cycle value as their counterpart.
* [[Pokémon/Elf Munchlax]] acts as a Baby Pokémon of [[Pokémon/Santa Snorlax]], in regard of its egg cycle value, but is not.

### Native Region
Native Region doesn't necessarily refer to when the Pokémon is available but rather the Region the game considers it for Pokédex completion and Regional Debuff calculations.

## Other Pokémon Lists
- [[Alternate Pokémon Forms]] page lists all alternate forms available in the game, including Regional forms, and the corresponding base Pokémon.
- [[Mega Pokémon]] page has details about which Pokémon can Mega Evolve and the requirements necessary to do so.
- [[Baby Pokémon]] page has a list of all Baby Pokémon available in the game and the Region needed to acquire them.
- [[Wandering Pokémon]] page has all available wanderer Pokémon, as in, the Pokémon that can show up in the farm.
- [[Roaming Pokémon]] page contains information about roaming Pokémon, as in, rare Pokémon that can appear in any route of any given Region.
- [[Shadow Pokémon]] page has the list of all currently available Shadow Pokémon.

## Pokémon List
**WARNING**
This list includes all Pokémon that are in the code, but some of them **are not** currently **obtainable**.
