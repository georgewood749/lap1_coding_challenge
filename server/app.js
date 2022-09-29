const express = require('express');
const cors = require('cors');
// const resultRoutes = require('../controllers/results')

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

app.post('/database', (req, res) => {
    res.status(405).send('Not allowed!');
});


//route for database
const Data = require('./data')
app.get('/database', (req,res) => { res.send(Data.all);})

// app.use('/database', resultRoutes);

// app.get('/database/:id', (req, res) => {
//     const id = req.params.id;
//     if (id < Data.length){
//         res.send(Data[id])
//     } else {
//         res.status(404).send('Not found!');
//     }
// })

app.get('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id - 1);
        const selectedResult = Data.findById(id);
        if (!selectedResult) {
            throw new Error('This data does not exist')
        }
        res.send(selectedResult)
    } catch (err) {
        console.log(err)
        res.status(404).send({message: err.message})
    }
})


module.exports = app;

