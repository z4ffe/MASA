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

