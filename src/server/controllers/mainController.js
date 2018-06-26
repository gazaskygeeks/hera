const Router = require('express').Router();

const getHomePage = require('./getHomePage');
const getItemsByFilter = require('./getItemsByFilter');
const postAddToCart = require('./postAddToCart');


module.exports = Router
  .get('/', getHomePage)
  .get('/items', getItemsByFilter)
  .post('/reserve', postAddToCart);
