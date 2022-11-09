const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors())

require('./routes.js')(app)

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
