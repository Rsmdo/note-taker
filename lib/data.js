const fs = require("fs");
const path = require("path");

const allNotes = require('../db/db.json');
const { nanoid } = require('nanoid'); //using this package to create unique id



//create a function that creates a note 
function createANote(newNote, noteArray) {
    newNote .id = nanoid() //using the package id
    //create a array to hold notes
    if (!Array.isArray(noteArray))
        noteArray = []; //create a new array if one does not exist
        noteArray = allNotes;
    
    noteArray.push(newNote);

    //function must push to the json file 
    fs.writeFile('./db/db.json', JSON.stringify(noteArray), err =>{
        if (err) throw err;
        console.log("note added")
    })
    return;
}




// bonus marks
//this function will delete a note 
//Guess: need to locate note id, need to delete wiehn located (functions that can be used are splice since it is a array)

module.exports = {createANote};