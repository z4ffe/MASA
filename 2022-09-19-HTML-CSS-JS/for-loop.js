// show at the console the numbers from 1 to 10

// Start value, continue condition, i change
/* for (var i = 1; i <= 10; i = i + 1 ) {

    console.log(i);

} */
// Step1: i = 1, 1 <= 10? - console.log(1), i = i + 1 = 2
// Step2: 2 <= 10? - console.log(2), i = i + 1 = 3
// Step3: 3<= 10? .......
/////................................
// Step10: 10 <= 10? -> console.log(10), i = i + 1 = 11
// Step11: 11 <= 10? NO. STOOOOOOP

// Go from 27 to 1 and show each 3rd number

/* for (var i = 27; i >= 1; i = i - 3) {

    console.log(i);

}

function avg(a,b) {
    console.log((a+b)/2)
} */

// We want to run this function 5 times:

/* for (var i = 1; i < 6; i = i + 1 ) {

    var num1 = +prompt('Enter first number:')
    var num2 = +prompt('Enter second number:')

    avg(num1, num2);
} */


/*
let num = 44;
num++
// its same as num + 1
num--;
// its same as num - 1

num += 50
// its same as num + 50
*/


/*
let word = 'qwertyuiop'
let start = word.length - 1 % 2 === 0 ? word.length - 1 : word.length - 2

/!*for (let i = 0; i < word.length; i++) {
	console.log(word[i])
}*!/

if (word.length % 2 === 0) {
	for (let i = word.length + 1; i >= 0; i = i -= 2) {
		console.log(`${word[i]} \n${word[i]}`.toUpperCase())
	}
} else {
	for (let i = word.length - 1; i >= 0 ; i -= 2) {
		console.log(`${word[i]} \n${word[i]}`.toUpperCase())
	}
}
*/

let word = `qwertyasdfghzxcvbnnm`
let start = word.length - 1 % 2 === 0 ? word.length - 1 : word.length - 2


for (let i = start; i >= 0; i -= 2) {
	console.log(word[i].toUpperCase())
}

//

let str = '';

for (let i = 0; i <= word.length - 1 ; i++) {
	str += word[i] + '*'
	if ((i + 1) % 4 === 0) {
		str += `\n`
	}
}

console.log(str)

