/* var str1 = 'encyclopedy';

str1 = str1.toUpperCase(); */

// String is IMMUTABLE - we cannot change it 
// we can only assign it a new value 

/* var str2 = 'synCHroPHasotRon';

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

/****************************************************************
 * 
 *   'qwe'.repeat(3) - repeats the string 3 times
 * 
 *   Output:
 *   'qweqweqwe'
 */

/***********************************************
 * 
 *      ARRAYS
 * 
 */


/*const arr1 = ['jfskfj', 'Tel-Aviv', 'Moshe', '', 'lalala'];

const arr2 = ['Tel-Aviv', 120, 4.5, '', null, true, {color: 'red'}];

console.log(arr2);
console.log(`Element with index 4: ${arr2[4]}`);
console.log(`Length: ${arr2.length}`);
console.log(`Arr2 is ${arr2}`) // this uses toString() method of arrays

console.log(`Datatype of array: ${typeof arr2}`);*/

// MISSION: replace the element with index 1 by 
//            it's value multiplied by 2.
//      Show the new array.
/*

arr2[1] = arr2[1] * 2;
console.log(`The array after the change: `,arr2) // To see arr2 as array, 
                                                 // without toString()
*/

// MISSION: replace the element with index 0 by 
//       the same string, but in UPPER CASE

/*
arr2[0] = arr2[0].toUpperCase();
console.log(`array again:`, arr2);

/!* arr2 = [1,2,3,4,5] // ERROR assignment to the constant *!/

const arr3 = arr2;

console.log(`Arr3: `, arr3)

arr3[0] = 'Rechovot'

console.log(`Arr3 after the change:`,arr3)
console.log(`Arr2 after the change of arr3:`,arr2)
*/

/*
const arr4 = [];

arr4.push(65); // adds elements from the end
arr4.push(125);
arr4.push(33, 46, 10);
/!* [65, 125, 33, 46, 10] *!/
arr4.pop() // removes one element from the end and returns it
let removedElement = arr4.pop();
*/

// MISSION: shift() and unshift() add and remove elements 
//     in the begginning of array.
//   Check, which one adds element and which one removes.

// Answer:
// shift() removes one element from the beginning and returns it
// unshift() adds elements to the beginning

/*// MISSION:
const numArr = [6564, 1.1, 23.5, 66.22, 123, -45]
// Go over the array, use function Math.sqrt() to find
// square root of each element and put it instead of the element,
// rounded (Math.round())

for (let i = 0; i < numArr.length; i++) {

    numArr[i] = Math.round(Math.sqrt(numArr[i]))
}
console.log(`numArr: `, numArr);

// MISSION: 
const food = ['Pizza', 'Lasagne', 'Hinkali','Hummus','Falafel','Sabih'];
const menu = [];*/
// Go over the array "food" and add each it's element to the menu
// with number, like this: ['0. Pizza','1. Lasagne' , ...]
/*

for (let i = 0; i < food.length; i++ ) {

    menu.push(i+1 + '. ' + food[i]);
    console.log(menu[i]);

}

console.log(`Menu: `, menu);
*/

// const drinks = ['Cola','Vine','Water','Beer','Juice','7Up'];

// MISSION: go over the array "food", start from the memeber
//        with index 1, show pairs of food and drink
// on the appropriate places (with odd indexes only)
// example of output: 'Lasagna and Vine', 'Hummus and Beer' ... 

//for (let i = 1; i < food.length; i = i+2) the same as
/*for (let i = 1; i < food.length; i += 2) {

    console.log(`${food[i]} and ${drinks[i]}`)

}*/

/*************************************
 * 
 *              str.substring(start, length) - cuts a substring with 
 *                            a given length, starting from "start"
 * 
 *              str.substring(start) - cuts a substring from "start"
 *                                     till the end
 * 
 ************************************/
/*
let str = 'synCHroPHasotRon';

// MISSION: put into str2 part of str , that starts at the 1st letter(Human)
//  and has length of 7.
//      Put into str3 part of str from the 8th letter (human)
//       and till the end
let str2 = str.substring(0,7);
let str3 = str.substring(7);

console.log(`str.substring(0,7) = ${str2}`);
console.log(`str.substring(7) = ${str3}`);*/

/*********************************************************
 * 
 *           str.indexOf(substr) - returns index of substr in str ,
 *                           if substr is not found, returns -1
 *     
 *           str.indexOf(substr, start) - returns index of substr in str,
 *                  start looking from "start"
 */

/*
console.log(`Index of Ron in ${str} is ${str.indexOf('Ron')}`);
console.log(`Index of Don in ${str} is ${str.indexOf('Don')}`);

// synCHroPHasotRon

let firstLocation = str.indexOf('s')

console.log(`Index of "s" in ${str} is ${firstLocation}`);

let secondLocation = str.indexOf('s', firstLocation + 1);

console.log(`Index of next "s" in ${str} is ${secondLocation}`);

let thirdLocation = str.indexOf('s', secondLocation + 1);

console.log(`Again, index of next "s" in ${str} is ${thirdLocation}`);

const cities = ['Beer-Sheva','Rechovot','Nes-Ziona','Rishon-le-Zion','Tel-Aviv','Holon','Rechovot','Ashquelon','Ashdod','Rechovot'];

//MISSION: find all the 3 indexes of 'Rechovot', like we did before

/!* 1, 6, 9 *!/

//!*****************
/!** str.trm() *!/
//!*****************

let strWithSpaces = '   I like pizza   ';
console.log(`A${strWithSpaces.trim()}B`);
console.log(`A${strWithSpaces.trimStart()}B`);
console.log(`A${strWithSpaces.trimEnd()}B`);
*/

//////////////////

/* str.padStart(), str.padEnd() */

const zipCode = [678, 5020129, 100685, 2345, 2098102]

function sevenZero(arr, mode) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (mode === 'start') {
            let temp = arr[i].toString().padStart(10, '*')
            result.push(temp)
        } else if (mode === 'end') {
            let temp = arr[i].toString().padEnd(10, '*')
            result.push(temp)
        }
    }
    return result
}

console.log(sevenZero(zipCode, 'start'))
console.log(sevenZero(zipCode, 'end'))

//

const foods = ['lasagna', 'hummus','pizza']
const drinks = ['water', 'coctail','juice']

// MISSION: show all the foods on one row
//          and all the drinks exactly below them on the next row, like this:

//// lasagna   hummus     pizza
///  water     coctail    juice

// use padStart() or padEnd()

function arrToString(arr) {
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        result += `${arr[i]} `
    }
    return result
}

console.log(arrToString(foods))
console.log(arrToString(drinks))


function arrToString2(foods, drinks) {
    let resultFood = ''
    let resultDrinks = ''
    for (let i = 0; i < foods.length; i++) {
        resultFood += foods[i].padEnd(10, ' ')
        resultDrinks += drinks[i].padEnd(10, ' ')
    }
    console.log(resultFood)
    console.log(resultDrinks)
}

arrToString2(foods, drinks)


//////































