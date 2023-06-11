- [Function](#function)
    - [parameters](#parameters)
    - [Arguments](#arguments)
- [Function Return](#function-return)
- [Function Expression](#function-expression)
- [Arrow Functions](#arrow-functions)
- [Nested Functions](#nested-functions)


### Function
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
- If we are returning the value from a function, then to print the returne value we need to call the function in a variable and the print it.
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
Anonymous Function
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

Scope

closure

this

hoisting

IIFE


