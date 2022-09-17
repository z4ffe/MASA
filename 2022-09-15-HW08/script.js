const prompt = require('prompt-sync')();

// 1.a

let userNumber = Number(prompt('Enter number: '))

let numberResult = (isNaN(userNumber)) ? `It's not a number`
	: userNumber < 70 ? `${userNumber} < 70`
		: userNumber > 210 ? `${userNumber} > 210`
			: `${userNumber} is between 70 and 210`

console.log(numberResult)

// 1.b

let userName = prompt('Enter ur name: ').toLowerCase()
let lastName = prompt('Enter ur last name: ').toLowerCase()

let nameResult = (!userName && !lastName) ? 'Go away'
	: (isNaN(userNumber) && isNaN(lastName)) ? 'Go away'
	: (userName === 'john' && lastName === 'smith' || userName === 'jane' && lastName === 'smith' || userName === 'jack' && lastName === 'daniels') ? 'We r happy to see u'
		: 'Go away'

console.log(nameResult)


// 2.a

const avg = (a, b, c) => {
	return ((a + b + c) / (arguments.length - 2))
}

console.log(avg(5, 3, 5))

// 2.b

let num1 = Number(prompt('Enter first number: '))
let num2 = Number(prompt('Enter second number: '))
let num3 = Number(prompt('Enter three number: '))

function avg2 (a, b ,c) {
	console.log((a + b + c) / (arguments.length))
}

avg2(num1, num2, num3)

// 2.c

let x = 15
let y = 20
let z = 33

console.log(avg(x, y ,z))
avg2(30, 40, 50)

// 3

console.log(typeof '')

let newVariable;

console.log(typeof newVariable)
console.log(typeof true)
console.log(typeof false)

function checkParse(str) {
	console.log(`parseInt(${str}) value: ${parseInt(str)}, datatype: ${typeof parseInt(str)}`);
	console.log(`parseFloat(${str}) value: ${parseFloat(str)}, datatype: ${typeof parseFloat(str)}`);
}

//   let testConfirm = confirm('???')
//   console.log(typeof testConfirm)

checkParse(15.5)
checkParse('12asdf')
checkParse('1024.34asdf')
checkParse('asdf')
checkParse('')
checkParse(null)
checkParse(undefined)

// 4

/*let birthYear = Number(prompt('Enter your year of birth: '))
let birthMonth = Number(prompt('Enter your month of birth like as a number: '))
let birthDay = Number(prompt('Enter your birth day: '))

let currYear = new Date().getFullYear();
let currMonth = new Date().getMonth() + 1;
let currDay = new Date().getDate();

if ((birthMonth > currMonth || birthMonth === currMonth || birthDay > currDay) && !isNaN(birthMonth) && !isNaN(birthYear) && !isNaN(birthDay)) {
	console.log(`${(currYear - birthYear - 1)}`)
} else if (!isNaN(birthMonth)) {
	console.log(`${(currYear - birthYear)}`)
} else {
	console.log('Wrong input, use only numbers')
}*/

// 5

function randomFunction () {
	let name = prompt('Enter ur name: ')

	let birthYear = Number(prompt('Enter your year of birth: '))
	let birthMonth = Number(prompt('Enter your month of birth like as a number: '))
	let birthDay = Number(prompt('Enter your birth day: '))
	let ageOfRetirement = Number(prompt('Enter your age of retirement: '))

	let currYear = new Date().getFullYear();
	let currMonth = new Date().getMonth() + 1;
	let currDay = new Date().getDate();

	let age;

	if ((birthMonth > currMonth || birthMonth === currMonth || birthDay > currDay) && !isNaN(birthMonth) && !isNaN(birthYear) && !isNaN(birthDay)) {
		age = (`${(currYear - birthYear - 1)}`)
	} else if (!isNaN(birthMonth)) {
		age = (`${(currYear - birthYear)}`)
	} else {
		age = ('Wrong input, use only numbers')
	}

	if (ageOfRetirement - age > 0) {
		console.log(`${name} is going to retire ${ageOfRetirement - age} years from now`)
	} else if ((ageOfRetirement - age) < ageOfRetirement){
		console.log(`${name} is already retired`)
	}
}

randomFunction()






