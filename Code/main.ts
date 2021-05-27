const find_average = (input: Array<number>): number =>
	input.reduce((accumulator, currentValue) => accumulator + currentValue) /
	input.length;
