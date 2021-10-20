const Categories = require('../models/categories');

const listCategories = async (_req, res) => {
  const categories = await Categories.getCategories();

  res.status(200).render('categories/index', {categories});
};

module.exports = {listCategories};