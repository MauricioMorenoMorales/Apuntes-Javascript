const broken = (input: string): string =>
	input
		.split('')
		.map(number => (number === '0' ? '1' : '0'))
		.join('');
