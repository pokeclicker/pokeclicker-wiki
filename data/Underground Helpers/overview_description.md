Underground Helpers are people that can be hired to work on your [[Underground]]. All helpers are available from the start and don't need unlocking. Once hired, an Underground Helper will continue working until they are fired.

## Usage
Helpers perform actions at set time intervals and become more efficient as they level up. Each helper comes equipped with their own tools, so their actions are independent of the player's tool durability. Collected items will go into the player's Treasures inventory tab in the Underground.  Helpers are affected by passive Underground related Oak Items, namely [[Oak Items/Explosive Charge]] and [[Oak Items/Treasure Scanner]].  If a Helper keeps a reward multiplied by Treasure Scanner, they will keep all copies.  While Helpers are free to use, they keep a percentage of all items they mine up as payment instead.  This only happens if they clear the last tile covering an item.

## Stats
Underground Helpers have four main stats that improve as they level up.  While there is no maximum level for Helpers, they stop improving at Lv. 50.
Stat | Description | Base Value | Level Up | Maxed |
:--- | :--- | :--- | :--- | :---
Smart tool use | The chance a helper will use the correct use for any given situation | 50% | +2.5% | 100%|
Reward retention | When a helper digs up a treasure there is a chance they will keep the item for themself. | 60% | -1% | 10% |
Work cycle | The time needed until a helper does another action | 60 seconds | -1.1s | 5 seconds |
Discover Chance | The chance a helper finds their favorite mine when searching | 50% | +1% | 100% |

Each helper's level directly enhances these stats.
Stats improve individually and per helper.

### Favorite Mine
Although all helpers begin with the same base stats, each one has a favorite mine type.  Favorite mines can only be discovered when the Helper collects the last treasure of the previous level.  If the setting is disabled, the helper will simply discover a random mine.  The chance for successfully finding the Helper's favorite mine type increases with their level, up to a guaranteed 100% at Lv. 50.

If the "Look for favorite" setting is enabled:
- After completing a mine, the helper will attempt to find their favorite mine.
- If unsuccessful, they will find one of the six other mine types at random.
- If successful, there will be a delay based on the player's mining level equal to 15 minutes -30 seconds per player level beyond 20.  At player Lv.50 or above favorite mines are discovered instantly.
- Helpers can never discover [Special mines](#!Underground/#special).



### Experience
Helpers gain experience alongside the player:
- Digging up a treasure will grant 25 Experience.
- Completing a mine will grant an additional 100 experience.
- The non-active party (player or helper) receives 25% of the XP gained by the active one. Hiring a helper does not reduce the experience earned by the player.

$$\text{TotalXP}(\text{level}) = \left\lfloor \frac{1}{4} \left\lfloor \sum_{i=0}^{\text{level} - 1} \left( i + 300 \cdot 2^{\frac{i}{7}} \right) \right\rfloor \right\rfloor$$

### Energy Restore
Consumable Energy Restores can boost an Expert Helper's working speed.  In the Experts tab of the [[Underground]], each Expert has icons at the bottom of their panel representing the three types of Energy Restores.  If one or more are toggled on, they will use the highest value Restore available once for each work cycle.  If they run out of a Restore, Experts will use the next best available option that is toggled on for them.  The currently active Restore is shown next to the Helper's icon.

Restore | Percentage | Base Price | Efficiency
:--- | :--- | :--- | :--- |
[[Items/Small Restore]] | 25% | 30,000 [[File:money.svg\|16px]] | 1,200 [[File:money.svg\|16px]] per 1%
[[Items/Medium Restore]] | 50% | 75,000 [[File:money.svg\|16px]] | 1,500 [[File:money.svg\|16px]] per 1%
[[Items/Large Restore]] | 75% | 200,000 [[File:money.svg\|16px]] | 2,666 [[File:money.svg\|16px]] per 1%
