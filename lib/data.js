const fs = require("fs");
const path = require("path");

const allNotes = require('../db/db.json');


//create a function that creates a note 
function createANote(body, noteArray) {
    const newNote = body; 
    //create a array to hold notes
    noteArray = []; 

    noteArray.push(newNote);
    //function must push to the json file 
    fs.writeFileSync(path.join(__dirname,'../db/db.json'),
        //tools to search for stringify and writefile functions from npm 
     JSON.stringify({newNote: noteArray}, null, 2));
    return newNote;


}


// bonus marks
//this function will delete a note 
//Guess: need to locate note id, need to delete wiehn located (functions that can be used are splice since it is a array)

module.exports = {createANote};