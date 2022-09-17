const prompt = require('prompt-sync')();


//   switch (UR_EXPRESSION) {
//			case 'case_expression':
//					yourcode...
//					break; - for stop
//			case: - next case
//				....
//			default: works like else
//   }

let profession = prompt('What is your profession? ')

let response;

switch (profession) {
	case 'musician':
		response = 'You play dreamy blues';
		break;
	case 'marketolog':
		response = 'You go to sunbuth on the beach';
		break;
	case 'developer':
		response = 'You create beautiful programs';
		break;
	case 'driver':
	case 'racer':
		response = 'You drive mercedes';
		break;
	case 'chef':
	case 'cook':
		response = 'You make deliciuos soup'
		break;
	default:
		response = `Profession ${profession} does not exist`
}

console.log(response)


//


let grade = +prompt('What is ur grade? ')
let gradeResult

switch (true) {
	case grade > 90:
		gradeResult = 'A';
		break;
	case grade < 90 && grade > 80:
		gradeResult = 'B';
		break;
	case grade < 80 && grade > 70:
		gradeResult = 'C';
		break;
	case grade < 70:
		gradeResult = 'F';
		break;
	default:
		gradeResult = 'Wrong input!';
}


console.log(gradeResult)


let month = 7
let monthResult;

switch (month) {
	case 1:
	case 2:
	case 3:
	case 4:
		monthResult = 'Hello'
		break;
	case 5:
	case 6:
	case 7:
		monthResult = 'Bye'
		break;
	default:
		monthResult = 'Wrong input'
}

console.log(monthResult)