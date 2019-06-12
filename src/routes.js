const express = require('express');
const routes = express.Router();
const path = require('path');

routes.get('/', (req, res) => {
	res.render('../views/index');
});

module.exports = routes;
