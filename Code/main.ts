const makeString = (words: string): string =>
	words
		.split(' ')
		.map(word => word[0].toUpperCase())
		.join('');
