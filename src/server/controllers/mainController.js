const Router = require('express').Router();

const getItemsByFilter = require('./getItemsByFilter');
const postAddToCart = require('./postAddToCart');
const getDashboard = require('./getDashboard');

module.exports = Router
  .get('/api/dashboard', getDashboard)
  .get('/items', getItemsByFilter)
  .get('/checklist/items', getChecklistItems);
  .post('/reserve', postAddToCart);
