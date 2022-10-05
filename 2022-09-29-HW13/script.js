const prompt = require('prompt-sync')();

// 2.a

while (true) {
	let num1 = prompt('enter first number: ')
	let num2 = prompt('enter second number: ')
	if (num1 * num2 === 0) {
		break
	}
}

// 2.b

while (true) {
	let pw = prompt('enter pw: ')
	if ((pw.length > 5 || pw.length < 12) && pw.at(0) === pw.at(0).toUpperCase() && (pw.at(-1) === '!' || pw.at(-1) === '?')) {
		break
	}
}

// 2.c

while (true) {
	let decision = prompt('u want to go to theater? ').toLowerCase()
	if (decision === 'yes') {
		console.log('Here are your tickets')
		break
	} else if (decision === 'no') {
		break
	}
}

// 2.d

const ar1 = [5, -12, 1.3, 'BluE','black',0.45, 'wHIte',100,2.01, 'ReD']
const ar2 = []
const ar3 = [7, 9.1]
const ar4 = ['GREEN']

function lowerNumber(arr) {
	let index = 0;
	while (true) {
		if (arr[0] === undefined || index === arr.length) {
			break
		}
		if (isNaN(arr[index])) {
			console.log(arr[index].toLowerCase())
		}
		index++
	}
}

lowerNumber(ar1)
lowerNumber(ar2)
lowerNumber(ar3)
lowerNumber(ar4)

// 3

function findAll(word, letter) {
	let result = []
	let index = 0;
	while (index <= word.length) {
		if (word[index] === letter) {
			result.push(word.indexOf(letter, index))
			index++
		}
		index++
	}
	console.log(result)
}

findAll('archaebacteria','a') // returns [0,4,7,13]
findAll('abracadabra','a') // returns [0,3,5,7,10]
findAll('encyclopedy','m') // returns []
findAll('encyclopedy','c') // returns [2,4]
findAll('encyclopedy','c') // returns [2,4]
findAll('error','e') // returns [0]

// 5

const ar1str = [' ', '   ', '     ', '       ']
const ar2str = ['', ' ', '   ', '     ', '       ', '     ', '   ', ' ', '']
const arNum1 = [5, 6, 7, 8]
const arNum2 = [6, 7, 8, 9]
const arNum3 = [5, 6, 7, 8, 9, 8, 7, 6, 5]
let tot1 = 9
let tot2 = 11

function padWithStar(strArr, numArr, total) {
	for (let i = 0; i < strArr.length; i++) {
		console.log(strArr[i].padStart(numArr[i], '*').padEnd(total, '*'))
	}
}

padWithStar(ar1str, arNum1, tot1);
padWithStar(ar1str, arNum2, tot2);
padWithStar	(ar2str, arNum3, tot2);


// additional training

const arr1 = ['Paris','London','Washington','Amsterdam','Kahir','Jerusalem','Tokyo','Athena']
const arr2 = ['Paris','London','Washington','Amsterdam','Kahir','Tokyo','Athena']
const arr3 = ['Jerusalem','Tel-Aviv','Ramat-Gan']
const arr4 = ['Jerusalem']

const jerusalem = (arr) => {
	let index = 0;
	while (arr[index] !== 'Jerusalem') {
		if (index === arr.length) {
			break
		}
		index++
	}
	console.log(index === arr.length ? `I was not in Jerusalem` : `Visited before Jerusalem ${index} cities!`)
}

jerusalem(arr1)
jerusalem(arr2)
jerusalem(arr3)
jerusalem(arr4)








