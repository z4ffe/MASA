const wrapper = document.querySelector('.wrapper')
const input = document.querySelector('.input')

input.oninput = (e) => {
   let num = 0
   let str = ''
   wrapper.innerHTML = ''
   for (let i = 1; i <= +e.target.value; i++) {
	  str = ''
	  for (let j = 1; j <= i; j++) {
		 str += ++num
		 str += j === i ? '' : ' '
	  }
	  wrapper.innerHTML += `<p>${str}</p>`
   }
}
