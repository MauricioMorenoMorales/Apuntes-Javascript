//! Revisa si un numero es divisible entre otros 2

const isDivideBy = (number, a, b) => {return (number % a === 0 && number % b === 0)}

console.log(isDivideBy(12, 6, 3))
console.log(isDivideBy(12, 5, 3))

//!Llena un array como el ejemplo de abajo
//? arr(5) // [0,1,2,3,4]

llenadordeArrays = (n) => {
    var newArray = []
    for(let i = 0; i < n; i++){
        newArray.push(i)
    }
    return newArray
}
console.log(llenadordeArrays(5))

// || Clever
arr = n => n ? [...Array(n).keys()] : [];
console.log(arr(7))

console.log(...Array(4).keys())

//!Si en un string de numeros el numero es menor a 5 se remplaza con 0, si es mayor se remplaza con 1

function fakebin(x){
    return x.split('').map(n => n < 5 ? 0 : 1).join('')
}
console.log(fakebin('9389538453'))

//*Alternative

function fakebin(string){
    let response = ""
    for(let i = 0; i < string.length; i++){
        if(Number(string[i] >= 5)){
            response += "1"
        }else{
            response += "0"
        }
    }
    return response
}
console.log(fakebin('0123456789'))