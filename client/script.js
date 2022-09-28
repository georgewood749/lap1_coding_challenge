const form = document.getElementById(`searchBar`);

form.addEventListener('submit',search);
document.getElementById('feelingLucky').addEventListener('click',getRandom);
document.getElementById('showMeAll').addEventListener('click',getAll);

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
    .then(data => sendResults(filter(data, e.target.keywords.value)))
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
    .then(data => sendResult(data[Math.floor(Math.random()*data.length)]))
    .catch(console.warn)
}
