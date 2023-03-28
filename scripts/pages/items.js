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
            return `assets/images/items/${ItemList[itemId].imageDirectory}/${ItemList[itemId].name}.png`;
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

const getItemPage = (itemType, itemId) => {
    const categoryAndPage = getItemCategoryAndPage(itemType, itemId);
    return `${categoryAndPage.category}/${categoryAndPage.page}`;
};

const getItemCategoryAndPage = (itemType, itemId) => {
    switch (itemType) {
        case ItemType.item:
            return {
                category: 'Items',
                page: ItemList[itemId].displayName,
            };
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
}

module.exports = {
    getItemName,
    getItemImage,
    getItemPage,
    getItemCategoryAndPage,
};
