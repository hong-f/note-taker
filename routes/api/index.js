const express = require('express');
const notesRoutes = require('../api/notes');

const app = express();

app.use('/notes', notesRoutes);


module.exports = app;
