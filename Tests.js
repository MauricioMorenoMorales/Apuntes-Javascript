function ShortLongShort(a, b){
     let long = 0
     let short = 0
     if(a < b){
          short = a
          long = b
     }else{
          short = b
          long = a
     }
     return `${short}${long}${short}`
}

console.log(ShortLongShort(5,7))