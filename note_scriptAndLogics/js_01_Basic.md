- [Variables](#variables)
- [DataTypes](#datatypes)
  - [Primitive](#primitive)
  - [Non-Primitive](#non-primitive)
- [TypeConversion](#typeconversion)
  - [convert to Boolean](#convert-to-boolean)
  - [convert to String](#convert-to-string)
  - [Comparision](#comparision)
  - [String](#string)
  - [Date \& Time](#date--time)



<hr>

## Variables
- ### var
  - Global Scoped 
  - where the variables defined outside the function can be accessed globally & variables defined inside the function can be accessed within the function.
- ### let
  - Block Scoped
  - where it can't be accessible outside the particular block.
- ### const
  - Block Scoped
  - When users declare the const variable, they need to initialize it otherwise, it returns an error.
  - Cannot be updated once its declared.

## DataTypes
### Primitive
- #### String
  - Double Quotes : "Hello"
  - single Quotes : 'Hello'
  - BackTicks : Hello, this is the extended functionality of quotes.which allows us to embed the variables & expressions into string by wrapping them in ${........}.
- #### Number
  - represents both integer and floating numbers
  - limits upto (253 - 1)
  - Special numeric values - Infinity, -Infinity, NaN
- #### Boolean
  - has only 2 values - true, false.
- #### Null
  - represents as its just empty, novalue.
- #### unDefined
  - where value is declared/ initialized but not assigned.
- #### BigInt
  - same as type number, but can store really larger integers.
  - cretaed by adding 'n' to the end of an integer.
  - denoted by '165481515151516515451651615165n'
- #### Symbol
  - used to create unique identifiers for objects.

### Non-Primitive
- #### Arrays
- #### Objects
- #### typeOf operator
  - returns the type of the operand. Helps to do a quick check the dataType of the operand.
  - used as typeof x or typeof(x)
  - always returns the value in <b>string</b> DataType.
  - typeof(123)  // "number"
  - typeof(typeof 123)  // "string"

## TypeConversion
  - ### convert to Number
    - #### Number(value to Convert)
    - numeric conversion rules :
        | Value        | After Conversion                                                                                                     |
        | ------------ | -------------------------------------------------------------------------------------------------------------------- |
        | undefined    | NaN                                                                                                                  |
        | null         | 0                                                                                                                    |
        | true & false | 1 and 0                                                                                                              |
        | string       | Whitespaces are removed. If string is empty, the result is 0.If number & string is mixed, it results in an error NaN |
 	
	
<strong>*NOTE </strong>
    - Here null & undefined behave differently, 
      - Null becomes Zero 
      - undefined becomes NaN.

### convert to Boolean
- #### Boolean(value to Convert)
    - Values such as an empty string, 0, null, undefined & NaN, the value gets false.
    - else other values are true.
### convert to String
- #### String(value to Convert)
  - Operations
    - +, -, *, /, %, **, etc..
  - PreIncrement
    - where the value is increased and immediately use the result of the operator
    - <code> let counter = 0;alert( ++counter ); // 1 </code>
    - <code> let counter = 1; alert( 2 * ++counter ); // 4 </code>

   - PostIncrement
      - where the value gets increased, but its previous value.
      - <code> let counter = 0;alert( counter++ ); // 0 </code>
      - <code> let counter = 1; alert( 2 * counter++ ); // 2, because counter++ returns the "old" value</code>
  
### Comparision
- #### , <, =, <=, >=, !=, ==, ===
  - Boolean value is the result, i.e. it may be true or false.
### String
    - ways to create String
      - By using string interpolation
      - const hello = 'Hello'
      - by using new keyword
      - <code> const sport = new String('Badminton') </code>
  - #### String Methods
    - Nums & Math
    - Created by using 2 ways
      - by using
        - const gamePoint = 200
      - By using new keyword
        - const score = new Number(gamePoint)
### Date & Time
  - ####  

