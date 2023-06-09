// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

let dt = new Date(2023, 0 ,23)
console.log(dt.toDateString());

let newDt = new Date(2023-01-23)
console.log(newDt.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);  //1686296353391
console.log(dt.getTime());
console.log(Date.now());

console.log(Math.floor(Date.now()/1000));

let nwDate = new Date()
console.log(nwDate.getMonth()+1);
console.log(nwDate.getDay());

const demo = Date.toLocaleString('dafault', {
    weekday:'long'
})
console.log(demo);



