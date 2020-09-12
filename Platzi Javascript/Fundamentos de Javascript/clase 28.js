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