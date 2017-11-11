console.log('Starting app.js');

//Node Module
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


//Own files
const notes = require('./notes');

//access cmd line args
const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ' + `${command}`);

console.log('YARGS ',  argv);

if(command === 'add'){
    //add a new note
   var note = notes.addNote(argv.title, argv.body);
   if(note) {
       console.log('Note was created');
       console.log('---');
       console.log(`Title: ${note.title}` );
       console.log(`Body: ${note.body}` );
   } else {
       console.log('The title already exists');
   }
} else if(command === 'list'){
    //show notes
   notes.getAll();
} else if(command === 'read'){
    //read note
    var note = notes.getNote(argv.title);
    if(note){
        console.log('---');
        console.log(`Title: ${note.title}` );
        console.log(`Body: ${note.body}` );
    } else {
        console.log('---');
        console.log('No note was found' );
    }
} else if(command === 'remove'){
    //remove note
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'No note was removed';
    console.log('---');
    console.log(message);

} else {
    console.log('Command not recognized');
}

