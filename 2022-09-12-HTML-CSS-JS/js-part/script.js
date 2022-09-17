const prompt = require('prompt-sync')();

/*

let answer = true

console.log('answer = ' + answer)
console.log('typeof answer = ' + typeof answer)

// When we have only one command, we can do this without {}

if (answer === true) {
	console.log('Great!')
} else {
	console.log('Your dentist loves you')
}

// Ternary operator

answer === true ? console.log('Great!') : console.log('Year dentist loves you')

let response = answer === true ? 'Great!' : 'Your dentist loves you!'

console.log(response)

let awaiking = confirm('R u awaiking in the morning?')


awaiking === true ? alert('Nice') : alert('Not nice')*/

/*let speed = prompt('Which speed do you like on the road? ')

let response;

if (speed !== null && speed !== undefined && speed !== '') {
	speed = Number(speed)
	if (isNaN(speed)) {
		response = 'Not a number!'
	} else {
		response = speed > 120 ? 'Formula 1 waits for you' : 'Ok, grandpa'
	}
} else {
	response = 'Wrong input!'
}

console.log(response)*/

// 'Jerusalem' > 'Tel-Aviv' - false // letter = code(eg '40')

let numb = Number(prompt('Enter something: '))

/*
isNaN(numb) ? console.log('Not a Number!') : console.log('Number!')
*/

let response = numb !== '' && numb !== null && isNaN(numb) === false
	? `Yes, it's a number` : `Not a number`;

console.log(response)

//

/*
numb = Number(numb)
console.log(`typeof Number(num) ${typeof numb}`)*/

