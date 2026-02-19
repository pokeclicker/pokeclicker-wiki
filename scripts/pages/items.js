const getItemName =  (itemType, itemId) => {
    switch (itemType) {
        case ItemType.item:
            return ItemList[itemId].displayName;
        case ItemType.underground:
            return UndergroundItems.list.find((i) => i.name === itemId)?.name;
        case ItemType.berry:
            return BerryType[itemId];
        case ItemType.gem:
            return PokemonType[itemId] + ' Gem';
        default:
            return 'Unknown Item';
    }
}

const getItemImage = (itemType, itemId) => {
    switch (itemType) {
        case ItemType.item:
            return `${ItemList[itemId].image}`;
        case ItemType.underground:
            return UndergroundItems.list.find((i) => i.name === itemId)?.image;
        case ItemType.berry:
            return `assets/images/items/berry/${BerryType[itemId]}.png`;
        case ItemType.gem:
            return Gems.image(itemId);
        default:
            return '';
    }
};

const getItemPageFromTypeAndId = (itemType, itemId) => {
    const categoryAndPage = getItemCategoryAndPageFromTypeAndId(itemType, itemId);
    return `${categoryAndPage.category}/${categoryAndPage.page}`;
};

const getItemCategoryAndPageFromTypeAndId = (itemType, itemId) => {
    switch (itemType) {
        case ItemType.item:
            const item = ItemList[itemId];
            return getItemCategoryAndPageFromObject(item);
        case ItemType.underground:
            return {
                category: 'Items',
                page: UndergroundItems.list.find((i) => i.name === itemId)?.name,
            }
        case ItemType.berry:
            return {
                category: 'Berries',
                page: BerryType[itemId],
            }
        case ItemType.gem:
            return {
                category: 'Gems',
                page: PokemonType[itemId],
            };
        default:
            return {
                category: '',
                page: '',
            };
    }
};

const getItemPageFromObject = (item) => {
    const categoryAndPage = getItemCategoryAndPageFromObject(item);
    return `${categoryAndPage.category}/${categoryAndPage.page}`;
};

const getItemCategoryAndPageFromObject = (item) => {
    if (item instanceof PokemonItem) {
        return {
            category: 'Pokémon',
            page: item.type
        };
    } else {
        return {
            category: 'Items',
            page: item.displayName
        };
    }
};

const getTownsWithTradesForItem = (itemName) => {
    return Object.values(TownList).filter(t => t.content.some(c => {
        if (c instanceof ShardTraderShop && ShardDeal.list[c.location]?.().some(d => d.item.itemType.name == itemName)) {
            return true;
        }

        if (c instanceof GenericTraderShop && GenericDeal.list[c.traderID]?.().some(d => d._profits.some(p => p.item?.name == itemName))) {
            return true;
        }

        return false;
    }));
};

module.exports = {
    getItemName,
    getItemImage,
    getItemPageFromTypeAndId,
    getItemCategoryAndPageFromTypeAndId,
    getItemPageFromObject,
    getItemCategoryAndPageFromObject,
    getTownsWithTradesForItem,
};
