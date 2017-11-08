console.log('Starting app');

//file system
const fs = require('fs');
const os = require('os');


var user = os.userInfo();
console.log(user)

//option 2
fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);

//comment

