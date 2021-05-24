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

const uefaEuro2016 = function (teams: string[], scores: number[]): string {
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
