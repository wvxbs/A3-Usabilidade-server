;const express = require('express');
const mongoose  = require('mongoose');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT
const url = process.env.MONGO_URL

const Persons = require('./routes/Persons')

app.use(bodyParser.json)

app.use('/api/person', Persons)

mongoose
  .connect(url, {
    useNewUrlParser: true
  })
  .then(result => {
    console.log('MongoDB Conectado');
  })
  .catch(error => {
    console.log(error);
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
