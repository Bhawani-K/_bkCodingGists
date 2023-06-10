// singleton
// Object.create

// object Literals
const mySym = Symbol('key1')
const jsUser = {
    'full name' : 'Bhawani_K',
    age : 22,
    location : 'Odisha',
    email : '_bk@gmail.com',
    isLoggedIn : false,
    lastLoginDays:['Monday', 'Saturday'],
    [mySym] : 'key1'
}

console.log(jsUser.email);
console.log(jsUser['email']);
console.log(jsUser['full name']);  // if the var is having space in b/w
console.log(jsUser.mySym);
console.log(typeof(jsUser.mySym));  // required is Symbol
console.log(jsUser[mySym]);

jsUser.email = 'abc@gmail.com'
// Object.freeze(jsUser) // does not allows the object to change
jsUser.email = 'qwerty@gmail.com'

jsUser.greeting = function(){
    console.log('Hello JS User');
}
// console.log(jsUser.greeting());  // jsUser.greeting() not a function
console.log(jsUser.greeting);    // functionis not executed, rather it gets the refrence of the function, 

jsUser.greeting2 = function(){
    console.log(` Hello JS User, ${this.name}` );
}



