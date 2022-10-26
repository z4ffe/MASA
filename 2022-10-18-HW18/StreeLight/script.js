const $el = {
  btn: document.querySelector('#btn'),
  btnCar: document.querySelector('#btnCar'),
  streetLight: document.querySelector('.street-light'),
  streetLightCar: document.querySelector('.street-lightCar')
}

$el.btn.onclick = () => $el.streetLight.classList.toggle('green')


$el.btnCar.onclick = () => {
  $el.streetLightCar.classList.contains('red') ? $el.streetLightCar.classList.replace('red', 'green')
	: $el.streetLightCar.classList.contains('green') ? $el.streetLightCar.classList.replace('green', 'yellow')
	  : $el.streetLightCar.classList.replace('yellow', 'red')
}
