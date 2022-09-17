console.log(5 * 6)

console.log('Result of 5 * 6 is ' + 5 * 6)

console.log(`Result of 7 + 8 - 9 is ${7 + 8 - 9}`)

console.log('Result of 7 + 8 - 9', 7 + 8 - 9)

const Profile = function (name, year, sex) {
	this.name = name
	this.year = year
	this.sex = sex
}

const max = new Profile('max', 1990, 'male')

console.log(max)
console.log(max.name)

var num1 = 35;
var num2 = 7;

console.log(num1, num2)
console.log(num1 + ' / ' + num2 + ' = ' + num1 / num2)
console.log(`${num1} / ${num2} = ${num1 / num2}`)

let a = 2
let b = 2

console.log(`${a} + ${b} = ${a + b}`)

console.log(typeof 123)
console.log(typeof 'asd')
console.log(typeof true)
console.log(typeof function () {})
console.log(typeof new Array('1'))
console.log(typeof {})
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof Symbol(1))
console.log(typeof BigInt(3348329043284012381209312832103))

console.log(`Data type of num1 is ${typeof num1}`)

console.log(`Neil Armstrong said: "This is a small step for the human"`)

console.log(`If u have shoot, shoot, don't talk`)

console.log('In the movie Eli Wallah says: "If you have shoot, shoot, don\'t talk"')

console.log('Cities: Jerusalem\n\tTel-Aviv\n\tHaifa\n\tAshdod\n\tEilat')

console.log(`Do you want a seat near the window? Y\\y\\N\\n`)

let answer = 'Yes'

answer === 'Yes' ? console.log('XD') : console.log(':(')

answer = 'Red'

answer === 'Red' ? console.log(`Great! It's like your eyes`) : false

// {} - contain block of commands

// === - strict comparison by type
// == - non-strict comparison
// !== - strict
// != - non-strict
//
// < or > lower or greater than
// <= or >= lower/equal or greater/equal

num1 % 5 === 0 ? console.log('Yes') : console.log(`${num1} is not divisible by 5`)

const label = document.querySelector('#label')
const button = document.querySelector('#button')

button.addEventListener('click', () => {
	alert(label.value)
})


