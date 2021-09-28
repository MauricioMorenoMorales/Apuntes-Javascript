//! Recibe un array de numeros y coniertelos a un string

const createPhoneNumber = (
	numbers: Array<number>,
	stringOfNumbers = numbers.map(String).join(''),
	lada = stringOfNumbers.substr(0, 3),
	regionNumber = stringOfNumbers.substr(3, 3),
	restOfNumbers = stringOfNumbers.substr(6, 4),
): string => `(${lada}) ${regionNumber}-${restOfNumbers}`;

const CreatePhoneNumber = (numbers: Array<number>): string => {
	let format = '(xxx) xxx-xxxx';
	for (const number of numbers) {
		format = format.replace('x', String(number));
	}
	return format;
};

const createPhoneNumberRegex = (numbers: Array<number>): string =>
	numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');

// https://www.codewars.com/kata/525f50e3b73515a6db000b83/solutions/javascript

//! Cuenta la cantidad de letras que se repiten al menos una vez

const duplicateCount = (parameter: string): number => {
	let register: any = {};
	for (const letter of parameter.toLowerCase()) {
		letter in register ? register[letter]++ : (register[letter] = 1);
	}
	let repeatedWords = [];
	for (const key in register) {
		if (register[key] >= 2) {
			repeatedWords.push(key);
		}
	}
	return repeatedWords.length;
};

//regex repeated words
const duplicateCountRegex = (text: string): number =>
	(
		text
			.toLowerCase()
			.split('')
			.sort()
			.join('')
			.match(/([^])\1+/g) || []
	).length;

const duplicateCountRegexFunctional = (text: string): number =>
	text
		.toLowerCase()
		.split('')
		.filter(
			(value, index, array) =>
				array.indexOf(value) !== index && array.lastIndexOf(value) === index,
		).length;

//! Reverse the words with more than 5 letters

const spinWords = (words: string): string =>
	words
		.split(' ')
		.map(word => (word.length >= 5 ? word.split('').reverse().join('') : word))
		.join(' ');

const spinWordsRegex = (words: string): string =>
	words.replace(/\w{5,}/g, word => word.split('').reverse().join(''));

//! Remplaza las letras que se repitan por un ')' y las que no por un ')'
// register reduce

const duplicateEncode = (
	word: string,
	register = word
		.toLowerCase()
		.split('')
		.reduce((responseObject: any, letter) => {
			letter in responseObject
				? responseObject[letter]++
				: (responseObject[letter] = 1);
			return responseObject;
		}, {}),
): string =>
	word
		.toLowerCase()
		.split('')
		.map(letter => (register[letter] >= 2 ? ')' : '('))
		.join('');

const duplicateEncodeFunctional = (word: string): string =>
	word
		.toLowerCase()
		.split('')
		.map(function (a, i, w) {
			return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
		})
		.join('');

//! Devuelve un string con las posiciones de las letras "a-b-c" => "1 2 3"

const alphabetPosition = (text: string): string =>
	text
		.toUpperCase()
		.replace(/[^a-z]/gi, '')
		.split('')
		.map(letter => letter.charCodeAt(0) - 64)
		.join(' ');
