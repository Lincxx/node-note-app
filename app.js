console.log('Starting app.js');
//file system
const fs = require('fs');
//operating system
const os = require('os');
//lodash
const _ = require('lodash');
//requiring my own files
const notes = require('./notes');

// console.log(_.isString(true))
// console.log(_.isString("Jeremy"));
var filteredArray = _.uniq(['1', 2, "Jeremy", 2, 4, "Jeremy"]);
console.log(filteredArray);

// var res = notes.add(3, 4);
// console.log(res);

// var user = os.userInfo();

// //option 2
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);

//comment

