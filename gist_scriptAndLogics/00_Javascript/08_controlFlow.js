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

// A R R A Y    S P E C I F I C    L O O P
// For-Of
const arr = [1, 2, 3, 4, 5]
for (const ele of arr) {
    console.log(ele);
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

let obj = {
    js: 'javascript',
    cpp: 'c++',
    swift: 'swift'
}
// for (const keys of obj) {
//     // console.log(keys);  // obj is not iterable
// }

for (const key in obj) {
    console.log(key);
    console.log(obj[key]);
}

for (const key in arr) {
    console.log(key);  // gets the keys/ index of the elements of an array
    console.log(arr[key]);  // gets the values of the array
}

// for (const key in map) {
//     console.log(`  key in map : ${key} `);  // Map is not itterable
// }

// *****************************************************************************************************
// H I G H E R   O R D E R    F U N C T I O N
const coding = ['js', 'ruby', 'java', 'javascript', 'c++']

coding.forEach(function (ele) {
    console.log(ele);
});
// ES-6, Arrow function
coding.forEach((ele) => {
    console.log(ele);
})

// function as a argument
function printMe(item) {
    console.log(item);
}
console.log('Function as a argument------------');
coding.forEach(printMe) // need to pass the refrence of the function, not execute it.

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

// A R R A Y    O F    O B J E C T S
const arrOfObj = [
    {
        stn: 'Berhampur',
        code: 'BAM'
    },
    {
        stn: 'Secendrabad',
        code: 'SC'
    },
    {
        stn: 'Mysore',
        code: 'MYS'
    }
]


// arrOfObj.forEach((item) => {
//     console.log(item.stn); //prints the items..
//     return item.stn;  // doesn't return anything
// })
// 
// // ==========
// 
// const returnTypeOfarrOfObj = arrOfObj.forEach((item) => {
//     console.log(item.stn); 
//     return item.stn;
// })
// console.log(` returnTypeOfarrOfObj -------- ${returnTypeOfarrOfObj}`);   // doesn't return anything.

// ======================================================
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filter = array.filter((num) => {
    num > 4;   //  it does returns any values, becoz here we have opened the scope {}. So, as we have opened the scope we need to provide the return keyword to fetch the result.
    return num > 4;  // filters and returns which satisfies the condition to be true.
})
console.log(filter);

// =====================================================

const mapEx = array.map((ele) => { return ele + 10 })
console.log(mapEx);

// ======================================================

const newArr = [];
array.forEach((ele) => {
    if (ele > 4) {
        newArr.push(ele)
    }
})
console.log("ForEach---------");
console.log(newArr);

// =====================================================
// chaining Methods
let chainingMethods = array.map((ele) => { return ele * 10 })
    .map((ele) => ele + 1)
    .filter((ele) => ele >= 40)

    console.log(chainingMethods);

//=====================================================



