// Load our error page for when we need it
errorPage = '';
$.get('404.html', (data) => {
    errorPage = data;
}).fail(() => {
    pageElement.html(`<h1>Page not found</h1>`);
});

// Setup our pages observables
const pageType = ko.observable();
const pageName = ko.observable();
const applyBindings = ko.observable(false);

// This is our main function for changing pages
// Look at onhashchange for what happens after
function gotoPage(type, name) {
    // Update our page hash, so if we reload it will load this page
    window.location.hash = `#!${encodeURI(type).replace(/%20/g, '_')}/${encodeURI(name).replace(/%20/g, '_')}`;
}

// When the hash changes, we will load the new page
// This also allows us to go forwards and back in history
onhashchange = (event) => {
    console.log(event.newURL);
    const [ type, name ] = event.newURL.replace(/.*#!/, '').split('/').map(i => decodeURI(i || '').replace(/_/g, ' '));
    pageType(type);
    pageName(name);
    const pageElement = $('#wiki-page-content');
    pageElement.html('');
    // Loading...
    const template = document.querySelector('#loading');
    const clone = template.content.cloneNode(true);
    pageElement.append(clone);
    let page = '';
    if (!pageType()&&!pageName()) {
        page = 'pages/home.html';
    } else if (!pageName()) {
        page = `pages/${encodeURIComponent(pageType())}/overview.html`;
    } else {
        page = `pages/${encodeURIComponent(pageType())}/main.html`;
    }
    $.get(page, (data) => {
        pageElement.html(data);
        applyBindings(true);
    }).fail(() => {
        pageElement.html(errorPage);
    });

    const pageElementCustom = $('#wiki-page-custom-content');
    pageElementCustom.html('');
    $.get(`data/${encodeURIComponent(pageType()).replace(/%/g, '%25')}/${encodeURIComponent(pageName()).replace(/%/g, '%25')}.md`, function(data) {
        pageElementCustom.html(md.render(data));
    });
}

// Setup our markdown editor
const md = new markdownit();
md.renderer.rules.table_open = function(tokens, idx) {
    return '<table class="table table-hover table-striped table-bordered">';
};

// Load the page the user is trying to visit
(() => {
    const [ type, name ] = window.location.hash.substr(2).split('/');
    window.location.hash = `#!loading`;
    gotoPage(decodeURIComponent(type || ''), decodeURIComponent(name || ''));
})();

$('document').off('ready');
$(document).ready(() => {
    ko.applyBindings({}, document.getElementById('nav-bar'));
    applyBindings.subscribe((v) => {
        // This doesn't work as we can only bind to an element once..
        if (v) {
            applyBindings(false);
            ko.cleanNode(document.getElementById('wiki-page-content'));
            ko.applyBindings({}, document.getElementById('wiki-page-content'))
        }
    })
});

// Save any settings the user has set before they leave
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


/*
    AUTO FILL FOR SEARCH BAR
*/
const searchOptions = [
    {
        display:'Home',
        type: '',
        page: '',
    },
    {
        display:'Settings',
        type: 'Settings',
        page: '',
    },
    // Items
    {
        display:'Items',
        type: 'Items',
        page: '',
    },
    ...Object.values(ItemList).map(i => ({
        display: i.displayName,
        type: 'Items', 
        page: i.displayName,
    })),
    // Pokémon
    {
        display:'Pokémon',
        type: 'Pokemon',
        page: '',
    },
    ...Object.values(pokemonList).map(p => ({
        display: p.name,
        type: 'Pokemon',
        page: p.name,
    })),
    // Dungeons
    {
        display:'Dungeons',
        type: 'Dungeons',
        page: '',
    },
    ...Object.values(dungeonList).map(d => ({
        display: d.name,
        type: 'Dungeons',
        page: d.name,
    })),
    // Gems
    {
        display:'Gems',
        type: 'Gems',
        page: '',
    },
    ...GameHelper.enumStrings(PokemonType).filter(t => t != 'None').map(t => ({
        display: `${t} Gem`,
        type: 'Gems',
        page: t,
    })),
];

function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
// This is the function which figures out the results to show
var substringMatcher = function(searchData) {
  return function findMatches(query, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(escapeRegExp(query), 'ig');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    searchData.forEach((d, i) => {
      if (substrRegex.test(d.display)) {
        matches.push(d);
      }
    });
    cb(matches);
  };
};

// Initiate out autofill/typeahead
$('#search').typeahead({
  hint: true,
  highlight: true,
  minLength: 1,
  classNames: {
    menu: 'dropdown-menu',
    suggestion: 'dropdown-item',
    cursor: 'active',
  }
},
{
  name: 'Search',
  source: substringMatcher(searchOptions),
  display: 'display',
  templates: {
    notFound: '<a class="dropdown-item disabled">No results found...</a>',
  }
});
$('#search').bind('typeahead:select', function(ev, suggestion) {
    gotoPage(suggestion.type, suggestion.page);
});
$('#search').bind('typeahead:autocomplete', function(ev, suggestion) {
    gotoPage(suggestion.type, suggestion.page);
});
