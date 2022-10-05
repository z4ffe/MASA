const prompt = require('prompt-sync')();

/* let answer = prompt('Marry me')

while (answer.toLowerCase() !== 'yes') {

    answer = prompt('Please, marry me')    

}

alert(`I knew it! It's the happiest day of my life!!!`) */

//******************************** */
let num = '57847';
if (isNaN(num)) console.log('This is not a number')
else console.log('Yea, this is a number')
//******************************** */
/* MISSION: ask a person for their favorite number
 Stop when you get a number */

/* let answer = prompt('What is your favorite number?'); */
/* We use !answer first, as it can be null and if so, answer.trim() will
give the error cannot trim () null */
/* while (!answer || !answer.trim() || isNaN(answer)) {
    
    answer = prompt('No, this was not a number at all.\nWhat is your favorite number?');

}

alert(`I like your favorite number ${answer} too`) */

// MISSION:
const arr1 = ['pizza','falafel', 45, 42, 0, 124, 'lasagna']
const arr2 = ['pizza','falafel', 45, 42, 124, 'lasagna']
const arr3 = []
// Write a function that goes over a given array (WHILE loop), shows each member
//  and stops at 0,
// dont forget i++ inside the loop

function stopAtZero(a) {

    let i = 0;

    while (a[i] !== 0 && i < a.length) {

        console.log(a[i]);
        i++;
    }


    console.log(`****\nThis function went over the array ${a}`)

}

stopAtZero(arr1);
stopAtZero(arr2);
stopAtZero(arr3);



//


let numm;

while (true) {
    numm = prompt('Enter your fav number: ')
    if (numm && !isNaN(numm)) {
        break;
    }
}

console.log('Nice')

//


while (true) {
    let color = prompt('What color u like?: ').toLowerCase()
    if (color === 'red' || color === 'blue' || color === 'purple') {
        break;
    }
}
