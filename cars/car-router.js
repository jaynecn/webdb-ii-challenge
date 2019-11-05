const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
    .then(result => {
      res.json({ message: 'You have made contact with the cars api'})
    })
    .catch(error => {
      res.status(500).json({ message: 'Error message: ' + error.message });
    })
});


// router.get('/:id', (req, res) => {
//   // SELECT * FROM posts WHERE id = id;
//   db('accounts').where({ id: req.params.id })
//     .then(result => {
//       res.json(result[0])
//     })
//     .catch(error => {
//       res.status(500).json({ message: 'Error message: ' + error.message });
//     })
// });

// router.post('/', (req, res) => {
//   // SELECT * FROM posts WHERE id = id;
//   db('accounts').insert({ name: req.body.name, budget: req.body.budget })
//     .then(result => {
//       res.json({ message:  'Account created with id number ' + result});
//     })
//     .catch(error => {
//       res.status(500).json({ message: 'Error message: ' + error.message });
//     })
// });

// router.put('/:id', (req, res) => {
//   db('accounts').where({ id: req.params.id }).update({ name: req.body.name, budget: req.body.budget})
//     .then(result => {
//       res.json(`Account number ${req.params.id} updated`);
//     })
//     .catch(error => {
//       res.status(500).json({ message: 'Error message: ' + error.message });
//     })
// })

// router.delete('/:id', (req, res) => {
//   db('accounts').where({ id: req.params.id}).del()
//     .then(result => {
//       res.json(`Account number ${req.params.id} deleted`);
//     })
//     .catch(error => {
//       res.status(500).json({ message: 'Error message: ' + error.message });
//     })
// })

module.exports = router;