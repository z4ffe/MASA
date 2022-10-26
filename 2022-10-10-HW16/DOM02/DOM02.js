const purpleDiv = document.querySelector('.purple');
const yellowBtn = document.querySelector('.yellow');
const numInput = document.querySelector('#num');
const outP = document.querySelector('.out span');
const makeBigger = document.querySelector('.black')

// functions

const makeLarger = () => {
   purpleDiv.style.setProperty('width', `${purpleDiv.clientWidth * 1.1}px`)
   purpleDiv.style.setProperty('height', `${purpleDiv.clientHeight * 1.1}px`)
   purpleDiv.innerHTML = `<p style="color: whitesmoke;">Width: ${purpleDiv.clientWidth} & Height: ${purpleDiv.clientHeight}</p>`
   purpleDiv.style.setProperty('border', `${Math.round(Math.random() * 25)}px solid black`)
}

const changeColor = () => {
   if (purpleDiv.style.backgroundColor === 'red') {
	  purpleDiv.style.backgroundColor = 'cornflowerblue';
	  purpleDiv.style.border = '5px solid red';
   } else {
	  purpleDiv.style.backgroundColor = 'red';
	  purpleDiv.style.border = '5px solid cornflowerblue';
   }
}

const addText = () => purpleDiv.innerText += "DOM02 ";


const ifEven = () => {
   let num = +numInput.value;
   outP.innerText = num % 2 === 0 ? "even" : "odd";
}

// listeners

purpleDiv.onmouseover = () => changeColor();
purpleDiv.onmouseout = () => changeColor();
purpleDiv.onmousedown = () => changeColor();
purpleDiv.onmouseup = () => changeColor();
yellowBtn.onclick = () => addText();
numInput.oninput = () => ifEven();
makeBigger.onclick = () => makeLarger()