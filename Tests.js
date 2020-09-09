((function(c,n){
     c.log(`Hola y bienvenido ${n}`)
})(console, 'Mauricio'))

let fecha = new Date();

console.log(fecha.getFullYear())
console.log(fecha.getMonth() && 'El andpersant procede si es verdadero')
debugger
console.log('Inicio')

const uno = (opcional = 'una lugar indefinido')=>{
     console.log(`Funcion 1 llamada desde ${opcional}`)
     setTimeout(() => {
          console.log('xdxd')
     }, 2000);
}

const dos = (opcional = 'un lugar indefinido')=>{
     uno('funcion 2');
     setTimeout(() => {
          uno('Funcion 2 con set Timeout')
     }, 1000);
     console.log(`Función 2 llamada desde ${opcional}`)
}

uno();
dos();
uno('Llamado externo');

function cuadradoPromise(value){
     return new Promise((resolve,reject)=>{
          setTimeout(() => {
               resolve({value:value, result: value * value})
          }, 1000);
     });
};

cuadradoPromise(0)
     .then((obj)=>{
          console.log('Inicia promesa')
          console.log(`El valor de ${obj.value} da el resultado ${obj.result}`)
          return cuadradoPromise(1)
     })
     .then((obj)=>{
          console.log(`El valor de ${obj.value} da el resultado ${obj.result}`)
          return cuadradoPromise(2)
     })
     .then((obj)=>{
          console.log(`El valor de ${obj.value} da el resultado ${obj.result}`)
          return cuadradoPromise(3)
     })
     .then((obj)=>{
          console.log(`El valor de ${obj.value} da el resultado ${obj.result}`)
          return cuadradoPromise(4)
     })
     .then((obj)=>{
          console.log(`El valor de ${obj.value} da el resultado ${obj.result}`)
          return cuadradoPromise(5)
     })
