const solution = (letters: string): Array<string> | any => {
	const hasUnderScore = letters.length % 2 ? letters : `${letters}_`;
	let response = [];
	for (let i = 0; i < letters.length; i + 2) {
		response.push(`${letters[i]}${letters[i + 1]}`);
	}
	return response;
};

console.log(solution('abc'));
console.log('xd');
