;const express = require('express');
const mongoose  = require('mongoose');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');

const port = process.env.PORT

const Persons = require('./routes/Persons')

app.use(cors())
dotenv.config();

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

app.get('/', (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
