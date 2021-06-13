const getCount = function (input: string): number {
	let response = 0;
	for (const letter of input.split('')) {
		if (/[aeiou]/.test(letter)) {
			response++;
		}
	}
	return response;
};
