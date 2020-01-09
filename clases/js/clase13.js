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
    persona.peso -= INCREMENTO_PESO
}

for (let i = 1; i <= 365; i++) {
  let random = Math.random()
  
  if (random < 0.25) {
      aumentoDePeso(pame)
  }else if (random < 0.5) {
       adelgazar(pame)
  }
}

console.log(`Al final del año ${pame.nombre} pesa ${pame.peso.toFixed(2)} kg`)