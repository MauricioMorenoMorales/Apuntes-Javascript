/*
!2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
!3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
!4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

//*----------------------------------------Ejercicio1----------------------------------------
const cuentaCaracteres = (cadena = '') => {
     (!cadena)
          ? console.error('No introdujiste una cadena')
          : (typeof cadena === 'number')
               ? console.error('No puedes introducir numeros en esta función')
               : console.log(`La cadena ${cadena} tiene ${cadena.length} caracteres`)
}
cuentaCaracteres(2)
cuentaCaracteres("这是寻找正确操作的测试")
//*----------------------------------------Ejercicio2----------------------------------------
const recortaCaracteres = (cadena = '', longitud = '') => {
     if (!cadena) return console.error('No introdujiste una cadena')
     if (typeof cadena === 'number') return console.error('No puedes introducir numeros en la cadena')
     if (!longitud) return console.error('Tienes que introducir la cantidad de elementos que deseas imprimir')
     if (typeof longitud === 'string') return console.error('Tienes que introducir almenos la cantidad de elementos que deseas imprimir en numeros y no en letras ')
     if (longitud < 1) return console.error('Tienes que permitir que se imprima almenos un caracter para que la función trabaje bien')
     console.log(cadena.slice(0, longitud))
}
recortaCaracteres()
recortaCaracteres(12,2)
recortaCaracteres('不好')
recortaCaracteres('不好','不好')
recortaCaracteres('不好',-1)
recortaCaracteres('大家好，叫我毛，很好高兴认识你',3)
recortaCaracteres('我很喜欢小猫，我有两个，很可爱',5)

//*----------------------------------------Ejercicio3----------------------------------------
const separaCadenas = (cadena = '') => {
     (!cadena)
          ? console.error('No introdujiste una cadena')
          : (typeof cadena === 'number')
               ? console.error('No puedes introducir numeros en esta función')
               : console.log(cadena.split(' '))
}
separaCadenas('Hola mundo')
separaCadenas()
separaCadenas(1243)
separaCadenas('我 现在 在 学习 这个，这是 一点 难')
//*----------------------------------------Ejercicio4----------------------------------------
/*const repetidor = (cadena = '', veces = '') => {
     (!cadena)
     ? console.error('No introdujiste una cadena')
     : (typeof cadena === 'number')
          ? console.error('No puedes introducir numeros en la cadena')
          : (!veces)
          ? console.error('Tienes que introducir la cantidad de veces que quieres repetir el codigo')
          : (typeof veces === 'string')
               ? console.error('Tienes que introducir un numero en la cantidad de veces que deseas repetir el codigo')
               :(veces < 1)
                    ? console.error('Tienes que almenos introducir una repetición de la cadena que deseas repetir')
                    : for (let i =0; i<veces; i++){
                         console.log(cadena)
                    }
}*/
const repetidor = (cadena = '', veces = '') => {
     if (!cadena) return console.error('No introdujiste una cadena')
     if (typeof cadena === 'number') return console.error('No puedes introducir numeros en la cadena')
     if (!veces) return console.error('Tienes que introducir la cantidad de veces que quieres repetir el codigo')
     if (typeof veces === 'string') return console.error('Tienes que introducir un numero en la cantidad de veces que deseas repetir el codigo')
     if (veces < 1) return console.error('Tienes que almenos introducir una repetición de la cadena que deseas repetir')
     for (let i = 0; i < veces; i++) {
          console.log(cadena)
     }
}
repetidor()
repetidor(12, 2)
repetidor('不好')
repetidor('不好', '不好')
repetidor('不好', -1)
repetidor('大家好，叫我毛，很好高兴认识你', 3)
repetidor('我很喜欢小猫，我有两个，很可爱', 5)

/*
     !5) Programa una función que invierta las palabras de una cadena de texto, pe. miFunci("HolaMundo") devolverá "odnuM aloH".
     !6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
     !7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
     !8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

*/
//*----------------------------------------Ejercicio5----------------------------------------
const invierteCadenas = (cadena = '') =>
     (!cadena)
          ? console.warn('Debes de introducir una cadena')
          : (typeof cadena === 'number')
               ? console.warn('Solo se acepta texto no numeros')
               : console.log(cadena.split("").reverse().join(''))


invierteCadenas('大家好我是毛')
invierteCadenas(1234)
//*----------------------------------------Ejercicio6----------------------------------------
const textoEnCadena = (cadena = '', texto = '') => {
     if (!cadena) return console.warn('Debes de introducir un texto en la función')
     if (!texto) return console.warn('No ingresaste la palabra a evaluar')
     let i = 0,
          contador = 0
     while (i !== -1) {
          i = cadena.indexOf(texto, i);
          if (i !== -1) {
               i++
               contador++
          }
     }
     return console.info(`La palabra ${texto} se repite ${contador} veces`)
}
textoEnCadena('hola mundo adios mundo digo mundo muchas veces jaja mundo', 'mundo')
//*----------------------------------------Ejercicio7----------------------------------------
debugger
const detectaPalindromo = (texto = '') => {
     if (!texto) return console.log('Debes de introducir un texto en la función');
     texto = texto.toLowerCase();
     let palindromo = texto.split('').reverse().join('');
     (texto === palindromo)
          ? console.log(`El texto ${texto} leido alrevés sería ${palindromo}, por lo tanto si es un palindromo`)
          : console.log(`El texto ${texto} leido alrevés sería ${palindromo}, por lo tanto no es un palindromo`)
}
detectaPalindromo('bob')
//*----------------------------------------Ejercicio8----------------------------------------
/*
!9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
!10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
!11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/
//*----------------------------------------Ejercicio9----------------------------------------
//
const numeroAleatorio = () => {return console.log(Math.round(Math.random() * 100 + 500))};

numeroAleatorio();
//*----------------------------------------Ejercicio10----------------------------------------
const capicua = (numero = undefined) => {
     if(!numero) return console.error('Tienes que introducir un numero')
     if(typeof numero !== 'number') return console.error('Tienes que introducir un numero no texto')

     numero = numero.toString();
     let capicua = numero.split('').reverse().join('');
     return(numero === capicua)
          ? console.info(`El numero ${numero} leido alrevés es ${capicua} por lo tanto es capicua`)
          : console.warn(`El numero ${numero} leido alrevés es ${capicua} por lo tanto no es capicua`)
}

capicua();
capicua('不好')
capicua(22);
capicua(501);
//*----------------------------------------Ejercicio11----------------------------------------
const factorial = (numero = undefined) => {
     if(!numero && numero !== 0) return console.error('Tienes que introducir un numero')
     if(typeof numero !== 'number') return console.error('Tienes que introducir un numero no texto')
     if(numero < 1) return console.error('Tienes que introducir un numero mayor o igual a uno')

     let factorial = 1
     for(let i = numero; i > 1; i--){
          factorial*=i;
     }
     return console.info(`El numero ${numero} tiene un factorial de ${factorial}`)
}
factorial(3);
factorial(1);

/*
!12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
!13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
!14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/