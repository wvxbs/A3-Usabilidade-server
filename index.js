const express = require('express');
const bodyParser = require('body-parser');  
const mongoose  = require('mongoose');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');

const port = process.env.PORT
const url = process.env.MONGO_URL

const Persons = require('./routes/Persons')

dotenv.config();

app.use(cors())
app.use(bodyParser.json());

app.use('/api/person', Persons)

mongoose
  .connect(url, {
    useNewUrlParser: true
  })
  .then(result => {
    console.log('MongoDB Connected');
  })
  .catch(error => {
    console.log(error);
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
