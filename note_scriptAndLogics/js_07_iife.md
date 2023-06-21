- [iife](#iife)
  - [types of IIFE](#types-of-iife)
      - [Simple / Anonoymous IIFE](#simple--anonoymous-iife)
      - [Named IFFE](#named-iffe)
      - [parameterized IIFE](#parameterized-iife)
  - [Advantages of IIFE](#advantages-of-iife)


## iife

- IIFE is a functional expression which invokes automatically  after the completion of the definition.

```javascript
( function(){console.log('iife function --')} )();  // ()(); definition,Execution
```
* It needs to be closed using ';'
* ( DefinitionOfFunction )( ExecutionOfFunction );

### types of IIFE
##### Simple / Anonoymous IIFE
```javascript
(()=>{
    console.log("Arrow function -- iife");
})();
```
##### Named IFFE
- function is be named while creation.
```javascript
(function chai() {
    console.log("Db Connected --");
})();
```
##### parameterized IIFE
- same as normal function, need to pass the parameters while function starts its execution.
```javascript
((name)=>{
    console.log(`  iife using parameters ${name} `);
})('Bhawani_K')
```

### Advantages of IIFE
- Do not create unnecessary global variables and functions.
- Functions and variables defined in IIFE do not conflict with other functions & variables even if they have same name.
- Makes JS code maintainable.

