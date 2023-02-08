const express = require('express');
const homeRoutes = require('./homeRoutes.js');
const apiRoutes = require('./api');
const app = express();


app.use('/api', apiRoutes);
app.use('/', homeRoutes); 


module.exports = app;