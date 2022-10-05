const prompt = require('prompt-sync')();

// 3.a

let notHolidays = false

do {
	let month = prompt('Enter month: ')
	let date = Number(prompt('Enter date: '))
	switch (true) {
		case (month === 'Tishrei' && (date <= 22)):
			notHolidays = false
			break;
		case (month === 'Kislev' && (date <= 30 && date >= 24)):
			notHolidays = false
			break;
		case (month === 'Tevet' && (date <= 3 && date >= 1)):
			notHolidays = false
			break;
		case (month === 'Shvat' && (date === 15)):
			notHolidays = false
			break;
		case (month === 'Adar' && (date <= 16 && date >= 13)):
			notHolidays = false
			break;
		case (month === 'Nisan' && (date <= 21 && date >= 14)):
			notHolidays = false
			break;
		default:
			notHolidays = true
			break;
	}
} while (notHolidays === false)

// 3.b

let arr1 = [375, -18, 6.4, 7.12, -0.08, 1, 128, 0, 567, -23]

let result = 0;

for (let i = 0; i < arr1.length; i++) {
	result += arr1[i]
	if (i === arr1.length - 1) {
		console.log(result / arr1.length)
	}
}

// 3.3

const parseNegative = (num) => {
	for (let i = num - (num * 2); i <= num; i++) {
		console.log(Math.abs(i));
	}
}

parseNegative(3)

// 3.4

const vozvoditVStepenXD = (num) => {
	if (num === 0) {
		console.log(0)
	}
	for (let i = 0; i < num; i++) {
		console.log(i ** 3 - 4)
	}
}

vozvoditVStepenXD(5)
vozvoditVStepenXD(0)

// 3.5

const hereWeGoAgain = (num) => {
	num = Math.abs(num)
	for (let i = num - (num * 2); i <= num; i++) {
		console.log(Math.abs(i));
	}
}

hereWeGoAgain(3)

// 3.6

const factorial = (num) => {
	let result = 1;
	for (let i = 1; i <= num; i++) {
		result *= i
	}
	return result
}

console.log(factorial(5));
console.log(factorial(0));

// 3.7

const numberAndArrays = (min, max, step) => {
	let result = [];
	if (min < max) {
		for (let i = min; i <= max; i += step) {
			result.push(i)
		}
	} else {
		for (let i = max; i <= min; i -= step) {
			result.unshift(i)
		}
	}
	console.log(result)
	console.log(result.reverse())
}

numberAndArrays(-4, 11, 3)
numberAndArrays(20, 4, -4)
numberAndArrays(-3, 2, 5)