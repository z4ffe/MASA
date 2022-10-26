// 7.1

let sevenOne = [-3.4, 3.7, 0, 5.6, 0.5]

const sevenOneFn = (arr, n) => {
   arr.forEach((el, i, arr) => arr[i] = el + 2)
   return sevenOne
}

console.log(sevenOneFn(sevenOne, 2))

// 7.2

let arrNum = [6.25, -0.36, 0, 1, -144]
let arrStr = ['O ', 'la-la, ', 'what ', 'a ', 'day!']

const sevenTwo = (arr, arr2) => {
   let num = 0
   let str = ''
   arr.forEach((el) => num += el)
   arr2.forEach(el => str += el)
   return `${num}\n${str}`
}
console.log(sevenTwo(arrNum, arrStr))

// 7.3

let sevenThreeArr = [true, false, 0, 'rain']

sevenThreeArr.forEach((el, id, arr) => {
   if (id === arr.length - 2) console.log(`${id} The cake has gone`)
   else if (id === arr.length - 1) console.log(`${id} Happy hour!`)
   else console.log(`${id}`)
})

// 7.4

const calc01 = num => Math.round((num + 3) ** 2)
const arr1 = [-71, 0, 8, -62, -2, 512, 9, 160, -140]
arr1.forEach(el => console.log(calc01(el)))

// 7.5

const calc02 = num => Math.round(Math.sqrt(num))
const arr2 = [16, 0, 23, 4.5, 50.33, 99]

// for of
for (const el of arr2) console.log(calc02(el))

// forEach
arr2.forEach(el => console.log(calc02(el)))

// do while
const arr3 = [16, 0, 23, 4.5, 50.33, -3, 99]
index = 0
do {
   console.log(calc02(arr3[index]))
} while (calc02(arr3[index]) < 0)

// 7.6

const calc3 = (num1, num2) => (num1 + num2) * (num1 - num2)
const calc4 = (name, num1, num2) => `${name}, ${num1} + ${num2} multiplied by ${num1} + ${num2} are ${calc3(num1, num2)}`
console.log(calc4("John", 73, 18))

// e

const arr4 = [73, 0, 335, -11.34, 4, 0, 4032]
const arr5 = [18, -6, 335, 121, 12, 0, 3999]
const names1 = ["John", "Mike", "Mary", "Lisa", "Jane", "David", "Ann"]

for (let i = 0; i < arr4.length; i++) console.log(calc4(names1[i], arr4[i], arr5[i]))

// f

names1.forEach((name, idx) => {
   console.log(calc4(names1[idx], arr4[idx], arr5[idx]))
})

// g

index = 0
do {
   console.log(calc4(names1[index], arr4[index], arr5[index]))
   index++
} while (names1[index].length < 5)

// h

let names2 = ["John", "Mike", "Mary", "Lisa", "Jane", "David", "Margaret"]

index = 0
do {
   console.log(calc4(names2[index], arr4[index], arr5[index]))
   index++
} while (names2[index].length <= 5)

// 7.7

const makeInitials = (firstName, lastName) => `${firstName.at(0).toUpperCase()}.${lastName.at(0).toUpperCase()}.`
console.log(makeInitials("jennifer", "lopez"))

const addTitle = (firstName, lastName, prefix) => `${prefix} ${makeInitials(firstName, lastName)}`
console.log(addTitle("jennifer", "lopez", "Ms"))
console.log(addTitle("Antony", "hopkins", "Mr"))

const firstNames1 = ["jennifer", "mike", "alec", "Julia", "Antony", "Judy"]
const lastNames1 = ["lopez", "Myers", "Boldwin", "Roberts", "hopkins", "Foster"]
const titles1 = ["Ms", "Mr", "Mr", "Ms", "Mr", "Ms"]

for (let i = 0; i < firstNames1.length; i++) console.log(addTitle(firstNames1[i], lastNames1[i], titles1[i]))

