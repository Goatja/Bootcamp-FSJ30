/*
Aplicacion js

*/

const productSection = document.getElementById("prod");

//funcion que haga fecth con settime 

function showData(data) {
  const productSection = document.querySelector(".products-section .section-cards");
  productSection.innerHTML = ""; // Limpiar contenido previo

  data.forEach((prod, index) => {
    setTimeout(() => {
      const template = `
        <div class="tarjeta">
          <div class="tarjeta-head">
            <img src="${prod.imagen}" alt="${prod.name}" class="image">
          </div>
          <div class="tarjeta-body">
            <p>${prod.marca || "Sin marca"}</p>
            <h3>${prod.name}</h3>
            <p>$${prod.precio.toFixed(2)}</p>
            <small>Antes $${(prod.precio * 1.4).toFixed(2)}</small>
            <button class="look">Ver detalles</button>
          </div>
        </div>
      `;
      productSection.innerHTML += template;
    }, 500 * index); // Animación escalonada cada 500ms
  });
}


//ahora el fetch
fetch("./assets/product.json")
    .then(response => response.json())
        .then(data => { console.log(data); showData(data); })
                .catch(error => console.error(error));
