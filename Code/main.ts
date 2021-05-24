const shortenToDate = (input: string): string =>
	input.split(' ').slice(0, 3).join(' ').replace(/,/g, '');
