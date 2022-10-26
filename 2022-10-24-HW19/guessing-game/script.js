const animals = ['mouse', 'dragon', 'fly', 'parrot', 'rat', 'cat', 'dog', 'wolf', 'fox'];

const list = document.querySelector('.list')
const playBtn = document.querySelector('#play')
const qst = document.querySelector('.qst')
const answer = document.querySelector('#answer')
const guess = document.querySelector('#guess')
const body = document.querySelector('body')

for (let i = 0; i < animals.length; i++) list.textContent += `${animals[i]} `

const randomAnimal = () => animals[Math.round(Math.random() * (animals.length - 1))]

let rndAnimal;

playBtn.onclick = () => {
   rndAnimal = randomAnimal()
   qst.textContent = `I thought about one animals from the list. Guess which?`
   console.log(rndAnimal)
}

const userInput = () => {
   answer.value === rndAnimal ? body.style.backgroundColor = `green` : body.style.backgroundColor = `red` 
}

guess.onclick = () => userInput()



