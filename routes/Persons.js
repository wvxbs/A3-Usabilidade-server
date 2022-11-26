const express = require('express')
const router = express.Router()

const Person = require('../model/Person')

router.post('/', (req, res) => {
  const newPerson = new Person({  
    "name": req.body.name,
    "age": req.body.age,
    "summary": req.body.summary,
    "link": req.body.link,
    "img": req.body.img
  })

  newPerson
    .save()
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.get('/', (req, res) => {
  Person.find()
    .then(persons => {
      res.json(persons)
    })
    .catch(error => res.status(500).json(error))
})

router.delete('/:id', (req, res) => {
  Person.findOneAndDelete({_id: req.params.id}, function(error, person) {
      if (!error && person) {
          console.log(person);
          console.log("person successfully deleted")
      }
      else {
          console.log("error")
      }
      res.redirect("/");
    })
    .catch(error => res.status(500).json(error))
})


module.exports = router