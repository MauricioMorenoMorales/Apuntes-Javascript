const summation = num => {
     let result = 0
     for(var i = 0; i <= num; i++){
          result += i
     }
     return result
}

console.log(summation(3))