// 1.a

function findAll1(str, char) {

	const locations = []

	let ind = str.indexOf(char);
	while (ind >= 0) {
		locations.push(ind)
		ind = str.indexOf(char, ind + 1)
	}
	return locations;
}

console.log(findAll1('archaebacteria', 'a')) // returns [0,4,7,13]?
console.log(findAll1('abracadabra', 'a')) // returns [0,3,5,7,10]
console.log(findAll1('encyclopedy', 'm')) // returns []
console.log(findAll1('encyclopedy', 'c')) // returns [2,4]
console.log(findAll1('error', 'e')) // returns [0]

// 1.b

function findAll2(str, char) {
	let result = [];
	let index = 0;
	while (true) {
		if (str.at(index) === char) {
			result.push(str.indexOf(char, index))
			index++
		} else if (index < str.length) {
			index++
		} else {
			break;
		}
	}
	return result
}

console.log(findAll2('archaebacteria', 'a')) // returns [0,4,7,13]?
console.log(findAll2('abracadabra', 'a')) // returns [0,3,5,7,10]
console.log(findAll2('encyclopedy', 'm')) // returns []
console.log(findAll2('encyclopedy', 'c')) // returns [2,4]
console.log(findAll2('error', 'e')) // returns [0]

// 1.c

function findAll3(str, char) {
	let result = [];
	let index = 0;
	while (index <= str.length) {
		if (str[index] === char) {
			result.push(index)
			index++
		} else {
			index++
		}
	}
	return result
}

console.log(findAll3('archaebacteria', 'a')) // returns [0,4,7,13]?
console.log(findAll3('abracadabra', 'a')) // returns [0,3,5,7,10]
console.log(findAll3('encyclopedy', 'm')) // returns []
console.log(findAll3('encyclopedy', 'c')) // returns [2,4]
console.log(findAll3('error', 'e')) // returns [0]


const ar1 = [' ', '   ', '     ', '       ']
const ar2 = ['', ' ', '   ', '     ', '       ', '     ', '   ', ' ', '']
const arNum1 = [5, 6, 7, 8]
const arNum2 = [6, 7, 8, 9]
const arNum3 = [5, 6, 7, 8, 9, 8, 7, 6, 5]
let tot1 = 9
let tot2 = 11

function padWithStar(strAr, numAr, total) {
	for (let i = 0; i < strAr.length; i++) {
		let s = strAr[i].padStart(numAr[i], "*");
		s = s.padEnd(total, "*");
		console.log(s);
	}
}

padWithStar(ar1, arNum1, tot1);
padWithStar(ar1, arNum2, tot2);
padWithStar(ar2, arNum3, tot2);


// 2.b

const arr1 = ['', '', '      ', '      ', '', '']
const arrNum1 = [0, 0, 10, 10, 0, 0]
let total = 14

function padWithStar2(strAr, numAr, total) {
	for (let i = 0; i < strAr.length; i++) {
		let s = strAr[i].padStart(numAr[i], "*");
		s = s.padEnd(total, "*");
		console.log(s);
	}
}

padWithStar2(arr1, arrNum1, total);

// 2.c


const arrr1 = ['    ', ' ', '', '']
const arrrNum1 = [7, 6, 7, 8]

function padWithStar3(strAr, numAr) {
	for (let i = 0; i < strAr.length; i++) {
		let s = ' '.repeat(strAr.length - i + 1 / 2) + strAr[i].padStart(numAr[i], " *");
		console.log(s);
	}
}

padWithStar3(arrr1, arrrNum1);

// 5

class IncludesTest {

	constructor(string, inputs, city1, city2, cities) {
		this.string = string
		this.inputs = inputs
		this.city1 = city1
		this.city2 = city2
		this.cities = cities
	}

	a() {
		if (this.string.toString().includes(this.inputs)) {
			return 'Include'
		} else {
			return 'Not include'
		}
	}

	b() {
		if (this.cities.includes(this.city1) || this.cities.includes(this.city2)) {
			return 'Array includes Ashdod or Rechovot'
		} else {
			return 'Not found'
		}
	}

	c_String() {
		let stringResult;
		for (let i = 0; i < this.string.length; i++) {
			if (this.string.indexOf(this.inputs[i]) === -1 || this.string.length !== this.inputs.length) {
				stringResult = 'Include!'
			} else {
				stringResult = 'Include!'
			}
		}
		return stringResult
	}

	c_Array() {
		if (this.cities.indexOf(this.city1) !== -1 || this.cities.indexOf(this.city2) !== -1) {
			return `Array includes Ashdod or Rechovot`
		} else {
			return `Not found`
		}
	}
}

let includesTest = new IncludesTest()

includesTest.string = '123'
includesTest.inputs = '123'

includesTest.cities = ['Ashdod', 'Jerusalem', 'Ashquelon', 'Beer-Sheva']
includesTest.city1 = 'Ashdod'
includesTest.city2 = 'Rechovot'

console.log(includesTest.a());
console.log(includesTest.b());
console.log(includesTest.c_String());
console.log(includesTest.c_Array());

