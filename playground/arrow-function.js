//this is called statement syntax
var square = (x) => {
    var result = x * x;
    return result;
}
console.log(square(9));

//this is called expression syntax
var square2 = (x) => x * x;
console.log(square2(9));



//this is called expression syntax with a sinple arg
var square2 = x => x * x;

console.log(square2(9));

//Arrow function in objects, we can't use this, but if we set it up this way 
// funcName () {
//   console.log(`Hi. I'm ${this.name}`);
// }
//we can use the this keyword again


var user = {
    name: 'Jeremy',
    sayHi: () => {
        console.log(`Hi. I'm ${this.name}`);
    }, 
    sayHiAlt () {
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHi();
user.sayHiAlt();



