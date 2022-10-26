const opacityInput = document.querySelector('#opacity')
const inputMargin = document.querySelectorAll('input[type=number]')

opacityInput.oninput = e => opacityInput.parentElement.style.setProperty('opacity', `${+e.target.value}%`)
inputMargin.forEach(inp => inp.oninput = e => e.target.parentElement.style.marginLeft = `${e.target.value}${e.target.parentElement.textContent.slice(-2)}`)
