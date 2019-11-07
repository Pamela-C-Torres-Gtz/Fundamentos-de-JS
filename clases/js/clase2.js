/* Varibles con string*/
let nombre = 'Pamela';
let apellido = 'TORRES';

/*Tranforma la variable nombre toda en mayuscula */
let nombreEnMayusculas = nombre.toUpperCase();

/*Trnaforma la variable apellido toda en minusculas */
let apellidoEnMinuscula = apellido.toLocaleLowerCase();

/*En caso de que se quiera saber el primer caracter de un string  realizamos lo siguiente y utilizamos el parametro 0 en la funcion*/
let primeraLetraDelNombre = nombre.charAt(0);

/*Podememos hacer con los string es preguntar la cantidad que lo conforma. Para esto utilizamos el  */
let cantidadDeLetrasDelNombre = nombre.length;

//interpolacion de texto o plantillas tambien sirve para concatenar
let nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;

//Acceder a un SUB STRING, eso lo hace con la funcion str en el caso de que quiera acceder a las demas letras de mi nombre
let str = nombre.charAt(1) + nombre.charAt(2);

//Si queremos indicar desde donde comenzar y cuantos caracteres queremos que tome.
 let str1 = nombre.substr(1, 2);

 // mostrando la ultima letra del nombre
 let ultimaLetraDelNombre = nombre.charAt(nombre.length - 1);