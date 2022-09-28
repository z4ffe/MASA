import {elem} from "./elements.js"

export class Clock {
	currDate;
	year;
	month;
	day;

	constructor(weekDay) {
		this.weekDay = weekDay
	}

	#currentDate () {
		this.currDate = new Date()
		this.year = this.currDate.getFullYear()
		this.month = this.currDate.getMonth() + 1
		this.day = this.currDate.getDate()
		this.#render()
	}

	#render () {
		elem.dateDiv.innerText = `${this.weekDay[this.currDate.getDay()]} ${this.day}.${this.month}.${this.year}`
		elem.timeDiv.innerText = `${this.currDate.toLocaleString([], {hour12: true}).slice(12)}`
	}

	app() {
		setInterval(() => {
			this.#currentDate()
		}, 1000)
	}
}

