const input = document.querySelectorAll('input')


input.forEach(inp => {
   inp.oninput = (e) => {
	  if (e.target.id === 'rw' || e.target.id === 'height') input[2].value = Math.round(+input[3].value / +input[1].value * +input[0].value).toString()
	  if (e.target.id === 'rh' || e.target.id === 'width') input[3].value = Math.round(+input[2].value / +input[0].value * +input[1].value).toString()
   }
})
