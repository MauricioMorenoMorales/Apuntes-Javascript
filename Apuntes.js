
//!------------------------------Boolean------------------------------
////!Truthy & Falsy
////! Null Undefined NaN

////!--------------------------Array-------------------------------

const c = Array.of('X','Y','Z',0,9,3,4);

const d = Array(100).fill(false)

const colores = ['Verde','rojo','azul','morado'];
colores.push('negro')
colores.pop()

////!-----------------Object-------------------------------
const jon = {
     nombre: 'jon',
     apellido: 'mircha',
     edad: 35,
     pasatiempos: ['Esquiar','patinar','futbol'],
     soltero: false,
     contacto: {
          email: 'mimail@gmail.com',
          twitter: '@jonmircha',
          movilo: '5529485734'
     },
     saludar: function(){
          console.log('Hola :)')
     },
     decirMiNombre: function(){
          console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
     }
}

console.log(jon)
console.log(jon['nombre'])
console.log(jon['apellido'])
console.log(jon.pasatiempos[1])
jon.saludar()
jon.decirMiNombre()

console.log(Object.keys(jon))
console.log(Object.values(jon))
console.log(jon.hasOwnProperty('nombre'))

//!---------------------Control de Flujo------------------------------

//!-----------------------------For--------------------------------
const jon = {
     nombre: 'jon',
     apellido: 'mircha',
     edad: 35
}
for(const propiedad in jon){
     console.log(`Key: ${propiedad}, Value: ${jon[propiedad]}`)
}
const cadena = 'Hola mundo'
const numeros = [10,20,30,40,50,60,70];
for (const elemento of cadena) {
     console.log(elemento)
}

//!--------------------------------Detección de errores--------------------------------
try{
     console.log('En el try se agrega el codigo a evaluar')
     noExiste
     console.log('segundo mensaje en el try')
}catch(error){
     console.log('En el catch se captura cualquier error surgido o lanzado en el try')
     console.log(error)
}finally{
     console.log('El bloque finally se ejecutara siempre al final de un bloque try catch')
}
//! --------------------------------------Prototipos--------------------------------------
/*const animal = {
     nombre: 'Snoopy',
     sonar(){
          console.log('Hago sonidos por que estoy vivo')
     }
}
const animal2 = {
     nombre: 'Lola',
     sonar(){
          console.log('Hago sonidos por que estoy vivo')
     }
}
console.log(animal)
console.log(animal2)*/

//Función constructora
// function Animal(nombre, genero){
//      this.nombre = nombre;
//      this.genero = genero;
//      this.sonar = function(){
//           console.log('Hago sonidos por que estoy vivo')
//      }
//      this.saludar = function(){
//           console.log(`Hola me llamo ${this.nombre}`)
//      }
// }
function Animal(nombre, genero){
     this.nombre = nombre;
     this.genero = genero;

}
//Metodos agregados al prototipo de la funcion constructora para ahorrar memoria
Animal.prototype.sonar = function(){
     console.log('Hago sonidos por que estoy vivo')
}
Animal.prototype.saludar = function(){
     console.log(`Hola me llamo ${this.nombre}`)
}


// const snoopy = new Animal('Snoopy','Macho'),
//      lolaBunny = new Animal('Lola','Hembra')

// console.log(snoopy);
// console.log(lolaBunny)
// snoopy.sonar()
// snoopy.saludar()
// lolaBunny.sonar()
// lolaBunny.saludar()

//! ---------------------------------------Herencia---------------------------------------

function Perro(nombre, genero,tamanho){
     this.super = Animal;
     this.super(nombre,genero);
     this.tamanho = tamanho;
}
// Perro está heredando de Animal en esta linea
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;
//Sobreescritura de metodos del prototipo padre en el hijo
Perro.prototype.sonar = function(){
     console.log('Soy un Perro y mi sonido es un ladrido')
}
Perro.prototype.ladrar = function(){
     console.log('Guau guau!')
}

const snoopy = new Perro('Snoopy','Macho','Mediano'),
     lolaBunny = new Animal('Lola','Hembra')

console.log(snoopy);
console.log(lolaBunny)
snoopy.sonar()
snoopy.saludar()
lolaBunny.sonar()
lolaBunny.saludar()

//! -----------------------------------------Clases-----------------------------------------
//!-----------Setters y getters
//? Función constructora
class Animal{
     constructor(nombre,genero){
          this.nombre = nombre;
          this.genero = genero;
          this.sonar = function(){
               console.log('Hago sonidos por que estoy vivo')
          }
     }
     sonar(){
          console.log('Hago sonidos por que estoy vivo')
     }
     saludar(){
          console.log(`Hola me llamo ${this.nombre}`)
     }
}

class Perro extends Animal{
     constructor(nombre,genero,tamanho){
          super(nombre,genero);
          this.tamanho = tamanho;
          this.raza = null;
     }
     sonar(){
          console.log('Soy un perro y mi sonido es un ladrido')
     }
     ladrar(){
          console.log('Guau Guau')
     }
     static queEres(){
          console.log('No sé gg')
     }
     get getRaza(){
          return this.raza;
     }
     set setRaza(raza){
          this.raza = raza
     }
}


const mimi = new Animal('Mimi','Hembra'),
     scooby = new Perro('Scooby','Macho','Gigante')
console.log(mimi)
console.log(scooby)
mimi.saludar();
scooby.sonar();
Perro.queEres();
console.log(scooby.getRaza)
scooby.setRaza = "Gran danés"
console.log(scooby.getRaza)

//!-----------------------------Object console-----------------------------

console.log(console);
console.error('esto es un error');
console.warn('Esto es un aviso')
console.info('Esto es un mensaje informativo')
console.log('un registro de lo que ha pasado en nuestra aplicacion')

let nombre = 'jon',
     apellido = 'mircha',
     edad = 35

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es %s %s y tengo %d años`,nombre,apellido,edad)

console.groupCollapsed('Curso de jonmircha de javascript')
console.log('Curso de Flexbox')
console.log('Curso de Node')
console.log('Curso de React')
console.log('Curso de PHP')
console.log('Curso de css')
console.groupEnd();

console.log(console);
console.table(Object.entries(console).sort())

const numeros = [1,2,3,4,5,6]
     vocales = ['a','b','c','d','e']

console.table(numeros);
console.table(vocales);

const perro = {
     nombre: 'boni',
     raza: 'Boxer',
     color: 'cafe'
}
console.table(perro);

console.time('Cuanto tiempo tarda mi codigo');
const arreglo = Array(1000000);

for (let i = 0; i < Array.length; i++){
     arreglo[i] = i
}
console.timeEnd('Cuanto tiempo tarda mi codigo')

for(let i = 0; i <= 100; i++){
     console.count('Codigo for');
     console.log(i)
}
let x = 3,
     y = 2,
     pruebaXY = 'Se espera que x siempre sea menor que y'

console.assert(x<y,(x,y,pruebaXY));

//! ------------------------------Date------------------------------
console.log(Date())

let fecha = new Date();
console.log(fecha);
//dia del mes
console.log(fecha.getDate());
//dia de la semana DLM MI J V S -> 0123456
console.log(fecha.getDay());
//MES Ene Feb Marz.....
// Dic -> 0 1 2 3 4 5 6 7 8 9
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log('1#####################')
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log('2#####################')
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log('3#####################')
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());
console.log(Date.now());
let cumplejon = new Date(1984,4,23);
console.log(cumplejon)

//! ----------------------------Objeto Math----------------------------

console.log(Math)
console.log(Math.PI);
console.log(Math.abs(-7.8));
console.log(Math.ceil(7.2));
console.log(Math.floor(7.8));
console.log(Math.round(7.49));
console.log(Math.sqrt(81));
console.log(Math.pow(2,5));
console.log(Math.sign(-0.3)) //-1 0 1
console.log(Math.random());
console.log(Math.round(Math.random() * 1000));

//! -----------------------Operador de Cortocircuito-----------------------
function saludar(nombre){
     nombre = nombre || 'Desconocido'
     console.log(`Hola ${nombre}`)
}
saludar('jon');
saludar();

console.log('Cadena'||'Valor de la derecha')
console.log(19||'Valor de la derecha')
console.log(true||'Valor de la derecha')
console.log([]||'Valor de la derecha')
console.log({}||'Valor de la derecha')
console.log(false||'Valor de la derecha')
console.log(null||'Valor de la derecha')
console.log(undefined||'Valor de la derecha')
console.log(''||'Valor de la derecha')
console.log(-2||'Valor de la derecha')
console.log(0||'Valor de la derecha')

console.log('Cadena'&&'Valor de la derecha')
console.log(19&&'Valor de la derecha')
console.log(true&&'Valor de la derecha')
console.log([]&&'Valor de la derecha')
console.log({}&&'Valor de la derecha')
console.log(false&&'Valor de la derecha')
console.log(null&&'Valor de la derecha')
console.log(undefined&&'Valor de la derecha')
console.log(''&&'Valor de la derecha')
console.log(-2&&'Valor de la derecha')
console.log(0&&'Valor de la derecha')

//! ---------------------------Ingreso de datos---------------------------

let alerta = alert('Hola esto es una alerta')
let confirmacion = confirm('Hola esto es una confirmación') //Devuelve True o False
let aviso = prompt('Hola esto es un aviso y permite al usuario agregar un valor')

console.log(alerta)
console.log(confirmacion)
console.log(aviso)

//! --------------------------Expresiones Regulares--------------------------

let cadena = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor maxime cupiditate pariatur nam repellat optio dolorem eligendi vero non similique adipisci tenetur ipsam quia quaerat quidem, fugiat libero rem sit? Deleniti repellendus saepe laboriosam?'

let expReg = new RegExp('lorem','ig');
console.log(expReg.test(cadena));
console.log(expReg.exec(cadena))

let expReg2 = /lorem/ig;
let exReg3 = /\[]/ig;
let exReg3 = /lorem{3}/ig;

//! ----------------------Funciones anonimas autoejecutables----------------------

(function(){
     console.log('versión clásica')
})();

((function(){
     console.log('Versión Crockford')
})());

+function(){
     console.log('Versión Unaria')
}
!function(){
     console.log('Versión Facebook')
}();

(function(d,w,c){
     c.log(d)
     c.log(w)

})('documento','window',console)

//!------------------------------------JavaScript Síncrono------------------------------------
console.log('Inicio');

function dos(){
     console.log('Dos');
};

function uno(){
     console.log('Uno');
     dos();
     console.log('Tres');
}
uno();
console.log('Fin'); //?Resulatdo Inicio Uno Dos Tres FIN

//!------------------------------------Javascript Asincrono------------------------------------

console.log('Inicio');

function dos(){
     setTimeout(() => {
          console.log('Dos');
     }, 1000);
}
function uno(){
     setTimeout(() => {
          console.log('Uno');
     }, 1000);
     console.log('Tres');
}
uno();
console.log('Fin'); //? Inicio Tres Fin Uno Dos

//!------------------------------------Callback------------------------------------
function cuadradoCallback(value,callback){
     setTimeout(() => {
          callback(value, value * value)
     }, 0|Math.random() * 100);
}

cuadradoCallback(0,(value,result) =>{
     console.log('Inicia callback')
     console.log(`Callback ${value},${result}`)
     cuadradoCallback(1,(value,result) =>{
          console.log(`Callback ${value},${result}`)
          cuadradoCallback(2,(value,result) =>{
               console.log(`Callback ${value},${result}`)
               cuadradoCallback(3,(value,result) =>{
                    console.log(`Callback ${value},${result}`)
                    cuadradoCallback(4,(value,result) =>{
                         console.log(`Callback ${value},${result}`)
                         console.warn('Callback hell 👹😈')
                    })
               })
          })
     })
})

//! ----------------------------------Promesas----------------------------------

function cuadradoPromise(value) {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve({value: value,result: value * value});
          }, 0 | Math.random() * 100);
     });
}

cuadradoPromise(0)
     .then((obj)=>{
          console.log('Inicia promise');
          console.log(`La promesa necibe el valor ${obj.value}, y el resultado ${obj.result}`);
          return cuadradoPromise(1)
     })
     .then((obj)=>{
          console.log(`La promesa necibe el valor ${obj.value}, y el resultado ${obj.result}`);
          return cuadradoPromise(2)
     })
     .then((obj)=>{
          console.log(`La promesa necibe el valor ${obj.value}, y el resultado ${obj.result}`);
          return cuadradoPromise(3)
     })
     .then((obj)=>{
          console.log(`La promesa necibe el valor ${obj.value}, y el resultado ${obj.result}`);
          return cuadradoPromise(4)
     })
     .then((obj)=>{
          console.log(`La promesa necibe el valor ${obj.value}, y el resultado ${obj.result}`);
          return cuadradoPromise(5)
     })
     .then((obj)=>{
          console.log(`La promesa necibe el valor ${obj.value}, y el resultado ${obj.result}`);
     })
     .catch()

//! --------------------------------------Symbols--------------------------------------

let id = Symbol('id');
let id2 = Symbol('id2')

console.log(id === id2);
console.log(id, id2);
console.log(typeof id, typeof id2);
const NOMBRE = Symbol();
const SALUDAR = Symbol();

const persona = {
     [NOMBRE]: 'jon',
     edad: 35
}
console.log(persona);

persona.NOMBRE = 'Jonata MirCha'
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE])

persona[SALUDAR] = function(){
     console.log(`Hola`);
}

console.log(persona);
persona[SALUDAR]();

//! -----------------------------------------Sets-----------------------------------------

const set = new Set([1,2,3,4,5,6,5,4,true,false,false,{},{},'hola','HOLA'])

console.log(set)
console.log(set.size);

const set2 = new Set();
set2.add(123);
set2.add(123);
set2.add(22);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(false);
set2.add('Hola');

console.log(set2);

console.log('Recorriendo set');
for(item of set){
     console.log(item);
}

set2.forEach(item => console.log((item)));
let array = Array.from(set);
console.log(array[0]);

console.log(set.has('hola'));
console.log(set.has('gg'))

//! ----------------------------------------Maps----------------------------------------
let mapa = new Map();
mapa.set('Nombre','Jon');
mapa.set('Apellido','MirCha');
mapa.set('edad',35);
mapa.set('Genero','Masculino');

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has('correo'));
console.log(mapa.has('nombre'));
console.log(mapa.has('edad'));

mapa.set('nombre','Jonathan MirCha');

console.log(mapa.get('nombre'));

mapa.delete('apellido');

console.log(mapa);

mapa.set(19,'diecinueve');
mapa.set(false,'falso');
mapa.set({},{});

for(let [key,value] of mapa){
     console.log(`Llave ${key}, Valor: ${value}`)
}

const mapa2 = new Map([
     ['nombrem','kenai'],
     ['edad',7],
     ['animal','perro'],
     [null,'nulo']
])

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);

//! --------------------------------Weak Sets & Weak Maps--------------------------------

const weakSet = new WeakSet();

let valor1 = {'valor1':1};
let valor2 = {'valor1':2};
let valor3 = {'valor1':3};

weakSet.add(valor1);
weakSet.add(valor2);

console.log(weakSet);

console.log(weakSet.has(valor1));
console.log(weakSet.has(valor2));

weakSet.delete(valor2);
console.log(weakSet);

weakSet.add(valor2);
weakSet.add(valor3);
console.log(weakSet);

setInterval(() => console.log(weakSet), 1000);

setTimeout(() => {
     valor1 = null;
     valor2 = null;
     valor3 = null;
}, 6000);

//? -----------------------Weak map-----------------------

let weakMap = new Map();

let llave1 = {};
let llave2 = {};
let llave3 = {};

weakMap.set(llave1,1);
weakMap.set(llave2,2);
console.log(weakMap);

console.log(weakMap.has(llave1));
console.log(weakMap.has(llave3));

console.log(weakMap.get(llave1));
console.log(weakMap.get(llave2));
console.log(weakMap.get(llave3));

weakMap.delete(llave2);
console.log(weakMap);

weakMap.set(llave2,2);
weakMap.set(llave3,3);
console.log(weakMap);

setInterval(() => console.log(weakMap), 1000);

setTimeout(() => {
     llave1 = null;
     llave2 = null;
     llave3 = null;
}, 6000);
//! ----------------------------------Iterables & iterators----------------------------------

const iterable = [1,2,3,4,5];

//? Accedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]();

console.log(iterable);