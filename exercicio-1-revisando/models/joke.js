const axios = require('axios');

const URL = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single';

const getJokes = async() => {
  const { data: {joke } } = await axios
  .get(URL)
  .catch((error) => console.log(error));
  return joke;
};

module.exports = {
  getJokes,
};
