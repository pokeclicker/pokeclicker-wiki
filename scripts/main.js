var pageType = ko.observable();
var pageName = ko.observable();

function onPageChange() {
    var pageElement = $('#wiki-page-content');
    pageElement.html(''); //TODO: spinner?
    if (!pageType()&&!pageName()) {
        $.get('home.html', function(data) {
            pageElement.html(data);
        });
    } else if (!pageName()) {
        $.get(pageType() + '/overview.html', function(data) {
            pageElement.html(data);
        });
    } else {
        $.get(pageType() + '/main.html', function(data) {
            pageElement.html(data);
            console.log(data);
        });
    }
}
$('document').off('ready');
$(document).ready(() => {
    pageType($('#page-type').val());
    pageName($('#page-name').val());
    pageType.subscribe(onPageChange);
    pageName.subscribe(onPageChange);

    onPageChange();
    
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
