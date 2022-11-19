const express = require('express');
const bodyParser = require('body-parser');  
const mongoose  = require('mongoose');
const app = express();
const dotenv = require('dotenv');

const Persons = require('./routes/Persons')

dotenv.config();

app.use(bodyParser.json());

app.use('/api/person', Persons)

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true
  })
  .then(result => {
    console.log('MongoDB Connected');
  })
  .catch(error => {
    console.log(error);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}/`);
});