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
