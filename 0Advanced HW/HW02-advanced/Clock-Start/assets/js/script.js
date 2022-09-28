const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
const hand = document.querySelector('.hand')

function tickingSound () {
	let audio = new Audio(`./assets/audio/clock-sound.mp3`)
	audio.autoplay = true
	audio.currentTime = 0
}

function clock () {
	tickingSound()
	let date = new Date()
	let seconds = date.getSeconds()
	let minutes = date.getMinutes()
	let hours = date.getHours();
	((seconds / 60 * 360) + 90) === 0 ? hand.style.setProperty('transition', 'none') : secondHand.style.setProperty('transition', 'all 0.05s')
	secondHand.style.setProperty('transform', `rotate(${seconds / 60 * 360}deg)`)
	minuteHand.style.setProperty('transform', `rotate(${minutes / 60 * 360}deg)`)
	hourHand.style.setProperty('transform', `rotate(${hours / 12 * 360}deg)`)
}

setInterval(clock, 1000)
