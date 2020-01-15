//Como funcionan las clases en JS
//ejemplo crear un prototipo de persona mediante definir una funcion

//1.-
function Persona(nombre,apellido, altura) {  
  //3.-
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

//2.-
Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.aplello}`)
}

Persona.prototype.laAltura = function () {
    console.log(`Y esta es mi altura ${this.altura} mts ${this.altura > 1.80 ? 'Soy alt@' :'Soy bajit@'}`)
}

let pame = new Persona('Pamela', 'Torres', 1.60)
let sacha = new Persona('Erika', 'Lifszyc', 1.85)
let erika = new Persona('Erika', 'Luna', 1.75)

pame.saludar()
pame.laAltura()
sacha.saludar()
sacha.laAltura()
erika.saludar()
erika.laAltura()