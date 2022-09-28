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
    //10 sponser results
    {   id: 101,
        url: "https://www.cat.com/",
        title: "Cat.com | Cat | Caterpillar",
        des: "Welcome! Select a region and language to continue. Select a Region, Africa, Middle-East, Asia, Australia, New Zealand, Eurasia, Europe, Latin ..."
    }
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
