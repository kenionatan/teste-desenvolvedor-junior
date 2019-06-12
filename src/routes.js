const express = require('express');
const routes = express.Router();
const controller = require('../controller/controller')

routes.get('/', controller.index);

module.exports = routes;
