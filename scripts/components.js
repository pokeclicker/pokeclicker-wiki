var templateFromUrlLoader = {
  loadTemplate: function(name, templateConfig, callback) {
    $.get(`/templates/${templateConfig.fromUrl}`, function(markupString) {
      ko.components.defaultLoader.loadTemplate(name, markupString, callback);
    });
  }
};
ko.components.loaders.unshift(templateFromUrlLoader);

function PokemonSummary(params) {
  this.pokemon = params.pokemonData;
}

ko.components.register('pokemon-summary', {
  viewModel: PokemonSummary,
  template: { fromUrl: 'pokemon-summary' },
});

function RouteEncounter(params) {
  this.encounter = params.encounter;

  // Show the Pokémon summary below the tile when it wouldn't fit between the tile and the fixed navbar
  this.placeSummary = (data, event) => {
    const tile = event.currentTarget;
    const summary = tile.querySelector('.custom-tooltip-content');
    const navbarBottom = document.getElementById('nav-bar')?.getBoundingClientRect().bottom ?? 0;
    tile.classList.remove('route-encounter-below');
    tile.classList.toggle('route-encounter-below', summary.getBoundingClientRect().top < navbarBottom);
  };
}

ko.components.register('route-encounter', {
  viewModel: RouteEncounter,
  template: { fromUrl: 'route-encounter' },
});

function GenericDeal(params) {
  this.model = params.model;
}

ko.components.register('generic-deal-item', {
  viewModel: GenericDeal,
  template: { fromUrl: 'generic-deal-item' },
});
