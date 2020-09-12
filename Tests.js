function persona(nombre,apellido,edad){
     this.nombre = nombre
     this.edad = edad
     this.apellido = apellido
     return this
}
persona.prototype.saludar = function(){
     console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}
persona.prototype.darEdad= function(){
     (this.edad >= 18)
          ? console.log(`Tengo ${this.edad} anhos por lo tanto soy mayor de edad`)
          : console.log(`Tengo ${this.edad} por lo tanto estoy morro`)
}

const mauricio = new persona('Mauricio','Moreno',17);
mauricio.saludar();
mauricio.darEdad();
debugger
function multiply(a, b){
     return a * b
}
console.log(multiply(2,2))