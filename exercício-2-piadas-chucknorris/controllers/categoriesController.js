const Categories = require('../models/categories');

const listCategories = async (_req, res) => {
  const categories = await Categories.getCategories();

  res.status(200).render('categories/index', {categories});
};

const getJokeByCategory = async (req, res) => {
  const {category} = req.params;
  const joke = await Categories.getJokeByCategory(category);
  res.status(200).render('categories/joke', {joke});
};

module.exports = {listCategories, getJokeByCategory};