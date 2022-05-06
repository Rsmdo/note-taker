const fs = require("fs");
const { data } = require("../db/db.json");
const { createANote} = require("../lib/data");

jest.mock("fs");


test("to find creation of a note" , () => {
    const addNote = createANote({
        title: "Title", 
        text: "text"
    });
    expect(addNote.title).toBe("Title");
    expect(addNote.text).toBe("text");

});
//
