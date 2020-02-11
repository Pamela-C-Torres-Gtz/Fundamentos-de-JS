//ASINCRONISMO
//Funciones como parametros

//1.- modificando con la palabra class
class Persona {
    constructor (nombre,apellido,altura) {  
     //3.-
     this.nombre = nombre
     this.apellido = apellido
     this.altura = altura
   }
   //2 NOTA:  tambien se le agrega el saludar
   saludar(fn) {
       // 3sele coloca el cuerpo de saludar
       console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
       if (fn) {
           fn(this.nombre, this.apellido)
       }
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
     saludar (fn) {
         console.log(`Hola, mellamo ${this.nombre} ${this.apellido} soy desarrollador`)
         if (fn) {
             fn(this.nombre, this.apellido, true)
         }
     }
  }

  function responderSaludo(nombre, apellido, esDev) {
      console.log(`Buen día ${nombre} ${apellido}`)
     if (esDev) {
         console.log(`Mira, no sabía que eras desarrollad@r`)
     }
    }

    let sacha = new Persona('Sacha', 'Lifszyc', 1.72)
    let pame = new Persona('PAmela', 'Torres', 1.65)
    let arturo = new Desarrollador('Arturo', 'Martinez', 1.89)

    sacha.saludar()
    pame.saludar(responderSaludo)
    arturo.saludar(responderSaludo)