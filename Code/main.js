'use strict';
const createArrayOfTiers = (number, stringNumber = number.toString()) =>
	[...Array(stringNumber.length)].map((_, index) =>
		stringNumber.substr(0, index + 1),
	);
console.log(createArrayOfTiers(2017));
