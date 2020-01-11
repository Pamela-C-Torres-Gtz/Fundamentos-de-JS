let contador = 0;

//realizar funcion que retorne si llueve o no
const llueve = () => Math.random() < 0.25;

do {
   contador++
} while (!llueve())
   if (contador == 1) { 
     console.log(`Fui a ver si llovia ${contador} vez`)
   } else {
    console.log(`Fui a ver si llovia ${contador} veces`)
   }
