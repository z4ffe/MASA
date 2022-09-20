/*
var str1 = 'encyclopedy';

str1 = str1.toUpperCase();

// String is IMMUTABLE - we cannot change it 
// we can only assign it a new value 

var str2 = 'synCHroPHasotRon';

str2 = str2.toLowerCase();

console.log(str2[0])
console.log(str2.length)

console.log(str2[str2.length - 1]);
            0123456
var str3 = 'giraffe'

var str4 = prompt('Enter a word:')
// MISSION: Show the 4th letter of str4
//          Show the last letter of str4
//          Show the letter before the last

console.log(str4[3]);
console.log(str4[str4.length - 1]);
console.log(str4[str4.length - 2]);

var str5 = 'arror'
str5[0] = 'e'
console.log(str5)

console.log(str5.replace('a','e'));
console.log(`str5 after replace ${str5}`);

str5 = str5.replace('a','e');
console.log(`str5 after replace and assignment ${str5}`);

var str6 = "Van more error";
// MISSION: fix str6 and replace 'Van' by 'One'

str6 = str6.replace('Van','One');
console.log('Fixed str6:\n' + str6);// string concatenation before ES6
console.log(`Fixed str6:\n ${str6}`);// template string after ES6

*/


const arrInt = [401, 558, 401, 0, 329, 947, 974, 724, 532, 937]
const arrStr = ["ASMS8D2W", "AWi6r2H", "o0I", "lC4tWG89", "J38g", "LqYlH6ZG", "Il68", "2jW", "cC8lCX7h", "EMb"]

const arrObj = [
	{
		key: '1'
	},
	{
		key: '2'
	}]


console.log(arrInt)
console.log(`Element with index 4: ${arrInt[4]}`)
console.log(`Length: ${arrInt.length}`)
console.log(arrInt.join(' :) '))
console.log(arrInt.toString())
console.log(typeof arrInt)

arrInt[1] = arrInt[1] * 2
console.log(`The array after change:`, arrInt)

//

arrStr[0] = arrStr[0].toUpperCase()
console.log(arrStr)

// arrInt = [1, 2, 3, 4, 5] // error when assign to const

arr1 = [1, 2, 3, ...arrInt]
console.log(arr1)

arr1[0] = 'Rehovot'

console.log(arr1)
console.log(arrInt)

let emptyArr = []

emptyArr.push(1) 					// add to end
emptyArr.push(2)
emptyArr.push(3, 4, 5)
emptyArr.pop() 						// delete from end
let removedElem = emptyArr.pop()	// removed last element in array and return it

console.log(emptyArr)
console.log(removedElem)

//

let shiftUnshift = ["A5vuMxM9", "qw6Qfy16", "ddT", "VIOv", "tBK", "91dTysC", "9gRx3RF", "362", "9dX", "U7LGIP"]

let shift = shiftUnshift.shift()
shiftUnshift.unshift('shifted')

console.log(`arr: ${shiftUnshift}, shift: ${shift}, unshift: ${shiftUnshift[0]}`)

console.log(shiftUnshift.length)
let asd = delete shiftUnshift[1]
console.log(shiftUnshift[1])
console.log(shiftUnshift)
console.log(shiftUnshift.length)

// MISSION:
const numArr = [6564, 1.1, 23.5, 66.22, 123, -45]
// Go over the array, use function Math.sqrt() to find
// square root of each element and put it instead of the element,
// rounded (Math.round())

let resultArr = []
let resultArrLoop = []

numArr.map(x => {
	if (x >= 0) {
		resultArr.push(Math.round(Math.sqrt(x)))
	}
})

//

console.log(resultArr)

for (let i = 0; i < numArr.length; i++) {
	if (numArr[i] >= 0) {
		resultArrLoop.push(Math.round(Math.sqrt(numArr[i])))
	}
}

console.log(resultArrLoop)

//


const arrMenu = ['Pizza', 'Lasagna', 'Hinkali', 'Hummus', 'Sabih', 'Falafel']
let arrMenuResult = []

for (let i = 0; i < arrMenu.length; i++) {
	arrMenuResult.push(`${i + 1}. ${arrMenu[i]}`)
}

console.log(arrMenuResult)



let arrMenuResultMap = []
let index = 1

arrMenu.map(x => {
	arrMenuResultMap.push(`${index}. ${x}`)
	index++
})

console.log(arrMenuResultMap)


//


const arrDrinks = ['Cola', 'Water', 'Vine', 'Beer', 'Juice', '7up']
const arrMenus = ['Pizza', 'Lasagna', 'Hinkali', 'Hummus', 'Sabih', 'Falafel']

for (let i = 0; i < arrDrinks.length; i += 2) {
	console.log(`${arrDrinks[i]} & ${arrMenus[i]}`)
}

//













































