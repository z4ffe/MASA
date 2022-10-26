// 6.1

const checkGreat = firstName => {
   return firstName.at(0) === 'M' ? 'Great!'
	  : firstName.at(0) === 'G' ? 'Great'
		 : firstName.at(0) === 'T' ? 'Totally Great!'
		 : firstName.at(0) === 'R' ? 'Totally Great!'
		 : firstName.at(0)
}

console.log(checkGreat('Tal'));; // 'Totally Great!'
console.log(checkGreat('Neomi'));; // 'N'
console.log(checkGreat('Miri'));; // 'Great!'
console.log(checkGreat('Gila'));; // 'Great!'
console.log(checkGreat('Roni'));; // 'Totally Great!'

// 6.2

let color;

const colorDecision = letter => {
	  color = letter
	  return color === 'b' ? 'blue'
		 : color === 'g' ? 'green'
			: 'red'
}

console.log(colorDecision('b'));
console.log(colorDecision('d'));
console.log(colorDecision('g'));
