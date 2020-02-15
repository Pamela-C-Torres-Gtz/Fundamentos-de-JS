//ASINCRONISMO
//Manejando el Orden y el Asincronismo en JavaScript usando jQuery para el consumo de APIS

/*Un callback es una función que se pasa a otra función como un argumento. 
Esta función se invoca, después, dentro de la función externa para completar alguna acción.*/

//PARA LLAMAR A UN API
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true }

//CREAMOS UNA FUNCION PARA OBTENER EL PERSONAJE A PARTIR DE UN ID
function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
    $.get(url, opts, function (persona) {
        console.log(`Hola, soy ${persona.name}`)

        //si nos envian un callback se tiene que invocar
        if (callback) {
            callback ()
        }
    })
}

//PARA GARANTIZAR EL ORDEN LO HAGO CON CALLBACKS HELL
//de esta forma se piden en PARALELO y no en SERIE
obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4 , function () {
                obtenerPersonaje(5)
            })
        })
    })
})

