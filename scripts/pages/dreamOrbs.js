const getOrbLoot = (orb) => {
  const weightSum = orb.items.reduce((acc, item) => acc + item.weight, 0);
  return orb.items.map(item => {
    return {
      name: item.item.id,
      itemType: ItemType[item.item.type],
      chance: item.weight / weightSum,
    }
  });
};

module.exports = {
  getOrbLoot
};
