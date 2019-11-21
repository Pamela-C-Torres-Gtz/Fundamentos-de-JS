
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

 imprimirProfeciones(sacha)
 

 function imprimirSiEsMayorDeEdad(persona) {
     console.log(`${persona.nombre} es: `)
     if (persona.edad >=18) {
         console.log('Es mayor de edad')
     } else {
         console.log('No es mayor de edad')
     }
 }
imprimirSiEsMayorDeEdad(sacha)
