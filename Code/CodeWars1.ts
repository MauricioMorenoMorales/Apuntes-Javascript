//TODO Condiverte numeros a estring los suma y los devuelve como string

const sumStr = (a: string, b: string): string =>
	String(Number(a === '' ? '0' : a) + Number(b === '' ? '0' : b));

function sumStrClever(a: string, b: string): string {
	return +a + +b + '';
}

// sumSTr('9', '') -> 0
// sumSTr('10', '10') -> 20

//TODORecibe un string y en base a lo que se le pase retorna otro string

const drinks = {
	jabroni: 'Patron Tequila',
	'school counselor': 'Anything with Alcohol',
	programmer: 'Hipster Craft Beer',
	'bike gang member': 'Moonshine',
	politician: 'Your tax dollars',
	rapper: 'Cristal',
};

export function getDrinkByProfession(profession: string): string {
	return drinks[profession.toLowerCase()] || 'Beer';
}

//TODO misma funcion de arriba pero formatea un imput y capitaliza cada palabra seguida despues de un espacio

const getDrinkByProfessionWithoutLowerCase = (profession: string) => {
	let FormatedInput = profession
		.split(' ')
		.map(e =>
			e
				.split('')
				.map((e, p) => (p === 0 ? e.toUpperCase() : e.toLocaleLowerCase()))
				.join(''),
		)
		.join(' ');
	return FormatedInput === 'Jabroni'
		? 'Patron Tequila'
		: FormatedInput === 'School Counselor'
		? 'Anything with Alcohol'
		: FormatedInput === 'Programmer'
		? 'Hipster Craft Beer'
		: FormatedInput === 'Bike Gang Member'
		? 'Moonshine'
		: FormatedInput === 'Politician'
		? 'Your tax dollars'
		: FormatedInput === 'Rapper'
		? 'Cristal'
		: 'Beer';
};

//capitalizeFormatter('bike gang member') -> 'Bike Gang Member'

//TODO Calcula el volumen de el liquido dentro un vaso medio lleno

const iceBrickVolume = (
	radius: number,
	bottleLength: number,
	rimLength: number,
): number => radius * radius * (bottleLength - rimLength) * 2;

//TODO Convierte un numero en binario

export let toBinary = (n: number): number => +n.toString(2);

export const toBinary2 = (n: number) => parseInt((n >>> 0).toString(2));

//TODO Formatea un imput a moneda

export let formatMoney = (amount: number): string => `$${amount.toFixed(2)}`;

//formatMoney(3.1) -> 3.10

//TODO Escapa de un tiburon, llega a el potoon para salvarte

export const shark = (
	pontoonDistance: number,
	sharkDistance: number,
	youSpeed: number,
	sharkSpeed: number,
	dolphin: boolean,
): string =>
	pontoonDistance / youSpeed <
	sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed)
		? 'Alive!'
		: 'Shark Bait!';

//TODO Accede a una posicion n dentro de un array y luego exponencia el resultado a la n potencia

export const index = (array: number[], n: number): number =>
	array[n] ** n || -1;

//TODO Encuentra la posición de el lobo y alerta a que obeja va a comerse

export function warnTheSheep(queue: string[]): string {
	const position = queue.reverse().indexOf('wolf');
	return position
		? `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`
		: 'Pls go away and stop eating my sheep';
}

export const warnTheSheep2 = (queue: string[]): string => {
	const position = queue.reverse().findIndex(element => element === 'wolf');
	return position
		? `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`
		: 'Pls go away and stop eating my sheep';
};

//TODO Recibe un string y retornalo como Float si es se puede convertir correctamente "No es texto"

export function parseF(s: string): number | null {
	return isNaN(parseFloat(s)) ? null : parseFloat(s);
}

//TODO Retorna true si la suma de los cuadrados de a es mayor a la suma de los cubos de b

export const arrayMadness = (a: number[], b: number[]): boolean =>
	a.map(e => e ** 2).reduce((previous, current) => previous + current) >
	b.map(e => e ** 3).reduce((previous, current) => previous + current);

export function arrayMadnessClever(a: number[], b: number[]): boolean {
	return (
		a.reduce((sum, el) => sum + el ** 2, 0) >
		b.reduce((sum, el) => sum + el ** 3, 0)
	);
}

//TODO Calcula el tamaño de una caja

const getSize = (w: number, h: number, d: number): number[] => [
	(w * h + w * d + h * d) * 2,
	w * h * d,
];

//TODO Imprime la canción 99 cervezas

const beer = () => {
	let response = [];
	for (let i = 99; i > 1; i--) {
		if (i === 2) {
			response.push(`
2 botellas de cerveza en la pared, 2 botellas de cerveza.
Toma uno abajo, pasa a tu alrededor, 1 botella de cerveza en la pared...
1 botella de cerveza en la pared,  botellas de cerveza.
No más botellas de cerveza en la pared, no más botellas de cerveza.
Los hemos bajado y los hemos pasado; Ahora estamos borrachos y nos desmayamos!
			`);
		} else {
			response.push(`
${i} botellas de cerveza en la pared, ${i} botellas de cerveza.
Toma uno abajo, pasa a tu alrededor, ${
				i - 1
			} botellas de cerveza en la pared...`);
		}
	}
	return response.join('\n');
};

console.log(beer());

//TODO Filtra todos los elementos que sean true

const countSheeps = (sheeps: boolean[]): number =>
	sheeps.filter(Boolean).length;

//TODO Retorna el nth numero natural por ejemplo escribo un 3 => 4, 100 => 198

const nthEven = n => n * 2 - 2;

//TODO Encuentra un elemento dentro de un array

const findNeddle = (haystack: any[]): string =>
	`found the needle at position ${haystack.indexOf('needle')}`;

//TODO COnvierte el input de numero a texto

const devolverLetras = (n: number): string => {
	if (n < 16 && n % 10 !== 0) {
		return [
			'cero',
			'uno',
			'dos',
			'tres',
			'cuatro',
			'cinco',
			'seis',
			'siete',
			'ocho',
			'nueve',
			'diez',
			'once',
			'doce',
			'trece',
			'catorce',
			'quince',
		][n];
	} else if (n % 10 === 0) {
		return [
			'cero',
			'diez',
			'veinte',
			'treinta',
			'cuarenta',
			'cincuenta',
			'sesenta',
			'setenta',
			'ochenta',
			'noventa',
		][n / 10];
	} else {
		let numeroDividido = String(n).split('');
		let decenas = [
			'',
			'dieci',
			'venti y ',
			'treinta y ',
			'cuarenta y ',
			'cincuenta',
			'sesentai y',
			'setenta y',
			'ochenta y',
			'noventa y',
		][numeroDividido[0]];
		const unidades = [
			' cero',
			' uno',
			' dos',
			' tres',
			' cuatro',
			' cinco',
			' seis',
			' siete',
			' ocho',
			' nueve',
		][numeroDividido[1]];
		return decenas + unidades;
	}
};

const devolverLetrasOptimizado = (n: number): string => {
	let numeroDividido = String(n)
		.split('')
		.map(e => Number(e));
	let unidadesresponse = '';
	let decenasresponse = '';
	let centenasresponse = '';
	let milesimasresponse = '';
	const milesimas = [
		'cero ',
		'mil ',
		'dosmil ',
		'tresmil ',
		'cuatromil ',
		'cincomil ',
		'seismil ',
		'sietemil ',
		'ochomil ',
		'nuevemil ',
	];
	const centenas = [
		'cero ',
		'ciento ',
		'doscientos ',
		'trescientos ',
		'cuatroscientos ',
		'quinientos ',
		'seiscientos ',
		'setesientos ',
		'ochosientos ',
		'novescientos ',
	];
	const decenas = [
		'',
		'dieci',
		'venti y ',
		'treinta y ',
		'cuarenta y ',
		'cincuenta ',
		'sesentai y ',
		'setenta y ',
		'ochenta y ',
		'noventa y ',
	];
	const unidades = [
		'cero',
		'uno',
		'dos',
		'tres',
		'cuatro',
		'cinco',
		'seis',
		'siete',
		'ocho',
		'nueve',
		'diez',
		'once',
		'doce',
		'trece',
		'catorce',
		'quince',
	];
	console.log(numeroDividido);
	if (numeroDividido.length === 4) {
		unidadesresponse = unidades[numeroDividido[3]];
		decenasresponse = decenas[numeroDividido[2]];
		centenasresponse = centenas[numeroDividido[1]];
		milesimasresponse = milesimas[numeroDividido[0]];
	} else if (numeroDividido.length === 3) {
		unidadesresponse = unidades[numeroDividido[2]];
		decenasresponse = decenas[numeroDividido[1]];
		centenasresponse = centenas[numeroDividido[0]];
	} else if (numeroDividido.length === 2 && n > 15) {
		unidadesresponse = unidades[numeroDividido[1]];
		decenasresponse = decenas[numeroDividido[0]];
	} else if (n > -1 && n < 16) {
		unidadesresponse = unidades[n];
	}
	return `${milesimasresponse}${centenasresponse}${decenasresponse}${unidadesresponse}`;
};

//TODO Retorna la distancia entre dos coordenadas

interface Coordenada {
	x: number;
	y: number;
}
const distanceBetweenPoints = (a: Coordenada, b: Coordenada): number =>
	Math.hypot(a.x - b.x, a.y - b.y);

//TODO Filtra los elementos que sean "geese" de un array

const gooseFilter = (birds: string[]): string[] => {
	const geese = [
		'African',
		'Roman Tufted',
		'Toulouse',
		'Pilgrim',
		'Steinbacher',
	];
	return birds.filter(bird => !geese.includes(bird));
};

//TODO Función que tome los numeros mayores y menores de un array

const min = (list: number[]): number => Math.min(...list);
const max = (list: number[]): number => Math.max(...list);

//TODO Convierte un bool a un string

const booleanToString = (bool: boolean): string => (bool ? 'true' : 'false');

//TODO Cuenta ovejas hasta llegar a cierto numero

const countSheep = function (number: number): string {
	let response = '';
	for (let i = 1; i <= number; i++) {
		response += `${i} sheep...`;
	}
	return response;
};

const countSheepClever = (number: number): string =>
	[...Array(number).keys()].map(el => `${el + 1} sheep...`).join();

//TODO Un ejemplo de como hacer subclases

abstract class Human {}
class Man extends Human {}
class Woman extends Human {}

class God {
	static create() {
		return [new Man(), new Woman()];
	}
}

//TODO Verifica si un array contiene una palabra

const spEng = (sentence: string): boolean =>
	sentence.toLowerCase().includes('english');

const spEng2 = (sentence: string): boolean => /english/i.test(sentence);

//TODO Muestra el siguiente color que muestra un semaforo

const updateLight = (current: string): string =>
	current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green';

//TODO Recibe un array con numeros, establece el maximo y el minimo y devuelve un array
//TODO Con cada uno de los numeros uno a uno dentro de el rango

const pipeFix = (numbers: number[]): number[] => {
	const start = Math.min(...numbers),
		end = Math.max(...numbers);
	let response = [];
	for (let i = start; i <= end; i++) {
		response.push(i);
	}
	return response;
};

//TODO Retorna en forma de string espaciada el input de arrays
const toCsvText = (array: number[][]): string =>
	array.map(el => el.join(',')).join('\n');

console.log(
	toCsvText([
		[0, 1, 2, 3, 45],
		[10, 11, 12, 13, 14],
		[20, 21, 22, 23, 24],
		[30, 31, 32, 33, 34],
	]),
);

//TODO Hace una suma de de los elementos dentro de un intervalo, mientras "n" va creciendo

const sumMul = function (n: number, m: number): number | string {
	if (n > m || m <= 0 || n <= 0) return 'INVALID';
	let response: number = 0;
	for (let i = n; i < m; i += n) {
		response += i;
	}
	return response;
};

//TODO Verifica si dentro de un string se encuentra cierto simbolo

const defineSuitRegularExpresion = function (card: string): string {
	if (/♣/i.test(card)) return 'clubs';
	if (/♠/i.test(card)) return 'spades';
	if (/♦/i.test(card)) return 'diamonds';
	if (/♥/i.test(card)) return 'hearts';
	return 'Not defined';
};

const defineSuitIncludes = function (card: string): string | void {
	if (card.includes('♥')) return 'hearts';
	if (card.includes('♦')) return 'diamonds';
	if (card.includes('♣')) return 'clubs';
	if (card.includes('♠')) return 'spades';
};

const defineSuitObject = function (card: string): string | void {
	return {
		'♣': 'clubs',
		'♦': 'diamonds',
		'♥': 'hearts',
		'♠': 'spades',
	}[card.substr(-1)];
};

//TODO Retorna el tipo de la suma de dos parametros

type TypeOfSumInput = number | string | boolean | null | undefined;
// const typeOfSum = (a: TypeOfSumInput, b: TypeOfSumInput): any => typeof(a + b)

//TODO Remplaza los elementos que pueden ser maliciosos por codigo seguro

const htmlspecialchars = (formData: string): string =>
	formData
		.replace(/&/g, '&amp;')
		.replace(/"/g, '&quot;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');

//TODO Formas de saber si un parametro es Nan

const isReallyNan = (value: any): boolean =>
	typeof value === 'number' ? true : false;

const isReallyNaN = (val: any): boolean => val != val;

// describe("Tests", () => {
//   it("test", () => {
// Test.expect(isReallyNaN(37) === false)
// Test.expect(isReallyNaN('37') === false)
// Test.expect(isReallyNaN(NaN) === true)
// Test.expect(isReallyNaN(undefined) === false)
//   });
// });

//TODO Recibe un array de numeros y retorna un array y strings de los numeros que coincidan con el código ascii

//? Funcional
const isVow = (input: number[]): (number | string)[] =>
	input.map((element: number) => {
		let char: string = String.fromCharCode(element);
		const hashIf: { [key: string]: any } = {
			a: 'a',
			e: 'e',
			i: 'i',
			o: 'o',
			u: 'u',
		};
		return hashIf[char] || element;
	});
//?Imperativa
const IsVow = function (input: number[]): (string | number)[] {
	const response: (string | number)[] = [];
	for (var i = 0, l = input.length; i < l; ++i) {
		var char = String.fromCharCode(input[i]);
		'aeiou'.indexOf(char) !== -1
			? (response[i] = char)
			: (response[i] = input[i]);
	}
	return response;
};

//TODO Remplaza todas las 'T' de un string por una 'U'

const DNAtoRNA = (input: string): string =>
	input
		.split('')
		.map(letter => (letter === 'T' ? 'U' : letter))
		.join('');

const DNAtoRNAClever = (input: string): string => input.replace(/T/g, 'U');

//TODO Retorna un string de 0 y 1 consecutivos del cual su tamaño depende de el input

const stringy = (size: number): string =>
	[...Array(size)].map((_, index) => (index % 2 === 0 ? 1 : 0)).join('');

const stringyClever = (size: number): string =>
	'10'.repeat(size).slice(0, size);

//TODO Verifica si la primera y ultima letra de dos strings son iguales

const feast = (beast: string, dish: string): boolean =>
	beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];

//TODO Recibe dos arrays los equipos con sus resultados, y retorna una frase que
//TODO Felicite al ganador de la partida

const uefaEuro2016 = function (
	teams: Array<string>,
	scores: Array<number>,
): string {
	let winner: string = '';
	if (scores[0] > scores[1]) winner = `${teams[0]} won!`;
	else if (scores[0] < scores[1]) winner = `${teams[1]} won!`;
	else if (scores[0] == scores[1]) winner = 'teams played draw.';
	return `At match ${teams[0]} - ${teams[1]}, ${winner}`;
};

//TODO Recibe un string pero solo puedes devolver los 2 primeros caracteres
//TODO Si recibes un input igual o menor a 2 devuelves el input

const whoIsPaying = function (input: string): Array<string> {
	if (input.length === 2) return [`${input[0]}${input[1]}`];
	if (input.length === 1) return [`${input[0]}`];
	if (input.length === 0) return [''];

	let response = '';
	for (let i = 0; i < 2; i++) {
		response = response + input[i];
	}

	return [input, response];
};

const WhoIsPlaying = function (input: string): Array<string> {
	if (input.length >= 2) return [input];
	return [input, input.slice(0, 2)];
};

//TODO Retorna un objeto que incluye el conteo de cuantas letras se repite en un string
// Cuenta la cantidad de veces que hay una letra

const charFreq = function (input: string): { key: number } | {} {
	let response: any = {};
	for (const letter of input) {
		response[letter] ? response[letter]++ : (response[letter] = 1);
	}
	return response;
};

//TODO Recibe un nombre en un array y unelo

const sayHello = (name: Array<string>, city: string, state: string): string =>
	`Hello ${name.join('')}! Welcome to ${city}, ${state}!`;

//TODO Repite un string una determinada cantidad de veces

const repeatIt = function (str: any, num: number): string {
	if (typeof str != 'string') return 'Not a string';
	let response = '';
	for (let i = 0; i < num; i++) {
		response = response + str;
	}
	return response;
};

const RepeatIt = (str: string | any, num: number): string =>
	typeof str == 'string' ? str.repeat(num) : 'Not a string';

//TODO remplaza todos los caracteres dentro de un string

const contamination = (text: string, char: string): string =>
	text.replace(/./g, char);

//TODO regular expresion verifica si unos numeros empiezan con los numeros 1 2 o 3

const validateCode = (input: string): boolean =>
	/^1/.test(input) || /^2/.test(input) || /^3/.test(input);

const ValidateCode = (input: string): boolean => /^[123]/.test(input);

//TODO Compara 2 numeros sin importar si son tipo string o tipo number

const add = (number1: number | string, number2: number | string): boolean =>
	+number1 == +number2;

//TODO destructuracion en parametros recibe varios strings y concatenalos en una frase
const buildString = (...template: Array<string>): string =>
	`I like ${template.join(',')}`;

//TODO elimina cierta parte de un input

const shortenToDate = (input: string): string =>
	input.split(' ').slice(0, 3).join(' ').replace(/,/g, '');

const ShortenToDate = (input: string): string => input.split(',')[0];

//TODO Recibe dos nombres y de acuerdo a sus iniciales retorna un nuevo nickname
// Regex filtrar numeros hash

const aliasGen = function (name: string, surname: string): string {
	//?The first way to filter the elements with the number this works better
	if (
		'0123456789'.indexOf(name[0]) != -1 ||
		'0123456789'.indexOf(surname[0]) != -1
	)
		return 'Your name must start with a letter from A - Z.';
	//?The second way to filter the names using regex and checking the letters
	if (!/^[a-z]/i.test(name) && !/^[a-z]/i.test(surname))
		return 'Your name must start with a letter from A - Z.';

	const formattedName: string = name[0].toUpperCase(),
		formattedSurname: string = surname[0].toUpperCase(),
		firstName: { [key: string]: any } = {
			A: 'Alpha',
			B: 'Beta',
			C: 'Cache',
			D: 'Deus',
			etc: 'This array continues with all the names',
		},
		surName: { [key: string]: any } = {
			A: 'Analogue',
			B: 'Bomb',
			C: 'Catalyst',
			etc: 'This array continues with all the names',
		};
	return `${firstName[formattedName]} ${surName[formattedSurname]}`;
};

//TODO recibe una moneda y retorna un string con el cambio mostrando todas las unidades de cambio
//Switch array fill

const changeMe = function (moneyInput: string): string {
	switch (moneyInput) {
		case '£5':
			return [...Array(25).fill('20p')].join(' ');
		case '£2':
			return [...Array(10).fill('20p')].join(' ');
		case '£1':
			return [...Array(5).fill('20p')].join(' ');
		case '50p':
			return '20p 20p 10p';
		case '20p':
			return '10p 10p';
		default:
			return moneyInput;
	}
};

// Alternate if index indexof
const ChageMe = function (moneyInput: string): string {
	const acceptedInput = ['£5', '£2', '£1', '50p', '20p'],
		responses = [
			[...Array(25).fill('20p')].join(' '),
			[...Array(10).fill('20p')].join(' '),
			[...Array(5).fill('20p')].join(' '),
			'20p 20p 10p',
			'10p 10p',
		],
		indexOfInput = acceptedInput.indexOf(moneyInput);
	if (indexOfInput == -1) return moneyInput;
	else return responses[indexOfInput];
};

//TODO filtra la cantidad de palabras dentro de un string y hace un trim
// split words and count
const countWords = (input: string): number =>
	input.split(/\s+/).filter(e => e).length;

//TODO Elimina el primer y ultimo elemento de un string
//pop shift string
const arrayFilterLastAndFirst = function (input: string): string | null {
	if (input.split(',').length <= 2) return null;
	const array = input.split(',').filter(e => e);
	array.pop();
	array.shift();
	return array.join(' ');
};
//Slice instead pop shift
const ArrayFilterLastAndFirst = (input: string): string | null =>
	input.split(',').slice(1, -1).join(' ') || null;

//TODO cuenta la cantidad de letras minusculas que tiene un string

const lowercaseCount = (input: string): number =>
	(input.match(/[a-z]/g) || []).length;

const LowercaseCount = (input: string): number =>
	input.replace(/[^a-z]/g, '').length;

const imperativeLowerCaseCount = function (input: string): number {
	let response = 0;
	const letterArray = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];
	for (let i = 0; i < input.length; i++) {
		let currentCharacter = input[i];
		if (letterArray.indexOf(currentCharacter) > -1) response++;
	}
	return response;
};

//TODO llena un array con las potencias de el numero 2
//Llenar array alternativa

const powersOfTwo = (input: number): Array<number> =>
	Array.from({ length: input + 1 }, (_, k) => 2 ** k);

//TODO retorna booleano si ambos numeros son distintos (par || impar)

const lovefunc2 = (flower1: number, flower2: number): boolean =>
	(flower1 % 2 === 0 && flower2 % 2 === 1) ||
	(flower1 % 2 === 1 && flower1 % 2 === 0)
		? true
		: false;

const lovefunc = (flower1: number, flower2: number): boolean =>
	flower1 % 2 !== flower2 % 2;

const loveFunc = (flower1: number, flower2: number): boolean =>
	(flower1 + flower2) % 2 === 1;

//TODO retorna el promedio de un array
// Average reduce array<number>

const find_average = (input: Array<number>): number =>
	input.reduce((accumulator, currentValue) => accumulator + currentValue) /
	input.length;

//TODO si el numero es menor a 6 retorna el input, si no retorna el numero menos 6
// Restas

const sixToast = (input: number): number => (input < 6 ? input : input - 6);

const SixToast = (input: number): number => Math.abs(input - 6);

//TODO retorna una frase dependiendo de los años introducidos

const calculateAge = function (year1: number, year2: number): string {
	if (year1 === year2) return 'You were born this very year!';
	if (year1 - year2 === 1) return `You will be born in ${year1 - year2} year`;
	if (year2 - year1 === 1) return `You are ${year2 - year1} year old.`;
	if (year1 > year2) return `You will be born in ${year1 - year2} years`;
	else return `You are ${year2 - year1} years old.`;
};

const CalculateAge = function (year1: number, year2: number): string {
	if (year1 === year2) return 'You were born this very year!';
	const year = Math.abs(year1 - year2) == 1 ? 'year' : 'years';
	if (year1 > year2) return `You will be born in ${year1 - year2} ${year}`;
	else return `You are ${year2 - year1} ${year}  old.`;
};

//TODO Duplica todas las letras dentro de un string

const doubleChar = (input: string): string =>
	input
		.split('')
		.map(letter => letter + letter)
		.join('');

const DoubleChar = (input: string): string => input.replace(/(.)/g, '$1$1');

//TODO Calcula una oferta 3 por uno
//Matematicas 3x1 tres por uno

const mango = (quantity: number, price: number): number =>
	price * (quantity - Math.floor(quantity / 3));

//TODO Calcula la edad perro y edad gato

const humanYearsCatYearsDogYears = function (
	humanYears: number,
): Array<number> {
	const CatYears =
		humanYears === 1 ? 15 : humanYears === 2 ? 24 : 24 + (humanYears - 2) * 4;
	const DogYears =
		humanYears === 1 ? 15 : humanYears === 2 ? 24 : 24 + (humanYears - 2) * 5;

	return [humanYears, CatYears, DogYears];
};

//TODO Retorna la suma de el tamaño de un array con los numeros positivos, y la suma de los negativos

const countPositivesSumNegatives = function (
	input: Array<number>,
): Array<number> {
	if (input.length == 0 || !input) return [];
	let negativeSum = 0;
	let positiveArray: Array<number> = [];

	for (let i = 0; i < input.length; i++) {
		if (input[i] < 0) negativeSum = negativeSum + input[i];
		if (input[i] > 0) positiveArray.push(input[i]);
	}

	return [positiveArray.length, negativeSum];
};

const CountPositivesSumNegatives = (input: Array<number>): Array<number> =>
	input && input.length
		? [
				input.filter(number => number > 0).length,
				input
					.filter(number => number < 0)
					.reduce((accumulator, currentValue) => accumulator + currentValue),
		  ]
		: [];

//TODO Sortea un array
//Array sort

const mergeArrays = (
	array1: Array<number>,
	array2: Array<number>,
): Array<number> =>
	Array.from(new Set(array1.concat(array2).sort((a, b) => a - b)));

const MergeArrays = (
	array1: Array<number>,
	array2: Array<number>,
): Array<number> => [...new Set(array1.concat(array2).sort((a, b) => a - b))];

//TODO Verifica si un string termina con determinados caracteres
//String regex ending

const solutionRegex = (str: string, ending: string): boolean =>
	new RegExp(ending + '$', 'i').test(str);

const SolutionRegex = (str: string, ending: string): boolean =>
	str.endsWith(ending);

const SolutionRegexImperative = (str: string, ending: string): boolean =>
	str.substr(str.length - ending.length, ending.length) == ending;

//TODO Retorna las palabras solo si estas empiezan igual a como termina la palabra anterior

const shiritori = function (words: Array<string>): Array<string> {
	const response: Array<string> = [];
	for (const word of words) {
		if (
			!word.length ||
			(response.length && word[0] !== response[response.length - 1].slice(-1))
		)
			break;
		response.push(word);
	}
	return response;
};

//TODO Suma numeros de indice par y multiplicalos por el último elemento de el array

const evenLast = function (input: Array<number>): number {
	if (input.length === 0) return 0;
	let sum = 0;
	for (let i = 0; i < input.length; i++) {
		if (i % 2 === 0) sum += input[i];
	}
	return input[input.length - 1] * sum;
};

const EvenLast = function (input: Array<number>): number {
	if (input.length === 0) return 0;
	return (
		input[input.length - 1] *
		input.reduce((accumulator, current, index) => {
			if (index % 2 === 0) return accumulator + current;
			else return accumulator;
		})
	);
};

//TODO recibe un array con coordenadas a eliminar y ejecutalas una a una

const lastSurvivor = function (letters: string, coords: Array<number>): string {
	const response = [...letters];
	for (const number of coords) {
		response.splice(number, 1);
	}
	return response.join('');
};

//TODO verifica si un array tiene todos los numeros menores a un limite

const smallEnough = function (
	numberList: Array<number>,
	limit: number,
): boolean {
	for (const number of numberList) {
		if (number > limit) return false;
	}
	return true;
};

const SmallEnough = (numberList: Array<number>, limit: number): boolean =>
	Math.max(...numberList) <= limit;

const SmallEnough2 = (numberList: Array<number>, limit: number): boolean =>
	numberList.every(number => number <= limit);

//TODO idea sobre un schwitch

const profi = function (input: number): string {
	switch (input % 4) {
		case 0:
			return '1';
		case 1:
			return 'i';
		case 2:
			return '-1';
		default:
			return '-i';
	}
};
//Clever
const pofi = (input: number): string => ['1', 'i', '-1', '-i'][input % 4];

//TODO verifica si en una lista todos los miembros tienen el mismo lenguaje

type MeetingUserData = {
	firstName: string;
	lastName: string;
	country: string;
	continent: string;
	age: number;
	language: string;
	githubAdmin?: string;
	meal?: string;
	greeting?: string;
};

const isSameLanguage = (listOfMembers: Array<MeetingUserData>): boolean =>
	listOfMembers.every(member => member.language === listOfMembers[0].language);

const isLanguageAdmin = (
	listOfMembers: Array<MeetingUserData>,
	language: string,
): Array<MeetingUserData> =>
	listOfMembers.filter(
		member => member.language === language && member.githubAdmin === 'yes',
	);

//TODO Retorna un objeto que cuente la cantidad de comidas que tiene una lista

const orderFood = (userList: Array<MeetingUserData>): { key: string } => {
	let response: any = {};
	for (const user of userList) {
		response[user.meal] ? response[user.meal]++ : (response[user.meal] = 1);
	}
	return response;
};

//TODO Retorna una interpolación dependiendo el tamaño de los strings
const shorter_reverse_longer = function (a: string, b: string): string {
	let short, long;
	if (a.length > b.length) {
		long = a;
		short = b;
	} else {
		long = b;
		short = a;
	}
	return `${short}${long.split('').reverse().join('')}${short}`;
};
//Invierte los valores
const Shorter_reverse_longer = function (a: string, b: string): string {
	if (a.length >= b.length) [a, b] = [b, a];
	return `${a}${b.split('').reverse().join('')}${a}`;
};

//TODO Retorna cuantas letras encajan sus posiciones respecto de el alfabeto

const solve = function (input: Array<string>): Array<number> {
	const letterPosition: string = 'abcdefghijklmnopqrstuvwxyz';
	let response: Array<number> = [];
	for (const word of input) {
		let sumOfLetters = 0;
		for (let i = 0; i < word.length; i++) {
			if (word[i].toLocaleLowerCase() === letterPosition[i]) sumOfLetters++;
		}
		response.push(sumOfLetters);
	}
	return response;
};

let Solve = function (input: Array<string>): Array<number> {
	const alphabeth = 'abcdefghijklmnopqrstuvwxyz';
	return input.map(
		word =>
			word
				.toLowerCase()
				.split('')
				.filter((y, i) => i == alphabeth.indexOf(y)).length,
	);
};

//TODO Recibe un string que con palabras describe la operacion a hacer y su numero

const calculate = (input: string): string =>
	eval(input.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString();

const Calculate = function (str: string): string {
	const numbers = str.split(/plus|minus/);
	const operations = str.match(/[a-z]+/g);
	let sum = parseInt(numbers[0]);
	for (let i = 0, len = operations.length; i < len; i++) {
		switch (operations[i]) {
			case 'plus':
				sum += parseInt(numbers[i + 1]);
				break;
			case 'minus':
				sum -= parseInt(numbers[i + 1]);
				break;
		}
	}
	return sum + '';
};

//TODO retorna el minimo y maximo dentro de un array

const highAndLow = function (numbers: string): string {
	const minimum = Math.min(...numbers.split(' ').map(number => Number(number)));
	const maximum = Math.max(...numbers.split(' ').map(number => Number(number)));
	return `${maximum} ${minimum}`;
};
//Cada vez que se repita algo tienes que reducirlo

const HighAndLow = function (numbers: string): string {
	const numbersArray = numbers.split(' ').map(Number);
	return `${Math.min(...numbersArray)} ${Math.max(...numbersArray)}`;
};

//TODO cuenta la cantidad de vocales dentro de un string

const getCount = function (input: string): number {
	let response = 0;
	for (const letter of input.split('')) {
		if (/[aeiou]/.test(letter)) {
			response++;
		}
	}
	return response;
};

//TODO Genera un string de una flor recibe su tamaño y repite varios strings
//repeat fill string

const plant = function (
	seed: string,
	water: number,
	fert: number,
	temp: number,
): string {
	const wood = [...Array(water)].fill('-').join('');
	if (temp > 30 || temp < 20)
		return [...Array(water)].fill(wood).join('') + seed;
	const flower = [...Array(fert)].fill(seed).join('');
	return [...Array(water)].fill(wood + flower).join('');
};

const Plant = function (
	seed: string,
	water: number,
	fert: number,
	temp: number,
): string {
	const stem = '-'.repeat(water),
		flower = seed.repeat(fert);
	return temp < 20 || temp > 30
		? stem.repeat(water) + seed
		: (stem + flower).repeat(water);
};

//TODO Retorna un texto dependiendo un array de numeros numeros que recibas

const switcher = function (input: Array<string> /*<number> */): string {
	const letterValue: any = {
		'1': 'z',
		'2': 'y',
		'3': 'x',
		'4': 'w',
		'5': 'v',
		'6': 'u',
		'7': 't',
		'8': 's',
		'9': 'r',
		'10': 'q',
		'11': 'p',
		'12': 'o',
		'13': 'n',
		'14': 'm',
		'15': 'l',
		'16': 'k',
		'17': 'j',
		'18': 'i',
		'19': 'h',
		'20': 'g',
		'21': 'f',
		'22': 'e',
		'23': 'd',
		'24': 'c',
		'25': 'b',
		'26': 'a',
		'27': '!',
		'28': '?',
		'29': ' ',
	};
	return [...Array(input.length)]
		.map((_, index) => input[index])
		.map(number => letterValue[number])
		.join('');
};

const Switcher = function (input: Array<string>): string {
	const lettersPosition: string = ' zyxwvutsrqponmlkjihgfedcba!? ';
	return input.map(element => lettersPosition[Number(element)]).join('');
};

//TODO agrega una caracteristica a un objeto

const greetDevelopers = function (
	usersList: Array<MeetingUserData>,
): Array<MeetingUserData> {
	usersList.map(
		developer =>
			(developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`),
	);
	return usersList;
};

//TODO Retorna un numero formateado con 5 ceros

const solution = function (input: number): string {
	switch (input.toString().length) {
		case 1:
			return `Value is 0000${input}`;
		case 2:
			return `Value is 000${input}`;
		case 3:
			return `Value is 00${input}`;
		case 4:
			return `Value is 0${input}`;
		default:
			return `Value is ${input}`;
	}
};

const formattingNumbers = function (input: number): string {
	return 'Value is ' + ('00000' + input).slice(-5);
};

//TODO Llena un array con ceros dependiendo el tamaño de un segundo string

const flyBy = (lamps: string, drone: string): string =>
	lamps
		.split('')
		.map((_, index) => (index < drone.length ? 'o' : 'x'))
		.join('');

const FlyBy = (lamps, drone) => [...lamps].fill(`o`, 0, drone.length).join(``);

//TODO Verifica si en una palabra no se repiten las letras

const isIsogram = function (input: string): boolean {
	let counter: any = {};
	let response = true;
	for (const letter of input) {
		if (counter[letter.toLocaleLowerCase()]) {
			response = false;
			break;
		} else {
			counter[letter.toLocaleLowerCase()] = 1;
		}
	}
	return response;
};

const isIsogramRegex = (input: string): boolean => !/(\w).*\1/i.test(input);

const IsIsogram = (input: string): boolean =>
	new Set(input.toUpperCase()).size == input.length;

//TODO si el input tiene más de 3 puntos entre los dos elementos retorna respuesta

const catMouse = (input: string): string =>
	input.replace(/[Cm]/g, '').length < 3 ? 'Escaped!' : 'Caught!';

const CatMouse = (input: string): string =>
	input.length <= 5 ? 'Escaped!' : 'Caught!';

//TODO Remplaza todos los numeros con "#" menos los ultimos 4

const maskify = (input: string): string =>
	input
		.split('')
		.map((element, index) => (index < input.length - 4 ? '#' : element))
		.join('');

const Maskify = (input: string): string =>
	input.slice(0, -4).replace(/./g, '#') + input.slice(-4);

const MaskifyRegex = (input: string): string =>
	input.replace(/.(?=.{4})/g, '#');

//TODO convierte un input de array en letras formadas por puntos

const tapCodeTranslation = function (input: string): string {
	const dictionary: any = {
		a: '. . ',
		b: '. .. ',
		c: '. ... ',
		d: '. .... ',
		e: '. ..... ',
		f: '.. . ',
		g: '.. .. ',
		h: '.. ... ',
		i: '.. .... ',
		j: '.. ..... ',
		k: '. ... ',
		l: '... . ',
		m: '... .. ',
		n: '... ... ',
		o: '... .... ',
		p: '... ..... ',
		q: '.... . ',
		r: '.... .. ',
		s: '.... ... ',
		t: '.... .... ',
		u: '.... ..... ',
		v: '..... . ',
		w: '..... .. ',
		x: '..... ... ',
		y: '..... .... ',
		z: '..... ..... ',
	};
	let response: string = '';
	for (const letter of input) {
		response = response + dictionary[letter];
	}
	return response.slice(0, -1);
};

const TapCodeTranslation = function (input: string): string {
	let dictionary = {
		a: '. .',
		b: '. ..',
		c: '. ...',
		k: '. ...',
		d: '. ....',
		e: '. .....',
		f: '.. .',
		g: '.. ..',
		h: '.. ...',
		i: '.. ....',
		j: '.. .....',
		l: '... .',
		m: '... ..',
		n: '... ...',
		o: '... ....',
		p: '... .....',
		q: '.... .',
		r: '.... ..',
		s: '.... ...',
		t: '.... ....',
		u: '.... .....',
		v: '..... .',
		w: '..... ..',
		x: '..... ...',
		y: '..... ....',
		z: '..... .....',
	};
	return input
		.split('')
		.map(letter => dictionary[letter])
		.join(' ');
};

//TODO remplaza letras por otras

const DNAStrand = (input: string): string =>
	input
		.split('')
		.map(letter => {
			if (letter === 'A') return 'T';
			if (letter === 'T') return 'A';
			if (letter === 'G') return 'C';
			if (letter === 'C') return 'G';
		})
		.join('');

//? Constante usada por las dos funciones abajo
const pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };

const DNAStrand2 = (parameter: string): string =>
	parameter
		.split('')
		.map(letter => pairs[letter])
		.join('');

const DNAStrandRegex = (input: string): string =>
	input.replace(/./g, letter => pairs[letter]);

//TODO Verifica si dos flechas se saludan dentro de un string "->--<--<->->"

const countSalutes = function (hallway: string): number {
	let right = 0;
	let salutes = 0;
	for (const element of hallway) {
		if (element === '>') right += 1;
		else if (element === '<') salutes += 2 * right;
	}
	return salutes;
};

const CountSalutesImperative = function (hallway: string): number {
	hallway.replace(/-/g, '');
	let response = 0;
	for (let i = 0; i < hallway.length; i++) {
		if (hallway[i] === '>') {
			for (let j = i + 1; j < hallway.length; j++) {
				if (hallway[i] == '<') response += 2;
			}
		}
	}
	return response;
};

const CountSalutes = (hallway: string) =>
	2 *
	[...hallway].reduce(
		(accumulator, curr, indx, arr) =>
			accumulator +
			(curr === '>' ? arr.slice(indx).filter(curr => curr === '<').length : 0),
		0,
	);

//TODO Cuenta la cantidad de circulos que tiene cada letra y retorna el premio

const olympicRing = function (parameter: string): string {
	const output = [...parameter]
		.map(element =>
			'qeopadgbQROPAD'.includes(element) ? 1 : element === 'B' ? 2 : 0,
		)
		.reduce((acc: number, curr: number) => acc + curr, 0);
	return (
		['Not even a medal!', 'Not even a medal!', 'Bronze!', 'Silver!'][output] ||
		'Gold!'
	);
};

//TODO Remplaza ciertas partes de un string y lo retorna capitalizado

const gordon = function (parameter: string): string {
	const dictionary: any = {
		a: '@',
		e: '*',
		i: '*',
		o: '*',
		u: '*',
	};
	return [...parameter]
		.map(
			letter =>
				dictionary[letter.toLocaleLowerCase()] || letter.toLocaleUpperCase(),
		)
		.join('')
		.split(' ')
		.map(word => word + '!!!!')
		.join(' ');
};

const gordonRegex = (parameter: string): string =>
	parameter
		.toUpperCase()
		.replace(/w+/g, '$&!!!!')
		.replace(/[AEIOU]/g, vowel => (vowel === 'A' ? '@' : '*'));

//TODO Mueve las letras 10 niveles arriba de su posicion en el alfabeto

const moveTen = function (parameter: string): string {
	const dictionary: any = {
		a: 'k',
		b: 'l',
		c: 'm',
		d: 'n',
		e: 'o',
		f: 'p',
		g: 'q',
		h: 'r',
		i: 's',
		j: 't',
		k: 'u',
		l: 'v',
		m: 'w',
		n: 'x',
		o: 'y',
		p: 'z',
		q: 'a',
		r: 'b',
		s: 'c',
		t: 'd',
		u: 'e',
		v: 'f',
		w: 'g',
		x: 'h',
		y: 'i',
		z: 'j',
	};
	return parameter.replace(/./g, letter => dictionary[letter]);
};

const MoveTen = function (parameter: string): string {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz',
		response = 'klmnopqrstuvwxyzabcdefghij';
	return parameter.replace(
		/[a-z]/g,
		letter => response[alphabet.indexOf(letter)],
	);
};

//TODO Verifica que todas las letras dentro de un string no se repitan

let hasUniqueChars = (parameter: string): boolean =>
	new Set(parameter).size === parameter.length;

let HasUniqueChars = (parameter: string): boolean => !/(.).*\1/.test(parameter);

//TODO Retorna un objeto que cuente cuantas veces se repite un lenguaje en otro objeto

const countLanguages = (list: Array<MeetingUserData>) =>
	list.reduce((responseObject: any, curr: MeetingUserData) => {
		curr.language in responseObject
			? responseObject[curr.language]++
			: (responseObject[curr.language] = 1);
		return responseObject;
	}, {});

const CountLanguages = function (list: Array<MeetingUserData>) {
	let response = {};
	list.forEach(
		member =>
			(response[member.language] = (response[member.language] || 0) + 1),
	);
	return response;
};

//TODO Verifica si almenos un miembro usa ruby

const isRubyComing = (list: Array<MeetingUserData>) =>
	list.filter(member => member.language === 'Ruby').length > 0;

const IsRubyComing = (list: Array<MeetingUserData>) =>
	list.some(member => (member.language = 'Ruby'));

//TODO Ordena una lista con inputs tipo '100G' '200T' '1kg' etc

const arrange = function (parameter: Array<string>): Array<string> {
	const sorted = (word: string) => {
		if (word.replace(/[0-9]/gi, '') === 'KG')
			return Number(word.slice(0, -2)) * 1;
		else if (word.replace(/[0-9]/gi, '') === 'T')
			return Number(word.slice(0, -2)) * 1000;
		else return Number(word.slice(0, -1)) * 0.001;
	};
	return parameter.sort((a, b) => sorted(a) - sorted(b));
};

//TODO Cuenta cuantas palabras estan compuestas exclusivamente de unas letras ademas de no repetirse

const shifter = function (parameter: string): number {
	if (!parameter) return 0;
	let response = 0;
	let register: any = {};
	const filteredWords = parameter.split(' ').filter(word => {
		if (word in register) {
			return false;
		} else {
			register[word] = true;
			return true;
		}
	});
	for (const word of filteredWords) {
		const filteredWord = word.replace(/[HINOSXZMW]/gi, '');
		if (filteredWord.length === 0) response++;
	}
	return response;
};

const Shifter = (parameter: string): number =>
	new Set(parameter.match(/\b[HINOSXZMW]+\b/g)).size;

//TODO Cuenta elementos en un array y retorna respuesta dependiendo el conteo

const crap = function (
	arrayParameter: Array<Array<string>>,
	bags: number,
	cap: number,
) {
	let shit = 0,
		dog = false;
	for (const item of arrayParameter) {
		for (const subitem of item) {
			if (subitem === '@') shit++;
			if (subitem === 'D') {
				dog = true;
				break;
			}
		}
	}
	if (dog) return 'Dog!!';
	return shit > bags * cap ? 'Cr@p' : 'Clean';
};

const Crap = (
	arrayParameter: Array<Array<string>>,
	bags: number,
	cap: number,
) =>
	(arrayParameter + '').includes('D')
		? 'Dog!!'
		: (arrayParameter + '').split('@').length - 1 <= bags * cap
		? 'Clean'
		: 'Cr@p';

const CrapAlternative = function (
	arrayParameter: Array<Array<string>>,
	bags: number,
	cap: number,
) {
	const yard = arrayParameter.reduce((acc, curr) => acc.concat(curr));
	return yard.includes('D')
		? 'Dog!!'
		: yard.filter(element => element === '@').length <= bags * cap
		? 'Clean'
		: 'Cr@p';
};

//TODO Ordena las palabras alfabeticamente por su letra final

const last = (parameter: string): Array<string> =>
	parameter
		.split(' ')
		.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));

const Last = (words: string): Array<string> =>
	words.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));

//TODO Remplaza las primeras letras de dos palabras "node_modules" -> "mode_nodules"

const spoonerize = function (parameter: string): string {
	const words = parameter.split(' ');
	return [
		words[1][0] + words[0].slice(1),
		words[0][0] + words[1].slice(1),
	].join(' ');
};

const spoonerizeRegex = (parameter: string): string =>
	parameter.replace(/^(.)(.* )(.)(.*)$/, '$3$2$1$4');

//TODO Remplaza las vocales por su posicion dentro de el string

const vowel2index = (parameter: string): string =>
	[...parameter]
		.map((letter, index) =>
			letter.match(/[aeiou]/gi) ? `${index + 1}` : letter,
		)
		.join('');

const Vowel2index = (parameter: string): string =>
	parameter.replace(/[aeiou]/gi, (_, i) => i + 1)