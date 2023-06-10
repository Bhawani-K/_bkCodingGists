- [ObjectCreation](#objectcreation)
- [Accessing](#accessing)
- [Object Methods](#object-methods)
    - [Object.assign](#objectassign)
    - [Spread Operator](#spread-operator)
    - [Object.keys()](#objectkeys)
    - [Object.values()](#objectvalues)
    - [Object.entries()](#objectentries)
    - [Object.hasOwnProperty()](#objecthasownproperty)
    - [Object Destructuring](#object-destructuring)
- [Diff b/w Object and json](#diff-bw-object-and-json)


### ObjectCreation
    - literals
```javascript
const jsUser = {
    'full name' : 'Bhawani_K',
    age : 22,
    location : 'Odisha',
    email : '_bk@gmail.com',
    isLoggedIn : false,
    lastLoginDays:['Monday', 'Saturday'],
    [mySym] : 'key1'
}
```
    - Object.create
      - 
```javascript
const user = new Object()   //singleton Object
const user = {}  // non-singleton Object
```
    - Singleton


### Accessing
    - by using <b>dot</b> or <b>Bracket</b> notation.
```javascript
    console.log(jsUser.email);
    console.log(jsUser['email']);
    console.log(jsUser['full name']);  // if the var is having space in b/w
    console.log(jsUser.mySym);
    console.log(typeof(jsUser.mySym));  // returning typeof Object, but required is Symbol..
    console.log(jsUser[mySym]);
```

### Object Methods

```javascript 
const obj1 = {1:'a', 2:'b', 3:'c'}
const obj2 = {4:'a', 5:'b', 6:'c'}
```
##### Object.assign
      - Copies all the key:value properties from one source obj to the target.
      - takes up target and source as parameters
      - target can be {}, which also guarantees us the return type is Object.
```javascript
const obj4 = Object.assign({}, obj1, obj2, obj3, obj4..)
```
##### Spread Operator
      - which flatens /spreads all the key:value properties in an  the object 
```javascript
const obj5 = {...obj1, ...obj2}
```
##### Object.keys()
    - returns the Array of the keys in an object
```javascript
    console.log(Object.keys(obj1));
```

##### Object.values()
    - gets all the values of the object
    - return type is Array
```javascript
console.log(Object.values(obj1));
```

##### Object.entries()
    - for each key-value property, it creates an array.
    - return type is Array of arrays
```javascript
console.log(Object.entries(obj1));
```

##### Object.hasOwnProperty()
    - checks if the object has certain property
```javascript
console.log(obj1.hasOwnProperty( 'isLoggedIn' ));
```

##### Object Destructuring
  - A syntatical sugar in ES-6
  - where we can destructure the properties of an object.
```javascript
const course = {
    coursename : 'Abc',
    price : '333',
    courseInstructor : 'Q'
}

const {courseInstructor} = course //Where courseInstructor belongs to course Object.
console.log(courseInstructor);

const {courseInstructor : instructor} = course  // calling the properties by alias
console.log(instructor);
```
### Diff b/w Object and json
  - object is being assigned to variable, whereas json is not assigned to any value rather its being fetched from db/ server.
  - json, all keys values are wrapped inside the doubleQuotes
| const obj = {a:1, b:2, c:3} | {"a" : "asd", "b" : 12, "c" : true} |

