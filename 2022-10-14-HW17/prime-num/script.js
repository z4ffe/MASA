const DOM = {
   input: document.querySelector('.input'),
   answer: document.querySelector('.answer')
}

class Prime {
   constructor(elements) {
	  this.el = elements
   }

   #loop(num) {
	  for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
	  return num !== 1 && num !== 0;
   }

   app() {
	  this.el.input.oninput = e => this.el.answer.textContent = this.#loop(+e.target.value)
   }
}

let prime = new Prime()
prime.el = DOM
window.onload = () => prime.app()
