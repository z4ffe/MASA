const prompt = require('prompt-sync')();

// Truthy and falsy values

// Falsy values (in addition to false itself):
// - undefined
// - null
// - '' (empty string) ""  ``
// - 0
// - NaN (not a number)


//

let bool = true

if (bool) {
	console.log('There was true')
} else {
	console.log('There was false')
}

bool ? console.log('There was true') : console.log('There was false')

// number > 0


if (67) {
	console.log('TRUE')
} else {
	console.log('FALSE')
}

// Not empty string

if ('Ayanot') {
	console.log('TRUE')
} else {
	console.log('FALSE')
}

// NaN

if (NaN) {
	console.log('TRUE')
} else {
	console.log('FALSE')
}

// 0

if (0) {
	console.log('TRUE')
} else {
	console.log('FALSE')
}

// undefined

if (undefined) {
	console.log('TRUE')
} else {
	console.log('FALSE')
}

// null

if (null) {
	console.log('TRUE')
} else {
	console.log('FALSE')
}

//

let num = Number(prompt('Enter number: '))

if (isNaN(num)) {
	console.log('Not a number')
} else {
	console.log(`${(typeof num)[0].toUpperCase() + (typeof num).slice(1)}`)
}

//

let word = prompt('Enter a word: ')

isNaN(word) ? console.log('Thnk u') : console.log(`You stupid user, I've asked for a word`)

//

let age = 25

let response = age < 18 ? `Dont' cry baby`
	: age < 90 ? 'Sure, get married'
		: 'Well done, grandma'

console.log(response)

//

let car = prompt('What car do u have? ').toLowerCase()

let carResponse = car === 'lexus' ? 'Traitor'
	: car === 'susita' ? 'Go to museum'
		: 'Great wheels!'

console.log(carResponse)

//


















