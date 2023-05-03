Pokémon are your partners in this adventure and your main source of power. Currently the game has **1,300** different Pokémon forms. Most of them based on main games, with 32 coming from side games, 53 coming from anime and films, and 18 custom forms.

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

#### Attack

When first caught, a Pokémon will, at level 100, have an Attack stat equal to their Base Attack. Beneath level 100, their Attack scales linearly from 0 to their maximum Attack. However, at no point may a Pokémon’s Attack be less than 1.

Total Pokémon attack will increase while breeding according to the attack bonus.

##### Attack Bonus

The attack bonus is the extra damage that a Pokémon will get each breeding cycle.
This is **always** calculated using the base attack, not the current attack.
The **base** Attack bonus is **25%** of the base attack.
*Example: Metapod, that has 20 base attack, will have an attack bonus of 5. After 1 hatch its total attack will be 25, after 2 hatches it will be 30 and after 10 hatches it will be 70.*

The **Attack bonus** can be increased using 2 different [[Vitamins]]: [[Items/Protein]] and [[Items/Calcium]]:
* **Protein** gives +1 attack bonus. *In our example, Metapod will have 6 attack bonus after using 1 Protein and 15 attack bonus after using 10 Proteins. While Pidgeot (with 112 base attack) will have 29 attack bonus after 1 Protein and 38 after 10 Proteins.*
* **Calcium** gives 1% base attack as attack bonus. *In our example, Metapod will have 5.2 attack bonus after 1 Calcium and 7 attack bonus after 10 Calcium. While Pidgeot will have 29.12 attack bonus after 1 Calcium and 39.2 after 10 Calcium.*

### Egg Steps

Egg Steps is the value that determines how long it will take for an egg to hatch.
Routes give a different number of egg steps depending on their difficulty.
Egg steps are grouped in egg cycles (1 egg cycle = 40 egg steps).

The egg cycle value for each species begins with the canonical value, with alternate forms using the same value as the base form, and it's subject to a few modifiers:

* An evolved Pokémon’s egg cycle value is 1.5 times the egg cycle value of their pre-evolved form. In the case of third-stage Pokémon, their egg cycle value is 1.5 times the egg cycle value of the second-stage Pokémon.
* A baby Pokémon’s egg cycle value is 0.8 times the egg cycle value of the base species.
There is a hard cap of 120 egg cycles, equaling 4,800 egg steps, after all factors have been accounted for.

There are exceptions to this rule:

* The egg cycle values for Sand Cloak and Trash Cloak forms of Burmy and Wormadam are 1.5x higher than their Plant Cloak counterparts, since [[Pokémon/Burmy (Plant)]] evolves into [[Pokémon/Burmy (Sand)]] and [[Pokémon/Burmy (Trash)]].
* [[Pokémon/Cherrim (Sunshine)]] has 1.5x the egg cycle value of [[Pokémon/Cherrim (Overcast)]].
* All Mega Evolved Pokémon have 1.5x the egg cycle value of their base form.

## Mega Evolution
To Mega Evolve a Pokémon, the player needs to fulfill certain conditions first. Please check [[Mega Pokémon]] page for more details.

## Pokémon List
**WARNING**
This list includes all Pokémon that are in the code, but some of them **are not** currently **obtainable**.
