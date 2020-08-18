
/////------------------------------Boolean------------------------------
////Truthy & Falsy
//// Null Undefined NaN

/////////--------------------------Array-------------------------------

const c = Array.of('X','Y','Z',0,9,3,4);

const d = Array(100).fill(false)

const colores = ['Verde','rojo','azul','morado'];
colores.push('negro')
colores.pop()

/////////////-----------------Object-------------------------------
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

/////////---------------------Control de Flujo------------------------------

//////////////-----------------------------For--------------------------------
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

/////--------------------------------Detección de errores--------------------------------
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
//////// --------------------------------------Prototipos--------------------------------------
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

// ---------------------------------------Herencia---------------------------------------

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

//// -----------------------------------------Clases-----------------------------------------
////-----------Setters y getters
//Función constructora
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

//-----------------------------Object console-----------------------------

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

////// ------------------------------Date------------------------------
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

// ----------------------------Objeto Math----------------------------

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

// -----------------------Operador de Cortocircuito-----------------------
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

//// ---------------------------Ingreso de datos---------------------------

let alerta = alert('Hola esto es una alerta')
let confirmacion = confirm('Hola esto es una confirmación') //Devuelve True o False
let aviso = prompt('Hola esto es un aviso y permite al usuario agregar un valor')

console.log(alerta)
console.log(confirmacion)
console.log(aviso)

// --------------------------Expresiones Regulares--------------------------

let cadena = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor maxime cupiditate pariatur nam repellat optio dolorem eligendi vero non similique adipisci tenetur ipsam quia quaerat quidem, fugiat libero rem sit? Deleniti repellendus saepe laboriosam?'

let expReg = new RegExp('lorem','ig');
console.log(expReg.test(cadena));
console.log(expReg.exec(cadena))

let expReg2 = /lorem/ig;
let exReg3 = /\[]/ig;
let exReg3 = /lorem{3}/ig;

// ----------------------Funciones anonimas autoejecutables----------------------

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