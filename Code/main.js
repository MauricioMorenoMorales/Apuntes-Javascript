'use strict';
const doubleChar = input =>
	input
		.split('')
		.map(letter => letter + letter)
		.join('');
