const toWeirdCase2 = (words: string): string =>
	[...words]
		.map((letter, index) =>
			index % 2 ? letter.toLowerCase() : letter.toUpperCase(),
		)
		.join('');

const toWeirdCase = (words: string): string =>
	words
		.split(' ')
		.map(word =>
			[...word]
				.map((letter, index) =>
					index % 2 ? letter.toLowerCase() : letter.toUpperCase(),
				)
				.join(''),
		)
		.join(' ');

console.log(toWeirdCase('hola amigos'));
console.log(toWeirdCase('holaamigos'));
