const pizzaNum = document.querySelector('#pizza-num')
const peopleNum = document.querySelector('#people-num')
const out = document.querySelector('#output')
const inputs = document.querySelectorAll('input')

const howManyPizzas = (ordered, people) => ordered / people


inputs.forEach(el => el.oninput = () => out.textContent = howManyPizzas(+pizzaNum.value, +peopleNum.value))

