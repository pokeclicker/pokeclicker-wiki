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

There are 4 states of Pokérus.  Uninfected do not have the PKRS tag.  Pokemon that have contracted Pokérus but are still in the [[Hatchery]] are Infected.  Pokémon that have left the Hatchery and have less than 50 EVs are considered Contagious. Pokémon that fulfill all the above conditions but have gained 50 or more EVs are considered Resistant.

State | Name | Description
:--- | :--- | ---:
None | None | Base State. Pokémon can contract Pokérus. Pokémon cannot gain EVs.
[[File:Infected.png]] | Infected | Pokémon has contracted Pokérus, but has yet to hatch once after contracting the virus. Pokémon cannot gain EVs.
[[File:Contagious.png]] | Contagious | Pokémon has contracted Pokérus, and is capable of spreading the virus. Pokémon can gain EVs.
[[File:Resistant.png]] | Resistant | Pokémon has contracted Pokérus, and is capable of spreading the virus. Pokémon can gain EVs, and has also accumulated 50 or more EVs.

There is a known bug that Pokémon infected via typed eggs will remain Infected upon hatching, rather than becoming Contagious. Breeding the Pokémon the usual way will cause the Pokémon to correctly become Contagious.

## Effort Values (EVs){#EV}

EVs are a damage multiplying stat for each individual Pokémon that can be seen in the Pokédex page for that Pokémon and by using the Display Value setting in the Hatchery. EVs for a Pokémon can currently only be increased by obtaining that Pokémon again after it has caught the Pokérus. You can gain EVs for a Pokémon by: catching it on a Route, Dungeon, or Safari, obtaining it as a Wandering Pokemon, or by evolving it using Evolution Items. Breeding a Pokémon does not count towards gaining EVs. EV gain is further affected by the [[Berries/Rowap]] Berry Aura, Blue Flute, and other factors listed below.  Using a [Farm Setup](#!Farm/Setups) for EV boosting can give up to 2.5x more Effort Values.

### Gaining EVs (Methods)

Different methods of catching a Pokémon will yield different amounts of EVs. If the Slow EVs [Challenge Mode](#!Challenge_Modes) is activated, 10x as many captures will be needed to yield the same bonus. In some instances, the yield of EVs is further modified by an external factor (see below tables for specific information).

#### EV yield

Find the base rate below:
EVs gained | Slow EVs | Catching Method
:--- | :---: | ---:
0.1 | 0.01 | Wild Route / Dungeon Pokémon
0.2 | 0.02 | Base [Wanderer Pokémon](#!Wandering_Pokémon)
1 | 0.1 | Evolution Item
1 | 0.1 | Shop Bought / [Dream Orb Pokémon](#!Dream_Orbs)
1 | 0.1 | [Safari Pokémon](#!Safari)
1 | 0.1 | Color & Berry-Specific Wanderer Pokémon

#### EV yield modifiers

Use all that apply, multiplied together and by the base rate from the table above:
EV modifier | Method
:--- | ---:
2x | Pokémon is captured as a Shadow Pokémon
3x | Pokémon is encountered and captured as a Dungeon Pokémon (not a Boss or Mimic)
5x | Pokémon is captured as a Shiny
10x | Pokémon is encountered and captured as a Dungeon Boss Pokémon
10x | Pokémon is encountered and captured as a Mimic
50x | Pokémon is encountered and captured as a Roaming Pokemon
[See Below](#Farm) | [[File:Rowap.png\|40px]] [[Berries/Rowap]] Berry Aura
Variable  (0.02 * (1 + AchievementBonus)) | [[File:Blue_Flute.png\|40px]] [[Items/Blue Flute]]
1.5x | [[File:Macho_Brace.png\|40px]]  Pokémon is holding a [[Items/Macho_Brace]]
2x | [[File:Power_Bracer.png\|40px]]  Pokémon is holding a [[Items/Power_Bracer]]
5x | [[File:Repeatball.png\|40px]] [[Items/Repeat Ball]]

#### Examples

Example 1: Catching a **Dungeon Pokémon** with a **Repeatball** yields:
**0.1 (Catching) \* 3 (Dungeon Pokémon) \* 5 (Repeatball) = 1.5 EVs**

Example 2: Catching a **Shiny Roaming Pokémon** with a **Repeatball** yields:
**0.1 (Catching)  \* 5 (Shiny) \* 5 (Repeatball) \* 50 (Roaming) = 125 EVs**

Example 3: Catching a **Shadow Pokémon** during a **Dungeon Boss Encounter** with a Duskball when holding a **Power Bracer** yields:
**0.1 (Catching) \* 2 (Shadow Pokémon) \*10 (Dungeon Boss)  \*2 (Power Bracer) = 4 EVs**

#### Break Points for non-caught Pokémon

For Pokémon that cannot be caught - shop purchases, [Alcremie Spins](#!Battle_Cafe), and item evolutions, combining [[Berries/Rowap]] setups, equipping [[Items/Power Bracer]] and activating [[Items/Blue Flute]] gives the greatest possible yield for the fewest purchases / spins / items to reach Resistant.  Achievement % scales Blue Flute's effectiveness; the percentages in the table below are the minimum required.

For 50EV | Rowap + Lum | Rowap + Lum + Petaya
:--- | :---: | :---:
10x | 0.00% | 38.60%
9x | 361.34% | 609.56 %
8x | 1044.01% | *1323.25%* *
\* Not currently possible.


### EV Damage Multiplier

EVs increase the amount of damage that a Pokémon does. EVs multiply the damage done by a Pokémon. If your Pokémon has fewer than 50 EVs, a Pokémon's EV Damage Multiplier increases by 0.01 per EV, and consequently a Pokémon gains 1% extra damage per EV for the first 50 EVs.

Beyond 50 EVs, Pokémon will still gain EVs at the same rate, but will see diminishing returns with respect to the EV Damage Multiplier bonus gained per EV gained. There is no limit to this multiplier.

#### EV Attack Bonus at certain benchmarks

Effort Value | Pokémon Damage Multiplier
:--- | :---
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

## EV Yield Setups{#Farm}
[EV](#!Pokérus "Pokérus") yield is affected by the Rowap berry's Aura when grown on the [[Farm]]. The setup below increases the yield of EVs gained in all applicable situations.  It stacks with other EV bonuses, including [[Items/Blue Flute]] and [[Items/Repeat Ball]].

:::collapsed Rowap + Lum - Farm Simulator Code
Copy & paste the line below into the [[Farm Simulator]]'s Import from Text.

`eyJzYXZlIjp7ImZhcm1pbmciOnsicGxvdExpc3QiOlt7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5IjoxOSwiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5IjoxOSwiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5IjoxOSwiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5IjoxOSwiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfV19fX0=`
:::
_**EV Gain Bonus: 2.54x**_
::: table-mutations
| :----: | :----: | :----: | :----: | :----: |
| [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | |
| [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Lum.png\|32px]] [[Berries/Lum]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Lum.png\|32px]] [[Berries/Lum]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | |
| [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | |
| [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Lum.png\|32px]] [[Berries/Lum]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Lum.png\|32px]] [[Berries/Lum]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | |
| [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | |
:::

### Rowap + Lum + Petaya

The Petaya variant has slightly less EV yield but will last for up to five days vs. Rowap's normal lifespan of less than six hours. For an even longer uptime, use the [Infinite Farm](#infinite) setup.

:::collapsed Rowap + Lum + Petaya - Farm Simulator Code
Copy & paste the line below into the [[Farm Simulator]]'s Import from Text.

`eyJzYXZlIjp7ImZhcm1pbmciOnsicGxvdExpc3QiOlt7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5IjoxOSwiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5IjoxOSwiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5IjoxOSwiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5IjoxOSwiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo2NCwiYWdlIjo0MzIwMDAsIm11bGNoIjotMX1dfX19`
:::
_**EV Gain Bonus: 2.43x**_

::: table-mutations
| :----: | :----: | :----: | :----: | :----: |
| [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | |
| [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Lum.png\|32px]] [[Berries/Lum]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Lum.png\|32px]] [[Berries/Lum]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | |
| [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | |
| [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Lum.png\|32px]] [[Berries/Lum]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Lum.png\|32px]] [[Berries/Lum]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | |
| [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Petaya.png\|32px]] [[Berries/Petaya]] | |

### Infinite Farm{#infinite}
The combination of [[Berries/Haban]] and [[Berries/Lum]] in this formation make the [[Berries/Petaya]] live for approximately 3.5 years once the setup fully ripens. While not as efficient as other setups, it works for those who want to forget about the Farm while still getting a benefit from it.

:::collapsed Infinite Farm w/ Rowap - Farm Simulator Code
Copy & paste the line below into the [[Farm Simulator]]'s Import from Text.

`eyJzYXZlIjp7ImZhcm1pbmciOnsicGxvdExpc3QiOlt7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5IjoxOSwiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo0OSwiYWdlIjoxNzI4MDAsIm11bGNoIjotMX0seyJiZXJyeSI6NDksImFnZSI6MTcyODAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOjQ5LCJhZ2UiOjE3MjgwMCwibXVsY2giOi0xfSx7ImJlcnJ5IjoxOSwiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo0OSwiYWdlIjoxNzI4MDAsIm11bGNoIjotMX0seyJiZXJyeSI6NjQsImFnZSI6NDMyMDAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOjQ5LCJhZ2UiOjE3MjgwMCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5IjoxOSwiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo0OSwiYWdlIjoxNzI4MDAsIm11bGNoIjotMX0seyJiZXJyeSI6NDksImFnZSI6MTcyODAwLCJtdWxjaCI6LTF9LHsiYmVycnkiOjQ5LCJhZ2UiOjE3MjgwMCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfSx7ImJlcnJ5IjoxOSwiYWdlIjo0MzIwMCwibXVsY2giOi0xfSx7ImJlcnJ5Ijo1OCwiYWdlIjo0MjQ4MCwibXVsY2giOi0xfV19fX0=`
:::
**EV Gain Bonus: 1.70x**
::: table-mutations
| :----: | :----: | :----: | :----: | :----: |
| [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Lum.png\|32px]] [[Berries/Lum]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | |
| [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Haban.png\|32px]] [[Berries/Haban]] | [[File:Haban.png\|32px]] [[Berries/Haban]] | [[File:Haban.png\|32px]] [[Berries/Haban]] | [[File:Lum.png\|32px]] [[Berries/Lum]] | |
| [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Haban.png\|32px]] [[Berries/Haban]] | [[File:Petaya.png\|32px]] [[Berries/Petaya]] | [[File:Haban.png\|32px]] [[Berries/Haban]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | |
| [[File:Lum.png\|32px]] [[Berries/Lum]] | [[File:Haban.png\|32px]] [[Berries/Haban]] | [[File:Haban.png\|32px]] [[Berries/Haban]] | [[File:Haban.png\|32px]] [[Berries/Haban]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | |
| [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | [[File:Lum.png\|32px]] [[Berries/Lum]] | [[File:Rowap.png\|32px]] [[Berries/Rowap]] | |
:::