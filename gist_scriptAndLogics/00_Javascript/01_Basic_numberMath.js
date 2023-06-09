const score = 400

const balance = new Number(100)
console.log(balance);

const btoStr = balance.toString().length
console.log(btoStr);
console.log(balance.toFixed(2));

const othrNum = 123.8966
console.log(othrNum.toPrecision(3)); // priority is before decimal returns string, use cautiously.

const hundreds = 100000000;
console.log(hundreds.toLocaleString('en-IN'));

// ***************Math*****************

console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(3,4,2,6,5,1));
console.log(Math.max(3,4,2,6,5,1));
console.log(Math.random()); //gets the value b/w 0-1.


