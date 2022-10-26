const numAr = [[-7.65, 1.8, 34.5, -0.44], [1023, 55, -3.45, 1.2, 0.2], [0.01, 0.03, -0.05, 88.1, 0.2], [2034, 3.01], [166], [-166, -5.4, -76]]

const newArr = numAr.map(x => x.reduce((x, y) => x + y))
console.log(newArr)
