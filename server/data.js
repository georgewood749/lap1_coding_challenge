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
    {   id: 101,
        url: "https://www.cat.com/",
        title: "(!SPONSORS!) Cat.com | Cat | Caterpillar",
        des: "Welcome! Select a region and language to continue. Select a Region, Africa, Middle-East, Asia, Australia, New Zealand, Eurasia, Europe, Latin ..."
    },
    {   id: 102,
        url: "https://www.mcdonalds.com/gb/en-gb.html",
        title: "(!SPONSORS!) McDonald's UK",
        des: "McDelivery®. Your favourites, delivered. Order through the McDonald's app, Uber Eats or Just Eat and we'll bring it to you."
    },
    
    {   id: 103,
        url: "https://www.dominos.co.uk/",
        title: "(!SPONSORS!) Domino's Pizza: Order Online For A Tasty Pizza Delivery",
        des: "Visit Domino's Pizza for a tasty pizza delivery or takeaway near me. Order online today for a piping hot pizza delivered directly to your door."
    },
    
    {   id: 104,
        url: "https://www.getfutureproof.co.uk/",
        title: "(!SPONSORS!) futureproof: Technology Training Company",
        des: "futureproof is a technology training company, launching and developing diverse, high-quality junior talent into your tech teams."
    },
    
    {   id: 105,
        url: "https://getbootstrap.com/",
        title: "(!SPONSORS!) Bootstrap · The most popular HTML, CSS, and JS library in the ...",
        des: "Bootstrap utilizes Sass for a modular and customizable architecture. Import only the components you need, enable global options like gradients and shadows, and ..."
    },
    {   id: 106,
        url: "https://code.visualstudio.com/",
        title: "(!SPONSORS!) Visual Studio Code - Code Editing. Redefined",
        des: "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications. Visual Studio Code is free and ..."
    },
    {   id: 107,
        url: "https://github.com/",
        title: "(!SPONSORS!) GitHub: Where the world builds software · GitHub",
        des: "GitHub is where over 83 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, ..."
    },
    {   id: 108,
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        title: "(!SPONSORS!) Important stuff here",
        des: "DO NOT OPEN"
    },
    {   id: 109,
        url: "https://en.wikipedia.org/wiki/Thomas_Crowther_(ecologist)",
        title: "(!SPONSORS!) Thomas Crowther (ecologist) - Wikipedia",
        des: "Thomas Ward Crowther (born 1986) is a professor of ecology at ETH Zurich and co-chair of the advisory board for the United Nations Decade on Ecosystem ..."
    },
    {   id: 110,
        url: "https://github.com/georgewood749/lap1_coding_challenge",
        title: "(!SPONSORS!) georgewood749/lap1_coding_challenge",
        des: "This is the Github repo for this challenge."
    }, 
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
