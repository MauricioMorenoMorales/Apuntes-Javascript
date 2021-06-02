'use strict';
const lastSurvivor = function (letters, coords) {
	const response = [...letters];
	for (const number of coords) {
		response.splice(number, 1);
	}
	return response.join('');
};
