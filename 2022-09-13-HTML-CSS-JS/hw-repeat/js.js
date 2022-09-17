const prompt = require('prompt-sync')();

let num = +prompt('Enter an integer: ')

if (num !== null && num !== undefined && num !== '' && Number.isInteger(num) === true) {
	console.log('Integer!')
	if (num % 2 === 0) {
		console.log('Even')
	} else {
		console.log('Odd')
	}
} else {
	console.log('The input is INVALID!')
}

