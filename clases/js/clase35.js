//ASINCRONISMO
//Async-await:lo último en asincronismo usando jQuery para el consumo de APIS

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

//Crear una función que me sirva para obtener personajes
//Para poder usar await la función la tenemos que marcar asincrona
async function obtenerPersonajes() {
   let ids = [1, 2, 3, 4, 5]
   let promesas = ids.map (id => obtenerPersonaje(id))
   //Para poder usar todo esto se tien que colocar el código en un bloque try {} catch (err)
   try {
     //poner personajes que se ejecuten asincronamente
     //con la palabra reservada await se detiene la ejecución en Promise
     //hasta que todas las promesas sean resultas
     let personajes = await Promise.all(promesas)
     console.log(personajes)
   } catch (id) {
       //Se llama a la función de error
       onError(id)
   }
}
//llamar a la función
obtenerPersonajes()


