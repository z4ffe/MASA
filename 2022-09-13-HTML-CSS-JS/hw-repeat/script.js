const prompt = require('prompt-sync')();

/*
let result = [n1, n2, n3]

console.log(result.sort((a, b) => a - b).join(' < '))
*/


let n1 = Number(prompt('Enter first num: '))
let n2 = Number(prompt('Enter second num: '))
let n3 = Number(prompt('Enter third num: '))

// option 1

let result1;

if (n1 < n2) {
	if (n1 < n3 || n2 < n3) {
		if (n2 < n3) {
			result1 = `${n1} < ${n2} < ${n3}`
		} else {
			result1 = `${n1} < ${n3} < ${n2}`
		}
	} else {
		result1 = `${n3} < ${n1} < ${n2}`
	}
} else {
	if (n2 < n3 || n1 < n3) {
		if (n1 < n3) {
			result1 = `${n2} < ${n1} < ${n3}`
		} else {
			result1 = `${n2} < ${n3} < ${n1}`
		}
	} else {
		result1 = `${n3} < ${n2} < ${n1}`
	}
}

console.log(result1)

// option 2

let result2

if (n1 < n2 && n2 < n3) {
	result2 = `${n1} < ${n2} < ${n3}`
} else if (n1 < n3 && n3 < n2) {
	result2 = `${n1} < ${n2} < ${n3}`
} else if (n2 < n1 && n1 < n3) {
	result2 = `${n2} < ${n1} < ${n3}`
} else if (n2 < n3 && n3 < n1) {
	result2 = `${n2} < ${n3} < ${n1}`
} else if (n3 < n1 && n1 < n2) {
	result2 = `${n3} < ${n1} < ${n2}`
} else {
	result2 = `${n3} < ${n2} < ${n1}`
}

console.log(result2)

//


let result3 = (n1 > 0 && (n2 > 0 && n3 > 0 || n2 < 0 && n3 < 0)) || (n1 < 0 && (n2 < 0 && n3 > 0 || n2 > 0 && n3 < 0))
	? 'positive' : 'negative';

console.log(result3)

//



