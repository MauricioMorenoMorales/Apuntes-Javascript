const solve = (firstParameter: string, secondParameter: string): string => {
	const a = [...firstParameter].sort();
	const b = [...secondParameter].sort();
	let response: Array<string> = [];
	for (let i = 0; i < a.length || i < b.length; i++) {
		if (a[i] !== b[i]) {
			response.push(a[i]);
			response.push(b[i]);
		}
	}
	return response.join('');
};

// Completar
//https://www.codewars.com/kata/5a262cfb8f27f217f700000b/train/javascript
