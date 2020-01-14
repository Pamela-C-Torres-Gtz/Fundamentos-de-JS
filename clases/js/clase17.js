// ejemplo de arreglo

let armando = {
    nombre: 'Armando',
    apellido: 'Torres',
    altura: 1.67,
    peso: 69
}

let ismael = {
    nombre:'Ismael',
    apellido: 'Gutiérrez',
    altura: 1.64,
    peso: 65
}

let jatziri = {
    nombre: 'Jatziri',
    apellido: 'Sanchez',
    altura: 1.68,
    peso: 56
}

let juan = {
    nombre: 'Juan',
    apellido: 'Correa',
    altura: 1.67,
    peso: 76
}

let meche = {
    nombre: 'Meche',
    apellido: 'Gutiérrez',
    altura: 1.44,
    peso: 62
}

//agrupar a todas estas persnas en una colección
let personas = [armando, ismael, jatziri, juan, meche]

//para rrecor el array usamos for
for (var i = 0; i < personas.length; i++) {
    let persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}