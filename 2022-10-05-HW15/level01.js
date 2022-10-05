const prompt = require('prompt-sync')();

// 1.

for (let i = -5; i < 14; i++) {
	console.log(i)
}

// 2.

for (let i = 0; i < 23; i += 2) {
	console.log(i)
}

// 3.

for (let i = 12; i > 0; i--) {
	console.log(i)
}
// 4.

for (let i = 35; i >= -10; i -= 5) {
	console.log(i)
}

// 5.

const num1 = parseInt(prompt('Enter minimum number: '))
const num2 = parseInt(prompt('Enter maximum number: '))

for (let i = num1; i <= num2; i++) {
	console.log(i)
}

// 6.

const number1 = parseInt(prompt('Enter minimum number: '))
const number2 = parseInt(prompt('Enter maximum number: '))
const step = parseInt(prompt('Enter step: '))

for (let i = number1; i <= number2; i += step) {
	console.log(i)
}

// 7.

let cyclones = ['Ana','Bill','Claudette','Danny','Elsa','Fred','Grace','Henri','Ida','Julian','Kate','Larry','Mindy','Nicholas','Odette','Peter','Rose','Sam','Teresa','Victor','Wanda']

for (let i = 0; i < cyclones.length; i++) {
	console.log(cyclones[i])
}

// 8.

const rep = (string, number) => {
	return (string + '\n').repeat(number)
}

console.log(rep(`house`, 3));