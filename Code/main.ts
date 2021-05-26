const arrayFilterLastAndFirst = function (input: string): string | null {
	if (input.split(',').length <= 2) return null;
	const array = input.split(',').filter(e => e);
	array.pop();
	array.shift();
	return array.join(' ');
};
