### Strings
##### Ways of declaration
- using doubleTicks ( " " )
```javascript
        const name = "Bhawani"
        const repoCount = 20
        console.log(name + repoCount + "Value")
```
- using SingleTicks ( ' ' )
```javascript
        const name = 'Bhawani'
        const repoCount = 20
        console.log(name + repoCount + 'Value')
```
- using BackTicks ( ` ` ) 
      - used to fetch dynamic variables.
```javascript
        console.log( `  ${name} has a repoCount of ${repoCount} `   ) 
```
- By using Constructor
      - which gets the String of Objects.
      - Here we get the length property and a lots of string methods.
```javascript
        const gameName = new String('qwerty')
        console.log(gameName[0])
        console.log(gameName.__proto__) // {}, in browser console we get whole set of string methods
```
#### String Methods
```javascript
    const gameName = new String('qwerty')
    console.log(gameName.length) // 5
    console.log(gameName.toUpperCase()) // QWERTY
    console.log(gameName.charAt(2)) // gets the character at a certain index.
    console.log(gameName.indexOf('t')) //gets the position of the element.

    const newString = gameName.substring(0,3) // qwe, doesn't include the last value
    console.log(gameName.slice(0,4)) 
    - we can have -ve values here such as gameName.slice(-2,4), which reverses the count and does the operation.

    const newString = "   asd "
    console.log(newString.trim()) // asd,  works on whitespace and newLine Terminators
    
    const url = "https://asd.com/qwe%20asd"
    console.log(url.replace('%20', '_')) // this replaces %20 with _
    console.log(url.includes('qwe')) // checks if the given string ('qwe') is present or not.

    const str1 = new String('asd-qwe-zxc-hjk')
    console.log(str1.split('-')) // ['asd', 'qwe', 'zxc', 'hjk']
```


