const prompt = require('prompt-sync')();

let profession = prompt('Which profession you have? ').toLowerCase()
let carBrand = prompt('Which car you drive? ').toLowerCase()

if (profession === 'chef' || profession === 'cook') {
	console.log('Prepare delicious soup')
} else if ((profession === 'driver' || profession === 'racer') && (carBrand === 'mercedes' || carBrand === 'ferrari')) {
	console.log('\t\t\t\tYou drive a Mercedes or Ferrari')
} else {
	console.log(`\t\t\t\tWe don't know this profession`)
}

let age = 80
let sleptWell = 'no'
let takeMedicine = 'yes'

if (sleptWell === 'no' || age === 80 && takeMedicine === 'yes') {
	console.log(`Don't drive`)
}

// LOGIC OPERATORS

// && - and
// || - or
// ! - not

//   &&   | true  | false
//-----------------------
// true   | true  | false
// false  | false | false
// ----------------------

//   ||   | true | false
//-----------------------
// true   | true | true
// false  | true | false
// ----------------------

