import {vocab, quotes, anagrams, palindromesArr} from "./vocab.js";
import {elem} from "./elements.js"
import {Clock} from "./clock.js"


let clock = new Clock()
clock.weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
clock.app()

// Random Quotes

class RandomQuotes {
	index;

	constructor(quote) {
		this.quote = quote
	}

	#random() {
		this.index = Math.round(Math.random() * this.quote.length)
	}

	run() {
		this.#random()
		elem.quotesP.innerHTML = this.quote[this.index]
	}
}

let randomQuotes = new RandomQuotes()
randomQuotes.quote = quotes
elem.quotesBtn.onclick = () => {
	randomQuotes.run()
}


/** FOR PALINDROMES */


class Palindromes {
	constructor(palindromes) {
		this.palindromes = palindromes
	}

	#event() {
		elem.randomPalindromeBtn.onclick = () => {
			elem.palindromeField.innerHTML = `Example of palindrome: ${palindromesArr[Math.round(Math.random() * palindromesArr.length)]}`
		}
	}

	#palindromeCheck() {

	}

	run() {
		this.#event()
		console.log(this.palindromes)
	}
}

let palindromes = new Palindromes()
palindromes.palindromes = palindromesArr
palindromes.run()


// T.B.D.
////////////////////////////////
//
//  - create function that gets random number 
//    from 0 to the last "palindromes" array index

//  - create function that gets quote by this number 
//    from the array "palindromes" and sets it into it's place

//  - run the function with "onclick" or eventListener
//    on the button "Palindrome Example"
//
//  - create function that 
//    1) takes palindrome from it's field,
//    2) strips it of spaces, commas, dots and other non-letter characters,
//    3) exchanges final Hebrew letters by the usual ones 
//    4) splits the string into array of letters and uses method reverse() 
//    5) joins the letters to string and compares the string to the not reversed string
//    6) if they're same shows "Yes!", if not - "No:("

//  - run the function with "onclick" or eventListener
//    on the button "Is this a Palindrome?"

/** FOR GEMATRIA */

// T.B.D.
////////////////////////////////
//
//  - create function that 
//    1) takes the phrase from it's field,
//    2) strips it of spaces, commas, dots and other non-letter characters,
//    3) exchanges final Hebrew letters by the usual ones 
//    4) splits the string into array of letters 
//    5) uses "for" loop or method "forEach()" or method "reduce()" 
//       to go over each letter and add it's value to the total sum
//
//      You may use these arrays to get the value of each letter. 
//      For example, if the letter is found (indexOF()!) in tens, 
//      it's value is equal to it's index multiplied by 10.
var digits = ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'];
var tens = ['', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ'];
var hundreds = ['', 'ק', 'ר', 'ש', 'ת'];

//    6) displays the sum

//  - run the function with "onclick" or eventListener


