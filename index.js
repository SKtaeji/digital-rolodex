const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Card = require('./model.js');

mongoose.connect('mongodb://localhost/rolex', {
  // useMongoClient: true
});

mongoose.Promise = Promise;

const app = express();

app.use(morgan('dev'));

app.get('/card', (req, res) => {
  Card.find().then(cards => {
    res.status(200).json(cards);
  })
})

app.post('/card', (req, res) => {
  Card.
})

app.listen(process.env.PORT || 3000);
