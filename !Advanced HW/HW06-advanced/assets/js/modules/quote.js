import {elem} from "./elements.js"

export class RandomQuotes {
	index;

	constructor(quote) {
		this.quote = quote
	}

	#random() {
		this.index = Math.round(Math.random() * (this.quote.length - 1))
	}

	run() {
		this.#random()
		elem.quotesP.innerHTML = this.quote[this.index]
	}
}