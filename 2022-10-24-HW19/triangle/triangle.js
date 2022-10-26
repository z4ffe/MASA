const rows = document.querySelector('#rows')
const divTriangle = document.querySelectorAll('.triangle')


const triangle = () => {
   let str = ''
   divTriangle.forEach(x => x.innerHTML = '')
   for (let i = 1; i <= +rows.value; i++) {
	  str += `${i} `
	  divTriangle.forEach(x => x.innerHTML += `<div>${str}</div>`)
   }
}

rows.oninput = () => triangle()
divTriangle.forEach(div => div.onmouseover = e => e.currentTarget.classList.add('bigger'))
divTriangle.forEach(div => div.onmouseout = e => e.currentTarget.classList.remove('bigger'))
