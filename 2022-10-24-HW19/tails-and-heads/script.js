const input = document.querySelector('#num')
const heads = document.querySelector('#heads')
const tails = document.querySelector('#tails')

const random = (flipCount) => {
   if (!flipCount) {
	  heads.textContent = '?'
	  tails.textContent = '?'
	  return
   }
   let headsCount = 0;
   let tailsCount = 0;
   for (let i = 0; i < flipCount; i++) {
	  let rnd = Math.round(Math.random())
	  rnd === 1 ? headsCount++ : tailsCount++
   }
   heads.textContent = `${headsCount}`
   tails.textContent = `${tailsCount}`
}

input.oninput = (e) => random(+e.target.value)
