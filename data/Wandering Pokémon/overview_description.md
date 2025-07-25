A Farm with at least one fully ripe [Berry](#!Berries) has a small chance to attract Wandering Pokémon that stay on the field until captured by the player or [[Farm Hands]]. The Wandering Pokémon must be interacted with to have a chance of catching it.  Some Wanderers are attracted to all Berries, while others are picky and will only appear on specific ones.  Certain Berries attract rare Pokémon that can be used strategically to complete a region's Pokédex.

#### Attracting
The only requirement for getting a Wanderer is a fully mature Berry plant.   The base chance to encounter a Wandering Pokémon is 1/2000 every 1.5 seconds for each fully ripe Berry on the Farm. Which Wandering Pokémon is attracted is based on Berry type and the farthest region you have progressed to, with all valid options having an equal chance to be encountered.  If [[Items/Gooey Mulch]] is present on the plot, any berry or color specific Wanderers have their weighted chances doubled.

Wandering Pokémon also have a Base 1/1024 chance to be shiny. Catching a shiny Wandering Pokémon when there is at least one open plot on the Farm plants a [[Berries/Starf]] Berry in that open plot.  This is affected by all the [[Shiny Chance]] boosting options.

[[Berries/Roseli]] Berries have an Attract Aura that can multiplicatively increase this chance for all currently grown Berries on the Farm. The formula is:

$$ \text{Encounter Chance} = \frac{(\text{Attract Aura} \times \text{Ripe Berries})}{2000}$$

* [Roseli Farm Setups to attract Wanderers](#!Farm/Setups#wanderers)

#### Catching
Catch attempts by the player or a Farm Hand set to Manage Wanderers will use the player's Poké Ball Filters. Interacting with Wandering Pokémon always awards Farm Points and catching additionally awards Dungeon Tokens. Wanderers will vanish five minutes after their Berry plant is harvested, during which they will fade flash.  Otherwise they will stay as long as their host Berry lives.

The Farm Point quantity depends on the farm points value and the growth time of the berry the Pokémon is attracted to. The exact formula is :
$$ \text{Wanderer Farm Points} =  \frac{\text{Berry Farm Points}}{ 4 + \frac{\text{Berry Growth Time}} { 1800}} $$

The Number of Dungeon Tokens equals that of a route in the highest region the player stepped in. Which route is based on the the native region of the wandering Pokémon : the higher the region the Pokémon is native to, the higher the route.

The route is chosen using the following formula.

$$ \text{route} = \text{random route from}   ⌊\Bigg( (\text{totalroutes}-1) \times \frac{\text{pokemon region}}{\text{highest region}+2} \Bigg)⌋  \text{to}   ⌊\Bigg( (\text{totalroutes}-1) \times \frac{\text{pokemon region}+2}{\text{highest region}+2} \Bigg)⌋ $$

Dungeon Tokens are obtained via the following formula.

$$ \text{Dungeon Tokens} = \max\Bigg( 1, 6 \times (\frac{\text{route} \times 2}{\frac{2.8}{1 + \frac{\text{region}}{3}}})^{1.08}\Bigg) \times \text{Achievement Bonus} $$

### Exclusive
The following Pokémon can **only** be obtained from Wandering encounters:
@[[Pokemon/Shuckle (Corked)]] @[[Pokemon/Detective Pikachu]] @[[Pokemon/Burmy (No Coat)]] @[[Pokemon/Snover (Berry)]] @[[Pokemon/Flabébé (Yellow)]] @[[Pokemon/Flabébé (Blue)]] @[[Pokemon/Oricorio (Pa'u)]] @[[Pokemon/Exposed Applin]] @[[Pokemon/Morpeko (Hangry)]]

The following Pokémon can **only** be [EV trained](#!Pokérus/#EV) from Wandering encounters:
@[[Pokemon/Treecko]] @[[#!Pokemon/Torchic]] @[[#!Pokemon/Mudkip]]  @[[#!Pokemon/Shedinja]] @[[#!Pokemon/Turtwig]] @[[#!Pokemon/Chimchar]] @[[#!Pokemon/Piplup]] @[[#!Pokemon/Mothim]] @[[#!Pokemon/Snivy]] @[[#!Pokemon/Tepig]] @[[#!Pokemon/Oshawott]] @[[#!Pokemon/Chespin]] @[[#!Pokemon/Fennekin]]  @[[#!Pokemon/Froakie]] @[[#!Pokemon/Rowlet]] @[[#!Pokemon/Litten]] @[[#!Pokemon/Popplio]]  @[[#!Pokemon/Crabrawler]] @[[#!Pokemon/Grookey]] @[[#!Pokemon/Scorbunny]] @[[#!Pokemon/Sobble]]
