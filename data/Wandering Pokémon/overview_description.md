A Farm with at least one fully ripe Berry can attract Wandering Pokémon that stay on the field until interacted by either a farm hand or the player. You  need to interact with the Wandering Pokémon in order to catch it and it is not guaranteed. Interacting with Wandering Pokémon at all awards Farm Points and catching them awards Dungeon Tokens. Which Wandering Pokémon is attracted is based on Berry type and the farthest region you have progressed to, with all valid options having an equal chance to be encountered.

The Farm Point quantity depends on the farm points value and the growth time of the berry the Pokémon is attracted to. The exact formula is :
$$ \text{Wanderer Farm Points} =  \frac{\text{Berry Farm Points}}{ 4 + \frac{\text{Berry Growth Time}} { 1800}} $$

The Number of Dungeon Tokens equals that of a route in the highest region the player stepped in. Which route is based on the the native region of the wandering Pokémon : the higher the region the Pokémon is native to, the higher the route.

The route is chosen is using the following formula.

$$ \text{route} = \text{random route from}   ⌊\Bigg( (\text{totalroutes}-1) \times \frac{\text{pokemon region}}{\text{highest region}+2} \Bigg)  \text{to}   ⌊\Bigg( (\text{totalroutes}-1) \times \frac{\text{pokemon region}+2}{\text{highest region}+2} \Bigg) $$

Dungeon Tokens are obtained via the following formula.

$$ \text{Dungeon Tokens} = \max\Bigg( 1, 6 \times (\frac{\text{route} \times 2}{\frac{2.8}{1 + \frac{\text{region}}{3}}})^{1.08}\Bigg) \times \text{Achievement Bonus} $$


Some Berries attract rare Pokémon that can be used strategically to complete a region's Pokédex.

Wandering Pokémon also have a Base 1/1024 chance to be shiny. Attracting a shiny Wandering Pokémon when there is at least one open plot on the Farm plants a [[Berries/Starf]] Berry in that open plot.

The base chance to encounter a Wandering Pokémon is 1/2000 every 1.5 seconds for every fully ripe Berry. [[Berries/Roseli]] Berries have an Attract Aura that can multiplicatively increase this chance for all currently grown Berries on the Farm. The formula is:

$$ \text{Encounter Chance} = \frac{(\text{Attract Aura} \times \text{Ripe Berries})}{2000}