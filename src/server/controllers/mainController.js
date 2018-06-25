const Router = require('express').Router();

const getHomePage = require('./getHomePage');
const getItemsByFilter = require('./getItemsByFilter');

module.exports = Router
  .get('/', getHomePage)
  .get('/items', getItemsByFilter);
