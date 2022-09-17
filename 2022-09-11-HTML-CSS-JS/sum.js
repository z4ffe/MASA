const prompt = require('prompt-sync')();


let num1 = parseInt(prompt('Enter first number '))
let num2 = parseInt(prompt('Enter second number '))

console.log(`Sum ${num1 + num2}`)


// Any input in JS is a string
// Number(string)
// parseInt(string)
// parseFloat(string/number)
// +string - convert to Number too
