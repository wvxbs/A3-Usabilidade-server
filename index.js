const express = require('express')
const bodyParser = require('body-parser')  
const mongoose  = require('mongoose')
const app = express()
const dotenv = require('dotenv')

const Persons = require('./routes/Persons')

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true
  })
  .then(result => {
    console.log('MongoDB Connected')
  })
  .catch(error => {
    console.log(error)
  })

dotenv.config()

app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "*")
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use('/person', Persons)

app.listen(process.env.API_PORT, () => {
  console.log(`Server running at http://localhost:${process.env.API_PORT}/`)
})