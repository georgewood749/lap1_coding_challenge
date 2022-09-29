//Set up Blind Event Listeners
document.getElementById(`searchBar`).addEventListener('submit',search);
document.getElementById('feelingLucky').addEventListener('click',getRandom);
document.getElementById('showMeAll').addEventListener('click',getAll);
document.getElementById('showSponsors').addEventListener('click',getSponsors);

//Initialised Variables
let luckyIndex = 0;
let luckyColor = ["initial", "red", "Yellow", "blue", "green"]

function getAll(e){
    e.preventDefault();
    fetch(`http://localhost:3000/database`)
    .then(r => r.json())
    .then(sendResults)
    .catch(console.warn)
}

function appendResult(result){
    const listOfResults = document.getElementById('results');
    const resTitle = document.createElement('li');
    listOfResults.append(resTitle);

    const resTitleURL = document.createElement('a');
    resTitleURL.href = result.url;
    resTitleURL.appendChild(document.createTextNode(result.title));
    resTitle.appendChild(resTitleURL);
    
    const resDes = document.createElement('li');
    resDes.textContent = result.des;
    const sublist = document.createElement('ul');
    sublist.append(resDes);
    resTitle.append(sublist);
}

function sendResult(result){
    document.getElementById('results').innerHTML = "";
    appendResult(result);
}

function sendResults(results){
    document.getElementById('results').innerHTML = "";
    results.forEach(appendResult);
}

function search(e){
    e.preventDefault();
    fetch(`http://localhost:3000/database`)
    .then(r => r.json())
    .then(data => {
        const filtered = filter(data, e.target.keywords.value);

        //ADs injection
        for(let i = filtered.length; i < 10; i++)
        {
            filtered.push((data.filter(x => x.id.toString().length === 3)[Math.floor(Math.random() * 9)]));
        }

        sendResults(filtered)
    })
    .catch(console.warn)
}

function filter(data, keywords){
    const keywordsArray = keywords.split(' ').filter(w => w.length !== 0);
    const matched = [];
    data.forEach(x => {
        for(keyword of keywordsArray){
            let kw = new RegExp(keyword,'ig');
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
    .then(data => sendResult(data.filter(x => x.id.toString().length === 3)[Math.floor(Math.random() * 9)]))
    .catch(console.warn)

    luckyIndex++
    document.getElementById('feelingLucky').style.backgroundColor = luckyColor[luckyIndex%5];
}

function getSponsors(e){
    e.preventDefault();
    fetch(`http://localhost:3000/database`)
    .then(r => r.json())
    .then(data => sendResults(data.filter(x => x.id.toString().length === 3)))
    .catch(console.warn)
}

function addition(a, b){
    return a + b;
}

module.exports = { getAll, appendResult, sendResult, sendResults, search, filter, getRandom, getSponsors, addition }
