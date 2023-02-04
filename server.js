const PORT = process.env.PORT || 3001;

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const {clog} = require('./middleware/clog');
const routes = require('./routes');

// middleware
// static files specify the root director from which to serve static assets. 
// this middleware will serve the static files in the public directory such as images, css and stylesheets. 

app.use(clog);

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);



app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));