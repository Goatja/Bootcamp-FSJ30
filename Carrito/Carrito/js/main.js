/* Main js para el carrito */
//console.log("Todo bien");

const contenedorCarrito = document.getElementById('cuerpo-carrito')
let cursosCarrito = [];

function vaciarCarrito(evento){
    console.log("Soy el vaciar carrito");

    if(cursosCarrito.length == 0){
        mostrarMensaje(`El carrito ya esta vacio`)
    }else{

    cursosCarrito = [];
    contenedorCarrito.innerHTML = "";
    mostrarMensaje(`Se vació totalmente el carrito`);
    agregarCantidad();
    }
}

function agregarCurso(evento){
      
   let curso = leerDatosCurso(evento.target.parentElement.parentElement)

   //Chequeamos si el curso existe previamente true o false
   const existe = cursosCarrito.some( cursoArr => cursoArr.id == curso.id );

   const precioOriginal =parseFloat(curso.precio.slice(1));//Capturamos el precio del curso, eliminamos el signo $ y los convertimos a float
   
   if(existe){
    cursosCarrito.map( cursoArr => {
        if( cursoArr.id ==  curso.id){
                cursoArr.cantidad += 1;
                    //aumentar precio
                    //Usar metodo que elimine el primer caracter.
                    //Metodos posibles = Substring o Slice
                cursoArr.precio = cursoArr.precio.substring(1);
                //parseInt transforma a flotante.
                cursoArr.precio = parseFloat(cursoArr.precio); 
                
                //Aumentamos el precio
                cursoArr.precio += precioOriginal;
                
                //Devolvemos el rpecio a su formato original
                cursoArr.precio = `$${cursoArr.precio}`;
            
        }
        return cursoArr;
    } );

    mostrarMensaje(`Se agregó otro producto de ${curso.nombre}`)
   }else{
       cursosCarrito.push(curso);//agrega el objeto de los cursos a al array <-
       mostrarMensaje(`${curso.nombre} Agregado!`)
   }
   
  //console.log(cursosCarrito);
   pintarCarritoHTML();
   agregarCantidad();  
}

function leerDatosCurso(curso){
/*     console.log(curso);
    console.log(curso.querySelector("a").getAttribute('data-id'));
    console.log(curso.querySelector("img").src);
    console.log(curso.querySelector("h4").textContent);
    console.log(curso.querySelector("h5").textContent); */

    const infoCurso = {
            id : curso.querySelector("a").getAttribute('data-id'),
        imagen : curso.querySelector("img").src,
        nombre : curso.querySelector("h4").textContent,
        precio : curso.querySelector("h5").textContent,
        cantidad : 1
    }

    return infoCurso;
}

function pintarCarritoHTML(){
    
    //Vaciar el contenedor de carrito
    contenedorCarrito.innerHTML = "";

    cursosCarrito.map( curso => {
        //crear una fila
        const fila = document.createElement('tr');
        //asignar los valores en celdas
        fila.innerHTML = `
            <td> <img src="${curso.imagen}" width="80"></td>
            <td> ${curso.nombre}</td>
            <td> ${curso.precio}</td>
            <td> ${curso.cantidad}</td>
            <td><a class="btn btn-danger" onclick="eliminarCurso(${curso.id})">Eliminar</a></td>
        `
        contenedorCarrito.appendChild(fila);
    })
}

function eliminarCurso(id){
      
    console.log(id);
    cursosCarrito.map( (curso) => {
        if(curso.id == id){
            mostrarMensaje(`${curso.nombre} se ha eliminado`) 
            if(curso.cantidad > 1){
                curso.cantidad -= 1;
                curso.precio = parseFloat(curso.precio.slice(1));
                curso.precio -= 15.0;

                curso.precio = `$${curso.precio}`;
            }else{
            cursosCarrito = cursosCarrito.filter( curso => curso.id != id);
            }
        }
    })

     pintarCarritoHTML();
     agregarCantidad();
}


//
function mostrarMensaje(msg){
    const cardAlert = document.getElementById("cardAlert");
    const icono = document.createElement("i");
    
    //set el tiempo de espera para que se elime la tarjeta de informacion
    setTimeout(() => {
        cardAlert.classList.add("visually-hidden");
        console.log(cardAlert);
        
    }, 2000);

    cardAlert.classList.remove("visually-hidden")
    cardAlert.classList.add("bg-info", 'p-3', 'text-rwap')
    cardAlert.innerHTML = `<h5>${msg}</h5>`

    icono.className = 'bi bi-info-circle-fill'
    cardAlert.appendChild(icono);
}

function agregarCantidad() {
    const cantidadCarrito = document.getElementById("cantidad-carrito");
    if (cursosCarrito.length == 0) {
        cantidadCarrito.classList.add("visually-hidden");
        cantidadCarrito.textContent = cursosCarrito.length;
    }else{
     cantidadCarrito.classList.remove("visually-hidden")   
     cantidadCarrito.textContent = cursosCarrito.length;
    }
    console.log("Numero de cosas en el carro" + cursosCarrito.length + leerDatosCurso());
    
}
