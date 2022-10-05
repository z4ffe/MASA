const prompt = require('prompt-sync')();

// 1.

let food = ['pizza', 'bread', 'butter', 'banana', 'humus', 'falafel']

for (let i = 0; i < food.length; i++) {
	console.log(`${food[i].at(1)}`)
}

// 2.

let drink = ['water', 'milk', 'juice', 'beer', 'coffee', 'wine']

for (let i = 0; i < food.length; i++) {
	console.log(`${food[i]} ${drink[i]}`)
}

// 3.

for (let i = 0; i < drink.length; i++) {
	drink[i] = i
}

console.log(drink)

// 4.

const chtoPrazdnyemQuestionMark = (month, date) => {
	switch (true) {
		case (month === 'Tishrei' && (date <= 22)):
			return 'Autumns Holidays'
		case (month === 'Kislev' && (date <= 30 && date >= 24)):
			return 'Chanuka'
		case (month === 'Tevet' && (date <= 3 && date >= 1)):
			return 'Chanuka'
		case (month === 'Shvat' && (date === 15)):
			return 'Tu biShvat'
		case (month === 'Adar' && (date <= 16 && date >= 13)):
			return 'Purim'
		case (month === 'Nisan' && (date <= 21 && date >= 14)):
			return 'Pesach'
		default:
			return 'Wrong input'
	}
}

console.log(chtoPrazdnyemQuestionMark('Tishrei', 20));
console.log(chtoPrazdnyemQuestionMark('Kislev', 24));
console.log(chtoPrazdnyemQuestionMark('Tevet', 2));
console.log(chtoPrazdnyemQuestionMark('Shvat', 15));
console.log(chtoPrazdnyemQuestionMark('Adar', 14));
console.log(chtoPrazdnyemQuestionMark('Nisan', 15));

// 5.

let john = ['John', 'Smith', 'developer', 'Ohio', 1997, 'John', 'Mary']

for (let i = 0; i < john.length; i++) {
	if (!isNaN(john[i])) {
		break
	}
	console.log(john[i])
}

// 6.

for (let i = 0; i < john.length; i++) {
	if (typeof john.at(i) === 'string') {
		console.log(john.at(i))
	}
}

// 7.

let todos = ['clean room', 'brush teeth', 'exercise', 'study js', 'eat healthy']

for (let i = 0; i < todos.length; i++) {
	console.log(todos[i] + '!')
}

// 8.

for (let i = 0; i < todos.length; i++) {
	console.log(todos.at(i))
	todos.shift()
	console.log(todos)
	i--
}

// 9.

let arr1 = [375,-18,6.4,7.12,-0.08,1,128,0,567]

let result = 0;
for (let i = 0; i < arr1.length; i++) {
	result += arr1[i]
}
console.log(result)