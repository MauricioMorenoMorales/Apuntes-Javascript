'use strict';
const evenLast = function (input) {
	if (input.length === 0) return 0;
	return (
		input[input.length - 1] *
		input.reduce((accumulator, current, index) => {
			if (index % 2 === 0) return accumulator + current;
			else return accumulator;
		})
	);
};
console.log(evenLast([2, 3, 4, 5]));
