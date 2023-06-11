function greet(){
    console.log('Hello...!');
}
// greet  // this gets the refrence of the function
greet()  // using of (), it starts executing and produces the response.

function add(num1, num2){
    // console.log(num1 + num2);  // 7
    // return num1 + num2;  // undefined

    // let result = num1+num2;
    // return result 

    return num1+num2;  //9
}
add() // NaN, because the function needs the parameters.
add(3,4) // 7
const result = add(4,5)
console.log(result);  // undefined


function loginUserMsg(username = 'Abc') {  // default value = 'Abc'
    if(username === undefined){
        console.log("Please enter a userName");
        return
    }
    return ` ${username}just loggedIn `
}
// loginUserMsg('bk')  // executes but wont print anything
console.log(loginUserMsg('bk')); // prints or we can put it in a separate variable and ask it to print
console.log(loginUserMsg()); // If no value passed, it gives undefined 


// ************************************

// Rest Operator
function calculateCartPrice(val1, val2, ...num1){
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

// ************************************************************


function one() {
    const username = 'bk'
    function two(){
        const website = 'youtube'
        console.log(username);
    }
    // console.log(website);
    two()
}
one()




