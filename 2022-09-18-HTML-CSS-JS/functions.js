const prompt = require('prompt-sync')();

/*
var newWord;

function avgOfTwo(n1, n2) {

    var avg = (n1 + n2) / 2;

    console.log(`Average of ` + n1 + ` and ` + n2 
    + ` equal to ` + avg);

    console.log(`Average of ${n1} and ${n2} equal to ${avg}`);

}
avgOfTwo(7, 10);

/// MISSION: create function firstAndLast()
/// that gets a word and shows the first and 
/// the last letter of the word

function firstAndLast(myWord) {

    console.log(myWord[0]);
    console.log(myWord[myWord.length - 1]);

}

firstAndLast('encyclopedy');

newWord = prompt('Give me some word');

firstAndLast(newWord);

newWord = prompt('Give me some word again');

firstAndLast(newWord);

/!***************************** *!/

function avg(a, b, c) {
            
    var avg = (a + b + c) / 3;
    console.log(`average of ${a} and ${b} and ${c} equals ${avg}`);
    
}

function avg2() {
    
    var a = +prompt('Enter the first number:')
    var b = +prompt('Enter the second number:')
    var c = +prompt('Enter the third number:')

    var avg = (a + b + c) / 3;
    console.log(`average of ${a} and ${b} and ${c} equals ${avg}`);

}*/


const avg = (a, b, c) => {
	return (a + b + c) / 3
}


console.log(avg(5, 5, 5) + avg(5, 5, 5))

console.log(Math.sqrt(5 * 6 - 14))
console.log(Math.sqrt(Math.sqrt(5 * 6 - 14)))


const returnFirstUpper = (word) => {
	let str = word.slice(1)
	return word.at(0) === word.at(0).toUpperCase() ? word.at(0).toLowerCase() + str : word.at(0).toUpperCase() + str
}

console.log(returnFirstUpper('Two'))


const getInitials = (a, b ,c) => {
	return `${a.at(0).toUpperCase()}. ${b.at(0).toUpperCase()}. ${c.at(0).toUpperCase()}.`
}

console.log(getInitials('petrov', 'maxim', 'sergeevich'))


let name = 'petrov maxim sergeevich'.split(' ')

const asd = name.map(x => {
	return x[0].toUpperCase()
})

console.log(asd.join('. ') + '.')



class Initials {
	constructor(a, b ,c) {
		this.first = a
		this.middle = b
		this.last = c
	}

	getInitials() {
		console.log(`${this.first[0].toUpperCase()}. ${this.middle[0].toUpperCase()}. ${this.last[0].toUpperCase()}. `)
	}
}


let myInitials = new Initials('pavel', 'sergeevich', 'kulyasov')

myInitials.getInitials()


//



const calcBMI = (height, weight) => {
	let result = weight / Math.pow(height,2)
	return `${result.toString().slice(4, 6)}.${result.toString().slice(7, 8)}`
}

const checkBMI = () => {
	let name = prompt(`What's your name? `)
	let height = +prompt(`Enter ur height: `)
	let weight = +prompt(`Enter ur weight: `)
	let bmi = +calcBMI(height, weight)
	switch (true) {
		case (bmi < 1 || bmi > 50):
			return (`${name}, wrong height or weight`)
		case(bmi > 26):
			return `${name}, you should walk 10k steps a day`
		case (bmi > 19):
			return `${name}, don't salt your meal too much, don't forget about sport, minimum 10k steps per day`
		default:
			return `${name}, eat more creppes!`
	}
}

console.log(`Physician said: ${checkBMI()}`)























