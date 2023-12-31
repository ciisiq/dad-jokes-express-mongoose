const express = require('express');
const app = express();
const port = 3000;
const router = require('./router');
const bodyParser = require('body-parser');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.json());
// app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
