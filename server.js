const express = require('express');
const path = require('path');
const app = express();

// View
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static
app.use('/assets', express.static('assets'));

// Requesting json file
app.locals.character = require('./characters.json');

// Routes
app.use('/', require('./src/routes'));

// Port
app.listen(3000);
