// Clases en JavaScript
//ejemplo crear un prototipo de persona mediante definir una funcion


//1.- modificando con la palabra class
class Persona {
   constructor (nombre,apellido,altura) {  
    //3.-
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  //2 NOTA:  tambien se le agrega el saludar
  saludar() {
      // 3sele coloca el cuerpo de saludar
      console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
  }
  //3 Se coloca el metodo soy alto
  soyAlto() {
    return this.altura > 1.8
  }
}

//4 crear clase desarrollador con herencia o extención
class Desarrollador extends Persona {
    constructor(nombre,apellido, altura) {
        //para llamar el constructor de la clase padre antes del this
        super(nombre, apellido, altura)
       
    }
    // pisamos el metodo saludar y lo colocamos dentro de la clase
    saludar () {
        console.log(`Hola, mellamo ${this.nombre} ${this.apellido} y soy desarrolladora`)
    }
 }

 //3.-
/*let pame = new Persona('Pamela', 'Torres', 1.60)
let sacha = new Persona('Erika', 'Lifszyc', 1.85)
let erika = new Persona('Erika', 'Luna', 1.75)*/
