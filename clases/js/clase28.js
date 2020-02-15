//ASINCRONISMO
//Callbacks tambien se usa jQuery para llamar APIS

/*Un callback es una función que se pasa a otra función como un argumento. 
Esta función se invoca, después, dentro de la función externa para completar alguna acción.*/

//PARA LLAMAR A UN API
const API_URL = 'https://swapi.co/api/'
//parte de las personas
const PEOPLE_URL = 'people/:id';

//para hacer un requst von jquery 
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

//indicarle a jquery que nuestro request se va a otra pagina
//Por ultimo ponemos el callback
const onPeopleResponse = function (persona) {
    console.log(`Hola yo soy ${persona.name}`)
}

$.get(lukeUrl, opts, onPeopleResponse)