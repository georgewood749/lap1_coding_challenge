const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());


//Homepage
app.get('/', (req, res) => {
    res.send('Hello there!');
});

app.get('/1', (req, res) => {
    res.send('This is a test.');
});

app.post('/', (req, res) => {
    res.status(405).send('Not allowd!');
});


//route for database
const Data = require('./data')
app.get('/database', (req,res) => {

    res.send('hi')

})




module.exports = app;

