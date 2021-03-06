//TODORevisa si un numero es divisible entre otros 2

const isDivideBy = (number, a, b) => {
	return number % a === 0 && number % b === 0
}

console.log(isDivideBy(12, 6, 3))
console.log(isDivideBy(12, 5, 3))

//!Llena un array como el ejemplo de abajo
//? arr(5) // [0,1,2,3,4]

llenadordeArrays = n => {
	var newArray = []
	for (let i = 0; i < n; i++) {
		newArray.push(i)
	}
	return newArray
}
console.log(llenadordeArrays(5))

// || Clever
arr = n => (n ? [...Array(n).keys()] : [])
console.log(arr(7))

console.log(...Array(4).keys())

//!Si en un string de numeros el numero es menor a 5 se remplaza con 0, si es mayor se remplaza con 1

function fakebin(x) {
	return x
		.split('')
		.map(n => (n < 5 ? 0 : 1))
		.join('')
}
console.log(fakebin('9389538453'))

//*Alternative

function fakebin(string) {
	let response = ''
	for (let i = 0; i < string.length; i++) {
		if (Number(string[i] >= 5)) {
			response += '1'
		} else {
			response += '0'
		}
	}
	return response
}
console.log(fakebin('0123456789'))

//TODOHacer un saludo con nombre, y con por defecto como mundo

function hello(name = 'World') {
	return `Hello ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}`
}
console.log(hello())
console.log(hello('mauRicio'))

//TODOCalcula la caida de una hoja con una regla de 3

function sakuraFall(v) {
	return (v * 5) / 80
}
console.log(sakuraFall(10))

//TODORetorna el doble de un entero

const doubleInteger = i => i * 2
console.log(doubleInteger(2))

//TODOCalcula litros por hora tomados de ejercicio

const litres = time => Math.floor(time * 0.5)
console.log(litres(11.8))

//TODOSi tu nombre empieza con la letra R entonces tocas el banjo

const areYouPlayingBanjo = name => {
	return (
		name +
		(name[0].toLowerCase() === 'r' ? ' plays' : ' does not play') +
		' banjo'
	)
}

const name = 'Mauricio'

console.log(areYouPlayingBanjo('Mauricio'))

//TODOSi un numero es negativo conviertelo a positivo y a la inversa

const invertArray = array => {
	return array.map(x => (x === 0 ? x : -x))
}
console.log(invertArray([1, 0, -3, 5, -4, 6]))

const invertirArrayCLEVER = array => array.map(x => 0 - x)

//TODOSuma cada numero inferior a el numero dado

const summation = num => {
	let result = 0
	for (var i = 0; i <= num; i++) {
		result += i
	}
	return result
}
console.log(summation(3))

const summationCLEVER = n => (n * (n + 1)) / 2
console.log(summationCLEVER(8))

//TODORetorna el numero más pequeño en un Array

function nextId(ids) {
	var x = 0
	while (ids.includes(x)) x++
	return x
}
console.log(nextId([0, 1, 2, 3, 5, 6, 7, 11]))

function nextId2(ids) {
	const used = new Set(ids)
	for (let i = 0; i <= ids.length; i++) {
		if (!used.has(i)) return i
	}
}

//TODOConvierte velocidad km/h a cm/s redondeados hacia abajo

const cockroachSpeed = s => {
	const SegundosenUnaHora = 3600
	const centimetrosenUnKilometro = 100000
	return Math.floor((s * centimetrosenUnKilometro) / SegundosenUnaHora)
}

//TODO----------------------- Crea un generador de rango

function generateRange(min, max, step) {
	let response = []
	for (let i = min; i <= max; i += step) {
		response.push(i)
	}
	return response
}
console.log(generateRange(2, 10, 2))

//TODOFunción que calcula los milisegundos pasados de media noche

const past = (h = 0, m = 0, s = 0) => (h * 3600 + m * 60 + s) * 1000
console.log(past(1, 1, 3))

//TODOObten la media de un array redondeado hacia abajo

const getAverage = marks => {
	let total = 0
	marks.forEach(element => {
		total += element
	})
	return Math.floor(total / marks.length)
}
console.log(getAverage([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

//TODOHacer una función que retorne Capitalizaciones

const CapitalizeWord = word =>
	word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

const CapitalizeWordClever = word =>
	word[0].toUpperCase() + word.slice(1).toLowerCase()

console.log(CapitalizeWordClever('mauricio'))

//TODOHaz varias funciones que manejen la temperatura

function weatherInfo(temp) {
	var c = convertToCelsius(temp)
	if (c <= 0) return c + ' is freezing temperature'
	else return c + ' is above freezing temperature'
}
function convertToCelsius(temperature) {
	var celsius = (temperature - 32) * (5 / 9)
	return celsius
}
console.log(weatherInfo(100))
console.log(convertToCelsius(100))

//TODOSi los parametros son de un cuadrado retorna el area, si no el perimetro

const areaOrPerimeter = (l, w) => {
	return l === w ? l * w : l * 2 + w * 2
}
const areaOrPerimeterCLEVER = (l, w) => {
	return l === w ? l * w : 2 * (l + w)
}

//TODOHaz una funcion que repita un string determinada cantidad de veces

const repeatStr = (n, s) => {
	let response = ''
	for (let i = 0; i < n; i++) {
		response += s
	}
	return response
}

const repeatStrCLEVER = (n, s) => s.repeat(n)

//TODOHaz una función que retorne un patron CortoLargoCorto de sus parametros

function solution(a, b) {
	//? Para strings
	return a.length < b.length ? a + b + a : b + a + b
}
function ShortLongShort(a, b) {
	//? Para Numeros
	let long = 0
	let short = 0
	if (a < b) {
		short = a
		long = b
	} else {
		short = b
		long = a
	}
	return `${short}${long}${short}`
}

//TODO-----------------------Fake Binary-----------------------

const fakeBin = x =>
	x
		.split('')
		.map(e => (e < 5 ? 0 : 1))
		.join('')

console.log(fakeBin('4938493'))

//TODO-----------------------Verifica las calificaciones-----------------------

const checkExam = (array1, array2) => {
	let calificacion = 0
	for (let i = 0; i < array1.length; i++) {
		array2[i] === ''
			? (calificacion += 0)
			: array1[i] === array2[i]
			? (calificacion += 4)
			: (calificacion -= 1)
	}
	return calificacion < 1 ? 0 : calificacion
}
console.log(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd']))
console.log(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', '']))
console.log(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c']))
console.log(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c']))

//TODO#--------------------Ejercicio de descuentos--------------------

function calculatePercentage(normPrice, discount, holyday) {
	let saving = (normPrice * discount) / 100
	return Math.floor(holyday / saving)
}

const dutyFree = (normPrice, discount, holyday) =>
	//TODOEjercicio cuantos numeros es divisible algo

	function findMultiples(integer, limit) {
		let response = []
		for (let i = integer; i <= limit; i += integer) {
			response.push[i]
		}
		return response
	}
findMultiples(2, 5) // => [5,10,15,20,25]

//TODOFuncion que retorne un saludo en varios idiomas

const greetInManyLanguages = (language = 'english') => {
	let GreetingsDataBase = {
		english: 'Welcome',
		czech: 'Vitejte',
		danish: 'Velkomst',
		dutch: 'Welkom',
		estonian: 'Tere tulemast',
		finnish: 'Tervetuloa',
		flemish: 'Welgekomen',
		french: 'Bienvenue',
		german: 'Willkommen',
		irish: 'Failte',
		italian: 'Benvenuto',
		latvian: 'Gaidits',
		lithuanian: 'Laukiamas',
		polish: 'Witamy',
		spanish: 'Bienvenido',
		swedish: 'Valkommen',
		welsh: 'Croeso',
	}
	return GreetingsDataBase[language] || GreetingsDataBase['english']
}

//TODORetorna el llamado de un planeta

function getPlanetName(id) {
	return {
		1: 'Mercury',
		2: 'Venus',
		3: 'Earth',
		4: 'Mars',
		5: 'Jupiter',
		6: 'Saturn',
		7: 'Uranus',
		8: 'Neptune',
	}[id]
}

//TODORetorna el primer numero no consecutivo de un array

function firstNonConsecutive(arr) {
	for (let i = 0; i < arr.length - 1; ++i) {
		if (arr[i] + 1 !== arr[i + 1]) {
			return arr[i + 1]
		}
	}
	return null
}

//TODORetorna una derivada

const derive = (coefficient, exponent) =>
	`${coefficient * exponent}x^${exponent - 1}`

console.log(derive(7, 8)) // => "56x^7"
console.log(derive(7, 8)) // => "45x^8"

//TODORetorna las Iniciales de 2 nombres

// Has una función que reciba un string con un nombre conformado de dos palabras y que retorne las iniciales
//Ejemplo "Stuart Smith" -> "S. S.", "John Addams" -> "J. A."

//Respuesta
const abbrevName = name => {
	let nameArray = name.split(' ')
	return (nameArray[0][0] + '. ' + nameArray[1][0] + '.').toUpperCase()
}

//TODORetorna la suma interna de todos los elementos de dos arrays

function arrayPlusArray(arr1, arr2) {
	let response = [...arr1, ...arr2].reduce((a, b) => {
		return a + b
	}, 0)
	return response
}

//TODOFiltra valores negativos de una función

function paperwork(n, m) {
	return n < 1 ? 0 : m < 1 ? 0 : n * m
}

function paperworkCLEVER(n, m) {
	return n > 0 && m > 0 ? n * m : 0
}

//TODO----------------Verifica si un array posee un numero----------------

const check = (array, x) => (array.includes(x) ? true : false)

console.log(check([66, 101], 66))

//TODOFuncion que retorne la suma de elementos positivos dentro de un array

//Función que recibe un array y cuenta cuantos elementos positivos tiene
//Ejemplo [1,3,-7,3,-4,-5] -> 3, [1,8,-7,-6,-5,4,5] -> 4

const positiveSum = arr => {
	let response = 0
	for (const i of arr) {
		i < 1 ? (response += 0) : (response += i)
	}
	return response
}
console.log(positiveSum([1, -2, 3, 4, 5]))

//TODOMetodo para String que alterne mayusculas y minusculas de un String

String.prototype.toAlternatingCase = function() {
	return this.split('')
		.map(a => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
		.join('')
} //TODO Las arrow functions no funcionan por que posee un this
console.log('Hola que onda'.toAlternatingCase())

//TODOMetodo para tipo de dato String para verificar si se esta completamente en mayuscula

String.prototype.isUpperCase = function() {
	return this === this.toUpperCase()
}
console.log('HOLA MUNDO'.isUpperCase())

//TODOMetodo que cambie las letras especiales del idioma polaco a letras inglesas

function correctPolishLetters(string) {
	const polishLetters = {
		ą: 'a',
		ć: 'c',
		ę: 'e',
		ł: 'l',
		ń: 'n',
		ó: 'o',
		ś: 's',
		ź: 'z',
		ż: 'z',
	}
	return string
		.split('')
		.map(c => polishLetters[c] || c)
		.join('')
}
console.log(correctPolishLetters('Jędrzej Błądziński 1'))

//TODOFuncion que retorne la cantidad de veces que se repite una letra en un string

function strCount(str, letter) {
	let response = 0
	for (const i of str) {
		if (i === letter) {
			response += 1
		}
	}
	return response
}

const strCountCLEVER = (str, letter) => str.split(letter).length - 1

//TODOHas una funcion que retorne si un numero es par o impar

const testEven = n => n % 2 == 0

//TODOFuncion que determine si se tiene la cantidad necesaria de gasolina para llegar a cierto punto

const zeroFuel = (distanceToPump, milesPerGalon, fuellLeft) =>
	milesPerGalon * fuellLeft >= distanceToPump

//TODORecibe datos de la edad de ciertas personas y retorna [valorMinimo, valorMaximo, diferencia]

const differenceInAges = ages => {
	let maxAge = -Infinity
	let minAge = Infinity
	for (const i of ages) {
		if (i > maxAge) {
			maxAge = i
		}
		if (i < minAge) {
			minAge = i
		}
	}
	return [maxAge, minAge, maxAge - minAge]
}

const differenceInAgesALTERNATE = ages => {
	let max = Math.max(...ages),
		min = Math.min(...ages),
		difference = max - min
	return [max, min, difference]
}

//TODO---------------------------Convierte un numero a string---------------------------

var a = (123).toString()
var a = (123).toString()
var a = (123).toString()
var a = 123 + ''

//TODORetorna solo los valores que ocupen una posicion inpar dentro de un array

const removeEveryOther = arr => {
	let response = []
	for (let i = 0; i < arr.length; i += 2) {
		response.push(arr[i])
	}
	return response
}

//TODORetorna la suma de varios elementos al cuadrado

const squareSum = numbers =>
	numbers.reduce((sum, number) => number * number + sum, 0)

//TODOObten el valor de Ascii de un string

const getASCII = c => c.charCodeAt(0)

//TODORetorna true a cualquier numero par excepto 2

const divide = weight => weight > 2 && weight % 2 == 0

//TODORetorna la calificacion  inglesa en base a el promedio de 3 calificaciones

function getGrade(s1, s2, s3) {
	avg = (s1 + s2 + s3) / 3
	if (avg < 60) return 'F'
	else if (avg < 70) return 'D'
	else if (avg < 80) return 'C'
	else if (avg < 90) return 'B'
	else return 'A'
}

//TODOElimina los todos los ceros al final de un numero

const noBoringZeros = n => {
	while (n % 10 === 0 && n !== 0) {
		n = n / 10
	}
	return n
}

//TODOVerifica si tu puntuacion es mayor que la de el promedio de el salon

const betterThanAverage = (classPoints, yourPoints) => {
	let sum = 0
	for (const i of classPoints) {
		sum += i
	}
	return sum / classPoints.length < yourPoints
}

//TODOEsta funcion no sabria explicarla rapidamente xd

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
	let blueLeft = blueStart - bluePulled
	let redLeft = redStart - redPulled
	let allLeft = blueLeft + redLeft

	return blueLeft / allLeft
}

//TODOHas una funcion que haga un xor

const xor = (a, b) => (a && !b) || (!a && b)
const xor2 = (a, b) => a != b

//TODORetorna el piso en su numero real no el ingles con sus medidas raras como las millas que asco

const getRealFloor = n => {
	if (n < 1) {
		return n
	}
	if (n >= 1 && n < 13) {
		return n - 1
	}
	if (n > 13) {
		return n - 2
	}
}

const getRealFloorCLEVER = n => (n > 13 ? n - 2 : n > 0 ? n - 1 : n)

const getRealFLoorMORECLEVER = n => (n < 1 ? n : n - (n < 13 ? 1 : 2))

//TODORecibe un numero y retorna un array inverso con numeros dentro

const digitize = n => {
	const array = n
		.toString()
		.split('')
		.reverse()
	let response = []
	for (const i of array) {
		response.push(parseInt(i))
	}
	return response
}

function digitizeCLEVER(n) {
	return String(n)
		.split('')
		.map(Number)
		.reverse()
}

//TODORetorna este tipo de tabla

const multiTable = () => {
	let response = ''
	for (let i = 1; i <= 10; i++) {
		response += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`
	}
	return response
}

const multiTableClever = () => {
	return [...Array(10)]
		.map((_, i) => `${i + 1} * ${n} = ${n * i + n}`)
		.join('\n')
}

const multiTable = number =>
	[...Array(10)]
		.map(
			(_, i) =>
				`${i + 1} * ${number} = ${(i + 1) * number}${i + 1 < 10 ? '\n' : ''}`,
		)
		.join('')

//TODOCalcula si un autobús tiene la cantidad necesaria de pasajeros si es así retorna 0 si no retorna cuantos espacios faltaban

const enoughPassagers = (cap, on, wait) => {
	cap <= on + wait ? -(cap - (on + wait)) : 0
}

function enoughPassagersCLEVER(cap, on, wait) {
	return Math.max(wait + on - cap, 0)
}

//(enough(10, 5, 5), 0);
//(enough(100, 60, 50), 10);
//(enough(20, 5, 5), 0);

//TODORetorna un array invertido con el numero especificado (n..1)

const reverseSeq = n => {
	let response = ''
	for (let i = n; i > 0; i--) {
		response += i
	}
	return response
}

const reverseSeqCLEVER = n =>
	Array(n)
		.fill()
		.map((e, i) => n - i)

//TODORetorna un numero escrito cuando recibe un int

function switchItUp(number) {
	switch (number) {
		case 1:
			return 'One'
		case 2:
			return 'Two'
		case 3:
			return 'Three'
		case 4:
			return 'Four'
		case 5:
			return 'Five'
		case 6:
			return 'Six'
		case 7:
			return 'Seven'
		case 8:
			return 'Eight'
		case 9:
			return 'Nine'
		default:
			return 'Cero'
	}
}

switchItUpClever = n =>
	[
		'Zero',
		'One',
		'Two',
		'Three',
		'Four',
		'Five',
		'Six',
		'Seven',
		'Eight',
		'Nine',
	][n]

switchClever2 = n =>
	'Zero,One,Two,Three,Four,Five,Six,Seven,Eight,Nine'.split(',')[n]

//TODOInvierte las palabras dentro de un string

const reverseWords = str =>
	str
		.split(' ')
		.reverse('')
		.join(' ')

// (reverseWords("hello world!"), "world! hello")
// (reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda")
// (reverseWords("foobar"                       ),  "foobar")
// (reverseWords("kata editor"                  ),  "editor kata")

//TODORetorna una formula

const quadratic = (x1, x2) => [1, -(x2 + x1), x1 * x2]

//TODOPrimero resta la suma de los numeros internos dentro de uno y luego busca ese numero en el arreglo
let fruits = {
	1: 'kiwi',
	2: 'pear',
	3: 'kiwi',
	4: 'banana',
	5: 'melon',
	6: 'banana',
	7: 'melon',
	8: 'pineapple',
	9: 'apple',
	10: 'pineapple',
	11: 'cucumber',
	12: 'pineapple',
	13: 'cucumber',
	14: 'orange',
	15: 'grape',
	16: 'orange',
	17: 'grape',
	18: 'apple',
	19: 'grape',
	20: 'cherry',
	21: 'pear',
	22: 'cherry',
	23: 'pear',
	24: 'kiwi',
	25: 'banana',
	26: 'kiwi',
	27: 'apple',
	28: 'melon',
	29: 'banana',
	30: 'melon',
	31: 'pineapple',
	32: 'melon',
	33: 'pineapple',
	34: 'cucumber',
	35: 'orange',
	36: 'apple',
	37: 'orange',
	38: 'grape',
	39: 'orange',
	40: 'grape',
	41: 'cherry',
	42: 'pear',
	43: 'cherry',
	44: 'pear',
	45: 'apple',
	46: 'pear',
	47: 'kiwi',
	48: 'banana',
	49: 'kiwi',
	50: 'banana',
	51: 'melon',
	52: 'pineapple',
	53: 'melon',
	54: 'apple',
	55: 'cucumber',
	56: 'pineapple',
	57: 'cucumber',
	58: 'orange',
	59: 'cucumber',
	60: 'orange',
	61: 'grape',
	62: 'cherry',
	63: 'apple',
	64: 'cherry',
	65: 'pear',
	66: 'cherry',
	67: 'pear',
	68: 'kiwi',
	69: 'pear',
	70: 'kiwi',
	71: 'banana',
	72: 'apple',
	73: 'banana',
	74: 'melon',
	75: 'pineapple',
	76: 'melon',
	77: 'pineapple',
	78: 'cucumber',
	79: 'pineapple',
	80: 'cucumber',
	81: 'apple',
	82: 'grape',
	83: 'orange',
	84: 'grape',
	85: 'cherry',
	86: 'grape',
	87: 'cherry',
	88: 'pear',
	89: 'cherry',
	90: 'apple',
	91: 'kiwi',
	92: 'banana',
	93: 'kiwi',
	94: 'banana',
	95: 'melon',
	96: 'banana',
	97: 'melon',
	98: 'pineapple',
	99: 'apple',
	100: 'pineapple',
}

const SubtractSum = n => {
	let number =
		n -
		String(n)
			.split('')
			.reduce((sum, item) => (sum += +item), 0)
	if (number > 100) return SubtractSum(number)
	else return fruits[number]
}

//356 => 3 + 5 + 6 => 14 - 356 => 342 < 100 ::: volver a hacer

//TODOMuestra si un numero es factor de otro

const checkForFactor = (base, factor) => (base % factor ? false : true)

const checkForFactor = (base, factor) => base % factor === 0

// (checkForFactor(10,2), true)
// (checkForFactor(63,7), true)
// (checkForFactor(2450,5), true)

//TODORetorna la primera letra y la ultima de un array

function removeChar(str) {
	let array = str.split('')
	array.pop()
	array.shift()
	return (response = array.join(''))
}

const removeCharClever = str => str.slice(1, -1)

//TODORetorna la suma de todos los numeros dentro de un array sin importar sea numero o no

const sumMix = x => {
	let response = 0
	for (let i of x) response += parseInt(i)
	return response
}

const sumMixClever = x => x.map(a => +a).reduce((a, b) => a + b)

// (sumMix([9, 3, '7', '3']), 22);
// (sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
// (sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

//TODORecibe un año y calcula a cual siglo pertenece ese año

const century = year => Math.ceil(year / 100)

//TODORetorna un saludo desde una clase Solution.main()

class Solution {
	static main() {
		console.log('Hello World!')
	}
}

Solution = {}
Solution.main = () => {
	console.log('Hello World!')
}

//TODORetorna determinada cantidad de numeros de un array

const take = (arr, n) => {
	if ((arr = [])) return []
	let response = []
	for (let i = 0; i < n; i++) {
		response.push(arr[i])
	}
	return responsea
}

function takeClever(arr, n) {
	return arr.slice(0, n)
}

//take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2]

const divisibleB

//TODORetorna en un array los numeros que son divisibles entre un divisor

const divisibleBy = (numbers, divisor) => numbers.filter(number => number % divisor === 0)

//([1,2,3,4,5,6], 2), [2,4,6]);
//([1,2,3,4,5,6], 3), [3,6]);

//TODORecibe un array y cuenta cuantos elementos tien este

const monkeyCount = n => [...Array(n)].map((_,e) => e + 1)

function monkeyCount(n) {
  return Array.from({length:n}, (_,i)=>i+1)
}

function monkeyCount(n) {
	return [...Array(n+1).keys()].slice(1);
}

//TODOFunción que calcule las propinas que debes de dejar deacuerdo a una evaluacion de el servicio

const calculateTip = (amount, rating) => {
	switch (rating.toLowerCase()) {
		case 'excelent':
			return Math.ceil((20 * amount) / 100)
		case 'great':
			return Math.ceil((15 * amount) / 100)
		case 'good':
			return Math.ceil((10 * amount) / 100)
		case 'poor':
			return Math.ceil((5 * amount) / 100)
		case 'terrible':
			return 0
		default:
			return 'Rating not recognised'
	}
}

const TIPS = {
  "terrible": 0.0,
  "poor": 0.05,
  "good": 0.1,
  "great": 0.15,
  "excellent": 0.2
};

const calculateTip = (amount, rating) => {
  rating = rating.toLowerCase();
  
  return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised";
};

//TODODibuja una escalera en la consola

const drawStairs = n => {
	let spaces = ''
	let response = []
	for (let i = 1; i <= n; i++) {
		response.push(`${spaces}I`)
		spaces += ' '
	}
	return response.join('\n')
}

const drawStairs = n => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");

function drawStairs(n) {
  return Array(n).fill("I").map((e,i)=>e.padStart(i+1," ")).join("\n")
}

console.log(drawStairs(19))

//TODORetorna mensaje dependiendo el array pasado

const well = x => {
	const counter = x.filter(e => e === 'good')
	if (counter.length >= 3) {
		return 'I smell a series!'
	} else if (counter.length >= 1) {
		return 'Publish!'
	} else {
		return 'Fail!'
	}
}

const wellClever = x => {
  const good_count = x.filter(x => x == 'good').length;
  return good_count < 1 ? 'Fail!' :
         good_count < 3 ? 'Publish!' : 'I smell a series!';
}

// (['bad', 'bad', 'bad']), 'Fail!');
// (['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
// (['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');

//TODORetorna el resultado de cortar las flores (me ama no me ama)

const phrases = [
	'I love you',
	'a little',
	'a lot',
	'passionately',
	'madly',
	'not at all',
]

function howMuchILoveYou(n) {
	 return phrases[(n - 1) % phrases.length] 
}

const howMuchILoveYou=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6]

//TODOCalcula el estado de tu peso

function bmi(weight, height) {
	let bmi = weight / (height * height)
	if (bmi <= 18.5) return 'Underweight'
	if (bmi <= 25) return 'Normal'
	if (bmi <= 30) return 'Overweight'
	if (bmi > 30) return 'Obese'
}
const bmi = (w, h, bmi = w/h/h) =>
	bmi <= 18.5 ? "Underweight" :
	bmi <= 25 ? "Normal" :
	bmi <= 30 ? "Overweight" : "Obese";

//TODORecibe un numero y devuelvelo como letra

var getChar = c => String.fromCharCode(c);

//TODOUn if ternario

const describeAge = age =>
	age <= 12
		? "You're a(n) kid"
		: age <= 17
		? "You're a(n) teenager"
		: age <= 64
		? "You're a(n) adult"
		: "You're a(n) elderly"

const howManyDalmatians = number => {
	var dogs = [
		'Hardly any',
		'More than a handful!',
		"Woah that's a lot of dogs!",
		'101 DALMATIANS!!!',
	]
	return number <= 10
		? dogs[0]
		: number <= 50
		? dogs[1]
		: number == 101
		? dogs[3]
		: dogs[2]
}