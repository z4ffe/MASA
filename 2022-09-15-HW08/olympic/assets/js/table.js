const table = document.querySelectorAll('td')

table.forEach(x => {
	const numbers = new RegExp(/[0-9]/)
	if (x.textContent.match(numbers)) {
		x.classList.add('yellow')
	} else if (x.textContent === '•') {
		x.classList.add('blue')
	} else if (x.textContent === 'N/A') {
		x.classList.add('center')
	}
})

//