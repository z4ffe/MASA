const arr = ["how", "delicate", "pen", "century", "care", "heavenly", "selfish", "green", "about", "across"]

const random = document.querySelector('.random')
const next = document.querySelector('.next')

random.onmouseover = (e) => e.target.textContent = arr[Math.round((Math.random() * arr.length - 1))]

let idx = 0
next.onmouseover = (e) => {
   if (idx === arr.length) idx = 0
   e.target.textContent = arr[idx]
   idx++
}
