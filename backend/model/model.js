const mongoose = require('./connection');
const Schema = mongoose.Schema;

const jokeSchema = new Schema({
  id: String,
  joke: String,
});

const Joke = mongoose.model('Joke', jokeSchema);

module.exports = Joke;
