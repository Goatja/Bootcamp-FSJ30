//Peticiones asincronas con Promesas
/*
Las promesas tienen 3 estados:
- Pendiente: La promesa se está ejecutando.
- Cumplida: La promesa se ha completado con éxito.
- Rechazada: La promesa ha fallado.
Una promesa se crea con el constructor Promise, que recibe una función con dos parámetros: resolve y reject.
- resolve: Se llama cuando la promesa se cumple. 
- reject: Se llama cuando la promesa falla.


*/
/* console.log("Hello");

//Simular una peticion a una API

function getCoach(id){ 
    return new Promise( (resolve, reject) => { 
    setTimeout(() => { 
        if ( id === 1){
            resolve({id: 1, name: "Juan"});
        } else {
            reject("No se encontro ese coach");
        }
    },2000  )
    })
}



//Manejo de asincronismo

// Manejo de asincronismo con then y catch.
function traerDatos(){
    getCoach(1)
        .then( data => {
            console.log(data)
        })
        .catch( error => {
            console.error(error)
        })
}

traerDatos();

// Async y await
async function obtenerDatos(){
    try {
        const coach = await getCoach(1);
        console.log(coach)
    } catch (error) {
        console.error(error)
    }
    
}

obtenerDatos();

 */
//fetch va a ser nuestro metodo(interfas) para hacer  peticiones http

async function getDittoAwait() {
  try { // Maneno de errores
    let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`) //Espera respuesta
    let cuerpo = await respuesta.json()//Obtenemos el cuerpo
    console.log(cuerpo);// Mostrar el cuerpo.
  } catch (error) { //Manejo de errores.
    console.log(error);
  }
}

//getDittoAwait();

function getDitoThen() {
  fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)//Buscar los datos en la API
    .then((data) => { //Decimos a js que vuelva con la respuesta
      return data.json() // Retornamos la data para usarla despues
    })
    .then(data => { //Utilizar e body que retornee antes
        console.log(data); // Muestro el cuerpo
    })
    .catch((error) => {
      console.log(error);
    });
}

//getDitoThen();

function saludar(){
    console.log("Hi!");
    
}