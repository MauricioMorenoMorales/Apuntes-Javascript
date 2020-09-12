//? Arrays
//? Transformar un array
//? Reducir un array
//? Clases en javascript
//? Modificando un prototipo
//? This 27 Clases javascript

///////////------------------------------Arrays-------------------------------------
var sacha = {
     nombre: 'Sacha',
     apellido: 'Lifszyc',
     altura: 1.72
}

var alan = {
     nombre: 'Alan',
     apellido: 'Perez',
     altura: 1.86
}

var martin = {
     nombre: 'Martin',
     apellido: 'Gomez',
     altura: 1.85
}

var dario = {
     nombre: 'Dario',
     apellido: 'Juarez',
     altura: 1.71
}
var vicky = {
     nombre: 'Vicky',
     apellido: 'Zapata',
     altura: 1.56
}

var paula = {
     nombre: 'Paula',
     apellido: 'Barros',
     altura: 1.76
}
var personas = [sacha, alan, martin, dario, vicky, paula]

for (var i = 0; i < personas.length; i++){
     var persona = personas[i]
     console.log(`${persona.nombre} tiene una altura de ${persona.altura}`)
}

///-------------------------------Clase 20 filtrar arrays-------------------------------
var sacha = {
     nombre: 'Sacha',
     apellido: 'Lifszyc',
     altura: 1.72
}

var alan = {
     nombre: 'Alan',
     apellido: 'Perez',
     altura: 1.86
}

var martin = {
     nombre: 'Martin',
     apellido: 'Gomez',
     altura: 1.85
}

var dario = {
     nombre: 'Dario',
     apellido: 'Juarez',
     altura: 1.71
}
var vicky = {
     nombre: 'Vicky',
     apellido: 'Zapata',
     altura: 1.56
}

var paula = {
     nombre: 'Paula',
     apellido: 'Barros',
     altura: 1.76
}
//!Para filtrar se necesita un array y una condicion

//* const es alta = (persona) => {return persona.altura > 18} Esto se puede simplificar así ↓
//* var personasAltas = personas.filter(function(){return persona.altura > 18}) otra alternativa para filtrar
const esAlta = ({ altura }) => altura > 1.8 //Versión desglosada
//! Si la funcion filtro retorna un positivo se añadira a la nueva variable que se crea con el filter

var personas = [sacha, alan, martin, dario, vicky, paula]

var personas_altas = personas.filter(esAlta) //Filter lleva una condición a la que le pasaremos la función, se creara un nuevo array con nombre personas-altas

console.log(personas_altas)

const esBaja = ({ altura }) => altura < 1.80

var personas_bajas = personas.filter(esBaja)

console.log(personas_bajas)

/////-----------------------------------Transformar un array-----------------------------------
//! Revisar!!!
var sacha = {
     nombre: 'Sacha',
     apellido: 'Lifszyc',
     altura: 1.72
}

var alan = {
     nombre: 'Alan',
     apellido: 'Perez',
     altura: 1.86
}

var martin = {
     nombre: 'Martin',
     apellido: 'Gomez',
     altura: 1.85
}

var dario = {
     nombre: 'Dario',
     apellido: 'Juarez',
     altura: 1.71
}
var vicky = {
     nombre: 'Vicky',
     apellido: 'Zapata',
     altura: 1.56
}

var paula = {
     nombre: 'Paula',
     apellido: 'Barros',
     altura: 1.76
}
var personas = [sacha, alan, martin, dario, vicky, paula]


// const pasar_altura_a_cms = persona => { 
//      personas.altura = personas.altura * 100
//      return {
//           ...persona,
//      altura: persona.altura * 100
//      }
// }

const pasar_altura_a_cms = persona => ({ 
          ...persona,                        // los parametros van dentro de llaves ya que retorna un objeto
     altura: persona.altura * 100
})

var personas_cms = personas.map(pasar_altura_a_cms) //Esta funcion crea un nuevo array mapeado

console.log(personas_cms)
console.log(personas);

//////////// ----------------------22Reducir un array a un valor----------------------
var sacha = {
     nombre: 'Sacha',
     apellido: 'Lifszyc',
     altura: 1.72,
     libros: 111
}
var alan = {
     nombre: 'Alan',
     apellido: 'Perez',
     altura: 1.86,
     libros: 78
}
var martin = {
     nombre: 'Martin',
     apellido: 'Gomez',
     altura: 1.85,
     libros: 132
}
var dario = {
     nombre: 'Dario',
     apellido: 'Juarez',
     altura: 1.71,
     libros:90
}
var vicky = {
     nombre: 'Vicky',
     apellido: 'Zapata',
     altura: 1.56,
     libros:91
}
var paula = {
     nombre: 'Paula',
     apellido: 'Barros',
     altura: 1.76,
     libros: 182
}
var personas = [sacha, alan, martin, dario, vicky, paula]

var acum = 0
//! -------------------------Se podria hacer un bucle for primero
// for (let i = 0; i < personas.length; i++){
//      acum = acum + personas[i].libros
// }
// console.log(`En total todos tienen ${acum} libros`);

const reducir = (acum, {libros})  => {
     return acum + libros //! Recuerda siempre el return si no no hace nada la funcion y retorna undefined
}

var total_de_libros = personas.reduce(reducir, 0) //Requiere una funcion y el valor inicial del acumulador

console.log(`En total todos tienen ${total_de_libros} libros`)

//////// -------------------------------23 Clases en javaScript-------------------------------

function persona(nombre, apellido, altura){ //Recibe todos los atributos que tendra y se agregara abajo
     // var obj = {} si no pones 'new' a la instancia se crea un nuevo objeto
     // obj.nombre 
     this.nombre = nombre //Esta es la forma de agregar los parametros
     this.apellido = apellido
     this.altura = altura
     return this //!Recuerda el this
}

persona.prototype.saludar = function (){ //Esta forma se crean funciones dentro de una clase
     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
persona.prototype.daraltura = function(){
     if(this.altura > 180){
          console.log(`Hola me llamo ${this.nombre} y soy alto uwu`)
     }
     else{
          console.log(`Hola me llamo ${this.nombre} y soy bajito unu`)
     }
}

var sacha = new persona('sacha','Lifszyc',175) //!Esto ejecuta la funcion persona
var felipe = new persona('Felipe','gonzalez',193)
var ernesto = new persona('Ernesto','eslava',186)
var fernando = new persona('Fernando','bahena',172)
sacha.saludar()
sacha.daraltura()
ernesto.daraltura()

///////////// ---------------------------24 Modificando un prototipo---------------------------

function persona(nombre, apellido, altura){
     // var obj = {} si no pones 'new' a la instancia se crea un nuevo objeto
     // obj.nombre
     this.nombre = nombre
     this.apellido = apellido
     this.altura = altura
     return this
}

persona.prototype.saludar = function (){
     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
persona.prototype.soyAlto = function(){
     return this.altura > 180          //!Tiene que estar la inicializacion antes del llamado
}                                       //!Que esten juntas todas las funciones

//? persona.prototype.soyAlto= () => this.altura > 180
//Esta versión no funcionara por que una arrow function alude a el contexto this superior

var sacha = new persona('sacha','Lifszyc',175)
var felipe = new persona('Felipe','gonzalez',193)
var ernesto = new persona('Ernesto','eslava',186)
var fernando = new persona('Fernando','bahena',172)

//////////////// -----------------25El contexto de las funciones quien es this-----------------
function persona(nombre, apellido, altura){
     // var obj = {} si no pones 'new' a la instancia se crea un nuevo objeto
     // obj.nombre 
     this.nombre = nombre
     this.apellido = apellido
     this.altura = altura
     return this
}

persona.prototype.saludar = function (){
     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
persona.prototype.soyAlto = function(){ 
     debugger
     return this.altura > 180
}
//Las funciones arrow hacen referencia a el this global que es windows, las funciones como la escrita
//aca arriba no

var sacha = new persona('sacha','Lifszyc',175)
var felipe = new persona('Felipe','gonzalez',193)
var ernesto = new persona('Ernesto','eslava',186)
var fernando = new persona('Fernando','bahena',172)

///////////////// ---------------------26 La verdad oculta sobre las clases---------------------
function persona(nombre, apellido, altura){
     this.nombre = nombre
     this.apellido = apellido
     this.altura = altura
     return this
}

function heredaDe(prototipoHijo, prototipoPadre){
     var fn = function(){}
     fn.prototype = prototipoPadre.prototype
     prototipoHijo.prototype = new fn
     clasehija.prototype.constructor = claseHija
}


persona.prototype.saludar = function (){
     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}


function desarrollador(nombre,apellido){
     this.nombre = nombre
     this.apellido = apellido
}

desarrollador.prototype.saludar = function (){
     console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}
heredaDe(desarrollador,persona)

var sacha = new persona('sacha','Lifszyc',175)
// var felipe = new persona('Felipe','gonzalez',193)
// var ernesto = new persona('Ernesto','eslava',186)
// var fernando = new persona('Fernando','bahena',172)

/////////////// --------------------------27 clases en javascript--------------------------

class persona {
     constructor(nombre, apellido, altura){ 
          this.nombre = nombre
          this.apellido = apellido
          this.altura = altura
          return this
     }
     saludar(){
          console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
     }
     soyAlto(){
          return this.altura > 1.8
     }
}
class desarrollador extends persona{
     constructor(nombre,apellido,altura){
          super(nombre,apellido,altura)
     }

     saludar(){
          console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
     }
}

