//--------------------Ejercicio1--------------------
const cuentaCaracteres = (cadena = "") => {
     (!cadena)
     ? console.error('No introdujiste una cadena')
     : (typeof cadena === 'number')
          ? console.error('No puedes introducir numeros en esta función')
          : console.log(`La cadena ${cadena} tiene ${cadena.length} caracteres`)
}
cuentaCaracteres(2)
cuentaCaracteres("Esta es un pruba para verificar el funcionamiento correcto")
//-------------------Ejercicio 2-------------------
let repeticiones = 5

for(i = 0; i < repeticiones; i++){
     console.log('Hola mundo')
}
/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/