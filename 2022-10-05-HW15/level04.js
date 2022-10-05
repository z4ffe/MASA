// 4.1

const yvelichivaetKajdiiElementMassivaXDD = (arr, num) => {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(Number((arr[i] + num).toFixed(1)))
	}
	return result
}

console.log(yvelichivaetKajdiiElementMassivaXDD([-3.4, 3.7, 0, 5.6, 0.5], 2));
console.log(yvelichivaetKajdiiElementMassivaXDD([4.5, 0, 2.8, -15, -12.3], -2.8));

// 4.2

const sqrtArr = (arr) => {
	let result = [];
	const mathSqrtAbs = (num) => {
		result.push(Math.sqrt(Math.abs(num)))
	}
	for (let i = 0; i < arr.length; i++) {
		mathSqrtAbs(arr[i])
	}
	return result
}

console.log(sqrtArr([6.25, -0.36, 0, 1, -144]));
console.log(sqrtArr([-121]));
console.log(sqrtArr([]));

// 4.3

const twoArr = (arr, arr2) => {
	let number = 0;
	let string = '';
	for (let i = 0; i < arr.length; i++) {
		number += arr[i]
		string += arr2[i]
	}
	console.log(number)
	console.log(string)
}

twoArr([6.25, -0.36, 0, 1, -144], ['O ', 'la-la, ', 'what ', 'a ', 'day!'])
twoArr([-121], [''])

// 4.4

let john = ['John', 'Smith', 'developer', 'Ohio', 1997, 'John', 'Mary']

let index = 0;
while (true) {
	if (isNaN(john[index])) {
		console.log(john[index])
		index++
	} else {
		break
	}
}

// 4.5

let arr1 = [23, false, 'lala', 'haha', true, false, false, true]
let arr2 = [123, false, 'olala', 'haha','OMG']
let arr3 = [true, 23, false, 'lala', 'haha', true, false, false, true]

const trueCheck = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== true) {
			console.log(arr[i])
		} else {
			break
		}
	}
}

trueCheck(arr1)
trueCheck(arr2)
trueCheck(arr3)