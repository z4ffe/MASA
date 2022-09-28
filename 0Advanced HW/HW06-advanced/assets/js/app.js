import {quotesArr, anagramsArr, palindromesArr, vocabArr, hebrewAlphabet} from "./modules/vocab.js";
import {Clock} from "./modules/clock.js";
import {elem} from "./modules/elements.js";
import {RandomQuotes} from "./modules/quote.js";
import {Palindromes} from "./modules/palindrome.js";
import {Gematryia} from "./modules/gematryia.js";
import {Anagrams} from "./modules/anagrams.js";

// Palindromes

let palindromes = new Palindromes()
palindromes.palindromes = palindromesArr

// Clock

let clock = new Clock()
clock.weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
clock.currDate = new Date()

// Gematryia

let gematryia = new Gematryia()
gematryia.alphabet = hebrewAlphabet

// Typer

class Typer {
	mode = 0;
	currentWord;

	constructor(vocabArr) {
		this.vocabArr = vocabArr
	}

	#randomWord() {
		let tempArr = [];
		this.vocabArr.forEach(x => {
			if (x.length >= 7) {
				tempArr.push(x)
			}
		})
		let randomNumber = Math.round(Math.random() * tempArr.length)
		this.currentWord = tempArr[randomNumber - 1]
		return tempArr[randomNumber - 1]
	}

	#verificationWords() {
		elem.yourWordsFinal.innerHTML = ''
		elem.compWordsFinal.innerHTML = ''
		let userWords = elem.yourWords.value.trim().split(`\n`)
		let aiWords = []
		let tempCurrentWord = this.currentWord.split('').sort().join('')
		this.vocabArr.forEach(w => {
			let tempResult = 0;
			let word = w.split('').sort().join('')
			for (let i = 0; i < word.length; i++) {
				for (let j = 0; j < tempCurrentWord.length; j++) {
					if (word[i] === tempCurrentWord[j]) {
						tempResult++
						break;
					}
				}
			}
			if (tempResult === word.length && word !== tempCurrentWord) {
				aiWords.push(w)
			}
		})
		aiWords.map(x => {
			elem.compWordsFinal.insertAdjacentHTML('afterbegin', `<p>${x} ${x.length}</p>`)
		})
		userWords.map(x => {
			if (x.length < 4) {
				elem.yourWordsFinal.insertAdjacentHTML('afterbegin', `<p>${x} <span class="red">${x.length}</span></span></p>`)
			} else {
				elem.yourWordsFinal.insertAdjacentHTML('afterbegin', `<p>${x} ${x.length}</p>`)
			}
		})
		console.log(aiWords)
		console.log(userWords)
	}

	#render() {
		if (this.mode === 0) {
			elem.compWords.value = ''
			elem.yourWords.value = ''
			elem.yourWordsFinal.innerHTML = ''
			elem.compWords.classList.remove('hide')
			elem.yourWords.classList.remove('hide')
			elem.yourWordsFinal.classList.add('hide')
			elem.compWordsFinal.classList.add('hide')
		} else if (this.mode === 1) {
			elem.compWords.classList.add('hide')
			elem.yourWords.classList.add('hide')
			elem.yourWordsFinal.classList.remove('hide')
			elem.compWordsFinal.classList.remove('hide')
		}
	}

	check() {
		this.mode = 1
		this.#render()
		this.#verificationWords()
	}

	start() {
		this.mode = 0
		this.#render()
		elem.wordMaster.value = this.#randomWord()
	}


	app() {

	}
}


let typer = new Typer()
typer.vocabArr = vocabArr
typer.app()


// Random Quote

let randomQuotes = new RandomQuotes()
randomQuotes.quote = quotesArr

// Anagrams

let anagrams = new Anagrams()
anagrams.anagrams = anagramsArr

// EventListeners

elem.checkWords.onclick = () => {
	typer.check()
}

elem.wordStart.onclick = () => {
	typer.start()
}

elem.checkAnagram.onclick = () => {
	anagrams.app()
}

elem.anagramNewBtn.onclick = () => {
	anagrams.newAnagram()
}

elem.gemBtn.onclick = () => {
	gematryia.app()
}

elem.palindromeCheck.onclick = () => {
	palindromes.app()
}

elem.randomPalindromeBtn.onclick = () => {
	palindromes.example()
}

elem.quotesBtn.onclick = () => {
	randomQuotes.run()
}

window.onload = () => {
	clock.app()
}
