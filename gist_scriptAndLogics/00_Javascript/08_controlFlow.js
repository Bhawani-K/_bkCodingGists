// if statement
let x = 5;
if (x < 10) {
    console.log("x is less than 10");
}

// if-else
let temperature = 25;
if (temperature < 20) {
    console.log("It's cold outside");
} else {
    console.log("It's warm outside");
}

// if-else...if-else
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

//  nested-if
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

// to check if Array is empty
let userEmail = "qwe"
if (userEmail.length === 0) {
    console.log(' Array is empty ')
}
// to check if object is empty
let empObj = {}
// Object.keys(empObj), returns an array then by using Array Property
if (Object.keys(empObj).length === 0) {
    console.log(' Object is empty ')
}
false == 0;   //true
false == "";  //true
0 == "";  //true

// Nullish Coaleasing Operator
let val;
// val = 5 ?? 10
val = null ?? 10



console.log(" Nullish coaleashing Operator --", val)

// ****************************************************************************************************
// LOOPS

// for Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do-while loop
let xyz = 1;
do {
    console.log(xyz);
    xyz++;
} while (xyz <= 5);

// Break 
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

// Maps
const map = new Map()
map.set("IN", "India")
map.set("JPN", "Japan")
map.set("IN", "India")
map.set("Fr", "France")

console.log(map);
for (const key of map) {
    console.log(key);  // gets the array of key, values
}
for (const [key, value] of map) {
    console.log(key);
    console.log(value); // gets key and value separately
}

