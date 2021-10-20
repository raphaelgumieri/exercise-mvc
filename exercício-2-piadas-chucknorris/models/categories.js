const axios = require('axios');

const CN_ENDPOINT = 'https://api.chucknorris.io/jokes/categories';

const getCategories = async() => {
  const { data } = await axios
  .get(CN_ENDPOINT)
  .catch((error) => console.log(error));
  return data;
};

module.exports = {
  getCategories,
};