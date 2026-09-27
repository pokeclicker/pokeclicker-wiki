const { requirementHints } = require('../gameHelper');

const toEncounters = (names, req, weight = 1) => {
    const hints = requirementHints(req, false);
    return names.map((name) => ({ name, hints, weight }));
};

const getRouteEncounterGroups = (route) => {
    const { land, water, headbutt, special } = route.pokemon;
    const specialEncounters = special.flatMap((s) => toEncounters(s.pokemon, s.req, s.weight));

    return [
        { title: 'Land', pokemon: toEncounters(land) },
        { title: 'Water', note: land.length ? 'Requires the Super Rod.' : null, pokemon: toEncounters(water) },
        { title: 'Headbutt', pokemon: toEncounters(headbutt) },
        {
            title: 'Special',
            note: specialEncounters.some((e) => e.hints.length)
                ? 'Pokémon marked 🔒 only appear when certain conditions are met; hover or tap the 🔒 to see those conditions.'
                : null,
            pokemon: specialEncounters,
        },
    ].filter((g) => g.pokemon.length);
};

module.exports = {
    getRouteEncounterGroups,
};
