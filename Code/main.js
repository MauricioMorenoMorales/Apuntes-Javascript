'use strict';
const insertDash = (parameter, formattedParameter = [...String(parameter)]) =>
	formattedParameter
		.map((stringNumber, index) => {
			const currentNumber = Number(stringNumber);
			if (
				currentNumber % 2 === 1 &&
				Number(formattedParameter[index]) % 2 === 1
			) {
				return `${currentNumber}-`;
			}
			return `${currentNumber}`;
		})
		.join('');
