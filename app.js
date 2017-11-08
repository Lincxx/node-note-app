console.log('Starting app.js');
//file system
const fs = require('fs');
//operating system
const os = require('os');
//requiring my own files
const notes = require('./notes');

var res = notes.add(3, 4);
console.log(res);

// var user = os.userInfo();

// //option 2
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);

//comment

