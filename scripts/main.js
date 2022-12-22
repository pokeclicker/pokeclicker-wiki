
// Setup our markdown editor
const md = new markdownit();

md.renderer.rules.table_open = function(tokens, idx) {
    return '<table class="table table-hover table-striped table-bordered">';
};

// Setup our pages
const pageType = ko.observable();
const pageName = ko.observable();
const pageOutput = ko.observable('');


// Download remote data when pagename changes
pageName.subscribe((v)=>{
    pageOutput('');
    window.location.hash = `#!${pageType()}/${pageName()}`;
    fetch(`./data/${pageType()}/${pageName()}.md`)
        .then((response) => response.status == 200 ? response.text() : '')
        .then((data) => {
            if (!data) return;
            pageOutput(md.render(data));
        });
});

(() => {
    const [ type, name ] = window.location.hash.substr(2).split('/');
    pageType(decodeURI(type || ''));
    pageName(decodeURI(name || ''));
})();

$('document').off('ready');
$(document).ready(() => {
    ko.applyBindings({});
});
window.onbeforeunload = () => {
    Settings.saveDefault();
}

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

// Custom binds as these aren't loaded
App.game = {
    breeding: new Breeding(),
}

// TODO: Fix these up somehow..
// Overrides, these methods don't work if game not started..
PokemonHelper.getPokemonWandering = () => [];
PokemonHelper.getPokemonDiscord = () => [];
