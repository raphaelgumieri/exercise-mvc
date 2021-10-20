const Joke = require('../models/joke');

const listJokes = async(_req, res) => {
  const joke = await Joke.getJokes();

  res.status(200).render('jokeView.ejs', {joke});
};

module.exports = {listJokes};