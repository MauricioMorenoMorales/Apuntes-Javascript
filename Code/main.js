'use strict';
const makeString = words =>
	words
		.split(' ')
		.map(word => word[0].toUpperCase())
		.join('');
