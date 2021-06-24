const calc = function (input: string): number {
	const numbers: Array<string> = [];
	for (let i = 0; i < input.length; i++) {
		numbers.push(String(input.charCodeAt(i)));
	}
	const splittedNumbers = numbers.forEach(number => number.split(''));
	const changed7 = numbers.map(number => (number === '7' ? '1' : number));
	console.log(changed7);
	return changed7.reduce((acc, curr) => Number(curr) + acc, 0);
};

calc('ABC');
