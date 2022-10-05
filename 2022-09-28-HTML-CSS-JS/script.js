const button = document.querySelector('.button')

let index = 0;

button.addEventListener('click', (e) => {
	e.preventDefault()
	index++
	button.textContent = `${index}`
})