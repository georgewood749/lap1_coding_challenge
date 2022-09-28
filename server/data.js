const data = [
    //10 results
    {
        id: 1,
        url: 'https://www.pokemon.com/uk/',
        title: 'The Official Pokémon Website | Pokemon.co.uk',
        des: 'The official source for Pokémon news and information on the Pokémon Trading Card Game, apps, video games, animation, and the Pokédex.'
    },
    {
        id: 2,
        url: 'https://en.wikipedia.org/wiki/Pok%C3%A9mon',
        title: 'Pokémon - Wikipedia',
        des: 'Pokémon is a Japanese media franchise managed by The Pokémon Company, a company founded by Nintendo, Game Freak, and Creatures.'
    },
    {
        id: 3,
        url: 'https://pokemongolive.com/en/',
        title: 'Pokémon GO',
        des: 'Join Trainers around the world and play Pokémon GO together in new and exciting ways. Overcome challenges, catch more Pokémon, and forge friendships through ...'
    },
    {
        id: 4,
        url: 'https://www.youtube.com/user/pokemon',
        title: 'Pokémon - YouTube',
        des: 'The Official Pokémon YouTube channel'
    },
    {
        id: 5,
        url: 'https://pokemonshowdown.com/',
        title: 'Pokémon Showdown! battle simulator',
        des: 'Pokémon Showdown is a Pokémon battle simulator. Play Pokémon battles online! Play with randomly generated teams, or build your own! Fully animated!'
    },
    {
        id: 6,
        url: 'https://www.imdb.com/title/tt0168366/',
        title: 'Pokémon (TV Series 1997- ) - IMDb',
        des: "Pokémon: Created by Junichi Masuda, Ken Sugimori, Satoshi Tajiri. With Ikue Ôtani, Rica Matsumoto, Rodger Parsons, Shin'ichirô Miki."
    },
    {
        id: 7,
        url: 'https://scarletviolet.pokemon.com/en-us/',
        title: 'Pokémon Scarlet and Pokémon Violet | Official Website',
        des: 'Discover more about the new open-world Pokémon adventure, coming to Nintendo Switch in November 2022. ... Pokémon™ Scarlet. Pokémon™ Violet.'
    },
    {
        id: 8,
        url: 'https://twitter.com/pokemon?lang=en',
        title: 'Pokémon (@Pokemon) / Twitter',
        des: "In Pokémon Scarlet and Pokémon Violet, the school you've enrolled in hosts a special independent study project. The theme of this assignment is “A Treasure ..."
    },
    {
        id: 9,
        url: 'https://www.reddit.com/r/pokemon/',
        title: "Pokémon: Gotta Catch 'Em All! - Reddit",
        des: 'r/pokemon: r/pokemon is an unofficial Pokémon fan community. This is the place for most things Pokémon on Reddit—TV shows, video games, toys …'
    },
    {
        id: 10,
        url: 'https://www.twitch.tv/pokemon',
        title: 'Pokemon - Twitch',
        des: 'Official Twitch channel of The Pokémon Company International.'
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
