'use strict';
const broken = input =>
	input
		.split('')
		.map(number => (number === '0' ? '1' : '0'))
		.join('');
