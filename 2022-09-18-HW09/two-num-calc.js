const prompt = require('prompt-sync')();

//

class Calculator {
	result;
	divideIntegers;

	constructor(num1, num2, operand) {
		this.num1 = num1
		this.num2 = num2
		this.operand = operand
	}

	#add(num1, num2) {
		this.result = num1 + num2
	}

	#subtract(num1, num2) {
		this.result = num1 - num2
	}

	#multiply(num1, num2) {
		this.result = num1 * num2
	}

	#divide(num1, num2) {
		this.result = num1 / num2
	}

	#divideIntegers(num1, num2) {
		this.result = num1 % num2
		this.divideIntegers = true
	}
	#power(num1, num2) {
		this.result = num1 % num2
	}

	runApp() {
		if (!isNaN(this.num1) && !isNaN(this.num2) && this.operand !== '') {
			switch (this.operand) {
				case ('+'):
					this.#add(this.num1, this.num2)
					break;
				case('-'):
					this.#subtract(this.num1, this.num2)
					break;
				case('*'):
					this.#multiply(this.num1, this.num2)
					break;
				case('/'):
					this.#divide(this.num1, this.num2)
					break;
				case('%'):
					this.#divideIntegers(this.num1, this.num2)
					break;
				case('^'):
					this.#power(this.num1, this.num2)
					break;
			}
		} else {
			this.result = 'Not a number and/or wrong operand!'
		}
		if (this.divideIntegers) {
			console.log(`Whole part: ${this.num1}, remainder ${this.num2} and result is ${this.result}`)
		} else {
			console.log(this.result)
		}
	}
}

//

calculator = new Calculator()
calculator.num1 = Number(prompt('Enter first number: '))
calculator.operand = prompt('Enter operand: ')
calculator.num2 = Number(prompt('Enter second number: '))


//

calculator.runApp()


