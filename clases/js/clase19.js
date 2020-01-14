// ejemplo de arreglo usando map

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

//2.-
const esAlta = ( { altura }) => {
   return altura >= 1.67
}
const esBaja = ( { altura} ) => {
    return altura < 1.67
}

//agrupar a todas estas persnas en una colección
let personas = [armando, ismael, jatziri, juan, meche]

//1.-
//para transformar la altura de las personas y pasarla de centimitros a milimetros
let personasAltas = personas.filter(esAlta)
// para filtrar personas bajas en el array usamos 
let personasBajas = personas.filter(esBaja)

//otra manera de hacerlo 
/*let personasAltas = personas.filter(funcion (persona){
    return persona.altura > 1.65
})*/

//5.- 
//convertir altura a centimetros
const pasarAlturaACms = persona => ({
     // persona.altura = persona.altura * 100
         ...persona,
         altura: persona.altura * 100
     })


//4.-
let personasCms = personas.map(pasarAlturaACms)

//3.-
console.log(personasCms)
