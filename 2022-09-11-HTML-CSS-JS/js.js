let favColor = prompt('What is ur fav color?')  // camelCase for variables names

// function prompt() returns a value that the user enters

// Operator 'new' together with the constructor creates new object of the class Date()

let minDrivingAge = 17
let date = new Date()
let hadDrink = prompt('Have you drink?')
let takeMedicine = prompt('Are you taking a sedative medicine?')

let birthYear = prompt('Which year you was born?')

document.querySelector('#color').textContent = `Ur fav color is: ${favColor}`

document.querySelector('#year').textContent = `Your age is: ${date.getFullYear() - birthYear}`

const dl = document.querySelector('#driving-license')

if (date.getFullYear() - birthYear < minDrivingAge || date.getFullYear() - birthYear > 95) {
	dl.textContent +=(`No - Under 17 yo or older than 95`)
} else {
	let drivingLicense = prompt('Do u have DL? yes/no')
	if (drivingLicense.toLowerCase() === 'yes' && hadDrink.toLowerCase() === 'yes' || takeMedicine.toLowerCase() === 'yes') {
		dl.textContent += 'No'
	} else if (drivingLicense.toLowerCase() === 'yes') {
		dl.textContent += 'Yes'
	} else {
		dl.textContent += 'No'
	}
}


console.log('asdfasdfasdf'.replaceAll('a', 'f'))

