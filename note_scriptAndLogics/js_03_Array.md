- [Array](#array)
    - [Creation](#creation)
    - [Accessing](#accessing)
- [Array Methods](#array-methods)
    - [push](#push)
    - [pop](#pop)
    - [unshift](#unshift)
    - [shift](#shift)
    - [includes](#includes)
    - [indexof](#indexof)
    - [join](#join)
    - [slice](#slice)
    - [splice](#splice)


### Array
- Array are the list like objects, where they are basically single objects containing multiple values stored in the list.
  - resizeable
  - can mix with different dataTypes.
  - indexing starts with 0.
  - Array Copy Operation
    - shallow copies
      - which have same reference points, such that if any change is made it would effect the original Array
    - Deep Copies
      - which donot share the same reference points.

##### Creation
- by []
```javascript
const alphas = ["A", "B", "C", "D", "E"];
console.log(alphas);
```
- we can store various data types in a single array
```javascript
const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ["tree", 795, [0, 1, 2]];
```
##### Accessing
- by using bracket notation and supplying the items's index.
```javascript
const arr = new Array( 1,2,1,"4",5,"6",7 )
console.log(arr[3]);
```
- if multidimensional Array,
```javascript
const random = ["tree", 795, [0, 1, 2]];
random[2][2];
```

### Array Methods
##### push
  - Adds the elemnt towards the end of the Array.
```javascript
    console.log(alphas.push(6)); 
```
##### pop
  - Removes the last element from an array
  - If array is Empty, undefined is returned.
  - Array is not modified.
```javascript
    console.log(alphas.pop())
```
##### unshift
  - Inserts new elements towards start of the array.
```javascript
    console.log(alphas.unshift("qwe"))
```
##### shift
  - Removes the 1st element from an array.
  - If array is Empty, undefined is returned.
  - Array is not modified.
```javascript
    console.log(alphas.shift())
```
##### includes
  - checks whether an array is having the certain element.
  - returns true or false.
```javascript 
console.log(alphas.includes('C'));
```
##### indexof
  - returns the position of the 1st occurance of the values in an array.
  - If the value is not present, returns -1.
```javascript 
console.log(alphas.indexOf('C')); 
```
##### join
  - takes the separator and joins all the elements of an array.
  - changes the datatype to String
```javascript 
const newArr = alphas.join(' | ')
console.log(newArr);
```
##### slice
  - returns the copy of a section of an array
  - excludes the last range 
  - returns elements from an array
  - <b>Does not manipulates the original array</b>
```javascript 
const beta = [1,2,3,4,5]
console.log(beta.slice(1,3));
```
##### splice
  - includes the last range
  - returns the array of the deleted elements.
  - <b>this manipulates the original array<b>
```javascript 
const beta = [1,2,3,4,5]
console.log(beta.splice(1,3));
```



