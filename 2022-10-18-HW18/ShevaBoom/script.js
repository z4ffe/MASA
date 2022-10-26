const $el = {
  maxInp: document.querySelector('#max'),
  digitInp: document.querySelector('#digit'),
  out: document.querySelector('.out'),
  inputs: document.querySelectorAll('input')
}

class StringBoom {
  #max;
  #digit;
  #result;

  constructor(el) {
	this.el = el
  }

  #main() {
	this.#result = ''
	this.#digit = +this.el.maxInp.value
	this.#max = +this.el.digitInp.value
	for (let i = 1; i <= this.#max; i++) if (i % this.#digit === 0 || String(i).indexOf(String(this.#digit)) > -1) this.#result += `${i} `
	this.#render(this.#result)
  }


  #render(result) {
	this.el.out.textContent = ''
	this.el.out.textContent = result
  }

  app() {
	this.#main()
  }
}

let stringBoom = new StringBoom()
stringBoom.el = $el
$el.inputs.forEach(input => input.oninput = () => stringBoom.app())

