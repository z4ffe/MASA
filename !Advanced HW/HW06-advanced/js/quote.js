import {quotes} from "./vocab";
import {elem} from "./elements"

export class RandomQuotes {
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