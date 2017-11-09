// var obj = {
//     name: 'Jeremy', 
//     arr: [1,2,3]
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Jeremy", "age": 40}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some Body'
}

var originalNoteString = JSON.stringify(originalNote);
console.log(originalNoteString)

//write a file
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

//convert back to obj
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);