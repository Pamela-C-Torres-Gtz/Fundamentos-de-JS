//ASINCRONISMO
//Manejo de ERRORES con CALLBACK usando jQuery para el consumo de APIS

/*Un callback es una función que se pasa a otra función como un argumento. 
Esta función se invoca, después, dentro de la función externa para completar alguna acción.*/

//PARA LLAMAR A UN API
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true }

//CREAMOS UNA FUNCION PARA OBTENER EL PERSONAJE A PARTIR DE UN ID
function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
 
    //manejando error simplificando las callbacks anteriores
    //tambien podemos encadenar métodos
    $.get(url, opts, callback).fail(function () {
        console.log(`Sucedió un error. No se pudo obtner el personaje ${id}`)
    })
}

obtenerPersonaje(1, function (personaje) {
    console.log(`Hola soy ${personaje.name}`)
    
    obtenerPersonaje(2, function (personaje) {
        console.log(`Hola soy ${personaje.name}`)
       
        obtenerPersonaje(3, function (personaje) {
            console.log(`Hola soy ${personaje.name}`)
            
            obtenerPersonaje(4 , function (personaje) {
                console.log(`Hola soy ${personaje.name}`)
                
                obtenerPersonaje(5, function (personaje){
                    console.log(`Hola soy ${personaje.name}`)
                })
            })
        })
    })
})

