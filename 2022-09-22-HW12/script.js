const prompt = require('prompt-sync')();

// 1.a

let word = 'ranDOMwoRD'

console.log(word.at(0).toUpperCase() + word.slice(1).toLowerCase())
console.log(word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase())

// 1.b

let animals = ['cAt', 'DoG', 'giRaFFe', 'LION', 'tiGer', 'monkey']

for (let i = 0; i < animals.length; i++) {
	console.log(animals[i].substring(0, 2).toLowerCase())
}

// 1.c

const colors = ['blue', 'yellow', 'orange', 'green']
const drinks = ['tea', 'coffee', 'milk', 'water', 'juice']

let col = [];
let dri = [];

col.push(colors.shift())
colors.unshift(drinks.shift())
drinks.unshift(col.shift())
col.push(colors.pop())
colors.push(drinks.pop())
drinks.push(col.pop())


console.log(colors)
console.log(drinks)

// 1.d

let str = `"Be strong", I wispered to my WIFY sygnal`

console.log(`${str.indexOf('wi')}  ${str.indexOf('WI')}`)
console.log(`${str.indexOf('strange') ? 'not there' : 'there'}`)

// 1.e

const colors2 = ['   red', '    white   ', '   yellow ', 'green   ', '  lime  ', ' purple ', '   blue', 'teal   ', ' aquamarine   ', '  turquoise ']

for (let i = 0; i < colors2.length; i++) {
	i % 2 === 0 ? console.log(colors2[i].trimStart()) : console.log(colors2[i].trimEnd())
}

// 2

// 4398046511104 Bytes - 4398gb
// 2.8gb - 3006477107 bytes

// 3

// 35gb - 37580963840 byte
// 78574390129 bytes - 73gb

// 4.a

let onlyEven = prompt('Enter even: ');

while (onlyEven % 2 !== 0) {
	onlyEven = prompt('Enter even: ');
}

// 4.b

let password = prompt('Enter password: ');

while (password !== 'password' && password !== 'Password') {
	password = prompt('Enter password: ');
}

// 4.c

function checkMultiplication(n1, n2) {
	let result = n1 + n2
	let answer = prompt('Sum? ')
	while (!(Number(answer) === result || answer === 'stop' || !answer)) {
		answer = prompt('Wrong! Sum? ')
	}
	console.log('Year, right!')
}

checkMultiplication(11,11);

// 4.d

const words1 = ['stone', 'water', 'sand', 'oil', 'fire', '', 'mist', 'rain'];
const words2 = ['stand', 'dance', 'run', 'jump', ''];
const words3 = ['', 'stupid', 'smart', 'swift'];
const words4 = [''];
const words5 = [];
const words6 = ['code', 'letter', 'digit', 'number', 'cifer']

function showUpper(arrWords) {
	let index = 0;
	while (!(arrWords[index] === '' || arrWords.length === 0 || index === arrWords.length)) {
		let temp = arrWords[index]
		console.log(temp)
		index++
	}
}

showUpper(words1)
showUpper(words2)
showUpper(words3)
showUpper(words4)
showUpper(words5)
showUpper(words6)

// 4.e

const nums1 = [10, 15, 6, 5, 4, 100, 21];
const nums2 = [0, 1, 3, 0, 7, 7];
const nums3 = [];
const nums4 = [12];

function sumUntilMax(numArr, sum) {
	let result = 0;
	if (sum === 0 || numArr.length === 0) {
		console.log(0)
	} else {
		for (let i = 0; i < numArr.length; i++) {
			sum > result ? result += numArr[i] : false
		}
	}
	console.log(result)
}


sumUntilMax(nums1, 33)
sumUntilMax(nums1, 141)
sumUntilMax(nums2, 33)
sumUntilMax(nums2, 0)
sumUntilMax(nums3, 33)
sumUntilMax(nums4, 33)
sumUntilMax(nums4, 11)


// Level 1.1

const threeNumber = (a, b, c) => {
	for (let i = a; i <= b; i += c) {
		console.log(i)
	}
}

threeNumber(-55, 15, 5)

// Level 1.2

const sixMax = (a) => {
	temp = 0;
	for (let i = 0; i < a; i++) {
		i % 6 === 0 && i !== 0 ? console.log(i) : false
	}
}

sixMax(14)
sixMax(24)
sixMax(5)

// Level 2.1

const maxToZeroOne = (a) => {
	for (let i = a; i >= -1; i--) {
		console.log(i)
	}
}

maxToZeroOne(-1)
maxToZeroOne(0)
maxToZeroOne(-4)
maxToZeroOne(5)

// Level 2.2

const mathAbs = (a) => {
	for (let i = a; i >= -a; i--) {
		i < 0 ? console.log(Math.abs(i)) : console.log(i)
	}
}

mathAbs(3)
mathAbs(0)

// Level 3.1

const mathSquare = (a) => {
	function threeMinusFour(max) {
		return Math.pow(max, 3) - 4
	}

	for (let i = 0; i < a; i++) {
		console.log(threeMinusFour(i))
	}
}

mathSquare(5)

// Level 3.2

const mathAbs2 = (a) => {
	let max = Math.abs(a)
	for (let i = max; i >= -max; i--) {
		i < 0 ? console.log(Math.abs(i)) : console.log(i)
	}
}

mathAbs2(-4)
mathAbs2(3)
mathAbs2(0)

// Level 3.3

const factorial = (a) => {
	let result = 1;
	for (let i = 1; i <= a; i++) {
		result *= i
	}
	console.log(result)
}

factorial(5)
factorial(0)
factorial(1)
factorial(3)
factorial(10)

// Level 3.4

function maxReversedArray(a, b, c) {
	let arr = []
	let arrReversed = []
	if (a < b) {
		for (a; a <= b; a = a + c) {
			arr.push(a)
			arrReversed.unshift(a)
		}
	} else {
		for (a; a >= b; a = a + c) {
			arr.push(a)
			arrReversed.unshift(a)
		}
	}
	console.log(arr)
	console.log(arrReversed)
}

maxReversedArray(-4, 11, 3)
maxReversedArray(20, 4, -4)
maxReversedArray(-3, 2, 5)

// Level 4.1


function arrNum(arr, num) {
	return arr.map(x => x + num)
}

console.log(arrNum([-3.4, 3.7, 0, 5.6, 0.5], 2))
console.log(arrNum([], 3))
console.log(arrNum([-8], 10))
console.log(arrNum([4.5, 0, 2.8, -15, -12.3], -2.8))

// Level 4.2

function arrSqrt(arr) {
	let result = [];

	function absSqrt(elem) {
		return Math.sqrt(Math.abs(elem))
	}

	for (let i = 0; i < arr.length; i++) {
		result.push(absSqrt(arr[i]))
	}
	console.log(`Old array: `, arr)
	console.log(`New rray: `, result)
}


arrSqrt([6.25, -0.36, 0, 1, -144])
arrSqrt([-121])
arrSqrt([])

// Level 4.3

function numbersWords(arr1, arr2) {
	let arrNum = 0;
	let arrStr = '';
	for (let i = 0; i < arr2.length; i++) {
		arrNum += arr1[i]
		arrStr += arr2[i]
	}
	console.log(`${arrNum}\n ${arrStr}`)
}

numbersWords([6.25, -0.36, 0, 1, -144], ['O ','la-la, ','what ','a ','day!'])
numbersWords([-121],[''])

// Level 5.1

function iDidIt(arr) {
	let result = arr;
	for (let i = 0; i < arr.length; i++) {
		if (i === arr.length - 1) {
			result.pop()
			result.push('I did it!')
		} else {
			result[i] = result[i + 1]
		}
	}
	console.log(result)
}

iDidIt([6.25, -0.36, 0, 1, -144])
iDidIt([true, false, false, false, true, true])
iDidIt(['lala','Great Scott!'])

// Level 5.2

function iDidIt2(arr) {
	let result = []
	result = arr
	result.shift()
	result.push('I Did it!')
	console.log(result)
}

iDidIt2([6.25, -0.36, 0, 1, -144])
iDidIt2([true, false, false, false, true, true])
iDidIt2(['lala','Great Scott!'])

// Level 5.3

function iDontKnowAlreadyHowToCallIt(rational, int) {
	let result = 1;
	rational === 0 ? result = 0 : false
	if (int > 0) {
		for (let i = 0; i < int; i++) {
			result *= rational
		}
	} else {
		for (let i = 0; i < Math.abs(int); i++) {
			result /= rational
		}
	}
	console.log(result)
}

iDontKnowAlreadyHowToCallIt(0, 14)  // 0
iDontKnowAlreadyHowToCallIt(2.5, 3) // 15.625
iDontKnowAlreadyHowToCallIt(1, -23)  // 1
iDontKnowAlreadyHowToCallIt(-1, -133) // -1
iDontKnowAlreadyHowToCallIt(3, -4) // 0.012345679012345678
iDontKnowAlreadyHowToCallIt(-245.44, 0) // 1
iDontKnowAlreadyHowToCallIt(-2, 12) // 4096

// Ternary operator.a

function makeDecision(decision) {
	let action;
	decision === 'Y' ? action = 'Do it!' :
	decision === 'N' ? action = `Don't Do it` :
		(decision !== 'Y') ? action = 'Wrong input!' :
		(decision !== 'N') ? action = 'Wrong input!' : false
			console.log(action)
}

makeDecision('Y')
makeDecision('N')
makeDecision('asd')

// .b c d

function checkPassed(value) {
	let result;
	value > 100 ? result = 'Wrong input' :
		value < 0 ? result = 'Wrong input' :
			value > 60 ? result = 'passed' :
				value < 60 ? result = 'failed' : false
	console.log(`You ${result} the exam`)
}

checkPassed(62)
checkPassed(31)
checkPassed(123)
checkPassed(-5)

// e

const carColor = () => {
	let color = prompt('Which color is her car? ').toLowerCase()
	let company = ''
	color === 'blue' ? console.log('Like a sky') :
		color === 'red' ? company = prompt('Which manufacturer of her car? ') : false
	company === 'toyota' ? console.log('Like a sun on Japanese flag') : console.log('Like a tomato')
}

carColor()
