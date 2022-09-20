// 2.a

let star = 5

for (let i = 0; i <= star; i++) {
	console.log(' * '.repeat(star))
}

// 2.b

function vowels(word) {
	return word.replaceAll(/[aeiou]/g, '')
}

console.log(vowels('strange'))
console.log(vowels('astonishment'))

// 3.a

let animals = ['cAt','DoG','giRaFFe','LION','tiGer','monkey']

for (let i = 0; i < animals.length; i++) {
	i % 2 === 0 ? animals[i] = animals[i].toLowerCase() : animals[i] = animals[i].toUpperCase()
}

console.log(animals)

// 3.b

for (let i = 0; i < animals.length; i++) {
	console.log(`${animals[i].at(0).toLowerCase()}${animals[i].at(-1).toLowerCase()}`)
}

// 3.c

for (let i = 0; i < animals.length; i++) {
	console.log(`${i + 1}. ${animals[i].toLowerCase()}`)
}

// 3.d

for (let i = animals.length - 1; i >= 0; i--) {
	console.log(`${i + 1}. ${animals[i].toLowerCase()}`)
}

// 3.e

let adjectives = ['black','curious','spotted','scary','striped','happy']

for (let i = 0; i < animals.length; i++) {
	console.log(`${adjectives[i].toLowerCase()} ${animals[i].toLowerCase()}`)
}

// 3.f

for (let i = 0; i < animals.length; i++) {
	console.log(`${adjectives[animals.length - i - 1].toLowerCase()} ${animals[i].toLowerCase()}`)
}

// 3.g

let words = ['I','am','never','too','late',',','the','others','are','just','too','early']

console.log(words.join(' '))

// 3.h

let num = [44, 22, 33, 11, -66, -88, 22, 33]
let sum = 0

for (let i = 0; i < num.length; i++) {
	sum += num[i]
	i === num.length - 1 ? sum = sum / num.length : false
}

console.log(`Avg is ${sum}`)

