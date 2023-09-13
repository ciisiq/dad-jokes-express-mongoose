const jokes = require('../model/model');

// Get all saved dad Jokes
async function getAllJokes(req, res) {
  try {
    res.send(await jokes.find({}));
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

// Sava a new Joke
async function addJoke(req, res) {
  const joke = req.body;
  try {
    res.status(201);
    await jokes.create(joke);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

// Delete a Joke
async function deleteJoke(req, res) {
  try {
    res.send(await jokes.findByIdAndRemove({ _id: req.params.id }));
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

module.exports = { getAllJokes, deleteJoke, addJoke };
