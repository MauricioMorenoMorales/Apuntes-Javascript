
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