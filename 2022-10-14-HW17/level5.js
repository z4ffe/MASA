const prompt = require('prompt-sync')();

// 5.1

const wtf = arr => {
   for (let i = 0; i < arr.length; i++) {
	  arr[i] = arr[i + 1]
	  if (i === arr.length - 1) arr[arr.length - 1] = 'I did it!'
   }
   return arr
}

console.log(wtf([6.25, -0.36, 0, 1, -144]))
console.log(wtf([true, false, false, false, true, true]))
console.log(wtf(['I am hungry']))
console.log(wtf([]))

// 5.2

const wtf2 = (arr) => {
   if (!arr.length) return arr
   let result = arr;
   result.shift()
   result.push('I did it!')
   return result
}

console.log(wtf2([6.25, -0.36, 0, 1, -144]))
console.log(wtf2([true, false, false, false, true, true]))
console.log(wtf2(['I am hungry']))
console.log(wtf2([]))

// 5.3

const iDontKnowAlreadyHowToCallIt = (rational, int) => {
   let result = 1;
   rational === 0 ? result = 0 : false
   if (int > 0) {
	  for (let i = 0; i < int; i++) {
		 result *= rational
	  }
   } else {
	  for (let i = 0; i < Math.abs(int); i++) {
		 result /= rational
	  }
   }
   console.log(result)
}

iDontKnowAlreadyHowToCallIt(0, 14)  // 0
iDontKnowAlreadyHowToCallIt(2.5, 3) // 15.625
iDontKnowAlreadyHowToCallIt(1, -23)  // 1
iDontKnowAlreadyHowToCallIt(-1, -133) // -1
iDontKnowAlreadyHowToCallIt(3, -4) // 0.012345679012345678
iDontKnowAlreadyHowToCallIt(-245.44, 0) // 1
iDontKnowAlreadyHowToCallIt(-2, 12) // 4096

// 5.4

const wtf3 = arr => {
   let result = 0;
   result = arr[0]
   if (arr[0] % 2 === 0) for (let i = 1; i < arr.length; i++) i % 2 === 0 ? result -= arr[i] : result += arr[i]
   else for (let i = 1; i < arr.length; i++) i % 2 === 0 ? result += arr[i] : result -= arr[i]
   return result
}

console.log(wtf3([4, 3, 6, 9, 8, 3])) // 5
console.log(wtf3([5, 8, 1, 10, 7]))  // -5

// 5.5

const wtf4 = () => {
   let months = ["tishrei", "cheshvan", "kislev", "tevet", "shvat", "adar", "nisan", "iyar", "sivan", "tammuz", "av", "elul"]
   let wrongDateMonth;
   do {
	  let date = +prompt('Enter date: ')
	  let month = prompt('Enter month: ').toLowerCase()
	  if ((date > 30 || date < 1) || (!months.includes(month))) wrongDateMonth = true
	  switch (true) {
		 case (month === 'Tishrei' && (date <= 22)):
			console.log('Autumn Holidays')
			break;
		 case (month === 'Kislev' && (date <= 30 && date >= 24)):
			console.log('Chanuka')
			break;
		 case (month === 'Tevet' && (date <= 3 && date >= 1)):
			console.log('Chanuka')
			break;
		 case (month === 'Shvat' && (date === 15)):
			console.log('Tu biShvat')
			break;
		 case (month === 'Adar' && (date <= 16 && date >= 13)):
			console.log('Purim')
			break;
		 case (month === 'Nisan' && (date <= 21 && date >= 14)):
			console.log('Pesach')
			break;
		 default:
			console.log(`It's holiday!`)
	  }
   } while (!wrongDateMonth)
}

//wtf4()

// 5.6

const wtf5 = arr => {
   let index = 0
   do {
	  console.log(arr[index])
	  index++
	  if (index === arr.length) break;
   } while (arr[index] !== true)
}

wtf5([23, false, 'lala', 'haha', true, false, false, true])
wtf5([123, false, 'olala', 'haha', 'OMG'])
wtf5([true, 23, false, 'lala', 'haha', true, false, false, true])

// 5.7

const wtf6 = () => {
   let answer = prompt('Yes or no?: ').toLowerCase()
   while (answer !== 'yes' && answer !== 'no') {
		answer = prompt('Yes or no?: ').toLowerCase()
   }
   return 'Great answer!'
}

console.log(wtf6())

// 5.8

const wtf7 = () => {
   let number = parseInt(prompt('Enter number: '))
   while (number) {
	  number % 2 === 0 ? console.log(`${number / 2}`) : false
	  number = parseInt(prompt('Enter number: '))
   }
}

wtf7()

// 5.9

const checkGreat = firstName => {
   return firstName.at(0) === 'M' ? 'Great!'
	  : firstName.at(0) === 'G' ? 'Great'
		 : firstName.at(0)
}

console.log(checkGreat('Miri'))
console.log(checkGreat('Roni'))

// 5.10
let color;
const colorDecision = letter => {
   color = letter
   return color === 'b' ? 'blue' : 'red'
}

console.log(colorDecision('b'));
console.log(colorDecision('d'));






















