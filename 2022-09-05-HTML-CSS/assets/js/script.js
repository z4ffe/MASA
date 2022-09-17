const ball1 = document.querySelector('#ball1')
const ball2 = document.querySelector('#ball2')
const reset = document.querySelector('#title')

ball1.addEventListener('mouseover', () => {
	const randomNumber = Math.round(Math.random() * 75)
	ball1.style.left = `${randomNumber}vw`
	ball1.style.top = `${randomNumber}vh`
})

ball2.addEventListener('mouseover', (e) => {
	const randomNumber = Math.round(Math.random() * 100)
	ball2.style.left = `${randomNumber}vw`
	ball2.style.top = `${randomNumber}vh`
})

reset.addEventListener('click', () => {
	ball1.style.left = '450px'
	ball1.style.top = '350px'
	ball2.style.left = '850px'
	ball2.style.top = '350px'
})