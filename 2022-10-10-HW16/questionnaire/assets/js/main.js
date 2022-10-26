import {questions} from "./questions.js";
import {elements} from "./elements.js";

class QuestionsGame {
	index = 0;
	rightAnswer = 0;
	userName;

	constructor(questions) {
		this.questions = questions
		this.el = elements
	}

	skip() {
		if (this.index < this.questions.length - 1) {
			this.index++
		}
		this.#render()
	}

	#render() {
		this.el.form.innerHTML = ''
		this.el.questionTitle.textContent = this.questions[this.index].qst
		for (let i = 0; i < this.questions[this.index].answers.length; i++) {
			this.el.form.insertAdjacentHTML('beforeend', `
			<div class="form__element">
            	<input type="radio" name="answer" id="answer${i}" class="inputBox" value="${i}">
				<label for="answer${i}">${this.questions[this.index].answers[i]}</label>
				
			</div>`)
		}
		document.querySelector('#answer0').checked = true
	}
	
	checkAnswer () {
		let inputBox = document.querySelectorAll('.inputBox')
		inputBox.forEach(answer => {
			if (answer.checked === true) {
				Number(answer.value) === this.questions[this.index].right ? this.rightAnswer++ : false
			}
		})
		this.index++
		if (this.index < this.questions.length) {
			this.#render()
		} else {
			this.el.form.style.setProperty('display', 'none')
			this.el.questionTitle.textContent = `Правильных ответов: ${this.rightAnswer}`
			this.el.rstBtn.style.setProperty('display', 'block')
			this.el.checkBtn.style.setProperty('display', 'none')
			this.el.skipBtn.style.setProperty('display', 'none')
		}
	}



	exec() {
		this.el.mainTitle.textContent = `Hello, ${this.userName}`
		this.el.title.textContent = `Hello, ${this.userName}`
		this.el.rstBtn.style.setProperty('display', 'none')
		this.el.checkBtn.style.setProperty('display', 'block')
		this.el.skipBtn.style.setProperty('display', 'block')
		this.el.form.style.setProperty('display', 'block')
		this.#render()
	}
}

let questionsGame = new QuestionsGame()
questionsGame.questions = questions
questionsGame.el = elements


//

elements.checkBtn.onclick = (e) => {
	e.preventDefault()
	questionsGame.checkAnswer()
}

elements.skipBtn.onclick = (e) => {
	e.preventDefault()
	questionsGame.skip()
}

elements.rstBtn.onclick = (e) => {
	e.preventDefault()
	questionsGame.rightAnswer = 0;
	questionsGame.index = 0;
	questionsGame.exec()
}

elements.modalBtn.onclick = (e) => {
	e.preventDefault()
	questionsGame.userName = elements.modalName.value
	elements.modal.style.setProperty('display', 'none')
	questionsGame.exec()
}


