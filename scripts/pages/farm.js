/**
 * Returns the primary mutation for a berry.
 * Filters out enigma mutations, as they cannot be used to obtain a berry for the first time.
 * Unless includeBlankMutations is true, filters out blank mutations, as they are not regular mutations.
 * @param berry the berry to get the primary mutation for, as a BerryType
 * @param includeBlankMutations whether to include blank mutations in the results
 * @return the primary mutation for the berry
 */
const getPrimaryMutation = (berry, includeBlankMutations = false) => {
    return App.game.farming.mutations.filter(mutation => mutation.mutatedBerry === berry // mutation results in this berry
        && (!mutation.berryReqs || mutation.berryReqs.length !== 1 || mutation.berryReqs[0] !== BerryType.Enigma) // mutation is not an enigma mutation
        && !(mutation instanceof BlankMutation && !includeBlankMutations) // mutation is not a blank mutation or includeBlankMutations is true
    )[0];
};

module.exports = {
    getPrimaryMutation,
};
