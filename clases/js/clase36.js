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
        this.generarSecuencia ()//Llamar la funcion Secuencia de numeros random
        this.siguienteNivel () //ilumniar la secuancia de colores por nivel
    }

    inicializar() { //ocultar el boton de empezar
        btnEmpezar.classList.add('hide') // esta clase la defini en el archivo estilos.css
        this.nivel = 1 //el nivel inicial es el 1, cada vez que conteste correctamente yra subiendo de nivel el usuario
        this.colores = { // guardar los colores de nuestros constantes
            celeste, // si quiere en un objeto poner el atributo celeste y asignarle el valor que tenia en la constante
            //me puedo ahorrar el paso y dejar el mismo nombre
            violeta,
            naranja,
            verde
        }
    }

    generarSecuencia () { //crea un array
        //define la secuencia internamente de un atributo
        //otra forma de generar Array, le digo al construcctor cuantos elementos quiero que tenga que en este caso es (10)
        //despues llamo a la función .fill y todos sus elementos en 0
        //es importante llmar a la función fill porque despues se llama a la función map
        //.map no funciona cuando no tenemos elementos definidos dentro de un array, por lo menos debe contener (0)
        // n => es lo mismo que 0, y utilizo el metodo Math.random
        this.secuencia = new Array (10).fill(0).map(n => Math.floor(Math.random() * 4))
        //Math.floor me redondea para bajo el numero random
    }
    siguienteNivel () {
        this.iluminarSecuencia () 
    }

    //funcion que cambia un numero a color
    transformarNumeroAColor(numero) {
        switch(numero) {
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2: 
                return 'naranja'
            case 3:
                return 'verde'
        }
    }
    iluminarSecuencia () {
        for (let i = 0; i < this.nivel; i++) {
            const color= this.transformarNumeroAColor(this.secuencia[i])//metodo para transformar numero a acolor
           setTimeout( () => this.iluminarColor(color), 1000 * i)//Llamar una funcion para que ilumine ese color en particular
        }
    }
    iluminarColor(color) {
        this.colores[color].classList.add('light')//agregar clase de css para que muestre color indicado
        setTimeout(() => this.apagarColor(color), 350)   //sacar la clase light para que parpade, ose apagarlo en cierta cantidad de tiempo
    }
    apagarColor(color) {
        this.colores[color].classList.remove('light')
    }
}

// vamos a definir la función de empezar juego
function empezarJuego () {
    window.juego = new Juego () //para que esto funcione creo la clase juego al principio de mi código
}