console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }

};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) =>{
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });
    //same as above
    //var duplicateNotes = notes.filter((note) => note.title === title);
    
    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    } 
};

var getAll = () => {
    console.log('Getting all notes');
}

var getNote = (title) => {
    console.log('Fetching note: ', title);
    //fetch notes
    var notes = fetchNotes()
    //filter the matching note/s
    var foundNote = notes.filter((note) => note.title === title)
    console.log(foundNote)
    //return that note only the first item
    return foundNote[0];
}

var removeNote = (title) => {
    //fetch the notes
    var notes = fetchNotes()
    //filter note, removing the one with title of arg..this will filter out the unwanted note
    var filteredNotes = notes.filter((note) => note.title !== title);
    //save new notes array
    saveNotes(filteredNotes)
    return notes.length !== filteredNotes.length;
}

var logNote = (note) =>{
    //break on this line and use repl to output note
    //debugger;
    // use the read command to read a note
    console.log('----');
    console.log(`Title: ${note.title}` );
    console.log(`Body: ${note.body}` );
}

//es5
// module.exports = {
//     addNote: addNote
// } the below is the same

//es6
module.exports = {
    //Only works if the obj attr and value are the same
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}
