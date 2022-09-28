import responses from "./responses.js";


// vars

const container = document.querySelector(".container");
const btn = document.querySelector("#spin");
const sectors = document.querySelectorAll('.sector')
const renew = document.querySelector('#renew')

// audio

let audio = new Audio(`./assets/audio/spin-sound.mp3`)


// EventListeners

btn.addEventListener('click', (e) => {
	audio.play()
	sectors.forEach(x => {
		x.textContent = x.dataset.number
		x.style.setProperty('justify-content', 'center')
	})
	container.style.setProperty('transform', `rotate(${Math.round(Math.random() * 5000)}deg)`)
})

container.addEventListener('transitionend', () => {
	audio.pause()
	audio.currentTime = 0
})

renew.addEventListener('click', () => {
	sectors.forEach(x => {
		x.textContent = responses[Math.round(Math.random() * 8)]
		x.style.setProperty('writing-mode', 'vertical-rl')
		x.style.setProperty('padding-top', '15px')
		x.style.setProperty('justify-content', 'start')
	})
})

