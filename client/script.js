const form = document.getElementById(`searchBar`);

form.addEventListener('submit',search);



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
