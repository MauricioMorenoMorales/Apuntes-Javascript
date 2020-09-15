//////////--------------------------28 Funciones como parametros--------------------------
class persona {
     constructor(nombre, apellido, altura){ 
          this.nombre = nombre
          this.apellido = apellido
          this.altura = altura
          return this
     }
     saludar(fn){
          console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
          if (fn){
               fn(this.nombre,this.apellido,false)
          }
     }
     soyAlto(){
          return this.altura > 1.8
     }
}
class desarrollador extends persona{
     constructor(nombre,apellido,altura){
          super(nombre,apellido,altura)
     }
     saludar(fn){
          // var nombre = this.nombre
          // var apellido = this.apellido
          console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
          if (fn){
               var {nombre, apellido} = this
               fn(this.nombre,this.apellido,true)
          }
     }
}

function responderSaludo(nombre,apellido,esDev = false){
     console.log(`Buen día ${nombre} ${apellido}`)
     if(esDev){
          console.log(`Ah mirá, no sabía que eras desarrollador`)
     }
}

var felipe = new persona('Felipe','gonzalez',193)
var ernesto = new persona('Ernesto','eslava',186)
var fernando = new desarrollador('Fernando','bahena',172)
felipe.saludar(responderSaludo)
ernesto.saludar()
fernando.saludar(responderSaludo)

//* ------------------------------------Callbacks------------------------------------


const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;

const onPeopleResponse = ({name}) => console.log(`Soy: ${name}`)

fetch(LUKE_URL)
    .then((response) => response.json())
    .then((character) => onPeopleResponse(character))
    .catch( error => console.log(error));

//* ------------------------------------Fechas------------------------------------

function diasEntreFechas(fecha1, fecha2){
     const unDia = 1000 * 60 * 60 * 24
     const diferencia = Math.abs(fecha1 - fecha2)

     return Math.floor(diferencia / unDia)
}

const hoy = new Date()
const nacimiento = new Date(1997, 10, 10)

console.log(diasEntreFechas(hoy, nacimiento))

//* ------------------------------------Funciones recursivas------------------------------------

/*
13 / 4
13 -4 = 9         |
9 -4 = 5          |
5 - 4 = 1         |
1 - 4 = -3        0
*/
function divisionEntera(dividendo, divisor){
     if(dividendo < divisor){
          return 0
     }
     return 1 + divisionEntera(dividendo - divisor, divisor)
}

console.log(divisionEntera(13,4))

//* ------------------------------------Funciones recursivas------------------------------------

function factorial(n){
     if(!this.cache){
          this.cache = {}
     }
     if(this.cache[n]){
          return this.cache[n]
     }
     if(n === 1){
          return 1
     }
     this.cache[n] = n * factorial(n - 1)
     return this.cache[n]
}

console.log(factorial(6))

//* ------------------------------------Entiende los Closures------------------------------------

function crearSaludo(finalDeFrase){
     return function(nombre){
          console.log(`Hola ${nombre} ${finalDeFrase}`)
     }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('carnal')
const saludoColombiano = crearSaludo('parce')

saludoArgentino('Sacha')
saludoMexicano('Sacha')
saludoColombiano('Sacha')

//* ------------------------------------Entiende los datos inmutables------------------------------------

const sacha = {
     nombre: 'sacha',
     apellido: 'Lyfszyc',
     edad: 28
}

//const cumpleanhos = persona => persona.edad++ //Esto afecta al objeto original

const cumpleanhosInmutable = persona => ({
     ...persona,
     edad: persona.edad + 1
})

const sacha29 = cumpleanhosInmutable(sacha)
console.log(sacha29)
console.log(sacha)

const sacha30 = cumpleanhosInmutable(sacha29)
console.log(sacha29)
console.log(sacha)
console.log(sacha30)

//* ------------------------------------Cambiando de contexto al llamar una función------------------------------------

const sacha = {
     nombre: 'sacha',
     apellido: 'Lyfszyc'
}
const yessica= {
     nombre: 'yessica',
     apellido: 'gonzalez'
}

function saludar(saludo = 'Hola'){
     console.log(`${saludo} mi nombre es ${this.nombre}`)
}

// const saludarASacha = saludar.bind(sacha)
// const saludarAYessica = saludar.bind(yessica)

// saludarASacha();

//setTimeout(saludar.bind(sacha, 'Hola che'), 1000);

saludar.call(sacha, 'Hola che')
saludar.apply(sacha, ['Hola Che'])// La diferencia es que los parametros se pasan en un array

//* ------------------------------------Usar punto y coma------------------------------------

alert('Hola')//Opcional
var vecesInnecesarias= 'Despues de llaves, despues de ciclo for, funciones, etc.'
//!Solo hay 2 veces

console.log('Hola mi nombre es Sacha '); //!Aqui si se necesita cuando una linea empieza con un array
[1,2,3].forEach(n => console.log(n * 2))

const nombre = 'Mauricio'
console.log('Hola mi nombre es Sacha '); //!Aqui si se necesita cuando una linea empieza con un template string
`${nombre} es un desarrollador`

function calcularDoble(numero){
     return{ //!Aqui necesita el inicio de el corchete obligatoriament{
          original: numero, doble: numero * 2
     }
}
console.log(calcularDoble(20))