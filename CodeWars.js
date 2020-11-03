//! Revisa si un numero es divisible entre otros 2

const isDivideBy = (number, a, b) => {return (number % a === 0 && number % b === 0)}

console.log(isDivideBy(12, 6, 3))
console.log(isDivideBy(12, 5, 3))

//!Llena un array como el ejemplo de abajo
//? arr(5) // [0,1,2,3,4]

llenadordeArrays = (n) => {
    var newArray = []
    for(let i = 0; i < n; i++){
        newArray.push(i)
    }
    return newArray
}
console.log(llenadordeArrays(5))

// || Clever
arr = n => n ? [...Array(n).keys()] : [];
console.log(arr(7))

console.log(...Array(4).keys())

//!Si en un string de numeros el numero es menor a 5 se remplaza con 0, si es mayor se remplaza con 1

function fakebin(x){
    return x.split('').map(n => n < 5 ? 0 : 1).join('')
}
console.log(fakebin('9389538453'))

//*Alternative

function fakebin(string){
    let response = ""
    for(let i = 0; i < string.length; i++){
        if(Number(string[i] >= 5)){
            response += "1"
        }else{
            response += "0"
        }
    }
    return response
}
console.log(fakebin('0123456789'))

//! Hacer un saludo con nombre, y con por defecto como mundo

function hello(name = 'World'){
    return `Hello ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}`
}
console.log(hello())
console.log(hello('mauRicio'))

//! Calcula la caida de una hoja con una regla de 3

function sakuraFall(v){
    return v * 5 / 80
}
console.log(sakuraFall(10))

//! Retorna el doble de un entero

const doubleInteger = i => i * 2
console.log(doubleInteger(2))

//! Calcula litros por hora tomados de ejercicio

const litres = (time) => Math.floor(time * 0.5)
console.log(litres(11.8))

//! Si tu nombre empieza con la letra R entonces tocas el banjo

const areYouPlayingBanjo = (name) => {
    return name + (name[0].toLowerCase() === 'r' ? ' plays' : ' does not play') + " banjo"
}

const name = 'Mauricio'

console.log(areYouPlayingBanjo('Mauricio'))

//! Si un numero es negativo conviertelo a positivo y a la inversa

const invertArray = (array) => {
    return array.map( x => x === 0 ? x : -x )
}
console.log(invertArray([1, 0, -3, 5, -4, 6 ]))

const invertirArrayCLEVER = array => array.map(x => 0 -x)

//! Suma cada numero inferior a el numero dado

const summation = num => {
    let result = 0
    for(var i = 0; i <= num; i++){
         result += i
    }
    return result
}
console.log(summation(3))

const summationCLEVER = n => n * (n + 1) / 2
console.log(summationCLEVER(8))

//! Retorna el numero más pequeño en un Array

function nextId(ids){
    var x = 0
    while(ids.includes(x)) x++
    return x
}
console.log(nextId([0,1,2,3,5,6,7,11]))

function nextId2(ids){
    const used = new Set(ids)
    for (let i = 0; i <= ids.length; i++){
        if(!used.has(i)) return i
    }
}

//! Convierte velocidad km/h a cm/s redondeados hacia abajo

const cockroachSpeed = (s) =>{
    const SegundosenUnaHora = 3600
    const centimetrosenUnKilometro = 100000
    return Math.floor((s * centimetrosenUnKilometro) / SegundosenUnaHora)
}

//! ----------------------- Crea un generador de rango

function generateRange(min, max, step){
    let response = []
    for (let i = min; i <= max ; i += step) {
         response.push(i)
    }
    return response
}
console.log(generateRange(2,10,2))

//! Función que calcula los milisegundos pasados de media noche

const past = (h = 0, m = 0, s = 0) => ((h * 3600) + (m * 60) + (s)) * 1000
console.log(past(1,1,3))

//! Obten la media de un array redondeado hacia abajo

const getAverage = (marks) => {
    let total = 0
    marks.forEach(element => {
         (total += element)
    });
    return Math.floor(total / marks.length)
}
console.log(getAverage([0,1,2,3,4,5,6,7,8,9,10]))

//! Hacer una función que retorne Capitalizaciones

const CapitalizeWord = word =>
     word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

const CapitalizeWordClever = word =>
    word[0].toUpperCase() + word.slice(1).toLowerCase()

console.log(CapitalizeWordClever('mauricio'))

//! Haz varias funciones que manejen la temperatura

function weatherInfo (temp) {
    var c = convertToCelsius(temp);
    if (c <= 0)
      return (c + " is freezing temperature");
    else
      return (c + " is above freezing temperature");
  }
  function convertToCelsius (temperature) {
    var celsius = (temperature - 32) * (5/9);
    return celsius;
  }
console.log(weatherInfo(100))
console.log(convertToCelsius(100))

//! Si los parametros son de un cuadrado retorna el area, si no el perimetro

const areaOrPerimeter = (l, w) => {
    return(l === w)
         ? l * w
         : (l * 2) + (w * 2)
}
const areaOrPerimeterCLEVER = (l, w) => {
    return(l === w) ? l * w : 2 * (l + w)
}

//! Haz una funcion que repita un string determinada cantidad de veces

const repeatStr = (n,s) => {
    let response = ''
    for (let i = 0; i < n; i++) {
       response += s
    }
    return response
}

const repeatStrCLEVER = (n, s) => s.repeat(n)

//! Haz una función que retorne un patron CortoLargoCorto de sus parametros

function solution(a, b) { //? Para strings
    return (a.length < b.length)
        ? a + b + a
        : b + a + b
}
function ShortLongShort(a, b){ //? Para Numeros
    let long = 0
    let short = 0
    if(a < b){
         short = a
         long = b
    }else{
         short = b
         long = a
    }
    return `${short}${long}${short}`
}

// ! -----------------------Fake Binary-----------------------

const fakeBin = (x) =>
     x.split('').map((e) => e < 5 ? 0 : 1).join('')

console.log(fakeBin('4938493'))

// ! -----------------------Verifica las calificaciones-----------------------

const checkExam = (array1, array2) => {
    let calificacion = 0
    for (let i = 0; i < array1.length; i++) {
         (array2[i] === "")
              ? calificacion += 0
              :(array1[i] === array2[i])
                   ? calificacion += 4
                   : calificacion -= 1
    }
    return(calificacion < 1)
         ? 0
         : calificacion
}
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]));

//! #--------------------Ejercicio de descuentos--------------------

function calculatePercentage(normPrice, discount, holyday){
    let saving = normPrice * discount / 100
    return(Math.floor(holyday / saving))
}

const dutyFree = (normPrice, discount, holyday) =>

//! Ejercicio cuantos numeros es divisible algo

function findMultiples(integer, limit){
    let response = []
    for (let i = integer; i <= limit; i += integer) {
      response.push[i]
    }
    return response
}
findMultiples(2,5) // => [5,10,15,20,25]

//! Funcion que retorne un saludo en varios idiomas

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
      welsh: 'Croeso'
    }
    return GreetingsDataBase[language] || GreetingsDataBase['english']
  }

//! Retorna el llamado de un planeta

function getPlanetName(id){
    return {
        1: 'Mercury',
        2: 'Venus',
        3: 'Earth',
        4: 'Mars',
        5: 'Jupiter',
        6: 'Saturn',
        7: 'Uranus',
        8: 'Neptune'
    }[id]
}

//! Retorna el primer numero no consecutivo de un array

function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
      }
    }
    return null
  }

//! Retorna una derivada

const derive = (coefficient, exponent) =>
  `${coefficient * exponent}x^${exponent - 1}`

console.log(derive(7,8)) // => "56x^7"
console.log(derive(7,8)) // => "45x^8"

//! Retorna las Iniciales de 2 nombres

const abbrevName = (name) => {
    let nameArray = name.split(' ')
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase()
}

//! Retorna la suma interna de todos los elementos de dos arrays

function arrayPlusArray(arr1,arr2){
    let response = [...arr1, ...arr2].reduce((a, b) => {
      return a + b
    }, 0)
    return response
  }

//! Filtra valores negativos de una función

function paperwork(n,m){
    return (n < 1)
      ? 0
      : (m < 1)
        ? 0
        : n * m
  }

function paperworkCLEVER(n, m) {
return n > 0 && m > 0 ? n * m : 0
}

//! ----------------Verifica si un array posee un numero----------------

const check = (array, x) =>
  (array.includes(x)) ? true : false

console.log(check([66,101], 66))

//! Funcion que retorne la suma de elementos positivos dentro de un array

const positiveSum = (arr) => {
    let response = 0
    for(const i of arr){
        (i < 1)
            ? response += 0
            : response += i
    }
    return response
}
console.log(positiveSum([1,-2,3,4,5]))

//! Metodo para String que alterne mayusculas y minusculas de un String

String.prototype.toAlternatingCase = function() {
  return this.split("").map((a) => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('')
} //TODO Las arrow functions no funcionan por que posee un this
console.log('Hola que onda'.toAlternatingCase())

//! Metodo para tipo de dato String para verificar si se esta completamente en mayuscula

String.prototype.isUpperCase = function(){
  return this === this.toUpperCase()
}
console.log('HOLA MUNDO'.isUpperCase())

//! Metodo que cambie las letras especiales del idioma polaco a letras inglesas

function correctPolishLetters (string) {
  const polishLetters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
  }
  return string.split('').map((c) => polishLetters[c] || c ).join('')
}
console.log(correctPolishLetters("Jędrzej Błądziński 1"))

//! Funcion que retorne la cantidad de veces que se repite una letra en un string

function strCount(str, letter) {
  let response = 0
  for (const i of str) {
    if (i === letter) { response += 1}
  }
  return response
}

const strCountCLEVER = (str, letter) => str.split(letter).length - 1

//! Has una funcion que retorne si un numero es par o impar

const testEven = (n) => (n % 2) == 0

//! Funcion que determine si se tiene la cantidad necesaria de gasolina para llegar a cierto punto

const zeroFuel = (distanceToPump, milesPerGalon, fuellLeft) =>
  ((milesPerGalon * fuellLeft) >= (distanceToPump))

//! Recibe datos de la edad de ciertas personas y retorna [valorMinimo, valorMaximo, diferencia]

const differenceInAges = (ages) =>{
    let maxAge = -Infinity
    let minAge = Infinity
    for (const i of ages) {
      if(i > maxAge){maxAge = i}
      if(i < minAge){minAge = i}
    }
    return [maxAge, minAge, maxAge - minAge]
}

const differenceInAgesALTERNATE = (ages) => {
    let max = Math.max(...ages),
        min = Math.min(...ages),
        difference = max - min
    return [max, min, difference]
}

// ! ---------------------------Convierte un numero a string---------------------------

var a = 123..toString();
var a = 123 .toString()
var a = (123).toString();
var a = 123 + '';

// ! Retorna solo los valores que ocupen una posicion inpar dentro de un array

const removeEveryOther = (arr) => {
  let response = []
  for (let i = 0; i < arr.length; i += 2) {
    response.push(arr[i])
  }
  return response
}

//! Retorna la suma de varios elementos al cuadrado

const squareSum = (numbers) =>
  numbers.reduce((sum, number) => (number * number) + sum, 0)

//! Obten el valor de Ascii de un string

const getASCII = (c) => c.charCodeAt(0)

// ! Retorna true a cualquier numero par excepto 2

const divide = (weight) => weight > 2 && weight % 2 == 0

//! Retorna la calificacion  inglesa en base a el promedio de 3 calificaciones

function getGrade (s1, s2, s3) {
  avg = (s1+s2+s3)/3;
  if (avg < 60)  return "F";
    else if (avg < 70) return "D";
    else if (avg < 80) return "C";
    else if (avg < 90) return "B";
    else return "A";
}