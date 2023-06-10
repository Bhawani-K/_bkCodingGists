

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
    - Singleton
### Accessing
    - by using <b>dot</b> or <b>Bracket</b> notation.
```javascript
    console.log(jsUser.email);
    console.log(jsUser['email']);
    console.log(jsUser['full name']);  // if the var is having space in b/w
    console.log(jsUser.mySym);
    console.log(typeof(jsUser.mySym));  // required is Symbol
    console.log(jsUser[mySym]);
```






