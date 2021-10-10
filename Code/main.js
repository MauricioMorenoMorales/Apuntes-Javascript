'use strict';
const solution = (
	romanNumber,
	conversion = {
		M: 1000,
		D: 500,
		C: 100,
		L: 50,
		X: 10,
		V: 5,
		I: 1,
	},
) => {
	let sum = 0;
	for (let i = 0; i < romanNumber.length; i++) {
		if (conversion[romanNumber[i]] < conversion[romanNumber[i + 1]]) {
			sum += conversion[romanNumber[i + 1]] - conversion[romanNumber[i]];
			i++;
		} else {
			sum += conversion[romanNumber[i]];
		}
	}
	return sum;
};
console.log(solution('MXIII'), solution('IV'));
