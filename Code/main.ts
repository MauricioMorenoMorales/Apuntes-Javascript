const solution = (stringInput: string, ending: string): boolean => {
	if (ending === '') return false;
	return stringInput.slice(-ending.length) === ending;
};

console.log(solution('abc', 'b'));
