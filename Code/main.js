'use strict';
const countPositivesSumNegatives = function (input) {
	if (input.length == 0 || !input) return [];
	let negativeSum = 0;
	let positiveArray = [];
	for (let i = 0; i < input.length; i++) {
		if (input[i] < 0) negativeSum = negativeSum + input[i];
		if (input[i] > 0) positiveArray.push(input[i]);
	}
	return [positiveArray.length, negativeSum];
};
