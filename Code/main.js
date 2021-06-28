'use strict';
const countSalutes = function (hallway) {
	let right = 0;
	let salutes = 0;
	for (const element of hallway) {
		if (element === '>') right += 1;
		else if (element === '<') salutes += 2 * right;
	}
	return salutes;
};
const CountSalutesImperative = function (hallway) {
	hallway.replace(/-/g, '');
	let response = 0;
	for (let i = 0; i < hallway.length; i++) {
		if (hallway[i] === '>') {
			for (let j = i + 1; j < hallway.length; j++) {
				if (hallway[i] == '<') response += 2;
			}
		}
	}
	return response;
};
const CountSalutes = hallway =>
	2 *
	[...hallway].reduce(
		(accumulator, curr, indx, arr) =>
			accumulator +
			(curr === '>' ? arr.slice(indx).filter(curr => curr === '<').length : 0),
		0,
	);
