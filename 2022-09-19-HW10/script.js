// 2.a

function sumFromOneTillNum(num) {
	let result = 0;
	for (let i = 0; i <= num; i++) {
		result += i
	}
	return result
}

console.log(sumFromOneTillNum(6))

// 2.b

function showEven(num) {
	let result = '';
	let evenOdd = (num % 2 === 0)
	if (evenOdd) {
		for (let i = num; i >= 1; i -= 2) {
			result += i + ' '
		}
	} else {
		for (let i = num - 1; i >= 1; i -= 2) {
			result += i + ' '
		}
	}

	return result
}

console.log(showEven(11))


// 2.c

function revertTheWord(str) {
	let result = '';
	for (let i = str.length - 1; i >= 0; i--) {
		result += str[i] + ' '
	}
	return result
}

console.log(revertTheWord('cat'))

// 3.

function startTriangle() {
	for (let i = 0; i <= 5; i++) {
		console.log('*'.repeat(i))
	}
}

startTriangle(5)

// 4.

function prepareWordForHangman(word) {
	let result = '';
	if (!word || word.length === 1 || word === '' || word === null) {
		result = 'ERROR'
	} else {
		for (let i = 0; i <= word.length - 1; i++) {
			if (i === 0 || i === word.length - 1) {
				result += word[i].toUpperCase()
			} else {
				result += '-'
			}
		}
	}
	return result;
}


function prepareWordForHangman2(word) {
	let result = '';
	if (!word || word.length === 1 || word === '' || word === null) {
		return 'ERROR'
	}
	result += word.at(0).toUpperCase()
	result += word.slice(1, -1).replaceAll(/[A-z0-9]/g, '-')
	result += word.at(-1).toUpperCase()
	return result
}

function prepareWordForHangman3(word) {
	if (!word || word.length < 2) {
		return 'ERROR'
	}
	let str = word[0].toUpperCase()
	for (let i = 1; i <= word.length - 2 ; i++) {
		str += ' - '
	}
	str += word[word.length - 1].toUpperCase()
	return str
}

function prepareWordForHangman4(word) {
	if (!word || word.length < 2) {
		return 'ERROR'
	}
	let result = '';
	result += word.at(0).toUpperCase()
	result += '-'.repeat(word.length - 2)
	result += word.at(-1).toUpperCase()
	return result
}

console.log(prepareWordForHangman('strawberry'))
console.log(prepareWordForHangman('caramel'))
console.log(prepareWordForHangman('!'))
console.log(prepareWordForHangman(''))
console.log(prepareWordForHangman(' '))
console.log(prepareWordForHangman())

console.log(prepareWordForHangman2('strawberry'))
console.log(prepareWordForHangman2('caramel'))
console.log(prepareWordForHangman2('!'))
console.log(prepareWordForHangman2(''))
console.log(prepareWordForHangman2(' '))
console.log(prepareWordForHangman2())

console.log(prepareWordForHangman3('strawberry'))
console.log(prepareWordForHangman3('caramel'))
console.log(prepareWordForHangman3('!'))
console.log(prepareWordForHangman3(''))
console.log(prepareWordForHangman3(' '))
console.log(prepareWordForHangman3())

console.log(prepareWordForHangman4('strawberry'))
console.log(prepareWordForHangman4('caramel'))
console.log(prepareWordForHangman4('!'))
console.log(prepareWordForHangman4(''))
console.log(prepareWordForHangman4(' '))
console.log(prepareWordForHangman4())

/*
try {
	console.log(prepareWordForHangman3('strawberry!'))
} catch (e) {
	console.log(e)
}*/
