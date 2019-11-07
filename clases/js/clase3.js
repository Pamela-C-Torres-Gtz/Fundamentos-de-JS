let edad = 35;

// para realizar incremento de un variable realizamos lo siguiente:
edad += 1;

//otro ejemplo para decremento
let peso = 75;
peso -= 2;

//como sumar dos numeros diatintos
let sandwich = 1;
peso += sandwich;

let jugarFutbol = 3;
peso -=jugarFutbol;

//un ejemplo con descimales
let precioDeVino = 200.3;
let total = precioDeVino * 3;

//para que sea más exacta la operacion con un decimal realizamos lo siguiente
let totalPreciso = precioDeVino * 100 * 3 / 100;

// en caso de no saber con cuantos decimales se cuenta se utiliza el modulo de matematicas de Js
let totalPrecisoDecimales = Math.round(precioDeVino * 100 * 3)/100;

//si queremos que salga un numero determinado de decimales realizamos lo siguinete
let totalStr= total.toFixed(3);

//para convertir en tipo de dato string a número utilimas parseFloat
let totalStr2 = parseFloat(totalStr);

//para realizar una division
let pizza = 8;
let persona = 2;
let cantidadDePorcionesPorPersona = pizza / persona;