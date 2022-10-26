// 8.a

const multiInput = document.querySelector('.multi-table__input')
const multiBody = document.querySelector('.multi-table__body')

const multiRender = (value) => {
   if (value < 10 && value > 0 && value.length <= 1) {
	  multiBody.innerHTML = ''
	  for (let i = 1; i < 10; i++) {
		 multiBody.insertAdjacentHTML('beforeend', `<p>${value} * ${i} = ${value * i}</p>`)
	  }
   } else if (!value) {
	  multiBody.innerHTML = ''
   } else {
	  multiInput.value = ''
	  multiRender(0)
   }
}

multiInput.oninput = (e) => multiRender(e.target.value)

// 8.b

const harryInput = document.querySelector('.harry-potter__input')
const harryBody = document.querySelector('.harry-potter__body')

const harryPotter = (value) => {
   harryBody.innerHTML = ''
   for (let i = 1; i <= value; i++) {
	  if (i % 3 === 0) harryBody.insertAdjacentHTML('beforeend', `<p class="uppercase">${i}. I will tell no lies</p>`)
	  else harryBody.insertAdjacentHTML('beforeend', `<p>${i}. I will tell no lies</p>`)

   }
}

harryInput.oninput = (e) => harryPotter(e.target.value)

// 9.









