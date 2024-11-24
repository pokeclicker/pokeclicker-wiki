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

function GenericDeal(params) {
  this.model = params.model;
}

ko.components.register('generic-deal-item', {
  viewModel: GenericDeal,
  template: { fromUrl: 'generic-deal-item' },
});
