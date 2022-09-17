const prompt = require('prompt-sync')();

function avgOfTwo (a, b) {
	return `Average of ${a} and ${b} equal to ${(a + b) / 2}`
}

let a = +prompt('Enter first number: ')
let b = +prompt('Enter second number: ')

console.log(avgOfTwo(a, b))

//


function firstAndLast (word) {
	let first = word.at(0)
	let last = word.at(-1)
	return `Word is ${word}. First letter is: ${first}, Last letter is ${last}`
}

let word = prompt(`Enter your word: `)

console.log(firstAndLast(word))

//

