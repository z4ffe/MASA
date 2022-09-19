const prompt = require('prompt-sync')();


for (let i = 0; i <= 10; i++) {
	console.log(i)
}

for (let i = 27; i >= 1; i = i - 3) {
	console.log(i)
}

for (let i = 0; i <= 5; i++) {
	let a = +prompt('Enter first: ')
	let b = +prompt('Enter second: ')
	avg(a, b)
}

function avg (a, b) {
	console.log((a + b) / 2)
}