'use strict';
const solution = (stringInput, ending) => {
	if (ending === '') return false;
	return stringInput.slice(-ending.length) === ending;
};
console.log(solution('abc', 'b'));
