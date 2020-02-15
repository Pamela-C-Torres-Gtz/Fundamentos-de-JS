//ASINCRONISMO
//Haciendo multiples REQUESTS con Callbacks usando jQuery para llamar APIS

/*Un callback es una función que se pasa a otra función como un argumento. 
Esta función se invoca, después, dentro de la función externa para completar alguna acción.*/

//PARA LLAMAR A UN API
const API_URL = 'https://swapi.co/api/'
//parte de las personas
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true }

const onPeopleResponse = function (persona) {
    console.log(`Hola, yo soy ${persona.name}`)
}

//CREAMOS UNA FUNCION PARA OBTENER EL PERSONAJE A PARTIR DE UN ID
function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
}

//LLAMAMOS A LA FUNCIÓN PARA OBTENER A LOS PERSONAJES
/*Pero aunque se llamen en este orden el ASINCRONISMO no garantiza
que los muestre en el mismo orden.*/
//PARA ELLO ES NECESARIO ORDENAR
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)

