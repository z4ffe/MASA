const prompt = require('prompt-sync')();

let str2 = 'synCHroPHasotRon'

str2 = str2.toLowerCase()

console.log(str2.at(0))
console.log(str2.charAt(0))
console.log(str2.indexOf('s'))
console.log(str2)
console.log(str2.length)
console.log(str2[str2.length - 1])


//

let str3 = 'giraffe'

console.log(str3[str3.length - 1])

let str4 = prompt('Enter word: ')

console.log(`4th: ${str4[3]}, pre-last: ${str4[str4.length - 2]}, last: ${str4[str4.length - 1]}`)
console.log(`4th: ${str4[3]}, pre-last: ${str4.at(-2)}, last: ${str4.at(-1)}`)

//

let str5 = 'arror'

str5 = str5.replace('a', 'e')
str6 = str5.replaceAll('r', '1')

console.log(str5)
console.log(str6)

//

let str7 = 'Van more error'
let str8 = str7.replace('Van', 'One')

console.log(`Before: ${str7} - After: ${str8}`)

//







