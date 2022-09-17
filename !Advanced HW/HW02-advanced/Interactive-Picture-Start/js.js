const input = document.querySelectorAll('input')

input.forEach(x => {
	x.addEventListener('input', e => {
		inputChange(e)
	})
})

function inputChange(e) {
	let type = e.target.id !== 'back-color' ? 'px' : ''
	document.documentElement.style.setProperty(`--${e.target.name}`, `${e.target.value}${type}`)
}
