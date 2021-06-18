const switcheroo = (input: string): string =>
	input.split('').map(letter => {
		if(letter === 'a') letter.replace(/a/g, 'b')

console.log(
	switcheroo('abc'), //bac
	switcheroo('aaabcccbaaa'), // bbbacccbaaa
);
