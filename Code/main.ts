const crap = (
	arrayParameter: Array<Array<string>>,
	bags: number,
	cap: number,
) =>
	(arrayParameter + '').includes('D')
		? 'Dog!!'
		: (arrayParameter + '').split('@').length - 1 <= bags * cap
		? 'Clean'
		: 'Cr@p';
