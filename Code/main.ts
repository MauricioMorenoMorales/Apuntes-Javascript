const capitals = (word: string): Array<number> | any => {
	const response: Array<number> = [];
	word.split('').forEach((letter, index) => {
		if (letter.toUpperCase() === letter) {
			response.push(index);
		}
	});
	return response;
};
