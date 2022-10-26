const elements = {
   firstNumber: document.querySelector('#first'),
   secondNumber: document.querySelector('#second'),
   output: document.querySelector('#output'),
}

class Calc {
   firstNumber;
   secondNumber;
   result;

   constructor(elements) {
	  this.el = elements
   }

   #getInput() {
	  this.firstNumber = +this.el.firstNumber.value
	  this.secondNumber = +this.el.secondNumber.value
   }

   #setOutput(result) {
	  this.el.output.textContent = result
   }

   add() {
	  this.#getInput()
	  this.result = this.firstNumber + this.secondNumber
	  this.#setOutput(this.result)
   }

   subtract() {
	  this.#getInput()
	  this.result = this.firstNumber - this.secondNumber
	  this.#setOutput(this.result)
   }

   multiply() {
	  this.#getInput()
	  this.result = this.firstNumber * this.secondNumber
	  this.#setOutput(this.result)
   }

   divide() {
	  this.#getInput()
	  if (!this.secondNumber) this.#setOutput('Cannot divide by zero')
	  else {
		 this.result = this.firstNumber / this.secondNumber
		 this.#setOutput(this.result)
	  }
   }

   divideIntegers() {
	  this.#getInput()
	  if (!this.secondNumber) this.#setOutput('Cannot divide by zero')
	  else {
		 this.result = this.firstNumber % this.secondNumber
		 this.#setOutput(`${this.firstNumber} % ${this.secondNumber} = ${Math.floor(this.firstNumber / this.secondNumber)} (remainder ${this.result})`)
	  }
   }

   power() {
	  this.#getInput()
	  this.result = this.firstNumber ** this.secondNumber
	  this.#setOutput(this.result)
   }
}

let calc = new Calc()
calc.el = elements
