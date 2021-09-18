const orderWord = (parameter: string): string =>
	!parameter ? 'Invalid String' : [...parameter].sort().join('');
