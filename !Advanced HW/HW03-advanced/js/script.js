const btn = document.querySelectorAll('button')
const modeBtn = document.querySelectorAll('input[type=radio]')
const color = document.querySelector('#color')

// vars

let colors = ["#cd0000", "#f03800", "#ffb64c", "#ff9100", "#0095ff", "#1fbf66", "#ff4380", "#deecf1", "#714c2f", "#7fe881", "#f7006a",];
let index = 0;
let mode = 0;
let colorPicker = 0;

// mode function

function indexFunc (mode) {
	if (mode === 0) {
		index++
		if (index === 11) {
			index = 0
		}
	} else if (mode === 1) {
		index = Math.round(Math.random() * 11)
	}
}

// listeners

btn.forEach(buttons => {
	buttons.addEventListener('click', (e) => {
		indexFunc(mode)
		if (colorPicker === 0) {
			document.querySelector(`.${e.target.dataset.class}`).style.setProperty('background-color', `${colors[index]}`)
		} else {
			document.querySelector(`.${e.target.dataset.class}`).style.setProperty('background-color', `${colorPicker}`)
			colorPicker = 0
			color.value = '#000000'
		}
	})
})

modeBtn.forEach(input => {
	input.addEventListener('input', (e) => {
		mode = Number(input.value)
	})
})

color.addEventListener('input', () => {
	colorPicker = color.value
})
