## Spreading Pokérus

Spreading Pokérus can only occur in the [[Hatchery]].

Only Pokémon that fulfill the below conditions are capable of **spreading the virus:**
1. Infected with Pokérus, state is **Contagious** or **Resistant**
2. Not ready to hatch
3. Being bred manually *(i.e., a hatchery helper is not assisting with its egg)*

Only Pokémon that fulfill the below conditions are capable of **contracting the virus:**
1. Not ready to hatch
2. Share at least one type with a Pokémon that fulfills the "Spreader Requisites"
3. Being bred manually *(i.e., a hatchery helper is not assisting with its egg)*

----

## Pokérus Status {#pokerusstatus}

There are 4 states of Pokérus.  Uninfected Pokémon do not have any PKRS tag.

| Tag | State | Description | Able to Gain EVs | Able to Spread Pokérus |
| :--- | :--- | :--- | :--- | :--- |
None | **None** | Base State. Pokémon can contract Pokérus. | No | No
[[File:Infected.png]] | **Infected** | Pokémon has contracted Pokérus, but has yet to hatch once after contracting the virus. | No | No
[[File:Contagious.png]] | **Contagious** | Pokémon has contracted Pokérus, and is capable of spreading the virus. | **Yes** | **Yes**
[[File:Resistant.png]] | **Resistant** | Pokémon has contracted Pokérus, and is capable of spreading the virus. Pokémon has accumulated 50 or more EVs. | **Yes** | **Yes**
*There is a known bug that Pokémon infected via typed eggs will remain Infected upon hatching, rather than becoming Contagious. Breeding the Pokémon the usual way will cause the Pokémon to correctly become Contagious.*

#### Resistant Pokémon {#resistant}
When a Pokémon gains **50 EVs**, it becomes resistant. The number of resistant Pokémon in your party counts toward [[Click Attack]] and certain [[Achievements]]. Resistant Pokémon continue to gain EVs at the same rate, but their EV bonus will increase much slower.

----

## Effort Values (EVs){#EV}

Effort Values (EVs) are a damage multiplying stat for each individual Pokémon. These numbers can be seen on a Pokémon's stat page.
- **EVs** is how many Effort Values they have.
- **EV bonus** is the damage multiplier applied to their attack.

#### EV Bonus (Damage Multiplier) {#evbonus}
**For the first 50 EVs,** every 1 EV increases the Pokémon's EV bonus by 0.01, thus increasing their damage by 1%.

$EVBonus = 1 + \frac{EffortValues}{100}$ {.overflow-auto .text-center}

**After 50 EVs,** the Pokémon will continue to increase their EV bonus, but at a diminished rate, based on the formula below. There is no upper limit to this multiplier.

$EVBonus = EffortValues^{log_{50}1.5}\approx EffortValues^{0.103645891}$ {.overflow-auto .text-center}

| EV Bonus (Damage Multiplier) {.col-1}| EVs required {.col-1}|
:--- | :---
1.5x | 50 |
2x | 802 |
3x | 40,121 |
4x | 643,300 |
5x | 5,540,000 |
6x | 32.19E6 |
7x | 142.5E6 |

---

## How to Gain EVs {#evgains}

Only Pokémon with Pokérus can gain EVs. They gain EVs after you obtain the Pokémon again via catching, shop purchases, trades, or evolution items.

Things that **do not** increase EVs:
- Breeding a Pokémon in the Hatchery
- Hatching a Pokémon from an Egg
- Obtaining a Pokémon again when the Pokémon is not in the Contagious or Resistant [Pokérus state](#pokerusstatus)


#### Base EV Yield (Per Capture Method) {#evbase}
EV yields differ based on how the Pokémon is obtained.

| Method {.col-1}| EVs Yielded {.col-1}|
| :--- | :--- |
| Catching a Pokémon on a Route | `0.1` |
| Catching a Base [[Wandering Pokémon]] | `0.2` |
| Catching a Pokémon in a Regular [[Dungeon]] Encounter | `0.3` |
| Catching a Pokémon in a Mimic or Dungeon Boss Encounter | `1` |
| Using an Evolution Item | `1` |
| Purchasing or trading at a Shop, Opening a [Dream Orb](#!Dream_Orbs), Spinning [[Battle Café]] | `1` |
| Catching a Pokémon in the [[Safari]] | `1` |
| Catching a Color or Berry-Specific [[Wandering Pokémon]] | `1` |
| Catching a Pokémon in a [Roaming](#!Roaming_Pokémon) Encounter | `5` |
# {.mt-3}

#### EV Yield Modifiers {#evmodifiers}
EV yields can also be modified by items, auras, and Pokémon states. If the Slow EVs [Challenge Mode](#!Challenge_Modes) is activated, all EV gains are divided by 10. Modifiers are multiplicative for all that apply.

| Modifier {.col-1}| EV Yield Multiplier {.col-1}|
| :--- | :--- |
| Slow EV Challenge | `0.1x` |
| Pokémon is holding a [[File:Macho_Brace.png\|24px]] [[Items/Macho Brace]] | `1.5x` |
| Pokémon is holding a [[File:Power_Bracer.png\|24px]] [[Items/Power Bracer]] | `2x` |
| Pokémon is captured as a [[Shadow Pokémon]]* | `2x` |
| Pokémon is captured as a [Shiny](#!Shiny_Chance)* | `5x` |
| Pokémon is captured with a [[File:Repeatball.png\|24px]] [[Items/Repeat Ball]] | `5x` |
| [[File:Rowap.png\|24px]] [[Berries/Rowap]] Berry Aura| `1.015x` per ripe plant. (See [Farm Setups for EV Gains](#!Farm/Setups#evs) for how to obtain up to `2.54x` across the Farm). |
| [[File:Blue_Flute.png\|24px]] [[Items/Blue Flute]] | Variable based on Flute bonus `[1.02 + .02 * AchievementBonus]x`. Current maximum of `1.24x`. |
**The newly obtained Pokémon must be a Shadow or Shiny form. Simply owning a Shadow or Shiny Pokémon does not affect multipliers.*

**Examples of EV Yields:**
- Catching a Dungeon Pokémon with a Repeat Ball yields:
    - `0.3` (Dungeon Pokémon) `×5` (Repeat Ball) = `1.5 EVs`
- Catching a Shiny Roaming Pokémon with a Repeat Ball yields:
    - `5` (Roamer) `×5` (Shiny) `×5` (Repeat Ball) = `125 EVs`
- Catching a Shadow Pokémon during a Dungeon Boss Encounter when the Pokémon is holding a Power Bracer yields:
    - `1` (Dungeon Boss)  `×2` (Shadow Pokémon) `×2` (Power Bracer) = `4 EVs`

#### Tips for Gaining EVs {#evtips}

##### Route Pokémon
Pokémon that appear on routes are generally the easiest Pokémon to gain EVs for, due to the frequency of their encounters. Without any EV modifiers, Pokémon will become resistant after 500 route captures.

##### Rare Encounters
For catchable Pokémon, using Repeat Ball, Power Bracer, and a Rowap setup combined can provide ~25x EV gain per catch. Due to the time effort of obtaining Repeat Balls and setting up the Farm, you may want to prioritize such methods for only difficult to catch Pokémon.

##### Friend Safari
Pokémon that currently cannot gain EVs anywhere else can be caught in the [[Towns/Friend Safari]]. This is the only repeatable way to obtain these Pokémon.

##### Shop/Trade/Evolution-Only Pokémon
For Pokémon that can only be acquired through purchases, trades, and item evolutions, you may wish to maximize your EV yield multiplier in order to resist your Pokémon with the least amount of purchases/trades/evolutions possible.

The table below shows how many Pokémon are required in order to resist these Pokémon using various combinations of modifiers, assuming a base EV gain of 1. Since the Blue Flute's effectiveness scales with your Achievement Bonus, the percentages in the setups show the minimum Achievement Bonus required to reach that multiplier.

*Note: AB stands for Achievement Bonus. Your Achievement Bonus can be checked in your Achievement Tracker. The Rowaps are based on [these Farm setups](#!Farm/Setups#evs), which use Lum to boost their effectiveness.*
| Modifiers | Required Purchases/Trades/Evolutions/Etc. Needed to Resist |
| :--- | :--- | :--- |
| No Modifiers |  50 |
| [[File:Power_Bracer.png\|24px]] Power Bracer + 21 Boosted [[File:Rowap.png\|24px]] Rowaps |  11 |
| [[File:Power_Bracer.png\|24px]] Power Bracer + 20 Boosted [[File:Rowap.png\|24px]] Rowaps + [[File:Blue_Flute.png\|24px]] Blue Flute (38.60% AB or more) | 10 |
| [[File:Power_Bracer.png\|24px]] Power Bracer + 21 Boosted [[File:Rowap.png\|24px]] Rowaps | 10 |
| [[File:Power_Bracer.png\|24px]] Power Bracer + 20 Boosted [[File:Rowap.png\|24px]] Rowaps + [[File:Blue_Flute.png\|24px]] Blue Flute (609.56% AB or more) | 9 |
| [[File:Power_Bracer.png\|24px]] Power Bracer + 21 Boosted [[File:Rowap.png\|24px]] Rowaps + [[File:Blue_Flute.png\|24px]] Blue Flute (361.34% AB or more) | 9 |
| [[File:Power_Bracer.png\|24px]] Power Bracer + 21 Boosted [[File:Rowap.png\|24px]] Rowaps + [[File:Blue_Flute.png\|24px]] Blue Flute (1044.01% AB or more) | 8 |
