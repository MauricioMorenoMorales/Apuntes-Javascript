const vowel2index = (parameter: string): string =>
	[...parameter]
		.map((letter, index) =>
			letter.match(/[aeiou]/gi) ? `${index + 1}` : letter,
		)
		.join('');
