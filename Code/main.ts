const lastSurvivor = function (letters: string, coords: Array<number>): string {
	const response = [...letters];
	for (const number of coords) {
		response.splice(number, 1);
	}
	return response.join('');
};
