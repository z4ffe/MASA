const btn = document.querySelector('#btn')
let arrStyle = [];
let selectorsList = document.styleSheets[0].cssRules

for (let selector of selectorsList) {
  if (selector.selectorText.includes('Btn')) arrStyle.push(selector.selectorText.slice(1))
}

// btn.classList.contains('anyClass')

const changeColor = () => {
  btn.classList.remove(...btn.classList)   //btn.className = ''
  btn.classList.add(arrStyle[Math.floor(Math.random() * arrStyle.length)])
}

btn.onclick = () => changeColor()
