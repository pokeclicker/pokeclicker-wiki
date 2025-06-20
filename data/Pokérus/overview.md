## Spreading Pokérus

Spreading Pokérus can only occur in the [Pokémon Day Care](#!Hatchery). Currently, only a Pokémon that fulfill the below conditions are capable of spreading the virus:

**Spreader requirements**
1. Infected with Pokérus, state is **Contagious** or **Resistant**
2. Not ready to hatch
3. Being bred manually *(i.e., a hatchery helper is not assisting with its egg)*

Only Pokémon that fulfill the below conditions are capable of contracting the virus:

**Contraction requirements**
1. Not ready to hatch
2. Share at least one type with a Pokémon that fulfills the "Spreader Requisites"
3. Being bred manually *(i.e., a hatchery helper is not assisting with its egg)*

## Pokérus Status

There are 4 states of Pokérus as described below.

State | Name | Description
:--- | :--- | ---:
None | None | Base State. Pokémon can contract Pokérus. Pokémon cannot gain EVs.
[[File:Infected.png]] | Infected | Pokémon has contracted Pokérus, but has yet to hatch once after contracting the virus. Pokémon cannot gain EVs.
[[File:Contagious.png]] | Contagious | Pokémon has contracted Pokérus, and is capable of spreading the virus. Pokémon can gain EVs.
[[File:Resistant.png]] | Resistant | Pokémon has contracted Pokérus, and is capable of spreading the virus. Pokémon can gain EVs, and has also accumulated 50 or more EVs.

There is a known bug that Pokémon infected via typed eggs will remain Infected upon hatching, rather than becoming Contagious. Breeding the Pokémon the usual way will cause the Pokémon to correctly become Contagious.

## Effort Values (EVs)

EVs are a damage multiplying stat for each individual Pokémon that can be seen in the Pokédex page for that Pokémon and by using the Display Value setting in the Hatchery. EVs for a Pokémon can currently only be increased by obtaining that Pokémon again after it has caught the Pokérus. You can gain EVs for a Pokémon by: catching it on a Route, Dungeon, or Safari, obtaining it as a Wandering Pokemon, or by evolving it using Evolution Items. Breeding a Pokémon does not count towards gaining EVs. EV gain is further affected by the [[Berries/Rowap]] Berry Aura, Blue Flute, and other factors listed below.  Using a [Farm Setup](#!Farm/Setups) for EV boosting can give up to 2.5x more Effort Values.

### Gaining EVs (Methods)

Different methods of catching a Pokémon will yield different amounts of EVs. If the Slow EVs Challenge Mode is activated, you will gain  the same amount of EVs, but require 10x as many EVs to yield the same bonus. In some instances, the yield of EVs is further modified by an external factor (see below tables for specific information).

#### EV yield

EVs gained | Slow EVs | Catching Method
:--- | :---: | ---:
0.1 | 0.01 | Wild Pokémon
0.2 | 0.02 | Base Wanderer Pokémon
1 | 0.1 | Evolution Item
1 | 0.1 | Shop Bought / Dream Orb Pokémon
1 | 0.1 | Safari Zone Pokémon
1 | 0.1 | Wanderer Pokémon

#### EV yield modifiers

EV modifier | Method
:--- | ---:
2x | Pokémon is captured as a Shadow Pokémon
3x | Pokémon is encountered and captured as a Dungeon Pokémon (not a Boss or Mimic)
5x | Pokémon is captured as a Shiny
10x | Pokémon is encountered and captured as a Dungeon Boss Pokémon
10x | Pokémon is encountered and captured as a Mimic
50x | Pokémon is encountered and captured as a Roaming Pokemon
Variable | [[File:Rowap.png\|40px]] [[Berries/Rowap]] Berry Aura
Variable | [[File:Blue_Flute.png\|40px]] [[Items/Blue Flute]]
1.5x | [[File:Macho_Brace.png\|40px]]  [[Items/Macho_Brace]] Held Item
2x | [[File:Power_Bracer.png\|40px]]  [[Items/Power_Bracer]] Held Item
5x | [[File:Repeatball.png\|40px]] [[Items/Repeat Ball]]

#### Examples

Example 1: Catching a **Shiny Dungeon Pokémon** with a **Repeatball** yields:
**0.1 (Catching) \* 3 (Dungeon Pokémon) \* 5 (Shiny) \* 5 (Repeatball) = 7.5**

Example 2: Catching a **Shiny Roaming Pokémon** yields:
**0.1 (Catching) \* 5 (Shiny) \* 50 (Roaming) = 25 EVs**

Example 3: Catching a **Shiny Roaming Pokémon** with a **Repeatball** yields:
**0.1 (Catching)  \* 5 (Shiny) \* 5 (Repeatball) \* 50 (Roaming) = 125 EVs**

### EV Damage Multiplier

EVs increase the amount of damage that a Pokémon does. EVs multiply the damage done by a Pokémon. If your Pokémon has fewer than 50 EVs, a Pokémon's EV Damage Multiplier increases by 0.01 per EV, and consequently a Pokémon gains 1% extra damage per EV for the first 50 EVs.

Pokemon that have: contracted Pokérus, have left the hatchery after contracting Pokérus *(i.e., not Infected)*, and have gained less than 50 EVs are considered Contagious. However, Pokémon that fulfill all the above conditions but have gained 50 or more EVs are considered Resistant. See Pokérus States for more information on Pokérus States

Beyond 50 EVs, Pokémon will still gain EVs at the same rate, but will see diminishing returns with respect to the EV Damage Multiplier bonus gained per EV gained. There is no limit to this multiplier.

#### EV Attack Bonus at certain benchmarks

Effort Value | Pokémon Damage Multiplier
:--- | ---:
50 | 1.5x
802 | 2x
40,121 | 3x
643,300 | 4x
5,540,000 | 5x
3.2E7 | 6x
1.4E8 | 7x

#### EV Formulas

**When a Pokémon has fewer than 50 EVs:**
EV Damage Multiplier = 1 + (EV / 100)

**When a Pokémon has greater than 50 EVs:**
EV Damage Multiplier = EV^(log(1.5)/log(50))
