// The return of "this" depends on where it has been used
// I M P L I C I T  B I N D I N G,
function greet(obj) {
    obj.logMessage = function () {
        console.log(` ${this.name} is ${this.age} years old!` );
    }
}
const tom = {
    name: 'Tom',
    age: 7
};
const jerry = {
    name: 'jerry',
    age: 3
};
greet(tom);
greet(jerry);
tom.logMessage ();  // when we invoke a method of an object, we use the dot(.) notation to access it.
jerry.logMessage ();

// ****************************************************************************************
// E X P L I C I T  B I N D I N G 
// call(), iF ONE ARGUMENT
let getName = function() {
    console.log(this.name);
}
let user = {
  name: 'Tapas',
  address: 'Freecodecamp'  
};
getName.call(user); // here, this is determined by what has been passed to call() method

// IF MULTIPLE ARGUMENT
let getHobby = function(hobby1, hobby2) {
    console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}
let std = {
  name: 'Tapas',
  address: 'Bangalore'  
};
let hobbies = ['Swimming', 'Blogging'];
getHobby.call(std, hobbies[0], hobbies[1]); // can pass multiple arguments one by one, not a convenient way

// apply()
let getApply = function(hobby1, hobby2) {
    console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}
let student = {
  name: 'Tapas',
  address: 'Bangalore'  
};
let hobbiesArr = ['Swimming', 'Blogging'];
getApply.apply(student, hobbiesArr); // here, we can pass an array of argument.

// bind()
let trybind = function(hobby1, hobby2) {
    console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}
let bindUser = {
  name: 'Tapas',
  address: 'Bangalore'  
};
let ArrOfHobby = ['Swimming', 'Blogging'];
let newFn = trybind.bind(bindUser, ArrOfHobby[0], ArrOfHobby[1]); 
newFn();

// ******************************************************************************************
// Using NEW keyword
let Cartoon = function(name, character) {
    this.name = name;
    this.character = character;
    this.log = function() {
        console.log(this.name +  ' is a ' + this.character);
    }
};
let raj = new Cartoon('Raj', 'Cat'); // creation of object using new keyword
let sonu = new Cartoon('Sonu', 'Mouse');

// ******************************************************************************************
// GLOBAL OBJECT BINDING
// this alone
console.log(this); // refers to the window obje in global scope or in browser. Here in node env, it refers to the {}.

// this in function
function demo(){
    return this;
}
// console.log(demo()); // returns the window object

// this in strict mode
function demo(){
    "use strict";
    return this;
}
console.log(demo());  // in strict mode, the global scope is undefined

// HTML EVENT BINDING IN JAVASCRIPT
<button onclick="console.log(this)">Click Me!</button>; // refers to the current element that it has recieved */}
<button onclick="this.style.color='teal'">Click Me!</button>; // we can the button style using this keyword.

// /* <button onclick="changeColor()">Click Me!</button>;
// function changeColor() {
//     this.style.color='teal';
// } */  
// ------this won't work as expected, as here this will bound to the global object. Its not in strict mode, such that no style object to set the color.
