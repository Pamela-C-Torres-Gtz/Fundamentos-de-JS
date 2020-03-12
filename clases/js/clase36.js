//obtener las id de los elementos que quiero obtener
const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btnEmpezar');

//Crear clase Juego, qu es la que va acontener toda la logica de mi juego
class Juego {
    constructor() {
        this.inicializar () //Llamar funcion inicializar
    }

    inicializar() { //ocultar el boton de empezar
        btnEmpezar.classList.add('hide') // esta clase la defini en el archivo estilos.css
    }
}


// vamos a definir la función de empezar juego
function empezarJuego () {
    let juego = new Juego () //para que esto funcione creo la clase juego al principio de mi código
}