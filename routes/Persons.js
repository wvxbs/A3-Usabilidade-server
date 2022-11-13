const express = require('express');
const router = express.Router();

const Person = require('../model/Person');

router.post('/new', (req, res) => {
  const newPerson = new Person({
    name: req.body.name,
    age: req.body.age,
    summary: req.body.summary,
    link: req.body.link,
    img: req.body.img
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

router.get('/', (req, res) => {
  Person.find()
    .then(persons => {
      res.json(persons);
    })
    .catch(error => res.status(500).json(error));
});
  

module.exports = router;