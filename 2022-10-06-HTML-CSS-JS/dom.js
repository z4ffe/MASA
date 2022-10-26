const purpleDiv = document.querySelector('.purple')
const addText = document.querySelector('.add-text')
const makeBigger = document.querySelector('.make-bigger')
const range = document.querySelector('#range')
const para = document.querySelector('#para')
const key = document.querySelectorAll('.key')

purpleDiv.style.setProperty('width', '200px')
purpleDiv.style.setProperty('height', '200px')
purpleDiv.style.setProperty('background-color', 'purple')

addText.onclick = () => {
	purpleDiv.innerHTML = '<p>TEXT!</p>'
}

let fontSize = 20

makeBigger.onclick = () => {
	purpleDiv.style.setProperty('font-size', `${fontSize = fontSize + 1}px`)
}

purpleDiv.addEventListener('mouseover', (e) => {
	purpleDiv.style.setProperty('background-color', 'blue')
})

purpleDiv.addEventListener('mouseout', (e) => {
	purpleDiv.style.setProperty('background-color', 'purple')
})

range.addEventListener('input', () => {
	purpleDiv.style.setProperty('background-color', `rgba(${range.value}, 0, 0)`)
})

window.onkeydown = (e) => {
	key.forEach(key => {
		if (e.keyCode === Number(key.dataset.key)) {
			key.style.setProperty('background-color', 'red')
			window.onkeyup = (e) => {
				key.style.setProperty('background-color', 'darkgreen')
			}
		}
	})
}