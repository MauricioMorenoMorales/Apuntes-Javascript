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
