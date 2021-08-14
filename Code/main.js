'use strict';
const swticheroo = parameter => {
	const dictionary = { a: 'b', b: 'a' };
	return [...parameter].map(letter => dictionary[letter] || letter).join('');
};
