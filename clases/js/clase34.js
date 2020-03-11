//ASINCRONISMO
//Multiples promesas en paralelo usando jQuery para el consumo de APIS

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

//guardar en un array
let ids = [1, 2, 3, 4, 5]

//crear un nuevo metodo con MAP tomar un array y modificar cada uno de sus elementos
// let promesas = ids.map(function (id) {
//     return obtenerPersonaje(id)
// })

//ejercicio anterior con arrow function
let promesas = ids.map (id => obtenerPersonaje(id))
//obtener valores de esas promesas cuando se resuelva
//llamr al metodo Promise.all
Promise
   // a este .all() le tenemos pasar un array de promesas
   .all(promesas)
   //Este metodo se puede encadenar con el .then()
   //Y vamos a tener un array con los valores que esperamos de cada una de las promesas
   .then(personajes => console.log(personajes))
   //Si sucede un error le pasamos el .catch() 
   //pasndole la funcion que queremos que se ejecute onError
   //Esta funcion onError se va ejecutar si cualquiera de las promesas falla
   .catch(onError)


// obtenerPersonaje(1)
//   .then(personaje1 => {
//       console.log(`El personaje 1 es ${personaje1.name}`)
//       return obtenerPersonaje(2)
//   })
//   .then(personaje2 => {
//       console.log(`El personaje 2 es ${personaje2.name}`)
//       return obtenerPersonaje(3)
//   })
//   .then(personaje3 => {
//       console.log(`El personaje 3 es ${personaje3.name}`)
//       return obtenerPersonaje(4)
//   })
//   .then(personaje4 => {
//       console.log(`El personaje 4 es ${personaje4.name}`)
//       return obtenerPersonaje(5)
//   })
//   .then(personaje5 => {
//       console.log(`El personaje 5 es ${personaje5.name}`)
//   })
//   .catch(onError)

