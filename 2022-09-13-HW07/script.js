const prompt = require('prompt-sync')();

// 1

let adminPassword = 'Rxjel$#1hs'
let admin1 = 'Yosi'
let admin2 = 'Noa'
let admin3 = 'Yael'

let user = prompt('Enter username: ')
let password = prompt('Enter password: ')

let access = (user === admin1 || user === admin2 || user === admin3) && password === adminPassword ? `You're redirected to the admin area` : `Access denied`
console.log(access)

// 1.1

let uppercase = prompt('Enter a word in upper case: ')

if (uppercase === uppercase.toUpperCase()) {
	console.log('Respect!')
} else {
	console.log('Disrespect!')
}

// 2

// 		11111101 + 101001 = 100100110

// 3

let date = new Date().getDay()

switch (true) {
	case date === 1:
		console.log('Closed')
		break
	case date > 0 && date < 4:
		console.log('Open from 8 till 12')
		break
	default:
		console.log('Open from 8 till 20')
}

// 4

let month = new Date().getMonth()

console.log(month)

switch (true) {
	case month < 2 || month > 10 :
		console.log('Winter')
		break
	case month > 1 && month < 5:
		console.log('Spring')
		break
	case month > 4 && month < 8:
		console.log('Summer')
		break
	case month > 7 && month < 11:
		console.log('Autumn')
		break
	default:
		console.log('Wrong input!')
}

// 5

let personHeight = Number(prompt('What is your height? '))
let personWeight = Number(prompt('What is your weight? '))

if (personHeight > 180 && personWeight < 90) {
	console.log(`You're tall, you should eat more`)
} else if ((personHeight <= 170 || personHeight >= 160) && personWeight < 80) {
	console.log(`You're height is great, why you're
   speaking about your weight?`)
} else {
	console.log(`It's okay, bro!`)
}

