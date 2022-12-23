/*
Initializing anything we need from the game files
*/

// Add bootstrap 5 themes (needs to load early)
themes = Settings.getSetting('theme');
themes.options.push(new SettingOption('Morph', 'morph'));
themes.options.push(new SettingOption('Quartz', 'quartz'));
themes.options.push(new SettingOption('Vapor', 'vapor'));
themes.options.push(new SettingOption('Zephyr', 'zephyr'));
themes.options.sort((a, b) => (a.text).localeCompare(b.text));

// Custom binds as these aren't loaded
const multiplier = new Multiplier();
App.game = new Game(
  new Update(),
  new Profile(),
  new Breeding(multiplier),
  new Pokeballs(),
  new Wallet(multiplier),
  new KeyItems(),
  new BadgeCase(),
  new OakItems([20, 50, 100], multiplier),
  new OakItemLoadouts(),
  new PokemonCategories(),
  new Party(multiplier),
  new Gems(),
  new Underground(),
  new Farming(multiplier),
  new LogBook(),
  new RedeemableCodes(),
  new Statistics(),
  new Quests(),
  new SpecialEvents(),
  new Discord(),
  new AchievementTracker(),
  new Challenges(),
  new BattleFrontier(),
  multiplier,
  new SaveReminder(),
  new BattleCafeSaveObject(),
  new DreamOrbController()
);
App.game.farming.initialize();

// TODO: Fix these up somehow..
// Overrides, these methods don't work if game not started..
PokemonHelper.getPokemonWandering = () => [];
PokemonHelper.getPokemonDiscord = () => [];

// Map our requirment hints to the requirement
Requirement.prototype.toJSON = function() {
  const req = this.__proto__.constructor.name === 'LazyRequirementWrapper'
    ? this.unwrap()
    : this;

  return {
    ...Object.fromEntries(Object.entries(req)),
    hint: req.hint(),
    __class: req.__proto__.constructor.name,
  };
};

module.exports = App;
