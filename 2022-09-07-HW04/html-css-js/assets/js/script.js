let firstName = 'Paul'
let lastName = 'Lightman'
let currentYear = 2022
let birthYear = 1992

console.log(`Hello, ${firstName} ${lastName}, you are ${currentYear - birthYear} years old`)

if (firstName !== 'John' && lastName !== 'Smith') {
	console.log(`'You've got an unusual name'`)
}

(currentYear - birthYear) >= 18 ? console.log(`you can drink alcohol!`) : console.log(`don't cry, baby`)

console.log(typeof currentYear)

console.log(`Favourite foods Burger\n\t\tCoke\n\t\tPizza\n\t\tSushi`)