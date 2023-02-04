const express = require('express');
const notesRoutes = require('./notes.js');

const app = express();

app.use('/notes', notesRoutes);


module.exports = app;
