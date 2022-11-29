const express = require('express')
const router = express.Router()

const Person = require('../model/Person')

router.post('/', (req, res) => {
  const newPerson = new Person({  
    "name": req.body.name,
    "age": req.body.age,
    "summary": req.body.summary,
    "link": req.body.link
  })

  newPerson
    .save()
    .then(result => {
      res.status(200).json(result)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.get('/', (req, res) => {
  Person.find()
    .then(persons => {
      res.status(200).json(persons)
    })
    .catch(error => res.status(500).json(error))
})

router.delete('/delete/:id', (req, res) => {
  Person.findOneAndDelete({ _id: req.params.id })
      console.log(result);
      res.status(200).json({message: 'Pessoa deletada'});
    })
    .catch(error => res.status(500).json(error))
})

module.exports = router