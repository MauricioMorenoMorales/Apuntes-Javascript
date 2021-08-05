const lifePathNumber = function (parameter: string): number {
	const numbers = parameter.split('-'),
		year = numbers[0],
		month = numbers[1],
		day = numbers[2];

	const yearNumbers = year.split('').map(Number),
		monthNumbers = month.split('').map(Number),
		dayNumbers = day.split('').map(Number);

	const yearSum =
		yearNumbers.reduce((prev, curr) => prev + curr, 0) > 9
			? String(yearNumbers.reduce((prev, curr) => prev + curr, 0))
					.split('')
					.map(Number)
					.reduce((prev, curr) => prev + curr, 0)
			: yearNumbers.reduce((prev, curr) => prev + curr, 0);
	const monthSum = monthNumbers.reduce((prev, curr) => prev + curr, 0);
	const daySum = monthNumbers.reduce((prev, curr) => prev + curr, 0);

	return yearSum + monthSum + daySum;
};

