const uniqueLetters = (
	firstParameter: string,
	secondParameter: string,
): string => {
	const setA = new Set(firstParameter);
	const setB = new Set(firstParameter);

	return [...(firstParameter + secondParameter)]
		.filter(letter => !setA.has(letter) || !setB.has(letter))
		.join('');
};

const UniqueLetters = (
	firstParameter: string,
	secondParameter: string,
): string =>
	[...(firstParameter + secondParameter)]
		.filter(
			letter =>
				!firstParameter.includes(letter) || !secondParameter.includes(letter),
		)
		.join('');
