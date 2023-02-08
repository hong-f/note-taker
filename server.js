const PORT = process.env.PORT || 3001;

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const {clog} = require('./middleware/clog');
const routes = require('./routes');



app.use(clog);

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);



app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));