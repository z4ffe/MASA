const prompt = require('prompt-sync')();


// 1

let year1 = 1990
let year2 = 1991

let month1 = 'July'
let month2 = 'July'

let day1 = 15
let day2 = 15

if (day1 === day2 && month1 === month2 && year1 === year2) {
	console.log('You both were born on the same day exactly!')
} else if (day1 === day2 && month1 === month2 && year1 !== year2) {
	console.log(`You've got the same birth date!`)
} else {
	console.log(`Wrong date!`)
}

// 2

function smallestBiggest () {
	let num1 = Number(prompt('Enter 1st number: '))
	let num2 = Number(prompt('Enter 2nd number: '))
	let num3 = Number(prompt('Enter 3rd number: '))

	let arr = [num1, num2, num3].sort((a, b) => a - b)
	let result = []

	if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
		console.log('You need to type a number, not a string')
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === arr[i + 1]) {
				result.push(arr[i])
				result.push(' = ')
			} else {
				result.push(arr[i])
				result.push(' < ')
			}
		}
		console.log(result.join('').slice(0, -2))
	}
}

smallestBiggest()

// 3

//   111011
// + 101010
//   ------
//  1100101

// 0 + 0 = 0
// 0 + 1 = 1
// 1 + 0 = 1
// 1 + 1 = 10

// 4

let integerNumber = Number(prompt('Enter number: '))

if (integerNumber !== null && !isNaN(integerNumber) && Number.isInteger(integerNumber)) {
	let oddEven = integerNumber % 2 === 0 ? 'Even' : 'Odd'
	console.log(`This is integer and ${integerNumber} is ${oddEven}`)
} else {
	console.log('This is not integer')
}

// 5

let fN = prompt('Enter 1st number: ')
let sN = prompt('Enter 2st number: ')
let tN = prompt('Enter 3st number: ');

ternaryResult = (fN > 0 && sN > 0 && tN > 0) ? 'Positive' : 'Negative';
console.log(ternaryResult)



