// ejemplo de arreglo usando reduce

let armando = {
    nombre: 'Armando',
    apellido: 'Torres',
    altura: 1.67,
    peso: 69,
    cantidadDeLibros: 20
}

let ismael = {
    nombre:'Ismael',
    apellido: 'Gutiérrez',
    altura: 1.64,
    peso: 65,
    cantidadDeLibros: 35
}

let jatziri = {
    nombre: 'Jatziri',
    apellido: 'Sanchez',
    altura: 1.68,
    peso: 56,
    cantidadDeLibros:60
}

let juan = {
    nombre: 'Juan',
    apellido: 'Correa',
    altura: 1.67,
    peso: 76,
    cantidadDeLibros: 75
}

let meche = {
    nombre: 'Meche',
    apellido: 'Gutiérrez',
    altura: 1.44,
    peso: 62,
    cantidadDeLibros: 140
}

//agrupar a todas estas persnas en una colección
let personas = [armando, ismael, jatziri, juan, meche]

//SACAR LA CUENTA DE CUANTOS LIBROS HAY

//2.-
const reducer = (acum, persona) => {
  return acum + persona.cantidadDeLibros
}

//otra manera de representarlo es la siguiente
//const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

//1.-
let totalDeLibros = personas.reduce(reducer, 0)

console.log(`El total de libros de todos es ${totalDeLibros} libros`)



