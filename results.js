// const express = require('express');
// const router = express.Router();
// const Data = require('./server/data')

// router.get('/', (req, res) => {
//     console.log(req.query);
//     res.send(Data.all)
// })

// router.get('/:id', (req, res) => {
//     try {
//         const id = parseInt(req.params.id);
//         const selectedResult = Data.findByID(id);
//         if (!selectedResult) {
//             throw new Error("No result returned")
//         }
//         res.send(selectedResult)
//     } catch (err) {
//         console.log(err);
//         res.status(404).send({message: err.message})
//     }
// })

// module.exports = router;
