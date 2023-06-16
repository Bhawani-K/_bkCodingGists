- [this](#this)
    - [Implicit Binding](#implicit-binding)
    - [Explicit Binding](#explicit-binding)
      - [call()](#call)
      - [apply()](#apply)
      - [bind()](#bind)
    - [Default binding](#default-binding)
    - [Arrow Function Binding](#arrow-function-binding)
    - [Using New Keyword](#using-new-keyword)
- [summary](#summary)


## this
- "this", is a keyword which always holds the reference to the single object. 
- It depends on how the function is defined, how its being invoked and the default execution context.

In Javascript, the "this" keyword allows us to:
- Reuse the function in different execution contexts, which means a function once defined can be invoked for different objects using "this" keyword.
- Identifying the object in the current execution context when we invoke a method.

"this" is directly associated with JS functions. For "this" in the first step, we need to check where the function is invoked. becoz until we get to know where the function is invoked, we cant know whats there in "this" keyword.

Ways to set "this" in javascript
  - Implicit binding
  - Explicit binding
  - Default binding
  - Arrow function binding

#### Implicit Binding
- When we call the function as a method of the object, "this" keyword refers to the calling object.
```javascript
const person = {
    name: "ram",
    age: 22,
    greet: function(){
        return ` Hello ${this.name}, you are ${this.age} years old `
    }
}
console.log(person.greet());
```
where, "this" keyword is refering to the person, such that it can access the name & age values.
#### Explicit Binding
- where we explicitly bind this keyword using the call(), apply() or bind(), where the default reference is changed wrt the object..

##### call()
- with the call() method, the context with which the function has to be called is passed as a parameter.
- For One Argument to call()
```javascript
let getName = function() {
     console.log(this.name);
}
let user = {
   name: 'Tapas',
   address: 'Freecodecamp'  
};
getName.call(user); // call() is invoked on the getName() function, such that "this" will be binded to the user object which is being passed as a parameter.
```
- If Multiple Arguments to call()
```javascript
let getName = function(hobby1, hobby2) {
     console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}
let user = {
   name: 'Tapas',
   address: 'Bangalore'  
};
let hobbies = ['Swimming', 'Blogging'];
getName.call(user, hobbies[0], hobbies[1]);  // here the arguments need to be passed one by one, { not the smart way }
```
##### apply()
- same as call(), but allows to pass the array of arguments. which is more convinent than passing them one by one.
```javascript
let getName = function(hobby1, hobby2) {
     console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}
let user = {
   name: 'Tapas',
   address: 'Bangalore'  
};
let hobbies = ['Swimming', 'Blogging'];
getName.apply(user, hobbies);  // more convenient than call()
```

##### bind()
- similar to call(), but in call() it calls the function directly. Whereas, bind() returns a new function and we will be invoking that instead of the older function.
```javascript
let getName = function(hobby1, hobby2) {
     console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}
let user = {
   name: 'Tapas',
   address: 'Bangalore'  
};
let hobbies = ['Swimming', 'Blogging'];
let newFn = getName.bind(user, hobbies[0], hobbies[1]); 
newFn();  // here, bind() doesn't invoke the function directly. so wrapped in the variable and invoking the newFunction.
```


#### Default binding
- When this keyword is used in global scope which is set to window object.
```javascript
const age = 22;
function verifyAge (){
    return this.age;
}
console.log(verifyAge());
```
- Here, "this" refers to the window and it does not contain the age variable such that we get undefined as output

#### Arrow Function Binding
- when this is used in the arrow function, then "this" has a lexical scope such that without the function keyword this is unable to refer to the object in the outer scope.
```javascript
const person = {
    name: "ram",
    age: 22,
    greet : () =>{
        return `Hello , you are ${this.age} years old`
    }
}
console.log(person.greet());
```
- Here, this keyword is unable to refer to the object.

#### Using New Keyword
- A <code>new</code> keyword is used to create an object from the constructor function.
```javascript
let Cartoon = function(name, character) {
    this.name = name;
    this.character = character;
    this.log = function() {
        console.log(this.name +  ' is a ' + this.character);
    }
};
let tom = new Cartoon('Tom', 'Cat'); // creation of new objects using new keyword
let jerry = new Cartoon('Jerry', 'Mouse');
```
- when a function is invoked with new keyword, JS creates an internal object like( this = {} ) within the function.
- then the newly created <code>this</code> binds to the object created using <code>new</code> keyword.

<hr>

## summary
- In case of implicit binding, <code>this</code> binds to the object adjacent to the dot(.) operator while invoking the method.
- In case of explict binding, we can call a function with an object when the function id=s outside of its execution context in the object.
- When a function is invoked with the <code>new</code> keyword, the <code> this </code>, inside the function binds to the newly constructed object.
- when <code>this</code> is in global scope, it refers to the window object. Whereas, if its defined in strict mode, then it will be undefined.
- In HTML event handlers, <code>this</code> binds to the HTML elements which recieves the event.