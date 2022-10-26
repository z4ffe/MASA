const result = document.querySelector('.result')

const places = [
   {place: '1st', body: 'Porsche'},
   {place: '2nd', body: 'Porsche'},
   {place: '3rd', body: 'Porsche'},
   {place: '4th', body: 'Porsche'},
   {place: '5th', body: 'Porsche'},
   {place: '6th', body: 'Porsche'},
   {place: '7th', body: 'Porsche'},
   {place: '8th', body: 'Porsche'},
   {place: '9th', body: 'Sauber/BWM'},
   {place: '10th', body: 'Porsche'},
]

for (let i = 0; i < places.length; i++) {
   result.insertAdjacentHTML('beforeend', `<div class="place-wrapper">
															<p class="place">${places[i].place}</p>
															<p class="winner">${places[i].body}</p>
														</div>`)
}
