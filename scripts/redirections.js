const redirections = [
    ({type, name}) => {
        if (type === 'Pokemon') {
            return {
                type: 'Pokémon',
                name
            };
        }
    },
    {
        type: 'Mega Pokemon',
        name: '*',
        redirect: {
            type: 'Mega Pokémon'
        }
    },
];

const matches = (patternOrName, string) => {
    if (typeof patternOrName === 'string') {
        return patternOrName === string || patternOrName === '*';
    } else if (patternOrName instanceof RegExp) {
        return patternOrName.test(string);
    } else {
        return false;
    }
}

const redirect = ({type, name}) => {
    for (const redirection of redirections) {
        if (typeof redirection === 'function') {
            const result = redirection({type, name});
            if (result) {
                return result;
            }
        } else if (typeof redirection === 'object') {
            if (matches(redirection.type, type) && matches(redirection.name, name)) {
                return {
                    type: redirection.redirect?.type ?? type,
                    name: redirection.redirect?.name ?? name
                };
            }
        }
    }
};

module.exports = {
    redirect,
    redirections
};
