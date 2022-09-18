// app vars

const colors = ["#cd0000", "#f03800", "#ffb64c", "#ff9100", "#0095ff", "#1fbf66", "#ff4380", "#deecf1", "#714c2f", "#7fe881", "#f7006a",
];

const varsBtn = [
	{
		vars: '--parrot-body',
		btn: document.querySelector('#body-btn')
	},
	{
		vars: '--main-wing',
		btn: document.querySelector('#main-wing-btn')
	},
	{
		vars: '--main-wing-inner',
		btn: document.querySelector('#sub-wing-btn')
	},
	{
		vars: '--eye-patch',
		btn: document.querySelector('#eye-patch-btn')
	},
	{
		vars: '--eye',
		btn: document.querySelector('#eye-btn')
	},
	{
		vars: '--head-wing',
		btn: document.querySelector('#head-wing-btn')
	},
	{
		vars: '--leg',
		btn: document.querySelector('#claw-btn')
	},
	{
		vars: '--upper-beak',
		btn: document.querySelector('#upper-beak-btn')
	},
	{
		vars: '--lower-beak',
		btn: document.querySelector('#lower-beak-btn')
	},
	{
		vars: '--tail',
		btn: document.querySelector('#tail-wing-btn')
	},
]

const loop = document.querySelector('#loop')

// app code

class ColorTheParrot {
	mode = 0;
	colors;
	user = '#000000';
	index = 0;

	constructor(elements) {
		this.colorTheParrot = elements
	}

	#loop(vars) {
		document.documentElement.style.setProperty(vars, this.colors[this.index])
		this.index === colors.length ? this.index = 0 : this.index++
	}

	#random(vars) {
		let randomIndex = Math.round(Math.random() * this.colors.length)
		document.documentElement.style.setProperty(vars, this.colors[randomIndex])
	}

	#userColor(vars) {
		document.documentElement.style.setProperty(vars, this.user)
	}

	runApp() {
		this.colorTheParrot.forEach(elements => {
			elements.btn.addEventListener('click', (button) => {
				switch (this.mode) {
					case 0:
						this.#loop(elements.vars)
						break;
					case 1:
						this.#random(elements.vars)
						break;
					case 2:
						this.#userColor(elements.vars)
						break;
				}
			})
		})
	}
}

// create app

let colorTheParrot = new ColorTheParrot()

colorTheParrot.colors = colors
colorTheParrot.colorTheParrot = varsBtn

// exec

colorTheParrot.runApp()

// events

document.querySelector('#loop').onchange = (e) => {
	colorTheParrot.mode = Number(e.target.value)
}

document.querySelector('#custom').onclick = () => {
	loop.value = 2
}

document.querySelector('#custom').onchange = (e) => {
	colorTheParrot.mode = 2
	colorTheParrot.user = e.target.value
}


