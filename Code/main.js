'use strict';
const caffeineBuzz = parameter => {
	if (parameter % 3 === 0 && parameter % 4 === 0) {
		return parameter % 2 === 0 ? 'CoffeeScript' : 'Coffee';
	} else if (parameter % 3 === 0) {
		return parameter % 2 === 0 ? 'JavaScript' : 'Java';
	} else {
		return 'mocha_missing!';
	}
};
