const mongoose = require('mongoose')
const { Schema } = mongoose

const personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  summary : {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Person', personSchema)