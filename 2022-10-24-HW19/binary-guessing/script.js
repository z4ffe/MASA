import elements from "./elements.js";

class BinaryGuessing {
   mode = 1;
   minNumber;
   maxNumber;
   aiNumber;

   constructor(el) {
	  this.el = el
   }

   #middleNumber = (min, max) => Math.ceil((max - min) / 2) + min - 1
   #randomAi = () => this.aiNumber = Math.round(Math.random() * (this.maxNumber - this.minNumber) + this.minNumber)

   #reset() {
	  this.minNumber = null
	  this.maxNumber = null
	  this.el.inputs.forEach(input => input.value = null)
	  this.el.modeOneAiAnswer.textContent = null
   }

   #guessingAI(user) {
	  if (this.minNumber && this.maxNumber) {
		 if (user === 'higher') this.minNumber = this.#middleNumber(this.minNumber, this.maxNumber)
		 if (user === 'lower') this.maxNumber = this.#middleNumber(this.minNumber, this.maxNumber)
		 this.el.modeOneAiAnswer.textContent = `Number is: ${this.#middleNumber(this.minNumber, this.maxNumber)}?`
	  } else this.el.modeOneAiAnswer.textContent = 'Enter min & max numbers'
   }

   #guessingUser(user) {
	  if (!user) return this.el.modeOneAiAnswer.textContent = 'Enter number'
	  if (user === this.aiNumber) return this.el.modeOneAiAnswer.textContent = 'You won!'
	  if (user < this.minNumber) return this.el.modeOneAiAnswer.textContent = 'Ur number lowers than minimum limit'
	  if (this.aiNumber < user) this.el.modeOneAiAnswer.textContent = 'AI number is lower'
	  if (this.aiNumber > user) this.el.modeOneAiAnswer.textContent = 'AI number is higher'
   }

   #listeners() {
	  this.el.mode.onchange = e => {
		 this.el.modeOneAiAnswer.textContent = null
		 this.el.btns.forEach(btn => btn.classList.toggle('hidden'))
		 this.el.modeOneAnswer.classList.toggle('hidden')
		 this.#reset()
		 this.mode = +e.target.value
	  }
	  this.el.inputMin.oninput = () => this.minNumber = +this.el.inputMin.value
	  this.el.inputMax.oninput = () => {
		 this.maxNumber = +this.el.inputMax.value
		 if (this.mode === 1) this.#randomAi()
		 if (this.mode === 2) this.el.modeOneAiAnswer.textContent = `Number is: ${this.#middleNumber(this.minNumber, this.maxNumber)}?`
	  }
	  this.el.higherBtn.onclick = (e) => this.#guessingAI(e.target.id)
	  this.el.lowerBtn.onclick = (e) => this.#guessingAI(e.target.id)
	  this.el.modeOneBtn.onclick = () => this.#guessingUser(+this.el.modeOneAnswer.value)
	  this.el.reload.onclick = () => this.#reset()
   }

   app() {
	  this.#listeners()
   }
}

let binaryGuessing = new BinaryGuessing()
binaryGuessing.el = elements

window.onload = () => binaryGuessing.app()
