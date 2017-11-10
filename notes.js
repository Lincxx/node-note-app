console.log('Starting notes.js');
const fs = require('fs');

var addNote = (title, body) =>{
    var notes = [];
    var note = {
        title,
        body
    };

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {
        
    }
    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });
    //same as above
    //var duplicateNotes = notes.filter((note) => note.title === title);
    
    if(duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    } 
    
};

var getAll = () => {
    console.log('Getting all notes');
}

var getNote = (title) => {
    console.log('Fetching note: ', title);
}

var removeNote = (title) => {
    console.log('Removing note: ', title);
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
    removeNote
}
