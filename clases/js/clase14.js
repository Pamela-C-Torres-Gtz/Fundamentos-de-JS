// para este ejercicio se tomo como base el ejemplo del ejercicio anterior
let pame = {
    nombre: 'Pamela',
    apellido: 'Torres',
    edad: 35,
    peso: 72
}

console.log(`Al inicio del año ${pame.nombre} pesa ${pame.peso}kg`);

const INCREMENTO_PESO = 0.2;

//FUNCIÓN PARA aumenta de peso con arow function
const aumentoDePeso = persona => {
    persona.peso += INCREMENTO_PESO
}
// FUNCION PARA adelgazar
const adelgazar = persona => {
    persona.peso -= INCREMENTO_PESO;
}

//funcion para simulacion de nutricionista
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = pame.peso - 3;
//dias que han pasado
let dias = 0;

//simulacion con ciclo while
while (pame.peso > META) {
    debugger
    if (comeMucho()) {
       aumentoDePeso(pame)
    }
    if (realizaDeporte()) {
       adelgazar(pame)
    }
    dias += 1
}
console.log(`Pasaron ${dias} días hasta que ${pame.nombre} adelgazo 3 kgs`);