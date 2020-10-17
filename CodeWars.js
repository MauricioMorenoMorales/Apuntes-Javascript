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
