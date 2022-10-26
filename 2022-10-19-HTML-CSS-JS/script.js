const showRandomZeroToOne = () => Math.round(Math.random() * 1000)
const text = document.querySelector('#text')
const to255 = () => Math.floor(Math.random() * 256)

window.onmousemove = () => {
  text.textContent = showRandomZeroToOne().toString()
  document.body.style.backgroundColor = `rgb(${to255()} ${to255()} ${to255()} )`
}

console.group('Random numbers: ')
console.log(showRandomZeroToOne());
console.log(showRandomZeroToOne());
console.log(showRandomZeroToOne());
console.log(showRandomZeroToOne());
console.groupEnd()
console.log('123')
console.log('234')
