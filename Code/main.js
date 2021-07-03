'use strict';
const planeSeat = function (parameter) {
	const letter = parameter.slice(-1),
		number = Number(parameter.replace(/[a-z]/gi, ''));
	let responseNumber = '',
		responseLetter = '';
	if (number >= 60) return 'No Seat!';
	if (number >= 1 && number <= 20) responseNumber = 'Front';
	else if (number >= 21 && number <= 40) responseNumber = 'Middle';
	else if (number >= 40) responseNumber = 'Back';
	if (letter.match(/[a-c]/gi)) responseLetter = 'Left';
	else if (letter.match(/[d-f]/gi)) responseLetter = 'Middle';
	else if (letter.match(/[g-k]/gi)) responseLetter = 'Right';
	return `${responseNumber}-${responseLetter}`;
};
