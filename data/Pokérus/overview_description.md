## Description

Pokérus is a microscopic life-form that can attach to Pokémon. Your Kanto Starter Pokémon will automatically be infected with Pokérus upon clearing the [[Dungeon/Distortion World (Dungeon)]] in Sinnoh for the first time. Pokérus is a beneficial virus to any Pokémon that catches it. Once a Pokémon is infected by the Pokérus, it may gain **Effort Values (EVs)**, which multiplicatively increase the attack of that Pokémon via the EV Damage Multiplier.
[[File:Charmander_infected.png]]

## Spreading Pokérus

Spreading Pokérus can only occur in the [[Pokémon Day Care]]. Currently, only a Pokémon that fulfill the below conditions are capable of spreading the virus:

<ins>**Spreader requeriments**</ins>
1. Infected with Pokérus, state is **Contagious** or **Resistant**
2. Not ready to hatch
3. Being bred manually *(ie: a hatchery helper is not assisting with its egg)*

Only Pokémon that fulfill the below conditions are capable of contracting the virus:

<ins>**Contraction requeriments**</ins>
1. Not ready to hatch
2. Share at least one type with a Pokémon that fulfills the "Spreader Requisites"
3. Being bred manually *(ie: a hatchery helper is not assisting with its egg)*

## Pokérus Status

There are 4 states of Pokérus as described below.

State | Description 
:--- | ---:
None | Base State. Pokémon can contract Pokérus. Pokémon cannot gain EVs.
[[Infected.png]] | Pokémon has contracted Pokérus, but has yet to hatch once after contracting the virus. Pokémon cannot gain EVs.
[[Contagious.png]] | Pokémon has contracted Pokérus, and is capable of spreading the virus. Pokémon can gain EVs.
[[Resistant.png]] | Pokémon has contracted Pokérus, and is capable of spreading the virus. Pokémon can gain EVs, and has also accumulated 50 or more EVs.

##Effort Values (EVs)

EVs are a damage multiplying stat for each individual Pokémon that can be seen in the Pokédex page for that Pokémon and by using the Display Value setting in the Hatchery. EVs for a Pokémon can currently only be increased by obtaining that Pokémon again after it has caught the Pokérus. You can gain EVs for a Pokémon by: catching it on a Route or a Dungeon, obtaining it as a Wandering Pokemon, or by evolving it using Evolution Items. Breeding a Pokémon does not count towards gaining EVs. EV gain is further affected by the Rowap Berry Aura.

### Gaining EVs (Methods)

Different methods of catching a Pokémon will yield different amounts of EVs. If the Slow EVs Challenge Mode is activated, you will gain EVs at a 10x slower rate (You gain the same amount of EVs, but require 10x as many EVs to yield the same bonus. In some instances, the yield of EVs is further modified by an external factor (see below tables for specific information).

#### EV yield

EVs gained | Slow EVs | Catching Method
:--- | :---: | ---:
0.1 | 0.01 | Wild Pokémon
1 | 0.1 | Evolution Item
1 | 0.1 | Shop Bought Pokémon 
1 | 0.1 | Safari Zone Pokémon 
0.5 | 0.05 | Wanderer Pokémon 

*Note: Base wanderers (wanderers attracted by any berry) don't give EVs*

#### EV yield modifiers

EV modifier | Method 
:--- | ---:
0x | Base wanderer
3x | Pokémon is encountered and captured as a Dungeon Pokémon
5x | Obtained Pokémon is Shiny.
5x | Pokémon is obtained using a Repeatball
10x | Pokémon is encountered and captured as a Dungeon Boss Pokémon
10x | Pokémon is encountered and captured as a Mimic
50x | Pokémon is encountered and captured as a Roaming Pokemon
Variable | Rowap Berry Aura

#### Examples

Example 1: Catching a **Shiny Dungeon Pokémon** with a **Repeatball** yields:
**0.1\*3\*5\*5 = 7.5** 

Example 2: Catching a **Shiny Roaming Pokémon* yields:
**0.1\*5\*50 = 25 EVs**

Example 3: Catching a **Shiny Roaming Pokémon** with a **Repeatball** yields:
**0.1\*5\*5\*50 = 125 EVs**

### EV Damage Multiplier

EVs increase the amount of damage that a Pokémon does. EVs multiply the damage done by a Pokémon. If your Pokémon has fewer than 50 EVs, a Pokémon's EV Damage Multiplier increases by 0.01 per EV, and consequently a Pokémon gains 1% extra damage per EV for the first 50 EVs.

Pokemon that have: contracted Pokérus, have left the hatchery after contracting Pokérus *(ie: not Infected)*, and have gained less than 50 EVs are considered Contagious. However, Pokémon that fulfill all the above conditions but have gained 50 or more EVs are considered Resistant. See Pokérus States for more information on Pokérus States

Beyond 50 EVs, Pokémon will still gain EVs at the same rate, but will see diminishing returns with respect to the EV Damage Multiplier bonus gained per EV gained. There is no limit to this multiplier.

#### EV Attack Bonus at certain benchmarks

Effort Value | Pokémon Damage Multiplier 
:--- | ---:
50 | 1,5x
802 | 2x
40,121 | 3x
643,300 | 4x
5,540,000 | 5x
3.2E7 | 6x
1.4E8 | 7x

#### EV Formulas

**When a Pokémon has fewer than 50 EVs:**
EV Damage Multiplier = 1 + (EV/100)

**When a Pokémon has greater than 50 EVs:**
EV Damage Multiplier = EV\*log50(1.5)
