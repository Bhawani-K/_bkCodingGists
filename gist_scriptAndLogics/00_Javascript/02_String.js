const name = "Bhawani"
const repoCount = 20
const nickname = '_bk'

console.log(name + "with the nickname of " + nickname + 'has a repocount of ' + repoCount)
console.log(` ${name} with the nickname of ${nickname} has a repocount of ${repoCount}`)

const str = new String('qwerty')
console.log(str[0])
console.log(str.__proto__) // {}, in browser console we get whole set of string methods

/***********
 * String Methods
*/
const gameName = new String('qwerty')
console.log(gameName.length) // 5
console.log(gameName.toUpperCase()) // QWERTY
console.log(gameName.charAt(2)) // gets the character at a certain index.
console.log(gameName.indexOf('t')) //gets the position of the element.

const newStr = gameName.substring(0, 3) // qwe, doesn't include the last value
console.log(newStr)
console.log(gameName.slice(-2, 4)) // we can have - ve values here such as gameName.slice(-2, 4), which reverses the count and does the operation.

const newString = "   asd "
console.log(newString.trim()) // asd,  works on whitespace and newLine Terminators

const url = "https://asd.com/qwe%20asd"
console.log(url.replace('%20', '_')) // this replaces %20 with _
console.log(url.includes('qwe')) // checks if the given string ('qwe') is present or not.

const str1 = new String('asd-qwe-zxc-hjk')
console.log(str1.split('-')) // ['asd', 'qwe', 'zxc', 'hjk']