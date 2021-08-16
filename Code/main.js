'use strict';
const capitals = word => {
	const response = [];
	word.split('').forEach((letter, index) => {
		if (letter.toUpperCase() === letter) {
			response.push(index);
		}
	});
	return response;
};
