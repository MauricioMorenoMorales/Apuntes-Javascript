
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
}


const mimi = new Animal('Mimi','Hembra'),
     scooby = new Perro('Scooby','Macho','Gigante')
console.log(mimi)
console.log(scooby)
mimi.saludar();
scooby.sonar();
Perro.q