const prompt = require('prompt-sync')();

// 2

const dayInMonth = (year, month) => {
	if ((year % 4 === 0 && year % 100 !== 0 || year && 400 === 0) && (month === 2)) {
		return 29
	} else {
		switch (month) {
			case 2:
				return 28
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				return 31
			case 4:
			case 6:
			case 9:
			case 11:
				return 30
			default:
				return 'Wrong input!'
		}
	}
}

let year = +prompt('Enter year: ')
let month = +prompt('Enter month as number: ')

console.log(dayInMonth(year, month))


// 3

for (let i = 1; i <= 15; i++) {
	console.log(`I'll never tell lies N: ${i}`)
}

for (let i = 3; i <= 19; i = i + 2) {
	console.log(i)
}

for (let i = 25; i >= -16; i--) {
	if (i > 0 ) {
		i % 5 === 0 ? console.log(`${Math.sqrt(i)}`) : false
	} else if (i < 0) {
		i % 5 === 0 ? console.log(`${Math.abs(i)}`) : false
	}
}