//Set up Blind Event Listeners
document.getElementById(`searchBar`).addEventListener('submit',search);
document.getElementById('feelingLucky').addEventListener('click',getRandom);
document.getElementById('showMeAll').addEventListener('click',getAll);
document.getElementById('showSponsors').addEventListener('click',getSponsors);

//Initialised Variables for getRandom()
let luckyIndex = 0;
let luckyColor = ["initial", "red", "Yellow", "blue", "green"]


function getAll(e){
    e.preventDefault();
    fetch(`http://localhost:3000/database`)
    .then(r => r.json())
    .then(sendResults)
    .catch(console.warn)
}

//Clear the list and append one result on the page
function sendResult(result){
    document.getElementById('results').innerHTML = "";
    appendResult(result);
}

//Clear the list and append all results on the page
function sendResults(results){
    document.getElementById('results').innerHTML = "";
    results.forEach(appendResult);
    //?When there is only one result, .forEach() does not work and error"would not iterates"
}

//Prepare the HTML elements for the results
function appendResult(result){
    //create a <li> and append to <ul id="results">
    const listOfResults = document.getElementById('results');
    const resTitle = document.createElement('li');
    listOfResults.append(resTitle);

    //create a <a> for the url and append to <li>
    const resTitleURL = document.createElement('a');
    resTitleURL.href = result.url;
    resTitleURL.appendChild(document.createTextNode(result.title));
    resTitle.appendChild(resTitleURL);
    
    //create a <ul> and <li> for the description and append to the title
    const resDes = document.createElement('li');
    resDes.textContent = result.des;
    const sublist = document.createElement('ul');
    sublist.append(resDes);
    resTitle.append(sublist);

//!End results:
    // <ul id="results">
    //     <li><a href="https://en.wikipedia.org/wiki/Thomas_Crowther_(ecologist)">(!SPONSORS!) Thomas Crowther (ecologist) - Wikipedia</a>
    //         <ul>
    //             <li>Thomas Ward Crowther (born 1986) is a professor of ecology at ETH Zurich and co-chair of the advisory board for the United Nations Decade on Ecosystem ...</li>
    //         </ul>
    //     </li>
    // </ul>
}

//search() will filter the elements in the database that has a matching inputed keyword(s)
function search(e){
    e.preventDefault();
    fetch(`http://localhost:3000/database`)
    .then(r => r.json())
    .then(data => {
        //filtering algorithm
        const filtered = filter(data, e.target.keywords.value);

        //ADs injection to generate the consistantly 10 results
        for(let i = filtered.length; i < 10; i++)
        {
            filtered.push((data.filter(x => x.id.toString().length === 3)[Math.floor(Math.random() * 9)]));
        }

        //send all filtered results
        sendResults(filtered)
    })
    .catch(console.warn)
}

function filter(data, keywords){
    //make inputed keywords into an array of individual keyword
    //.filter() is to filtered out all '' entries for some wired reason
    const keywordsArray = keywords.split(' ').filter(w => w.length !== 0);
    //initialise an empty array for the matched items
    const matched = [];
    //check every single entry in the database to see if there is any match with the inputed keywords
    data.forEach(x => {
        for(keyword of keywordsArray){
            let kw = new RegExp(keyword,'ig');
            //If there is a match either from title or description, that entry will be pushed to return later
            if (x.title.match(kw) || x.des.match(kw)){
                matched.push(x);
                break;
            }
        };
    })
    return matched
}

function getRandom(e){
    e.preventDefault();
    fetch(`http://localhost:3000/database`)
    .then(r => r.json())
    .then(data => sendResults(
        //All sponsors have a 3 digit id, exactly 10 sponsors in total
        data.filter(x => x.id.toString().length === 3)[Math.floor(Math.random() * 9)]
        ))
    .catch(console.warn)

    //make the button colourfull. Toggle in 5 different colors, including normal.
    luckyIndex++
    document.getElementById('feelingLucky').style.backgroundColor = luckyColor[luckyIndex%5];
}

//to show all sponsors
function getSponsors(e){
    e.preventDefault();
    fetch(`http://localhost:3000/database`)
    .then(r => r.json())
    .then(data => sendResults(data.filter(x => x.id.toString().length === 3)))
    .catch(console.warn)
}
