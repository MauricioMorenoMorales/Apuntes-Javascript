const duplicateEncode2 = (
	word: string,
	register = word
		.toLowerCase()
		.split('')
		.reduce((responseObject: any, letter) => {
			letter in responseObject
				? responseObject[letter]++
				: (responseObject[letter] = 1);
			return responseObject;
		}, {}),
): string =>
	word
		.toLowerCase()
		.split('')
		.map(letter => (register[letter] >= 2 ? ')' : '('))
		.join('');

