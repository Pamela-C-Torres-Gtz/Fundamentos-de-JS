let sacha = {
    nombre: 'Shacha',
    apellido: 'Lifszyc',
    edad: '28'
}

let dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: '27'
}
/*//primer ejemplo
function imprimirNombreEnMayusculas(persona) {
   let nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}*/

//segundo ejemplo desglisando el objeto pasando entre llaves
//los atributos del objetoq que nos interesan
function imprimirNombreEnMayusculas({ nombre }){
    console.log(nombre.toUpperCase())
}
imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
//que pasa si llamos a la funcion y no quewremos hacer refencia a ala función
//se puede definir un nuevo objeto.
imprimirNombreEnMayusculas({  nombre: 'Alfredo' })

// ¿Que pasa si invocamos a la mfunción sin parametros? 
//R= nos marca un error porque no existe ese valor y js no puede acceder a ese objeto.