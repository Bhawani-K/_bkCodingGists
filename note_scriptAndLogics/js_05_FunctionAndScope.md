- [Function](#function)
      - [parameters](#parameters)
      - [Arguments](#arguments)
- [Function Return](#function-return)
- [Function Expression](#function-expression)
- [Anonymous Function](#anonymous-function)
- [Arrow Functions](#arrow-functions)
- [Nested Functions](#nested-functions)
- [Scope](#scope)
      - [Global Scope](#global-scope)
      - [Local Scope](#local-scope)


## Function
- function is a block of code which performs a specific task.
    - Advantages
      - Code Reusablity, We can call a function multiple times so it saves coding.
      - LessCoding, It makes our program compact. We dont have to write many lines of code each time to perfom a common task.
```javascript
function functionName([arg1, arg2, ...argN]){  
 //code to be executed  
}  
``` 
- call a function, using functionName :
      - <b> functionName </b>, here it gets the reference of the function. This does not starts the execution.
      - <b> functionName() </b> function starts execution

##### parameters
- if the value is passed while declaring a function
##### Arguments
- If the value is passed, while calling a function
```javascript
// declaring a function
function add(a, b) {
    console.log(a + b);
}
// calling functions
add(3,4);
add(2,9);
```
### Function Return
-  return denotes the function execution has ended.
- If we are returning the value from a function, then to print the returned value we need to call the function in a variable and the print it.
```javascript
function add(num1, num2){
    // code
    return result
}
let x = add(a,b)
console.log(x)
```
### Function Expression
- when a function is stored as a value, and can be assigned to a variable or passed as an argument to another function.
```javascript
var add = function (num1, num2) {
    return num1 + num2;
};
var result = add(10, 20);//returns 30
```
### Anonymous Function
- functions without a name.
- Anonymous functions are often used as arguments to other functions.
- typically used in functional programming, e.g. callback function, creating closure or iife.
```javascript
let numbers = [10, 20, 30, 40, 50];
let squareNumbers = numbers.map(function(number) {
  return number * number;
});
```
### Arrow Functions
- shorthand syntax for defining anonymous function in javascript.
```javascript
let square = num =>{num* num}
let result = square(5)
console.log(result) // 25
```
### Nested Functions
- where a function can have one or more inner functions.
- These functions are in the scope of outer function.
- Inner function can access variable and parameters of outer function. However, outer function cannot access variables defined inside inner functions.
```javascript
function greet(firstName){
    function SayHello() {
        alert("Hello " + firstName);
    }
    return SayHello();
}
greet("Steve");
```

## Scope
- defines the accessiblity of variables, objects anf functions.
- There are 2 types of scope
  - Global Scope
  - Local Scope

##### Global Scope
- Variables declared outside of any function
- Global variables can be accessed and modified from any function.
```javascript
var userName = "Bill";
    function modifyUserName() {
        userName = "Steve";
    };
    function showUserName() {
        console.log(userName);
    };
    console.log(userName); // display Bill
    modifyUserName();
    showUserName();// display Steve
```


##### Local Scope
- Variables declared inside any function with var / let keyword.
- Local variables cannot be accessed or modified outside the function declaration.
```javascript
    function createUserName() {
        var userName = "Bill";
    }
    function showUserName() {
        console.log(userName);
    }
    createUserName();
    showUserName(); // throws error: userName is not defined
```
<!-- ************ HOISTING ********** -->
## Hoisting
- Hoisting is JavaScript’s default behavior of moving declarations to the top of the current scope (to the top of the current script or the current function)
- This means that a variable can be used before it has been declared.
- For example, a variable declared with var can be used before its declaration and it will not result in an error, instead, it will return undefined

##### How to avoid hoisting issues in javascript
- Declare variables and functions with let and const wherever you can.
- Always declare variables at the beginning of each and every scope because this is how JavaScript and developers read code
- Never use var

<!-- ************ CLOSURE *********** -->
## Closure
- Closure means the inner function always has access to the variables and parameters of its outer function.
- In nested functions, the inner functions can access the variables and parameters of an outer function. However, it cannot access the arguments object of outer function.

```javascript
function OuterFunction() {
    var outerVariable = 1;
    function InnerFunction() {
        console.log(outerVariable);
    }
    InnerFunction(); // innerFunction() can access outerVariable
}
```
As per defn, InnerFunction() can access outerVariable even if it is executed separately i.e...
```javascript
function OuterFunction() {
    var outerVariable = 100;
    function InnerFunction() {
        alert(outerVariable);
    }
    return InnerFunction; // returns the InnerFunction from OuterFunction when we call outerFunction() which is called outside from the scope of the function
}
var innerFunc = OuterFunction();
innerFunc(); // 100
```
- Here, the variable innerFunc reference the InnerFunction() only, not the outterFunction(). Such that when we call innerFun(), it still access outerVariable which is declared in OuterFunction(). Which is being refered as Closure.
- Closure is where the outer varibles keep their states b/w multiple calls. Here, the inner Functions does not keep the seperate copy of outer variables rather it keeps the reference of the outer variables. which means the value of the outer variables will be changed if we change it using inner function.

##### Closure in multiple levels of inner functions
```javascript
function Counter() {
    var counter = 0;
    setTimeout(function(){
        var innerCounter = 0;
        counter += 1;
        console.log(' counter = '+ counter);
        setTimeout(function(){
            counter += 1;
            innerCounter += 1;
            console.log(`  counter = ${counter}, innerCounter ${innerCounter}`)
        },500)
    },1000)
}
Counter();
```
##### When to use closure
- Closure is used to hide the implementation. It is used to create private variables or functions.
```javascript
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };   
})();
console.log(counter.value()); // 0
counter.increment();
counter.increment();
console.log(counter.value()); // 2
counter.decrement();
console.log(counter.value()); // 1
```
- Here, increment(), decrement() and value() becomes public function as they are being included in the return object. Whereas changeBy() function becomes private function as its not returned and only used internally by increment() and decrement().
