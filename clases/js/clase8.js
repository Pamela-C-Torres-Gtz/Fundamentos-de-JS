let sacha = {
    nombre: 'Sacha',
    apellido: 'Lipstic',
    edad: 20
}

let dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
    }

    function imprimirNombreEnMayusculas (persona) {
        //de esta manera se declara la variable nombre que va a salir de persona.nombre
        let { nombre } = persona
        console.log(nombre.toUpperCase())
    }

    imprimirNombreEnMayusculas(sacha)
    imprimirNombreEnMayusculas(dario)

   /* function imprimirNombreYEdad (persona) {
        //hola me llamo Sahca y tengo 28 años
        let { nombre, edad } = persona
        //cuando se colocan key de objetos en un string se utiliza `
        console.log(`Hola me llamo  ${nombre} y tengo  ${edad} años`)
    }

    imprimirNombreYEdad(sacha)
    imprimirNombreYEdad(dario)*/

    function cumpleaños(persona) {
        //retornar un objeto nuevo copiando todo lo anterior, desglozando a la persona pisano algunos de sus atributos
        return {
            ...persona,
            edad: persona.edad +1
        }
    }

    