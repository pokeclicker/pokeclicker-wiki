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
    switch (itemType) {
        case ItemType.item:
            return `Items/${ItemList[itemId].displayName}`;
        case ItemType.underground:
            return `Items/${UndergroundItems.list.find((i) => i.name === itemId)?.name}`;
        case ItemType.berry:
            return `Berries/${BerryType[itemId]}`;
        case ItemType.gem:
            return `Gems/${PokemonType[itemId]}`;
        default:
            return '';
    }
}

module.exports = {
    getItemName,
    getItemImage,
    getItemPage
};
