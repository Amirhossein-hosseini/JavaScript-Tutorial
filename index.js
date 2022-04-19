var firstName = "Kyle"

console.log("My name is ${ firstName }.");
// My name is ${ firstName }.

console.log('My name is ${ firstName }.');
// My name is ${ firstName }.

console.log(`My name is ${ firstName }.`);
// My name is Kyle.


//Arrays And Objects

var names = [ "Frank", "Kyle", "Peter", "Susan" ];

names.length;

names[0];

names[1];


var me = {
    first: "Kyle",
    last: "Simpson",
    age: 39,
    specialties: [ "JS", "Table Tennis" ]
};

console.log(`My name is ${ me.first }.`);

//end arrays

//Value Type Determination
typeof 42;                  // "number"
typeof "abc";               // "string"
typeof true;                // "boolean"
typeof undefined;           // "undefined"
typeof null;                // "object" -- oops, bug!
typeof { "a": 1 };          // "object"
typeof [1,2,3];             // "object"
typeof function hello(){};  // "function"

//end value Determination

// scope

var adult = true;

if (adult) {
    var myName = "Kyle";
    let age = 39;
    console.log("Shhh, this is a secret!");
}

console.log(myName);
// Kyle

 console.log(age);
// Error


//end scope

//for example about stack in manage scope

let person  ={
    name:'sasan',
    age:22
}

console.log(person);