const form = document.getElementById(`searchBar`);

// form.addEventListener('submit',search);
form.addEventListener('submit',getAll);

function getAll(e){
    e.preventDefault();
    fetch(`http://localhost:3000/database`)
    .then(r => r.json())
    .then(sendResults)
    .catch(console.warn)
}

function sendResults(results){
    const listOfResults = document.getElementById('results');
    listOfResults.innerHTML = "";
    console.log(results);
    for (let result of results){
        let resTitle = document.createElement('li');
        listOfResults.append(resTitle);

        let resTitleURL = document.createElement('a');
        resTitleURL.href = result.url;
        resTitleURL.appendChild(document.createTextNode(result.title));
        resTitle.appendChild(resTitleURL);
        
        let resDes = document.createElement('li');
        resDes.textContent = result.des;
        let sublist = document.createElement('ul');
        sublist.append(resDes);
        resTitle.append(sublist);
    }
}


function search(e){
    e.preventDefault();

    const searchingData = {
        keywords: e.target.keywords.value
    };

    fetch(`http://localhost:3000/database`)
    .then(r => r.json())
    .then(filtered(searchingData.keywords))
    .catch(console.warn)
}

function filtered(keywords){
    //algorithm to filter database using keywords
    console.log(keywords);
}
