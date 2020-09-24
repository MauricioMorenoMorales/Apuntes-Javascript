class calculator{
     constructor(){
          this.valueA = 0;
          this.valueB = 0;
          return this
     }
     sumar(valueA, valueB){
          this.valueA = valueA
          this.valueB = valueB
          return console.log(valueA + valueB)
     }
}

const calc = new calculator();
// calc.sumar(2,2)