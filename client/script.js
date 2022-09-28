const form = document.getElementById(`searchBar`);

// form.addEventListener('submit',search);
form.addEventListener('submit',getAll);

function getAll(){
    fetch(`http://localhost:3000/database`)
    .then(r => r.json())
    .then(appendResults)
    .catch(console.warn)
}

function appendResults(results){
    const listOfResults = document.getElementById('results');
    for (let result of results){
        result = document.createElement('li');
        res.textContent = `${results.title} <br> ${results.des}`;
        listOfResults.append(result)
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
