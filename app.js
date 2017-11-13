//Node Module
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


//Own files
const notes = require('./notes');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};
//access cmd line args
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];


if(command === 'add'){
    //add a new note
   var note = notes.addNote(argv.title, argv.body);
   if(note) {
       console.log('Note was created');
       notes.logNote(note);
   } else {
       console.log('The title already exists');
   }
} else if(command === 'list'){
    //show notes
   var allNotes = notes.getAll();
   console.log(`Printing ${allNotes.length} note(s).`)
   allNotes.forEach((note) => notes.logNote(note));
} else if(command === 'read'){
    //read note
    var note = notes.getNote(argv.title);
    if(note){
        notes.logNote(note);
    } else {
        console.log('---');
        console.log('No note was found' );
    }
} else if(command === 'remove'){
    //remove note
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'No note was removed';
    console.log('----');
    console.log(message);

} else {
    console.log('Command not recognized');
}

