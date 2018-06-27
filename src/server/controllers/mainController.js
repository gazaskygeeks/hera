const Router = require('express').Router();

const getHomePage = require('./getHomePage');
const getItemsByFilter = require('./getItemsByFilter');
const getChecklistItems = require('./getChecklistItems');

module.exports = Router
  .get('/', getHomePage)
  .get('/items', getItemsByFilter)
  .get('/checklist/items', getChecklistItems);
