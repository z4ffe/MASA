const prompt = require('prompt-sync')();

let str = 'synCHroPHasotRon'

let str2 = str.slice(0, 7)
let str3 = str.slice(7)

let str4 = str.substring(0, 7)
let str5 = str.substring(7)

console.log(`slice: ${str2}`)
console.log(`slice: ${str3}`)

console.log(`substring: ${str4}`)
console.log(`substring: ${str3}`)

//

let string = "hellomynameishuman1"

console.log(string.indexOf('h'))
console.log(string.indexOf('h', string.indexOf('h') + 1))
console.log(string.indexOf('1'))
console.log(string.indexOf('2'))


//

let firstLocation = str.indexOf('s')

console.log(`Index of "s" in ${str} is ${firstLocation}`);

let secondLocation = str.indexOf('s', firstLocation + 1);

console.log(`Index of next "s" in ${str} is ${secondLocation}`);


//

const cities = ['Beer-Sheva','Rechovot','Nes-Ziona','Rishon-le-Zion','Tel-Aviv','Holon','Rechovot','Ashquelon','Ashdod','Rechovot'];

let citiesIndex = [];

for (let i = 0; i < cities.length; i++) {
	cities[i] === 'Rechovot' ? citiesIndex.push(cities.indexOf('Rechovot', i)) : false
}

console.log(citiesIndex)

//

let num = 10

while (num > 0) {
	num--
	console.log(num)
}

//

/*let answer = prompt('Marry me! ')

while (answer.toLowerCase() !== 'yes') {
	answer = prompt('Please, marry me! ')
}

console.log('I knew it!')*/

//

/*let favNum = prompt(`What's ur favorite number: `).replaceAll(' ', '')

while ((!favNum && favNum !== '0') || isNaN(favNum)) {
	favNum = +prompt(`Not a number, enter valid number: `).replaceAll(' ', '')
}

console.log(`It's a number ${favNum}`)*/

//

let str10 = '     trim is working only on start and end    '.trim()
let str11 = '     trim is working only on start and end    '.trimStart()
let str12 = '     trim is working only on start and end    '.trimEnd()

console.log(str10)
console.log(str11)
console.log(str12)

//

const arr1 = ['pizza','falafel', 45, 42, 0, 124, 'lasagna']
const arr2 = ['pizza','falafel', 45, 42, 124, 'lasagna']
const arr3 = []

function checkZero (arr) {
	let index = 0;
	while (arr[index] !== 0 && index < arr.length) {
		console.log(arr[index])
		index++
	}
}

checkZero(arr1)









