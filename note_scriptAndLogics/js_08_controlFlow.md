
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
