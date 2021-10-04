function cleanString(parameter: string): string {
	return [...parameter].reduce(
		(response, current) =>
			current === '#' ? response.slice(0, -1) : response + current,
		'',
	);
}

console.log(
	cleanString('abc#d##c'),
	cleanString('abc####d##c#'),
	cleanString('12345####123##12345#'),
);
