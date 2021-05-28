const doubleChar = (input: string): string =>
	input
		.split('')
		.map(letter => letter + letter)
		.join('');
