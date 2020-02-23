//ASINCRONISMO
//Promesas usando jQuery para el consumo de APIS

/*Un callback es una función que se pasa a otra función como un argumento. 
Esta función se invoca, después, dentro de la función externa para completar alguna acción.*/

//PARA LLAMAR A UN API
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true }

//CREAMOS UNA FUNCION PARA OBTENER EL PERSONAJE A PARTIR DE UN ID
function obtenerPersonaje(id) {
     return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`  
        $.get(url, opts, function (data) {
           resolve(data)
        })
        .fail(() => reject(id))
     })    
}

function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
  .then(function(personaje) {
      console.log(`El personaje 1 es ${personaje.name}`)
  })
  .catch(onError)

