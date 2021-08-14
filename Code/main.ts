const swticheroo = (parameter: string) => {
	const dictionary: any = { a: 'b', b: 'a' };
	return [...parameter].map(letter => dictionary[letter] || letter).join('');
};
