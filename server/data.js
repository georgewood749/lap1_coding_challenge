const data = [
    //10 results
    {
        id: 1,
        url: 'https://en.wikipedia.org/wiki/Pok%C3%A9mon',
        title: 'Pokémon - Wikipedia',
        des: 'Pokémon is a Japanese media franchise managed by The Pokémon Company, a company founded by Nintendo, Game Freak, and Creatures.'
    },
    {
        id: 2,
        url: 'https://www.pokemon.com/uk/',
        title: 'The Official Pokémon Website | Pokemon.co.uk',
        des: 'The official source for Pokémon news and information on the Pokémon Trading Card Game, apps, video games, animation, and the Pokédex.'
    },
    {
        id: 3,
        url: ,
        title: ,
        des:
    },
    {
        id: 4,
        url: ,
        title: ,
        des:
    },
    {
        id: 5,
        url: ,
        title: ,
        des:
    },
    {
        id: 6,
        url: ,
        title: ,
        des:
    },
    {
        id: 7,
        url: ,
        title: ,
        des:
    },
    {
        id: 8,
        url: ,
        title: ,
        des:
    },
    {
        id: 9,
        url: ,
        title: ,
        des:
    },
    {
        id: 10,
        url: ,
        title: ,
        des:
    },

    //10 sponser results
]




class Data {
    constructor(data) {
        this.id = data.id;
        this.url = data.url;
        this.title = data.title;
        this.des = data.des;
    }

    static get all() {
        const results = data.map((result) => new Data(result));
        return results;
    }

    static findByID(id) {
        try {
            const results = data.filter((result) => result.id === id)[0]
            const result = new Data(results);
            return result;
        } catch (err) {
            throw new Error("That page does not exist!")
        }
    }



}

module.exports = Data;
