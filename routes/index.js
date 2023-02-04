const express = require('express');
const homeRoutes = require('./homeRoutes.js');
const apiRoutes = require('./api');
const app = express();

// the order of the routes affects the endpoint when doing a GET request.
app.use('/api', apiRoutes);
app.use('/', homeRoutes); 


module.exports = app;