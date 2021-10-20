const express = require('express');

const categoriesController = require('./controllers/categoriesController');

const app = express();

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/', (_req, res) => res.redirect('/categories'));

app.get('/categories', categoriesController.listCategories);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});