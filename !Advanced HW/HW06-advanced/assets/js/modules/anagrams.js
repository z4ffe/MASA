import {elem} from "./elements.js";

export class Anagrams {
	current;
	userAnagram = [];
	randomIndex;
	result = [];
	answer = 0;

	constructor(anagrams, userAnagram) {
		this.anagrams = anagrams
		this.userAnagram = userAnagram
	}

	#randomIndex() {
		this.randomIndex = Math.round(Math.random() * this.anagrams.length - 1)
	}

	#checkAnagram() {
		this.answer = 0;
		this.userAnagram.forEach(angrm => {
			let tempAngrm = angrm.split('').sort().join('')
			if (tempAngrm === this.current) {
				this.answer += 1
			}
		})
		this.#render()
	}

	#render() {
		elem.anagramAnswer.textContent = `Number of anagrams: ${this.answer}`
	}

	newAnagram() {
		this.answer = 0;
		this.#randomIndex()
		this.current = this.anagrams[this.randomIndex].split('').sort().join('').toLowerCase()
		elem.findAnagramInput.value = `${this.anagrams[this.randomIndex]}`
	}

	app() {
		if (elem.anagramUserInput.value === elem.findAnagramInput.value) {
			elem.anagramAnswer.textContent = `It's same word!`
		} else {
			this.userAnagram = elem.anagramUserInput.value.replaceAll(/['. !?"_-]/g, '').split(',')
			this.#checkAnagram()
		}
	}
}


// test


/*
class Anagrams {
	current = [];
	userAnagram = [];
	randomIndex;
	result = [];
	answer = 0;

	constructor(anagrams, userAnagram) {
		this.anagrams = anagrams
		this.userAnagram = userAnagram
	}

	#randomIndex() {
		this.randomIndex = Math.round(Math.random() * this.anagrams.length - 1)
	}

	#checkAnagram() {
		this.answer = 0
		this.result = [];
		let tempResult = 0;
		this.userAnagram.forEach(x => {
			let tempUser = x.split('').sort().join('').toLowerCase();
			let tempCurrent = this.current
			for (let i = 0; i < tempUser.length; i++) {
				for (let j = 0; j < tempCurrent.length; j++) {
					if (tempUser[i] === tempCurrent[j]) {
						tempResult++
						break;
					}
				}
			}
			this.result.push(tempResult)
			tempResult = 0
		})
		console.log(this.userAnagram[0].length)
		console.log(this.result)
		this.userAnagram.forEach(x => {
			let tempUser = x.replaceAll(' ', '')
			for (let i = 0; i <= this.userAnagram.length; i++) {
				if (tempUser.length === this.result[i]) {
					+this.answer++
				}
			}
		})
		elem.anagramAnswer.textContent = `${this.answer}`
	}

	newAnagram() {
		this.#randomIndex()
		this.current = this.anagrams[this.randomIndex].split('').sort().join('').toLowerCase()
		elem.findAnagramInput.value = `${this.anagrams[this.randomIndex]}`
	}

	modules() {
		this.userAnagram = elem.anagramUserInput.value.split(',')
		this.#checkAnagram()
	}
}*/
