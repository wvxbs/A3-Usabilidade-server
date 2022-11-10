const express = require('express');
const router = express.Router();

const Person = require('../model/Person');

router.post('/novo', (req, res) => {
  const newPerson = new Person({
    marca: req.body.name,
    modelo: req.body.email,
    password: req.body.password
  });

  newPerson
    .save()
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;