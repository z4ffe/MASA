import {quotesArr, anagramsArr, palindromesArr, vocabArr, hebrewAlphabet} from "./vocab.js";
import {Clock} from "./clock.js";
import {elem} from "./elements.js";
import {RandomQuotes} from "./quote.js";
import {Palindromes} from "./palindrome.js";
import {Gematryia} from "./gematryia.js";


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

// Random Quote

let randomQuotes = new RandomQuotes()
randomQuotes.quote = quotesArr

// EventListeners

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
