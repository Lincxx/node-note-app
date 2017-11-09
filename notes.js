console.log('Starting notes.js');


var addNote = (title, body) =>{
    console.log('adding note: ', title, body)
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
