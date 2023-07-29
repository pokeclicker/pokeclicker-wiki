### Chance of Gaining More Items
The Dowsing Machine gives a chance of gaining extra items from Dungeon chests. The specific chance depends on the item's Tier and follows this formula:

**Activation Chance** = (0.5 / (4 / Tier + 1))

The **Tier** variable takes a value from 4 (Common) to 0 (Mythic). This translates to this table:

Tier | Activation Chance
--- | ---
|Common |62.5%
|Rare |50%
|Epic |37.5%
|Legendary |25%
|Mythic |12.5%

## Increase in Yield of Items Gained
The number of items one obtains if the Dowsing Machine activates depends on both the Tier of said loot-able item and the Region of the Dungeon the player is in. The Common Tier yields more items, while the Mythic Tier yields fewer. On the other hand, the higher the Region, the more items will be obtained. The formula is:

**Item Yield** = 1 + Max(1, Round(Max(Tier, 2) / 8 * (Region + 1)))

The **Tier** variable works as it does the previous formula, and Region takes a value from 0 (Kanto) to the highest available Region, 7 (Galar). This translates to the following table:

Tier | Kanto Yield | Johto Yield | Hoenn Yield | Sinnoh Yield | Unova Yield | Kalos Yield | Alola Yield | Galar Yield
--- | --- | --- | --- | --- | --- | --- | --- | --- |
|Common |2 Items |2 Items |3 Items |3 Items |4 Items |4 Items |5 Items |5 Items
|Rare |2 Items |2 Items |2 Items |3 Items |3 Items |3 Items |4 Items |4 Items
|Epic |2 Items |2 Items |2 Items |2 Items |2 Items |3 Items |3 Items |3 Items
|Legendary |2 Items |2 Items |2 Items |2 Items |2 Items |3 Items |3 Items |3 Items
|Mythic |2 Items |2 Items |2 Items |2 Items |2 Items |3 Items |3 Items |3 Items

**Note:** The +50% chance of getting an item from Pokémon that drop Rare Hold Items does not change - it is always the same irrespective of the Region the player is currently in.