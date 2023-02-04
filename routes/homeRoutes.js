const path = require('path');
const homeRoutes = require('express').Router();


homeRoutes.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})


homeRoutes.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = homeRoutes; 
