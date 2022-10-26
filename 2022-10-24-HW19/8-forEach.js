const foods = ['pizza', 'falafel', 'paSTa', 'sandwich', 'saLAt', 'hummus', 'soup'];
const drinks = ['beer', 'water', 'coFFEe', 'tee', 'milk', 'juICe', 'cola'];
const numbers = [680, 486, 537, 550, 369, 363, 681, 950, 378, 463]

// a
let str = ''

drinks.forEach(x => str += `${x}, `)
console.log(str)

// b

const avgOfArr = (arr) => {
   let sum = 0;
   arr.forEach(x => sum += x)
   return sum / arr.length
}

console.log(avgOfArr(numbers))

// c

foods.forEach(x => foods.indexOf(x) % 2 === 0 ? console.log(x.slice(0, 3)) : console.log(x))

// d

foods.forEach((x, id, array) => array[id] = x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())

console.log(foods)
