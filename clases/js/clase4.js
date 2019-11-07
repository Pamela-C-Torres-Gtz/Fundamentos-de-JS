let nombre= 'Pamlea', edad = 28;

//definir función con palabra reservada function
//luego pongo el nombre de la función y coloco los parametros en ( )
//para delimitar el cuerpo de la funcion usamos { }
function imprimirEdad(n, e) {
    console.log(`${n} tiene ${e} años`)
}
//para llamar a la funcion simplemente escribimos su nombre y le pasamos los parametros
imprimirEdad(nombre, edad)
imprimirEdad('Tania', 29)
imprimirEdad('Jessica', 20)
imprimirEdad('Uriel', 18)
imprimirEdad(25, 'Carlos')
imprimirEdad('Elizabeth')
