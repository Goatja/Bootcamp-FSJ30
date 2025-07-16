console.log("Hello");


//Obtenemos un elementos del front end(HTML)
let elementoDOM = document.getElementById("textoSaludo")
console.log(elementoDOM);

let contenidoDOM = document.querySelector("#contenido")
console.log(contenidoDOM);

const btnMagico = document.getElementById("btnMagico")
const btnArr = document.getElementById("btnArr");
//Propiedades de los elementos
//innerHTML => obtiene todo el contenido HTML del elemento
//innerText => Obtiene solo el texto del elemento.
console.log(elementoDOM.innerHTML);
console.log(elementoDOM.innerText);

elementoDOM.innerHTML = "<h2>Chau</h2>";

contenidoDOM.innerHTML = "<h3>Este texto esta inyectado con js</h3>";

//Metodos de los elementos
btnMagico.addEventListener( "click", () =>{
    alert("avda kabrsasd")
    let dato = prompt("Ingresa tu nombre: ");
    console.log(dato);
    
})

//Metodo de JS
// Almacenar datos en local para el usuario

let arr = [1,2,3];
console.log(arr);

//LocalStorage => Almacenamiento local den el navegador del usuario

/* localStorage.setItem("arraycito", JSON.stringify(arr));
   console.log(localStorage.getItem('arraycito'));
*/

btnArr.addEventListener("click", () => {
    console.log("Todo nnnnn");
    arr.push(4);
    console.log(arr);  
})
