function greet(){
    console.log('Hello...!');
}
// greet  // this gets the reference of the function
greet()  // using of (), it starts executing and produces the response.

function add(num1, num2){
    // console.log(num1 + num2);  // 9
    // let sum = num1+num2;
    // return sum // doesn't prints anything, as we didnt said to print anything.
}

add() // NaN, because the function needs the parameters.
const result = add(4,5)
console.log("Result--"+ result);  // undefined, when we console it in the function and try to access it using a variable. Thus, here result will be printing but, the result wont be stored in the variable(result).


function loginUserMsg(username = 'Abc') {  // default value = 'Abc'
    if(username === undefined){
        console.log("Please enter a userName");
        return
    }
    return ` ${username} just loggedIn `
}
loginUserMsg('bk')  // executes but wont print anything, as we didnt said to print anything.
console.log(loginUserMsg('bk')); // prints or we can put it in a separate variable and ask it to print
console.log(loginUserMsg()); // If no value passed, it gives undefined 

// **********************************************************************************************

// Rest Operator
function calculateCartPrice(val1, val2, ...num1){
    // here whatever values we pass, 1st value would be entered in "val1", 2nd value would enter in "val2", rest all the values would be wrapped in the Array and passed to "num1"
    console.log("Rest Operator----", val1);
    console.log("Rest Operator----", val2);
    console.log("Rest Operator----", num1);
    return num1;
}
console.log(calculateCartPrice(200,300,200,500,2000,5000));

const user = {
    username : 'Abc',
    price : 1234566
}
function handleObject(anyObject){
    console.log(`  Username is ${anyObject.username} and price is ${anyObject.price} `);
}
// handleObject(user) // this can be done, but if we change anything here it woud to whole lot of change in code.
handleObject({
    username:'qwe',
    price:1599
})

// ***********************************************************************************************
// Scope
function one() {
    const username = 'bk'
    function two(){
        const website = 'youtube'
        console.log(username);
    }
    console.log(website);
    two()
}
one()