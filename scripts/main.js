var pageType = ko.observable();
var pageName = ko.observable();
$('document').off('ready');
$(document).ready(() => {
    pageType($('#page-type').val());
    pageName($('#page-name').val());
    ko.applyBindings({});
});
window.onbeforeunload = () => {
    Settings.saveDefault();
}


// Map hints to requirements
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

App.game = {
    breeding: new Breeding(),
}


// TODO: Fix these up somehow..
// Overrides, these methods don't work if game not started..
PokemonHelper.getPokemonWandering = () => [];
PokemonHelper.getPokemonDiscord = () => [];
