function NewFunction(name, age, country){
     var name = name || 'oscar';
     var age = age || 32;
     var country = country || 'mexico';
     console.log(name, age, country);
}
//// es6
function NewFunction2(name = 'oscar', age = 32, country = 'mexico'){
     console.log(name, age, country)
}
NewFunction2();
NewFunction2('Ricardo','23','Colombia')

//
let hello = "Hello";
let world = "World";
let epicPhrase = hello + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
////Saltos de linea
let lorem = 'Qui consequatur comodi ipsun vel duis yet minima \n'
+ 'Otra frase que necesitamos'

let lorem2 = `otra frase que necesitamos
ahora es otra frase epica`; 
console.log(lorem);
console.log(lorem2);
/////////////////////////////////////////////// Destructuring
let person = {
     'name': 'oscar',
     'age': 32,
     'country': 'mx'
}
console.log(person.name, person.age)
////Se escribe mejor como abajo
let {name, age, country} = person;
console.log(name, age, country);
//////////////////////////////////////////////Spread-operator
let team1 =['Oscar', 'Julian','Ricardo']
let team2 = ['Valeria', 'Yesica' , 'Camila']

let education = ['David', ...team1, ...team2];

console.log(education);
///////////////////////////////////////////////
{
     var globalVar = 'global var';
}
{
     let globalLet = 'Global Let';
     console.log(globalLet);
}
console.log(globalVar)

/////////////////////////____________________Arrow Functions Promesas y parametros en objetos____________________
// Parametros en objeto

let name ='oscar';
let age = 32

obj = {
     name: name,
     age: age       //Así se construia un objeto en base a las variables antes
}

obj2 = {name, age}; //Asi se construye un objeto ahora
console.log(obj2);
/////////////////Arrow Functions

const names = [
     {name: 'oscar', age:32,},
     {name: 'yesica', age: 27}
]
let lisOfNames = names.map(
     function (item){
          console.log(item.name)
})

let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age, country) => {
     console.log(item.name)
}

const listOfNames4 = name => {
     console.log(name)
}
var num = 3
const square = num => num * num
////////////Promesas

const helloPromise = () => {
     return new Promise ((resolve, reject) => {
          if(true){
               resolve('Hey!')
          }else{
               reject('Ups!')
          }
     })
}
helloPromise()
     .then(response => console.log(response))
     .then(() => console.log('hola'))
     .catch(error => console.log(error));
     
// //      composicion - newPromise()
// // resolve() - comportamiento al cumplir la promesa
// // reject() - comportamiento al fallar la promesa
// // .then (⇒) - obtener el valor del resolve
// // .error(⇒) - obtener el valor del rejec
//!__________________________________
/////////////---------------------------------Clases modulos y generadores
class calculator {
     constructor(){
          this.valueA = 0;
          this.valueB = 0;
     }
     sumar(valueA,valueB){ 
          this.valueA = valueA;
          this.valueB = valueB;
          return this.valueA + this.valueB;
     }
}
const calc = new calculator();
console.log(calc.sumar(2,2))

/////////Modulos
import hello from './module'
console.log(hello());

import {hello, bye as byeGreeting} from './module'
console.log(hello())
console.log(byeGreeting)

////////////////////Generadores
function* helloWorld(){
     if(true){
          yield 'Hello'
     }
     if (true) {
          yield 'World';
     }
}
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

//! -----------------------ES7 Includes and **-----------------------
let numbers = [1,2,3,4,5,6,7];
if(numbers.includes(7)){
     console.log('Sí se encuentra el valor 7')
}else{
     console.log('No se encuentra.')
}

let base = 4;
let exponente = 2;
let result = base**exponente

console.log(result);

//! -----------------------ES8 Object entries and padd----------------------
// Object.entries
const data = {
     frontend: 'Juan',
     backend: 'Carlos',
     design: 'Ana',
}
const entries = Object.entries(data)
const key = Object.keys(data)
const values = Object.values(data)
console.log(entries.length)
console.log(key)
console.log(values);

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(7, ' hi'));
console.log('food'.padEnd(12, '56789012345'))

//* ------------------------------Async Await------------------------------
const helloWorld = () => {
     return new Promise((resolve, reject) => {
          (true)
               ? setTimeout(() => resolve('Hello Wolrd'), 3000)
          : reject(new Error('Test Error'))
     })
}

const HelloAsync = async () => {
     const hello = await helloWorld();
     //const Hello2 = await helloworld2();
     console.log(hello);
}
HelloAsync();

const anotherFunction = async () => {
     try {
          const hello = await helloWorld();
          console.log(hello);
     } catch (error) {
          console.log(error);
     }
}
anotherFunction();
//! -----------------------ES9  rest spread properties, finally, ReGex----------------------
const obj = {
     name: 'oscar',
     age: 32,
     country: 'mx',
}
let {country, ...all} = obj; //Country se desestructuro, en all se guardan las demas entries
console.log(country)
console.log(all.age)

/////////////

const obj = {
     name: 'Oscar',
     age : 32
}
const obj1 = {
     ...obj,
     country: 'mx'
}
console.log(obj1);
/////////////////////

const helloWorld = () => {
     return new Promise((resolve, reject) => {
          (true)
          ? setTimeout(() => resolve('Hello World'), 3000)
               : reject(new Error('Test Error'))
     });
};

helloWorld()
     .then(response => console.log(response))
     .catch(error => console.log(error))
     .finally(() => console.log('Finalizo'))

///////////////////

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year,month,day);

//! ----------------------- ES9 ----------------------

//* Array flat
let array = [1,2,3, [1,2,3,[1,2,3]]];
console.log(array.flat(2));

let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value *2 ]));

let hello = '             hello wolrd'
console.log(hello),
console.log(hello.trimStart());

let hello = 'Hello World           '
console.log(hello)
console.log(hello.trimEnd());

//* Optional catch binding

try{

}catch(error){
     error
}
///-Se escribe mejor
try{

}catch{
     error
}

//*Symbol

let entries = [["name", "oscar"], ["age", 32]];

console.log(Object.fromEntries(entries));

let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);