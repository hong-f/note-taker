const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../../helpers/fsUtils');
const fs = require('fs');
// const db = require('../../db/db.json');
const uniqid = require('uniqid');



// creates a route for a get request 
notes.get('/', (req, res) => {
    // readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
    fs.readFile('./db/db.json', (err,data) => {
        if (err) throw err;
        let db = JSON.parse(data);
        res.json(db);
    })
});

// creates route for a post request
notes.post('/', (req, res) => {

    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uniqid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json('New note added successfully');
    } else {
        res.errored('error creating new note');
    }

    
});

notes.delete('/:note_id', (req, res) => {
    const noteId = req.params.id;
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) =>{
        const result = json.filter((note) => {note.id !== noteId});
        writeToFile('./db/db.json', result);

        res.json('Note has been deleted')
    })
});


module.exports = notes;