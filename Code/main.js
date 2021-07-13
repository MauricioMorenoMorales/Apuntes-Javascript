'use strict';
const vowel2index = parameter =>
	[...parameter]
		.map((letter, index) =>
			letter.match(/[aeiou]/gi) ? `${index + 1}` : letter,
		)
		.join('');
