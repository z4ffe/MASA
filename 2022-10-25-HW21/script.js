const prompt = require('prompt-sync')();

// 3

const script = n => {
   let str = ''
   for (let i = 1; i <= n; i++) {
	  for (let j = 1; j <= n; j++) str += `${i * j} `
	  str += `\n`
   }
   return str
}

console.log(script(4));

// 4

const multiTable = n => {
   let str = ''
   for (let i = 1; i <= n; i++) {
	  str += '\n'
	  for (let j = 1; j <= n; j++) str += `${i} * ${j} = ${i * j} `
   }
   return str
}

console.log(multiTable(9))

// 5

const countries = ['Israel', 'Spain', 'Great Britain', 'Hungary', 'Egypt', 'Lebanon']
const capitals = ['Jerusalem', 'Madrid', 'London', 'Budapest', 'Cairo', 'Beirut']

let answer = '';
let index = 0;
let winner;

do {
   console.log(`What capital of ${countries[index]}?`)
   answer = prompt('Enter your answer: ').toLowerCase()
   answer !== capitals[index].toLowerCase() ? index++ : winner = true
} while (!winner)

// 6

const numAr1 = [4.5, 64, 1024, 81, 10000, 3.1];

// a

let squareNumAr1 = numAr1.map(x => Math.sqrt(x))
console.log(squareNumAr1)

// b


// c

let numAr2 = numAr1.map(x => x - numAr1.indexOf(x))
console.log(numAr2)


















