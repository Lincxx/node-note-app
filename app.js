console.log('Starting app.js');
//file system
const fs = require('fs');
//operating system
const os = require('os');
//requiring my own files
const notes = require('./notes');


var user = os.userInfo();

//option 2
fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);

//comment

