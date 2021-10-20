const axios = require('axios');

const CATEGORY_ENDPOINT = 'https://api.chucknorris.io/jokes/categories';


const getCategories = async() => {
  const { data } = await axios
  .get(CATEGORY_ENDPOINT)
  .catch((error) => console.log(error));
  return data;
};

const getJokeByCategory = async(category) => {
  const JOKE_ENDPOINT = `https://api.chucknorris.io/jokes/random?category=${category}`;
  const {data: { value } } = await axios
  .get(JOKE_ENDPOINT)
  .catch((error) => console.log(error));
  return value;

};

module.exports = {
  getCategories,
  getJokeByCategory,
};