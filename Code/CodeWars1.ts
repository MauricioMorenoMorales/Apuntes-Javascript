//! Condiverte numeros a estring los suma y los devuelve como string

const sumStr = (a: string, b: string): string =>
	String(Number(a === '' ? '0' : a) + Number(b === '' ? '0' : b))

function sumStrClever(a: string, b: string): string {
	return +a + +b + ''
}

// sumSTr('9', '') -> 0
// sumSTr('10', '10') -> 20

//!Recibe un string y en base a lo que se le pase retorna otro string

const drinks = {
	jabroni: 'Patron Tequila',
	'school counselor': 'Anything with Alcohol',
	programmer: 'Hipster Craft Beer',
	'bike gang member': 'Moonshine',
	politician: 'Your tax dollars',
	rapper: 'Cristal',
}

export function getDrinkByProfession(profession: string): string {
	return drinks[profession.toLowerCase()] || 'Beer'
}

//! misma funcion de arriba pero formatea un imput y capitaliza cada palabra seguida despues de un espacio

const getDrinkByProfessionWithoutLowerCase = (profession: string) => {
	let FormatedInput = profession
		.split(' ')
		.map(e =>
			e
				.split('')
				.map((e, p) => (p === 0 ? e.toUpperCase() : e.toLocaleLowerCase()))
				.join(''),
		)
		.join(' ')
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
		: 'Beer'
}

//capitalizeFormatter('bike gang member') -> 'Bike Gang Member'

//! Calcula el volumen de el liquido dentro un vaso medio lleno

const iceBrickVolume = (
	radius: number,
	bottleLength: number,
	rimLength: number,
): number => radius * radius * (bottleLength - rimLength) * 2

//! Convierte un numero en binario

export let toBinary = (n: number): number => +n.toString(2)

export const toBinary2 = (n: number) => parseInt((n >>> 0).toString(2))

//! Formatea un imput a moneda

export let formatMoney = (amount: number): string => `$${amount.toFixed(2)}`

//formatMoney(3.1) -> 3.10

//! Escapa de un tiburon, llega a el potoon para salvarte

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
		: 'Shark Bait!'

//! Accede a una posicion n dentro de un array y luego exponencia el resultado a la n potencia

export const index = (array: number[], n: number): number => array[n] ** n || -1

//! Encuentra la posición de el lobo y alerta a que obeja va a comerse

export function warnTheSheep(queue: string[]): string {
	const position = queue.reverse().indexOf('wolf')
	return position
		? `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`
		: 'Pls go away and stop eating my sheep'
}

export const warnTheSheep2 = (queue: string[]): string => {
	const position = queue.reverse().findIndex(element => element === 'wolf')
	return position
		? `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`
		: 'Pls go away and stop eating my sheep'
}

//! Recibe un string y retornalo como Float si es se puede convertir correctamente "No es texto"

export function parseF(s: string): number | null {
	return isNaN(parseFloat(s)) ? null : parseFloat(s)
}

//! Retorna true si la suma de los cuadrados de a es mayor a la suma de los cubos de b

export const arrayMadness = (a: number[], b: number[]): boolean =>
	a.map(e => e ** 2).reduce((previous, current) => previous + current) >
	b.map(e => e ** 3).reduce((previous, current) => previous + current)

export function arrayMadnessClever(a: number[], b: number[]): boolean {
	return (
		a.reduce((sum, el) => sum + el ** 2, 0) >
		b.reduce((sum, el) => sum + el ** 3, 0)
	)
}

//! Calcula el tamaño de una caja

const getSize = (w: number, h: number, d: number): number[] => [
	(w * h + w * d + h * d) * 2,
	w * h * d,
]

//! Imprime la canción 99 cervezas

const beer = () => {
	let response = []
	for (let i = 99; i > 1; i--) {
		if (i === 2) {
			response.push(`
2 botellas de cerveza en la pared, 2 botellas de cerveza.
Toma uno abajo, pasa a tu alrededor, 1 botella de cerveza en la pared...
1 botella de cerveza en la pared,  botellas de cerveza.
No más botellas de cerveza en la pared, no más botellas de cerveza.
Los hemos bajado y los hemos pasado; Ahora estamos borrachos y nos desmayamos!
			`)
		} else {
			response.push(`
${i} botellas de cerveza en la pared, ${i} botellas de cerveza.
Toma uno abajo, pasa a tu alrededor, ${
				i - 1
			} botellas de cerveza en la pared...`)
		}
	}
	return response.join('\n')
}

console.log(beer())

//! Filtra todos los elementos que sean true

const countSheeps = (sheeps: boolean[]): number => sheeps.filter(Boolean).length

//! Retorna el nth numero natural por ejemplo escribo un 3 => 4, 100 => 198

const nthEven = n => n * 2 - 2

//! Encuentra un elemento dentro de un array

const findNeddle = (haystack: any[]): string =>
	`found the needle at position ${haystack.indexOf('needle')}`

//! COnvierte el input de numero a texto

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
		][n]
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
		][n / 10]
	} else {
		let numeroDividido = String(n).split('')
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
		][numeroDividido[0]]
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
		][numeroDividido[1]]
		return decenas + unidades
	}
}

const devolverLetrasOptimizado = (n: number): string => {
	let numeroDividido = String(n)
		.split('')
		.map(e => Number(e))
	let unidadesresponse = ''
	let decenasresponse = ''
	let centenasresponse = ''
	let milesimasresponse = ''
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
	]
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
	]
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
	]
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
	]
	console.log(numeroDividido)
	if (numeroDividido.length === 4) {
		unidadesresponse = unidades[numeroDividido[3]]
		decenasresponse = decenas[numeroDividido[2]]
		centenasresponse = centenas[numeroDividido[1]]
		milesimasresponse = milesimas[numeroDividido[0]]
	} else if (numeroDividido.length === 3) {
		unidadesresponse = unidades[numeroDividido[2]]
		decenasresponse = decenas[numeroDividido[1]]
		centenasresponse = centenas[numeroDividido[0]]
	} else if (numeroDividido.length === 2 && n > 15) {
		unidadesresponse = unidades[numeroDividido[1]]
		decenasresponse = decenas[numeroDividido[0]]
	} else if (n > -1 && n < 16) {
		unidadesresponse = unidades[n]
	}
	return `${milesimasresponse}${centenasresponse}${decenasresponse}${unidadesresponse}`
}

//! Retorna la distancia entre dos coordenadas

interface Coordenada {
	x: number
	y: number
}
const distanceBetweenPoints = (a: Coordenada, b: Coordenada): number =>
	Math.hypot(a.x - b.x, a.y - b.y)

//! Filtra los elementos que sean "geese" de un array

const gooseFilter = (birds: string[]): string[] => {
	const geese = [
		'African',
		'Roman Tufted',
		'Toulouse',
		'Pilgrim',
		'Steinbacher',
	]
	return birds.filter(bird => !geese.includes(bird))
}

//! Función que tome los numeros mayores y menores de un array

const min = (list: number[]): number => Math.min(...list)
const max = (list: number[]): number => Math.max(...list)

//! Convierte un bool a un string

const booleanToString = (bool: boolean): string => (bool ? 'true' : 'false')

//! Cuenta ovejas hasta llegar a cierto numero

const countSheep = function (number: number): string {
	let response = ''
	for (let i = 1; i <= number; i++) {
		response += `${i} sheep...`
	}
	return response
}

const countSheepClever = (number: number): string =>
	[...Array(number).keys()].map(el => `${el + 1} sheep...`).join()

//! Un ejemplo de como hacer subclases

abstract class Human {}
class Man extends Human {}
class Woman extends Human {}

class God {
	static create() {
		return [new Man(), new Woman()]
	}
}

//! Verifica si un array contiene una palabra

const spEng = (sentence: string): boolean =>
	sentence.toLowerCase().includes('english')

const spEng2 = (sentence: string): boolean => /english/i.test(sentence)

//! Muestra el siguiente color que muestra un semaforo

const updateLight = (current: string): string =>
	current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green'

//! Recibe un array con numeros, establece el maximo y el minimo y devuelve un array
//! Con cada uno de los numeros uno a uno dentro de el rango

const pipeFix = (numbers: number[]): number[] => {
	const start = Math.min(...numbers),
		end = Math.max(...numbers)
	let response = []
	for (let i = start; i <= end; i++) {
		response.push(i)
	}
	return response
}

//! Retorna en forma de string espaciada el input de arrays
const toCsvText = (array: number[][]): string =>
	array.map(el => el.join(',')).join('\n')

console.log(
	toCsvText([
		[0, 1, 2, 3, 45],
		[10, 11, 12, 13, 14],
		[20, 21, 22, 23, 24],
		[30, 31, 32, 33, 34],
	]),
)

//! Hace una suma de de los elementos dentro de un intervalo, mientras "n" va creciendo

const sumMul = function (n: number, m: number): number | string {
	if (n > m || m <= 0 || n <= 0) return 'INVALID'
	let response: number = 0
	for (let i = n; i < m; i += n) {
		response += i
	}
	return response
}

//! Verifica si dentro de un string se encuentra cierto simbolo

const defineSuitRegularExpresion = function (card: string): string {
	if (/♣/i.test(card)) return 'clubs'
	if (/♠/i.test(card)) return 'spades'
	if (/♦/i.test(card)) return 'diamonds'
	if (/♥/i.test(card)) return 'hearts'
	return 'Not defined'
}

const defineSuitIncludes = function (card: string): string | void {
	if (card.includes('♥')) return 'hearts'
	if (card.includes('♦')) return 'diamonds'
	if (card.includes('♣')) return 'clubs'
	if (card.includes('♠')) return 'spades'
}

const defineSuitObject = function (card: string): string | void {
	return {
		'♣': 'clubs',
		'♦': 'diamonds',
		'♥': 'hearts',
		'♠': 'spades',
	}[card.substr(-1)]
}
