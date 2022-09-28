import {elem} from "./elements.js";

export class Palindromes {
	first;
	second;
	constructor(palindromes) {
		this.palindromes = palindromes
	}

	example() {
		let index = Math.round(Math.random() * this.palindromes.length)
		elem.palindromeField.textContent = `Palindrome example: ${this.palindromes[index - 1]}`
	}

	#render() {
		if (this.first === '') {
			elem.palindromeAnswer.textContent = 'Type word!'
		}
		else if (this.first === this.second) {
			elem.palindromeAnswer.textContent = 'Yes!'
		} else {
			elem.palindromeAnswer.textContent = 'No!'
		}
	}

	app() {
		this.first = elem.palindromeInput.value.replaceAll(/["'’ ,.!?-]/g, '').replace('ך','כ').replace('ם','מ').replace('ן','נ').replace('ף','פ').replace('ץ','צ').toLowerCase()
		this.second = this.first.toLowerCase().split('').reverse().join('')
		this.#render()
	}
}