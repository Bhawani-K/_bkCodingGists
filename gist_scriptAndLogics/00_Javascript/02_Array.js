// // creation *******************************************
// const alphas = ["A", "B", "C", "D", "E", true, "_bk"];
// console.log(alphas);

// const arr = new Array( 1,2,1,"4",5,"6",7 )
// console.log(arr[3]);

// // Accessing *******************************************
// // 1. by [0]
// console.log(alphas[2]);   // "C"
// // 2. If multiDimensional
// const random = ["tree", 795, [0, 1, 2]];
// console.log(random[2][2]);;  // 2

// // Array Methods ***************************************
// console.log(alphas.push(1236,156)); // Add the elements towards end of the array

// console.log(alphas.pop()); // removes the last elements from an array,
// console.log(alphas.unshift('qwe','asdf'));  //inserts new elements at the start of an array
// console.log(alphas.shift());
// console.log(alphas.includes('C'));
// console.log(alphas.indexOf('C'));

// const newArr = alphas.join(' | ')
// console.log(newArr);  // binds the elements by the separator(' | ') and changes the datatype to String.
// console.log(typeof(newArr));

// const beta1 = [0,1,2,3,4,5]
// const beta2 = [0,1,2,3,4,5]
// console.log("original - Beforeslice",beta1);
// console.log(beta1.slice(1,3)); // returns a section of array, where it does not includes the end element
// console.log("original - Afterslice",beta1);

// console.log(" original - BeforeSplice ",beta2);
// console.log(beta2.splice(1,3));  //Manipulates the original array
// console.log("  original - AfterSplice ",beta2);

// console.log(alphas);

// *********************************************************************************************

const abc = ['a', 'b', 'c', 'd', 'e' ]
const zxc = [1,2,3,4,5,6]
// const qwe = abc.push(zxc)
// console.log(abc); //----- inserts the Second Array in the first Array.

// const p2str = abc.concat(zxc)
// console.log(p2str);  // concats all the elements in single array

const p3str = [...abc, ...zxc]
console.log(p3str);  //spreads all the elements 

const arr4 = [1,2,[3,4],[5,[6,7,8]],3,5,9]
console.log(arr4.flat(Infinity)); // spreads / flatens the array.

console.log(Array.isArray('Bhawani_K')); // returns boolean value
console.log(Array.from('Bhawani_K')); // Converts string to Array.

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));  // converts array to String




