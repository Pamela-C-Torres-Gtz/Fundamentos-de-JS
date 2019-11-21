//comenzamos a poner profeciones o jobies para ver si se cumplen 
 let sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    ingeniero: false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: true
}

let juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
}

//definimos una funcion para saber que profeciones tiene una persona.
 function imprimirProfeciones(persona) {
     console.log(`${persona.nombre} es: `)

     //este código nos ayuda para ejetutar si es verdadero
     //si la condicion no se cumple simplemente la funcion no se ejecuta
     if (persona.ingeniero) {
        console.log('Ingeniero')
     } else {
         console.log('No es ingeniero')
     }
     if (persona.cantante) {
        console.log('Cantante')
     }
    
 }

//clase 11 primer ejemplo
 /*function imprimirSiEsMayorDeEdad(persona) {
     if (persona.edad >= 18) {
         console.log(`${persona.nombre} es mayor de edad`)
     } else {
         console.log(`${persona.nombre} es menor de edad`)
     }
 }
imprimirSiEsMayorDeEdad(sacha)
imprimirSiEsMayorDeEdad(juan)*/

//segundo ejemplo para retornar una funcion
const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
 }

 function imprimirSiEsMayorDeEdad(persona) {
     if (esMayorDeEdad(persona)) {
         console.log(`${persona.nombre} es mayor de edad`)
     } else {
         console.log(`${persona.nombre} es menor de edad`)
     }
 }