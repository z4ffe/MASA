const prompt = require('prompt-sync')();

// 1st

let name = prompt('What is ur name? ')
let birthYear = Number(prompt('What is ur year of birth? '))
let date = new Date().getFullYear()
let age = date - birthYear

if (age < 60 && age % 10 !== 0) {
	console.log(`${name}, congratulations, you are ${age}`)
} else if (age < 60 && age % 10 === 0) {
	console.log(`${name}, congratulations with your ${age}th anniversary!`)
} else {
	console.log(`Оооо, you're like Methuselah!`)
}

// 2nd

let firstNumber = Number(prompt('Enter first number: '))
let secondNumber = Number(prompt('Enter second number: '))
let thirdNumber = Number(prompt('Enter third number: '))

if (firstNumber === secondNumber) {
	console.log(`The first and the second numbers are equal. \nWrong input!`)
} else {
	console.log(`Biggest number: ${Math.max(firstNumber, secondNumber, thirdNumber)}`)
}

// 3rd

//   +   |   0    |   1
//----------------------
//   0   |   0    |  1
//   1   |   1    |  1

// more like || but to be honest idk what does this table mean and what i need to do XD

// 4th

let year = prompt('Enter year: ')

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
	console.log(`it is leap`)
} else {
	console.log(`it is not leap`)
}

