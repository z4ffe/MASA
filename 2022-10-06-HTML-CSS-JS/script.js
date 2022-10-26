let str25 = 'Small$$step$$for$$a$$man$$big$$step$$for$$the$$humanity'

console.log(str25.split('$$').join(' '))

/// MISSION
let str26 = 'abracadabra';

// 1. Make of it array, when the separator is 'a'
// 2. Join everything again, using empty string '' separator
let str27 = '250::134::10::200'
// 3. Use split() and join() to repair IP address - it should have . instead of ::

console.log(str26.split('a').join(''))

console.log(str27.split('::').join('.'));