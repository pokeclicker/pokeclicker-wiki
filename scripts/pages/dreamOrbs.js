const getOrbLoot = (orb) => {
  const weightSum = orb.items.reduce((acc, item) => acc + item.weight, 0);
  return orb.items.map(item => {
    return {
      name: item.item.id,
      image: item.item.type === ItemType.underground ? UndergroundItems.getByName(item.item.id)?.image : ItemList[item.item.id]?.image,
      itemType: item.item.type,
      itemTypeAsString: ItemType[item.item.type],
      chance: item.weight / weightSum,
    }
  });
};

module.exports = {
  getOrbLoot
};
