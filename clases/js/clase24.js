// Verdad oculta sobre ñas clases en JavaScript
//ejemplo crear un prototipo de persona mediante definir una funcion

//8.-
function heredaDe(prototipoHijo, prototipoPadre) {
    let fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

//1.-
function Persona(nombre,apellido,altura) {  
  //3.-
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

//NOTA: todas las funciones se deben definir juntas
//2.-
Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.aplello}`)
}
//5.-
Persona.prototype.soyAlto = function () {
    debugger
    return this.altura > 1.8
}

//6.-
 function Desarrollador (nombre,apellido) {
    this.nombre = nombre
    this.apellido = apellido
 }

//9.-
heredaDe(Desarrollador, Persona)

 //7.-
 Desarrollador.prototype.saludar = function () {
     console.log(`Hola, mellamo ${this.nombre} ${this.apellido} y soy desarrolladora`)
 }

 //3.-
/*let pame = new Persona('Pamela', 'Torres', 1.60)
let sacha = new Persona('Erika', 'Lifszyc', 1.85)
let erika = new Persona('Erika', 'Luna', 1.75)*/
