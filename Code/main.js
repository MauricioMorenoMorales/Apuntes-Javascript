'use strict';
const uniqueLetters = (firstParameter, secondParameter) => {
	const setA = new Set(firstParameter);
	const setB = new Set(firstParameter);
	return [...(firstParameter + secondParameter)]
		.filter(letter => !setA.has(letter) || !setB.has(letter))
		.join('');
};
const UniqueLetters = (firstParameter, secondParameter) =>
	[...(firstParameter + secondParameter)]
		.filter(
			letter =>
				!firstParameter.includes(letter) || !secondParameter.includes(letter),
		)
		.join('');
