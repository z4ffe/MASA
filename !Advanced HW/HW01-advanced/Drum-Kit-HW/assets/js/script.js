const drumsBtn = document.querySelectorAll('.drums')

//

function playSound (soundName) {
	let audio = new Audio(`./assets/sounds/${soundName}.wav`)
	audio.currentTime = 0
	audio.autoplay = true
}

//

function focus (e) {
	e.style.backgroundColor = 'blueviolet'
	setTimeout(() => {
		e.style.backgroundColor = 'darkslategray'
	}, 100)
}

//

drumsBtn.forEach(btn => {
	btn.addEventListener('click', (e) => {
		focus(e.target)
		playSound(e.target.id)
	})
})

window.onkeydown = (key) => {
	drumsBtn.forEach(btn => {
		if (key.key === btn.dataset.key) {
			focus(btn)
			playSound(btn.id)
		}
	})
}

