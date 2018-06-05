const Router = require('express').Router();

const getHomePage = require('./getHomePage');

module.exports = Router
  .get('/', getHomePage);
