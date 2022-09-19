import {elem} from "./elements.js";

export class Gematryia {
	result = 0;

	constructor(word, alphabet) {
		this.word = word
		this.alphabet = alphabet
	}

	#render() {
		elem.gemResult.textContent = `${this.result}`;
		this.result = 0;
	}

	#check() {
		for (let i = 0; i <= this.word.length; i++) {
			for (let j = 0; j < this.alphabet.length; j++) {
				if (this.word[i] === this.alphabet[j].letter) {
					this.result += this.alphabet[j].result
				}
			}
		}
		this.#render()
	}


	app() {
		this.word = elem.gemInput.value
		this.#check()
	}
}