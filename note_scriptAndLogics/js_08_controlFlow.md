- [Control Flow Statements](#control-flow-statements)
  - [conditional statement](#conditional-statement)
      - [if statement](#if-statement)
      - [if-else statement](#if-else-statement)
      - [if-else...if-else](#if-elseif-else)
      - [nested if](#nested-if)
      - [Falsy](#falsy)
      - [Truthy](#truthy)
      - [Nullish Coalescing Operator (??)](#nullish-coalescing-operator-)
  - [Loops](#loops)
      - [For loop](#for-loop)
      - [For-in loop](#for-in-loop)
      - [while loop](#while-loop)
      - [do-while loop](#do-while-loop)
      - [Break](#break)
      - [Continue](#continue)
  - [Array specific Loops](#array-specific-loops)
      - [for loop](#for-loop-1)
      - [for-in](#for-in)
      - [for-of](#for-of)
      - [for-of with entries()](#for-of-with-entries)
      - [forEach()](#foreach)
      - [map()](#map)
      - [filter()](#filter)
      - [reduce()](#reduce)


## Control Flow Statements
- Control flow statements are used to control the flow of execution in a program.
- it is used to make decisions, execute loops and handle errors.
- 3Types of controlFlowStatements
  - conditional statement
  - loops
  - try/catch statements


### conditional statement
##### if statement
```javascript
let x = 5;
if (x < 10) {
  console.log("x is less than 10");
}
```
##### if-else statement
```javascript
let temperature = 25;
if (temperature < 20) {
  console.log("It's cold outside");
} else {
  console.log("It's warm outside");
}
```
##### if-else...if-else
```javascript
let grade = 85; 
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("F");
}
```
##### nested if
```javascript
let age = 20;
let hasLicense = true;
if (age >= 18) {
  if (hasLicense) {
    console.log("You can drive");
  } else {
    console.log("You can't drive without a license");
  }
} else {
  console.log("You're too young to drive");
}
```
##### Falsy
- any value that is <code>false</code>, <code>0<code>, <code>null<code>, <code>undefined<code>, <code>NaN<code>, or an empty string <code>("")</code> is considered "falsy".

##### Truthy
- "0", "false", " " : All string values having some value is truthy
- []
- {}
- function(){}

```javascript
// to check if Array is empty
let userEmail = "qwe"
if(userEmail.length === 0){
  console.log(' Array is empty ')
}
// to check if object is empty
let empObj = {}
// Object.keys(empObj), returns an array then by using Array Property
if(Object.keys(empObj).length ===0 ){
  console.log(' Object is empty ')
}
false == 0;   //true
false == "";  //true
0 == "";  //true
```
##### Nullish Coalescing Operator (??)
- majorly works on null and undefined
```javascript

```

### Loops
- loops are used to execute a block of code multiple times.

##### For loop
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
##### For-in loop

##### while loop
- while loop is used to execute a block of code as long as a condition is true.
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```
##### do-while loop
- do-while loop is similar to the while loop, but it executes the code block at least once before checking the condition.
```javascript
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```
##### Break
- The break statement is used to immediately terminate a loop and continue executing code outside of the loop.
```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

##### Continue
- <code>continue</code> is used to skip over an iteration of a loop and continue with the next iteration.
```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

### Array specific Loops
##### for loop
- for loop iterates over a specified range of numbers and runs a block of code on each iteration.
```javascript
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```
##### for-in
- for-in loop through the properties of an object.
```javascript
let names = ["John", "Jack", "Alice"];
for (let i in names) {
  console.log(names[i]);
}
```
##### for-of
- for-of accesses the values inside an array, not the keys.
```javascript
let names = ["John", "Jack", "Alice"];
for (let i of names) {
  console.log(i);
}
// ================
for (const [key, value] of map) {
    console.log(key);
    console.log(value); // gets key and value separately
}
```
##### for-of with entries()
- Every array has a method entries() which returns an iterable of both key and values of an array.
```javascript
const names = ["John", "Jack", "Alice"];
for (const [key, value] of names.entries()) {
  console.log(`key: ${key}, value: ${value}`);
}
```
##### forEach()
- forEach() runs a function on each indexed element in an array.
<b style= "color:red">NOTE*</b> forEach(), takes function as an input argument. Works same as for loop. However, here the function takes the input parameter and it does not ```returns``` any value. 

##### map()
- map() creates new array with the results of calling a function, for each element of an array
- map() gets the unique elements from an array and returns the new array based on callback function result.
```javascript
const map = new Map()
map.set("IN", "India")
map.set("JPN", "Japan")
map.set("IN", "India")
map.set("Fr", "France")

console.log(map);
for (const key of map) {
    console.log(key);  // gets the array of key, values
}
```
##### filter()
- takes the callback function and calls the function for every item of an array and returns the elements which satisfies the condition.
```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filter = array.filter((num) => {
    num > 4;   //  it does returns any values, becoz here we have opened the scope {}. So, as we have opened the scope we need to provide the return keyword to fetch the result.
    return num > 4;  // filters and returns which satisfies the condition to be true.
})
console.log(filter);
```
##### reduce()
- it does not change the original array.
- it takes in 
  - callback 
    - function which gets executed on each array element
    - Excepts first element if no initialValue is provided.
  - accumulator 
    - it accumulates the callback's return values.
  - currentvalue 
    - current element being passed from the array.
  - initial value.
    - value passed to callback() on first call.
    - If not provided, the 1st element acts as the accumulator on first call and callback() wont get executed on it.

- returns single value resulting after reducing the array.
- syntax : 
  - arr.reduce(callback(accumulator, currentValue), initialValue)

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}
let sum = numbers.reduce(sum_reducer);
console.log(sum); // 21

// using arrow function
let summation = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(summation); // 21
```


