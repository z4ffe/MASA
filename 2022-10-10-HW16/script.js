const prompt = require('prompt-sync')();

// 3

let str = 'One, day, I, am, going, to, make, onions, cry'

console.log(str.split(',').join(''))

// 4

const numberString = (num) => {
   return num.toString().split('').map(x => Number(x)).reduce((x, y) => x + y)
}

console.log(numberString(159))

// 5

const canVote = (arr) => {
   let result = []
   for (let i = 0; i < arr.length; i++) {
	  result.push(arr[i] >= 18)
   }
   return result.join(', ')
}

console.log(canVote([18, 18, 21, 30, 119, 66, 0.5, 12, 19, 45, 78, 4.5]))

// 7.a

const isTestTooEasy = (arr) => {
   return arr.find(x => x >= 20) ? 'true' : 'false'

}

console.log(isTestTooEasy([10, 15, 13, 19])) // false
console.log(isTestTooEasy([7, 13, 20, 15])) // true

// 7.b

const convertToString = (arr) => {
   return arr.join(' & ')
}

console.log(convertToString([10, 15, 13, 19])) // "10 & 15 & 13 & 19"
console.log(convertToString([7, 13, 20, 15])) // "7 & 13 & 20 & 15"

// 7.c

const arOfAr = [[1, 0, 2, 0, 4], [3, 3, 3], [4, 7], [9, 9, 0, 1], [8, 5]]

const overArray = (arr) => {
   return arr.map(el => el.join(''))
}

console.log(overArray(arOfAr)); // [10204,333,47,9901,85]

// 9

const rightPassword = (pwd) => {
   let userPwd = prompt('Enter ur password: ')
   let decision;
   while (pwd !== userPwd) {
	  decision = prompt('Do u want to change ur password?: Y/n ').toLowerCase()
	  if (decision === 'y') break
	  userPwd = prompt('Enter ur password: ')
   }
   return decision === undefined || pwd === userPwd ? `You're connected`
	  : decision === 'y' ? `Choose a new password`
		 : false
}

console.log(rightPassword('123'))
