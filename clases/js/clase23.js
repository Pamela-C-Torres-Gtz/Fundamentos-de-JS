// Contexto de las funciones  en JS
//ejemplo crear un prototipo de persona mediante definir una funcion

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

//3.-
let pame = new Persona('Pamela', 'Torres', 1.60)
let sacha = new Persona('Erika', 'Lifszyc', 1.85)
let erika = new Persona('Erika', 'Luna', 1.75)


