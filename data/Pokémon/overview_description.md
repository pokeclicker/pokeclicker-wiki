#### Jump To:
* [Stats](#stats)
* [States](#status)
    * [Shiny](#shiny)
    * [Shadow](#shadow)
* [Alternate Forms](#altforms)
* [Lists of Pokémon](#listsofpokemon)
#### See Also:
* [Pokérus/EVs](#!Pokérus)
* [[Hatchery]]

Pokémon are your partners in this adventure and your main source of attack. Currently the game has **1,402** different Pokémon forms. Most of them based on main games, with 33 coming from side games, 53 coming from anime and films, and 18 custom forms.

----

## Stats {#stats}

- **Type:** Affects attack scaling based on its effectiveness against the type(s) of the opponent Pokémon.
    - For dual-type Pokémon, whichever type is stronger against the opponent will be used to calculate their entire attack value (the weaker type is ignored).
- **Base attack:** Used to calculate attack bonus. This value cannot be changed.
- **Attack (or Current Attack):** Scales linearly from Level 0 to Level 100. The Pokémon's attack at Level 100 is their maximum attack.
    - Breed Pokémon in the [[Hatchery]] to increase their maximum attack.
- **Attack Bonus:** The amount of attack that a Pokémon gains each time it is bred.
    - The base attack bonus is **25% of the base attack**. Current attack never affects attack bonus.
    - Attack bonus can be increased using [[Items/Protein]] and [[Items/Calcium]], at the cost of increasing egg steps.
- **EVs and EV Bonus:** Damage multiplying stat. See: [[Pokérus]].
- **Catch Rate:** Can be increased during encounters with [[Oak Items/Magic Ball]] and [[Poké Balls]].
- **Egg Steps (or Hatch Steps):** Number of steps required for the Pokémon to hatch when bred. An egg cycle is equivalent to 40 egg steps.
    - Egg steps can be reduced by using [[Items/Carbos]].
- **Breeding Efficiency:** The amount of attack the Pokémon gains per egg cycle (i.e. per 40 egg steps).
    - [[Vitamins]] can greatly affect BE, due to their effects on attack bonus and egg steps.
    - EV Bonus, [Shadow](#!Shadow_Pokémon) states, and attack-increasing held items are calculated as part of BE.
    - $BE = \frac{Attack Bonus}{Egg Cycles} * EV Bonus * Shadow Status * Held Item Bonus${.overflow-auto .m-3}
- **Native Region:** The region used for Pokédex completion and [Regional Debuff](#!Regions#debuff) calculations. It is not necessarily where or when the Pokémon is available.

#### How Base Stats are Calculated
Pokémon stats are based on statistics in their main games.

::: collapsed Formulas for Base Attack
The formula for a Pokémon’s base attack is loosely derived from Pokemon Go’s formula for Combat Power.

`Base offense = 2 * [√(Atk*SAtack) + √Spe]`
`Base defense = 2 * [√(Def*SDef) + √Spe]`
`Base stamina = 2 * HP`
`Base attack = √(Base Defense * Base stamina) * (Base offense/250)`
* If this value is \<10,  then 10 is applied instead.
* This value is floored.
* This formula means that HP and attack values are more significant than defense or speed.
:::
::: collapsed Formulas for Base Egg Steps
The egg cycle value for each species begins with the canonical value, with alternate forms using the same value as the base form, and it's subject to a few modifiers:

* An evolved Pokémon’s egg cycle value is 1.5 times the egg cycle value of their pre-evolved form. In the case of third-stage Pokémon, their egg cycle value is 1.5 times the egg cycle value of the second-stage Pokémon.
* A baby Pokémon’s egg cycle value is 0.8 times the egg cycle value of the base species.
There is a hard cap of 120 egg cycles, equaling 4,800 egg steps, after all factors have been accounted for.

There are exceptions to this rule:

* Although [[Mega Pokémon]] are technically evolutions, they share the same egg cycle value as their counterpart.
* [[Pokémon/Elf Munchlax]] acts as a Baby Pokémon of [[Pokémon/Santa Snorlax]] in regard of its egg cycle value, but it is not an actual baby Pokémon.
:::
# {.mt-3}


----

## States {#states}
Pokémon can have various states that apply to the base Pokémon. They are not considered alternate forms.

#### Shiny {#shiny}
*→ See: [[Shiny Chance]]*

Pokémon can be encountered or hatched in a shiny form. Shiny Pokémon in your party do not have any stat differences, but catching a Pokémon in a shiny encounter provides more EV gains and hatches that result in a shiny Pokémon provide more attack gains.

The number of Shiny Pokémon you own contributes toward [[Click Attack]] and various [[Achievements]].

#### Shadow {#shadow}
*→ See: [[Shadow Pokémon]]*

Shadow Pokémon can be encountered and caught in Orre. Shadow Pokémon and their purified forms have modifiers to their attack stat.

The number of purified Shadow Pokémon you own contributes toward [[Click Attack]] and various [[Achievements]].

---

## Alternate Forms {#altforms}
*→ See: [[Alternate Pokémon Forms]], [[Mega Pokémon]]*

To complete the Pokédex, you only need to capture **one form** of a particular Pokémon.

For example, capturing [[Pokémon/Bulbasaur]] OR [[Pokémon/Spooky Bulbasaur]] OR [[Pokémon/Bulbasaur (Clone)]] will count as **[[Pokémon/Bulbasaur]]** for Pokédex completion.

This applies to Pokédex achievements as well. For example, a shiny [[Pokémon/Mega Charizard X]] will count as a shiny [[Pokémon/Charizard]] when working toward the Kanto Shiny Pokédex achievements.

----

## Other Lists of Pokémon {#listsofpokemon}

- [[Baby Pokémon]]: Baby Pokémon and the Region needed to acquire them.
- [[Roaming Pokémon]]: Rare Pokémon that can appear in any route of any given Region.

### Full List
