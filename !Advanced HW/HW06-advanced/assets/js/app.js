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



// Random Quote

let randomQuotes = new RandomQuotes()
randomQuotes.quote = quotesArr

// Anagrams

let anagrams = new Anagrams()
anagrams.anagrams = anagramsArr

// EventListeners

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
