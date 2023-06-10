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
// *************************************************************
const user1 = new Object()  // Singleton Object

const user2 = {}   //Non-Singleton Object
user2.id = 123
user2.name = 'bk'
user2.isLoggedIn = false 
console.log(user2);

const user3 = {
    email:'user3@gmail.com',
    fullname :{
        userfullname:{
            firstname:'asd',
            lastname:'qwe'
        }
    }
}
console.log(user3.fullname.userfullname.firstname);

const obj1 = {1:'a', 2:'b', 3:'c'}
const obj2 = {4:'a', 5:'b', 6:'c'}

// const obj3 = {obj1, obj2}  // gets object inside object
const obj4 = Object.assign({}, obj1,obj2)   // empty object acts as target and guarantees the returned is object type.
console.log('obj4--------', obj4);

const obj5 = {...obj1, ...obj2}   //Spread Operator
console.log('obj5-----------',obj5);

const users =[
    {
        id : 1,
        name : 'A'
    },{
        id : 2,
        name : 'B'
    },{
        id : 3,
        name : 'C'
    },{
        id : 4,
        name : 'D'
    },{
        id : 5,
        name : 'E'
    },{
        id : 6,
        name : 'F'
    },
]
// users[1].name

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));  //
console.log(obj1.hasOwnProperty( 'isLoggedIn' ));

// *******************************************************************************************

// Object Destructuring , ES-6 SyntaticalSugar
const course = {
    coursename : 'Abc',
    price : '333',
    courseInstructor : 'Q'
}

const {courseInstructor} = course //Where courseInstructor belongs to course Object.
console.log(courseInstructor);

const {courseInstructor : instructor} = course  // calling the properties by alias
console.log(instructor);





