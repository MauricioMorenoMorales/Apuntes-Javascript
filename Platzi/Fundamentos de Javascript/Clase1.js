
// ---------------------------------------4 Variables strongs---------------------------------------

var nombre = "Enrique"
var apellido = 'Peña nieto'

var nombreEnMayusculas = nombre.toUpperCase()
var nombreEnMinusculas = nombre.toLowerCase()
var primeraLetraDelNombre = nombre.charAt()
var cantidadLetrasDelNombre = nombre.length
var nombreCompleto = `${nombre} ${apellido}`
var str =  nombre.substr(1,2) 
var reto = nombre.substr(nombre.length-1,1)

// -----------------------------------------------5 Variables Numeros-----------------------------------------------

var edad = 27
/* Incrementos */
//Opcion 1 edad = edad + 1
edad += 1

var peso = 75
// Decrementos
// Opcion 1 peso = peso - 2
peso -= 2

//Sumar Numeros
var sandwich = 1
// Opcion 1 peso = peso + sandwich
peso += sandwich


var jugarAlFutbol = 3
// Opcion 1 peso = peso - jugarAlFutbol
peso -= jugarAlFutbol

// decimales
var precioDeVino = 200.3

//var total = precioDeVino * 3   // Esto da 600.90000000001
//var total = precioDeVino * 100 * 3 / 100

var total = Math.round(precioDeVino * 100 * 3 ) / 100
var totalStr = total.toFixed(2)           // Adicionar dos decimales
var total2 = parseFloat(totalStr)         // Cambiar de char a Numeros

// Division
var pizza = 8
var persona = 2
var cantidadPorcionesPersona = pizza / persona

// ------------------------------------------------------------------6 Funciones------------------------------------------------------------------

var nombre = 'sacha', edad = 28

function imprimirEdad(n,e){  
     console.log(`${n} tiene ${e} anhos`)
}
imprimirEdad('Mauricio',22)
imprimirEdad(nombre,edad)

// --------------------------------------------------------------7 alcance de las funciones--------------------------------------------------------------

var nombre = 'Mauricio'
function imprimirNombreEnMayusculas(){
     nombre = nombre.toUpperCase()
     console.log(nombre)
}
imprimirNombreEnMayusculas()
// ----------Modifica el nombre global
var nombre = 'Mauricio'
function imprimirNombreEnMayusculas(n){
     n = n.toUpperCase()
     console.log(n)
}
imprimirNombreEnMayusculas(nombre)
// ---------------------No lo modifica pero causa problemas al leer (Nombre => n)
var nombre = 'Mauricio'
function imprimirNombreEnMayusculas(nombre){
     nombre = nombre.toUpperCase()
     console.log(nombre)
}
imprimirNombreEnMayusculas(nombre)
// -----------------------------------------------------------------------8 Objetos-----------------------------------------------------------------------
var nombreMauricio = 'Mauricio'
var nombreDario = 'Dario'
var nombreSacha = 'Sacha'
function imprimirNombreEnMayusculas(nombre){
     nombre = nombre.toUpperCase()
     console.log(nombre)
}
imprimirNombreEnMayusculas(nombre)
// ------------------------------para ahorrar esto mejor haz esto
var sacha = {
     nombre: 'sacha',
     apellido: 'Lifszyc',
     edad: 28
}
//Nombre sería ((KEY)) Apellido sería ((VALOR))
var dario = {
     nombre: 'Dario',
     apellido: 'Yakovlev',
     edad: 22
}
function imprimirNombreEnMayusculas({ apellido }){ //Desestructura del objeto el valor apellido
     console.log(apellido.toUpperCase())
     }

imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas(sacha)
// -----------------------------------------------------------------9 Desestructurar Objetos-----------------------------------------------------------------
var sacha = {
     nombre: 'sacha',
     apellido: 'Lifszyc',
     edad: 28
}
//Nombre sería ((KEY)) Apellido sería ((VALOR))
var dario = {
     nombre: 'Dario',
     apellido: 'Yakovlev',
     edad: 22
}
function imprimirNombreEnMayusculas(persona){
     //nombre = persona.nombre
     var {nombre} = persona //Desestructura la key de {nombre} en una variable llamada ''nombre''
     console.log(nombre.toUpperCase())
     }

imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas(sacha)

function imprimir_nombre_y_edad(persona){
     var {nombre} = persona //Desestructura la key de {nombre} en una variable llamada ''nombre''
     var {edad} = persona //Desestructura la key de {edad} en una variable llamada ''edad''
     console.log(`Hola mi nombre es ${nombre} y mi tengo ${edad} años`)
}
imprimir_nombre_y_edad(dario);
imprimir_nombre_y_edad(sacha)

// -------------------------------------10 Parametros como referencia o como valor-------------------------------------
//! IMPORTANTE
// Parámetros como referencia o como valor
// Si tienes pensado usar tecnologías como Flux o Redux, pon mucha atención a este video. Nunca debes modificar el estado del objeto sino crear otro.
const cl = console.log
var sacha = {
     nombre: 'sacha',
     apellido: 'Lifszyc',
     edad: 28
}
var dario = {
     nombre: 'Dario',
     apellido: 'Yakovlev',
     edad: 22
}
// function cumpleanhos(persona){
//      persona.edad += 1             //Altera al objeto
// }
//? const cumpleanhos = (persona) => persona.edad +=1 //Misma Función pero en arrow function
// cumpleanhos(sacha)
// console.log(sacha)
// console.log(cumpleanhos(sacha))
// cl(sacha)

function cumpleanhos(persona){
     return{
          ...persona,              //Desglosa objeto y crea otro nuevo y así no altera al objeto original
          edad: persona.edad + 1
     }
     edad += 1
}
cl(cumpleanhos(sacha))
cl(sacha)
////////////////////////////Si modificamos el valor de un valor en una funcion, esta afectara a el valor global

// -----------------------------------------11 Comparaciones en Javascript-----------------------------------------
const cl = console.log
var x = 4
var y = '4'
cl(x == y) //Da True
cl(x === y) //Da False
var sacha = {
     nombre: 'Sacha'
}
var otraPersona = {
     nombre: 'Sacha'
}
cl(sacha == otraPersona) //Ambos dan False
cl(sacha === otraPersona)
///////////////////////////////////Comparar dos objetos dara false, para que de true tiene que ser nativo
var otraPersonaTambien = sacha
cl(sacha == otraPersonaTambien) // Estos dan True
cl(sacha === otraPersonaTambien)
///////////////////////////////da true
var otraPersonaTambien2 = {
     ...sacha
}
cl(sacha == otraPersonaTambien2) // Estos dan False
cl(sacha === otraPersonaTambien2)
/////////////////////Da false por que ocupa otro espacio en memoria

//--------------------------------------------------12 Condicionales--------------------------------------------------
var sacha = {
     nombre: 'sacha',
     apellido: 'Lifszyc',
     edad: 28,
     ingeniero: true,
     cocinero: false,
     cantante: false,
     dj: false,
     guitarrista:false,
     drone: true
}

function imprimir_profesiones(persona){
     console.log(`${persona.nombre} es:`)
     if (persona.ingeniero){
          console.log('ingeniero')
     }
     else{
          console.log(`no es un ingeniero`)
     }
     if (persona.cocinero){
          console.log('cocinero')
     }
     else{
          console.log(`no es un cocinero`)
     }
     if (persona.cantante){
          console.log('cantante')
     }
     else{
          console.log(`no es un cantante`)
     }
     if (persona.dj){
          console.log('dj')
     }
     else{
          console.log(`no es un dj`)
     }
     if (persona.guitarrista){
          console.log('guitarrista')
     }
     else{
          console.log(`no es un guitarrista`)
     }
     if (persona.drone){
          console.log('drone')
     }
     else{
          console.log(`no es un volador de drones`)
     }
}
imprimir_profesiones(sacha)
//---------------------------------------13 Funciones que retornan valores---------------------------------------
var sacha = {
     nombre: 'sacha',
     apellido: 'Lifszyc',
     edad: 28,
     ingeniero: true,
     cocinero: false,
     cantante: false,
     dj: false,
     guitarrista:false,
     drone: true
}
var juan = {
     nombre: 'juan',
     apellido: '李',
     edad: 13,
     ingeniero: true,
     cocinero: false,
     cantante: false,
     dj: false,
     guitarrista:false,
     drone: true
}

const MAYORIA_DE_EDAD = 18 // buena práctica definir las constantes en mayúsculas y separadas de _

function MayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD // retorna true o false
}

function imprimirSiEsMayorDeEdad(persona) {
     if (MayorDeEdad(persona)) {
          console.log(`${persona.nombre} es mayor de edad`)
     } else {
          console.log(`${persona.nombre} es menor de edad`)
     }
}
console.log(MayorDeEdad(juan))
imprimirSiEsMayorDeEdad(juan)