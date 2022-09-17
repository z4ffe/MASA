import responses from "./responses.js";


// vars

const container = document.querySelector(".container");
const btn = document.querySelector("#spin");
const sectors = document.querySelectorAll('.sector')
const renew = document.querySelector('#renew')
let random;

// audio

let audio = new Audio(`./assets/audio/spin-sound.mp3`)


// eventlisteners

btn.addEventListener('click', (e) => {
	container.style.setProperty('transform', `rotate(0deg)`)
	audio.play()
	sectors.forEach(x => {
		if (random) {
			random = Math.round(Math.random() * 16)
			x.textContent = `${random}. `
		}
		x.style.setProperty('justify-content', 'center')
	})
	container.style.setProperty('transform', `rotate(${Math.round(Math.random() * 5000)}deg)`)
})

container.addEventListener('transitionend', () => {
	audio.pause()
	audio.currentTime = 0
})

renew.addEventListener('click', () => {
	shuffle(responses)
	sectors.forEach(x => {
		random = Math.round(Math.random() * 16)
		x.innerHTML = `${random + 1}. ${responses[random]}`
		x.style.setProperty('writing-mode', 'vertical-rl')
		x.style.setProperty('padding-top', '15px')
		x.style.setProperty('justify-content', 'start')
	})
})

// shuffle function

const shuffle = (array) => {
	for (let i = array.length - 1; i > 0 ; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}




