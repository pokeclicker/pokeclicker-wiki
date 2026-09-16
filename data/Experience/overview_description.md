#### Jump to:
* [Experience by Location](#locations)

Experience (EXP) is gained whenever an enemy Pokémon is defeated. Leveling up increases a Pokémon's attack, and many Pokémon evolve once they reach a certain level. Pokémon stop gaining EXP when they reach the level cap, which starts at level 20 and increases by 10 for each [Gym](#!Gyms) badge you own, up to level 100.

#### Formulas
::: collapsed Show Experience Formulas
The EXP given by each defeated Pokémon is calculated as follows:

$\text{EXP} = \Big\lfloor \large \frac{\text{Base EXP} \times \text{Level} \times \text{Trainer Bonus} \times \text{Multipliers}}{9} \Big\rfloor$ {.overflow-auto .text-center}

* **Base EXP** is the base experience yield of the defeated Pokémon.
* **Level** is the level of the defeated Pokémon. Wild Pokémon on [[Routes]] have a level based on the route's difficulty:

$\text{Level} = \Big\lfloor 20 \times \text{route}^{\frac{1}{2.25}} \Big\rfloor$ {.overflow-auto .text-center}

* **Trainer Bonus** is 1.5 for Pokémon that belong to a trainer ([[Gyms]], trainers in [[Dungeons]], [[Temporary Battles]] and the [[Battle Frontier]]), and 1 for wild Pokémon.
* **Multipliers** are the modifiers listed below.

***Note:** The route number is normalized so that route difficulty increases across all regions.*
:::

#### Modifiers for EXP Gain {.mt-3}

| Modifier | Multiplier Amount |
| ----- | ----- |
| [[File:items/battleItem/Lucky_egg.png\|24px]] [[Items/Lucky Egg]] | 1.5x |
| [[Oak_Items/EXP Share]] | 1.15x - 1.3x |
| [Achievement](#!Achievements) Bonus % | Up to 12.25x |
| [[Berries/Custap]] aura | Up to 2.54x |

#### Held Items {.mt-3}
Held items only increase the EXP gained by the Pokémon holding them.

| Held Item | Multiplier Amount |
| ----- | ----- |
| [[Items/Wonder Chest]] | 1.25x |
| [[Items/Miracle Chest]] | 1.5x |
| [[Items/Joy Scent]] | 1.75x (Shadow or Purified Pokémon only) |
| [[Items/Excite Scent]] | 2x (Shadow or Purified Pokémon only) |
| [[Items/Vivid Scent]] | 2.5x (Shadow or Purified Pokémon only) |

---

## Experience by Location {#locations}
The table below lists the average EXP and the egg steps given by each Pokémon defeated on every route and in every gym, before any multipliers are applied.

* Roaming Pokémon and Pokémon that only appear during events are not included. All other requirements, such as quest progress, are assumed to be met.
* Some gym trainers use different Pokémon depending on your starter or story progress. The average of the different options is used.
* Enter a Max Health to only show locations where no Pokémon has more HP than the value entered.
