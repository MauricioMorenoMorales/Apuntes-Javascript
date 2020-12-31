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

let toBinary = (n: number): number => +n.toString(2)

const toBinary2 = n => parseInt((n >>> 0).toString(2))

//! Formatea un imput a moneda

let formatMoney = (amount: number): string => `$${amount.toFixed(2)}`

//formatMoney(3.1) -> 3.10
