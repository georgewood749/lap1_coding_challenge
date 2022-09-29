const express = require('express');
const data = require('../server/data')
const router = express.Router();

router.get('/', (req, res) => {
    const result = data.all;
    res.send(result);
})

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedResult = data.findById(id);
    res.send(selectedResult);
})

router.get('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const selectedResult = data.findById(id);
        if (!selectedResult) {
            throw new Error('This cat does not exist')
        }
        res.send(selectedResult)
    } catch (err) {
        console.log(err)
        res.status(404).send({message: err.message})
    }
})

router.post('/', (req, res) => {
    res.status(405).send('Not Allowed yet!');
})

module.exports = router;
