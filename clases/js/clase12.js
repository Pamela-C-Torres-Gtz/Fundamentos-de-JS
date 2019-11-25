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


const MAYORIA_DE_EDAD = 18

//primer ejemplo de declaración de funcion
// cosnt esMayorDeEdad = function (persona) {
//     return persona.edad >= MAYORIA_DE_EDAD
// }


//segundo ejemplo:esto es exactamente igual al primer ejemplo
//const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;

// 3er ejemplo para dessectructurar parametros se realiza el siguiente ejemplo
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
 

 function imprimirSiEsMayorDeEdad(persona) {
     if (esMayorDeEdad(persona)) {
         console.log(`${persona.nombre} es mayor de edad`)
     } else {
         console.log(`${persona.nombre} es menor de edad`)
     }
 }

 //funcion normal que permite el acceso a una perona que es mayor de edad
 // si no es mayor de edad no se le permite el acceso
//  function permitirAcceso(persona) {
//      if (!esMayorDeEdad(persona)) {
//          console.log('Acceso Denegado')
//      }
//  }

 const permitirAcceso = persona => {
     if (!esMayorDeEdad(persona)) {
         console.log('Acceso Denegado')
     } else {
         console.log('Accceso Permitido')
     }
 }