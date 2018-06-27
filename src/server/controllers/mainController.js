const Router = require('express').Router();

const getItemsByFilter = require('./getItemsByFilter');
const postAddToCart = require('./postAddToCart');
const getDashboard = require('./getDashboard');
const getChecklistItems = require('./getChecklistItems');
const deleteChecklistItems = require('./deleteChecklistItems');
const addChecklistItem = require('./addChecklistItem');


module.exports = Router
  .get('/api/dashboard', getDashboard)
  .get('/items', getItemsByFilter)
  .get('/checklist/items', getChecklistItems)
  .get('/checklist/delete', deleteChecklistItems)
  .post('/api/add-checklist-item', addChecklistItem)
  .post('/reserve', postAddToCart);
