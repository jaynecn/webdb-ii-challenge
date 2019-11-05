const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
  db('showroomCars')
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      res.status(500).json({ message: 'Error message: ' + error.message });
    })
});


router.post('/', (req, res) => {
  // SELECT * FROM posts WHERE id = id;
  db('showroomCars')
  .insert({
    VIN: req.body.VIN, 
    Make: req.body.Make, 
    Model: req.body.Model,
    Mileage: req.body.Mileage,
    TransmissionType: req.body.TransmissionType,
    Status: req.body.Status
   })
    .then(result => {
      res.json({ message:  'Car created with id number ' + result});
    })
    .catch(error => {
      res.status(500).json({ message: 'Error message: ' + error.message });
    })
});


module.exports = router;