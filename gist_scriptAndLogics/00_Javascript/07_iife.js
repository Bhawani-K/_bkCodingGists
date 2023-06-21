// Immediately Invoked Function Expressions (IIFE)
// ()(); // Definition,Execution..
// iife function needs to be closed by ;

(function chai() {
    console.log("Db Connected --");
})(); // iife Function
// chai() //normal function execution

// *************************************************************************

// IIFE in arrow function
(()=>{
    console.log("Arrow function -- iife");
})();

// *************************************************************************

// iffe using parameters
((name)=>{
    console.log(`  iife using parameters ${name} `);
})('Bhawani_K')
// same as chai(' asdf ');


