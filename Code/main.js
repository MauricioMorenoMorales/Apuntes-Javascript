'use strict';
const solve = parameter =>
	parameter
		.split(/[a-z]/gi)
		.map(Number)
		.reduce((acc, curr) => Math.max(acc, curr), 0);
