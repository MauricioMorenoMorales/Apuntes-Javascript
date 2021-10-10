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

//! Elimina empty strings dentro de un array

const filterEmptyStrings = (parameter: Array<string>): Array<string> =>
	parameter.filter(Boolean);

//! Elimina palabras consecutivas dentro de un string "un patrón"

const songDecoder = (song: string): string =>
	song.split('WUB').filter(Boolean).join(' ');

//! Verifica que en una sentencia se encuentren todas las letras de el abecedario

const isPangram = (sentence: string): boolean | any => {
	const letterRegister = [...sentence.replace(/[^a-z]/gi, '')].reduce(
		(counter: any, letter) => {
			letter in counter ? counter[letter]++ : (counter[letter] = 1);
			return counter;
		},
		{},
	);
	let letterCounter = 0;
	for (const key in letterRegister) {
		letterCounter++;
	}
	return letterCounter >= 26;
};

const isPangramClever = (sentence: string): boolean =>
	[...'abcdefghijklmnopqrstuvwxyz'].every(letter =>
		sentence.toLowerCase().includes(letter),
	);

const isPangramCleverRegex = (sentence: string): boolean =>
	(sentence.match(/([a-z])(?!.*\1)/gi) || []).length === 26;

//! Regex localiza dos letras seguidas
const twoFollowedLetters = (text: string): Array<string> =>
	(text + '_').match(/.{2}/g) || [];

//! Verifica que cada elemento dentro de un array sea una carita feliz

const countSmileys = (faces: Array<string>): number =>
	faces
		.filter(face => !face.includes('o') || !face.includes('_'))
		.filter(face => face.length === 3)
		.filter(face => face.includes('D') || face.includes(')'))
		.filter(face => face.includes(':') || face.includes(';')).length;

const countSmileysRegex = (faces: Array<string>): number =>
	faces.filter(face => /[:;]{1}[-~]?[)D]{1}/.test(face)).length;

//! COnstruye un array que haga una piramide por parametro recibe el numero de pisos

const towerBuilder = (floors: number): Array<string> =>
	[...Array(floors)].map(
		(_, index) =>
			' '.repeat(floors - 1 - index) +
			'*'.repeat(index * 2 + 1) +
			' '.repeat(floors - 1 - index),
	);

/*[
	'     *     ',
	'    ***    ',
	'   *****   ',
	'  *******  ',
	' ********* ',
	'***********'
]*/

//! Cada letra vale su posición en el alfabeto cuenta el valor de cada palabra y devuelve la palabra con mayor puntuacion

const highestWordValue = (
	words: string,
	wordsValues = words
		.split(' ')
		.map(word =>
			[...word].reduce(
				(acc, curr) => (acc += Number(curr.charCodeAt(0) - 96)),
				0,
			),
		),
): string => words.split(' ')[wordsValues.indexOf(Math.max(...wordsValues))];

//! Separa las palabras dentro de un camelcase

const desCamelCaser = (text: string): string =>
	[...text]
		.map(letter => (letter === letter.toUpperCase() ? ` ${letter}` : letter))
		.join('');

const desCamelCaserRegex = (text: string): string =>
	text.replace(/[A-Z]/g, ' $1');

//! Retorna una hola pero ignora los espacios "hol a" => ["Hol a", "hOl a", "hoL a", "hol A"]

const waveMal = (word: string): Array<string> | any =>
	[...Array(word.length).fill(word)].map(
		(word, index) =>
			word.substring(0, index) +
			word[index].toUpperCase() +
			word.substring(index + 1, word.length),
	);

const wave = (str: string): Array<string> => {
	let result: Array<string> = [];
	str.split('').forEach((char, index) => {
		if (/[a-z]/.test(char)) {
			result.push(
				str.slice(0, index) + char.toUpperCase() + str.slice(index + 1),
			);
		}
	});
	return result;
};

//! REGEX Convierte un string a camel case

const camelCaser = (text: string): string =>
	text.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase());

//! Retorna un diamante hecho con un string

const diamond = (size: number): string | null => {
	if (size % 2 === 0 || size < 1) return null;
	let iteration: number = 0;
	let add: string;
	//Generates the first iteration with the longest row
	let center: string = generateLine(iteration, size);
	// Start itering adding 2 to the counter
	while ((iteration += 2) < size) {
		add = generateLine(iteration / 2, size - iteration);
		center = add + center + add;
	}
	return center;
};

const generateLine = (spaces: any, stars: any): string =>
	' '.repeat(spaces) + '*'.repeat(stars) + '\n';

//! REGEX verifica si un string es una ip

const isValidIP = (ip: string): boolean =>
	4 ===
	ip
		.split('.')
		.filter(Boolean)
		.filter(number => !/[^0-9]/gi.test(number))
		.filter(number => !(number.length > 1 && number[0] === '0'))
		.map(Number)
		.filter(number => number <= 255).length;

const isValidIPRegex = (ip: string): boolean =>
	/^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(ip);

console.log('probar este tipo de cosas')

