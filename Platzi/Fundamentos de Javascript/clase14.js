//////////-----------------------------------------------Arrow Functions-----------------------------------------------

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

const MAYORIA_DE_EDAD = 18// buena práctica definir las constantes en mayúsculas y separadas de _

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD // retorna true o false， solo funciones que retornan algo

function imprimirSiEsMayorDeEdad(persona) {
     if (esMayorDeEdad(persona)) {
          console.log(`${persona.nombre} es mayor de edad`)
     } else {
          console.log(`${persona.nombre} es menor de edad`)
     }
}
imprimirSiEsMayorDeEdad(sacha)
imprimirSiEsMayorDeEdad(juan)

const permitirAcceso = ({ edad }) => !esMayorDeEdad({ edad }) ? console.log('Acceso denegado') : console.log('Adelante')

permitirAcceso(sacha)

/////-----------------------------Estructuras repetitivas for-----------------------------

var sacha = {
     nombre : 'sacha',
     apellido : 'yakovlev',
     edad : 22,
     peso : 75
}
console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg`)

const VARIACION_DE_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentar_de_peso = (persona) => persona.peso += VARIACION_DE_PESO
const adelgazar = (persona) => persona.peso -=VARIACION_DE_PESO


for(var i = 1; i < DIAS_DEL_ANO; i++){
     var random = Math.random()
     if (random < 0.25){
          aumentar_de_peso(sacha)
     }
     else if(random < 0.5){
          adelgazar(sacha)
     }
}

console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}kg`)

const numMax = 10
const numMin = 1

const numRandom = () => Math.round(Math.random() * (numMax - numMin) + numMin)
console.log(numRandom())

// -----------------------------16 Estructuras repetitivas while-----------------------------

var sacha = {
     nombre : 'sacha',
     apellido : 'yakovlev',
     edad : 22,
     peso : 75
}
console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg`)

const VARIACION_DE_PESO = 0.3
const DIAS_DEL_ANO = 365
const META = sacha.peso -3
var dias = 0
const COMEMUCHO  = () => Math.random() < 0.3
const REALIZADEPORTE = () => Math.random() < 0.4
const aumentar_de_peso = (persona) => persona.peso += VARIACION_DE_PESO
const adelgazar = (persona) => persona.peso -=VARIACION_DE_PESO

while(sacha.peso > META){
     if(COMEMUCHO()){
          aumentar_de_peso(sacha)
     }
     if(REALIZADEPORTE()){
          adelgazar(sacha)
     }
     dias += 1
}


console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}kg`)
console.log(`Pasaron ${dias} días hasta que ${sacha.nombre} adelgazó 3kg `)

// --------------------------------------17 Do While--------------------------------------
var contador = 0
const llueve = () => Math.random() < 0.25

do{
     contador++
}while(!llueve())

if(contador === 1){
     console.log(`Marquitos salio a ver ${contador} vez si estaba lloviendo`)
}
else{
     console.log(`Marquitos salio a ver ${contador} veces si estaba lloviendo`)
}

/// ---------------------------------Condicional multiple switch---------------------------------

const horoscopos = {
     aries: '21 marzo - 19 abril',
     tauro: '20 abril - 20 mayo',
     geminis: '21 mayo - 20 junio',
     cancer: '21 junio - 22 julio',
     leo: '23 julio - 22 agosto',
     virgo: '23 agosto - 22 septiembre',
     libra:'23 septiembre - 22 octubre',
     escorpion: '23 octubre - 21 noviembre',
     sagitario: '22 noviembre - 21 diciembre',
     capricornio: '22 diciember - 19 enero',
     acuario: '20 enero - 18 febrero',
     piscis: '19 febrero - 20 marzo'
};

 // Evalua el signo y regresa el horóscopo
const calcularSigno = function(signo){
     switch(signo.toLowerCase()){
          case'aries':
               console.log(horoscopos.aries);
               break;
          case'tauro':
               console.log(horoscopos.tauro);
               break;
          case'geminis':
          case'géminis':
               console.log(horoscopos.geminis);
               break;
          case'cancer':
          case'cáncer':
               console.log(horoscopos.cancer);
               break;
          case'leo':
               console.log(horoscopos.leo);
               break;
          case'virgo':
               console.log(horoscopos.virgo);
               reak;
          case'libra':
               console.log(horoscopos.libra);
               break;
          case'escorpion':
          case'escorpión':
               console.log(horoscopos.escorpion);
               break;
          case'sagitario':
               console.log(horoscopos.sagitario);
               break;
          case'capricornio':
               console.log(horoscopos.capricornio);
               break;
          case'acuario':
               console.log(horoscopos.acuario);
               break;
          case'piscis':
               console.log(horoscopos.piscis);
               break;
          default:
               console.log('Ese signo no existe');
               break;
     }
};
calcularSigno('libra')
///////////------------------------------Arrays-------------------------------------
