// 6.3

const input1 = document.querySelector('#input1')
const div1 = document.querySelector('.div1')
const input2 = document.querySelector('#input2')
const div2 = document.querySelector('.div2')

input1.onchange = e => {
   let result = 0;
   for (let i = 0; i < +e.target.value + 1; i++) result += i
   div1.textContent = result.toString()
}

input2.oninput = e => {
   let result = 0;
   for (let i = 0; i < +e.target.value + 1; i++) result += i
   div2.textContent = result.toString()
}

// 6.4

const input3 = document.querySelector('#input3')
const div3 = document.querySelector('.div3')
const input4 = document.querySelector('#input4')
const div4 = document.querySelector('.div4')

input3.onchange = e => {
   let result = 1;
   if (e.target.value >= 0) for (let i = 1; i < +e.target.value + 1; i++) result *= i
   else for (let i = -1; i > +e.target.value; i--) result *= i
   result >= 0 ? div3.style.backgroundColor = 'green' : div3.style.backgroundColor = 'red'
   div3.textContent = result.toString()
}

input4.oninput = e => {
   let result = 1;
   if (e.target.value > 0) for (let i = 1; i < +e.target.value + 1; i++) result *= i
   else for (let i = -1; i > +e.target.value; i--) result *= i
   result >= 0 ? div4.style.backgroundColor = 'green' : div4.style.backgroundColor = 'red'
   div4.textContent = result.toString()
}

// 6.5 - 6.6

const input5 = document.querySelector('#input5')
const input6 = document.querySelector('#input6')
const div5 = document.querySelector('.div5')
const input7 = document.querySelector('#input7')
const input8 = document.querySelector('#input8')
const div6 = document.querySelector('.div6')

input5.onchange = e => {
   let result = ''
   e.target.value > input6.value ? div5.style.backgroundColor = 'purple' : div5.style.backgroundColor = 'yellow'
   for (let i = 1; i < +e.target.value; i++) {
	  result += `${i} `
   }
   div5.textContent = result
}
input7.onchange = e => {
   let result = ''
   e.target.value > input8.value ? div6.style.backgroundColor = 'purple' : div6.style.backgroundColor = 'yellow'
   for (let i = 1; i < +e.target.value; i++) {
	  result += `${i}, `
   }
   div6.textContent = result
}


