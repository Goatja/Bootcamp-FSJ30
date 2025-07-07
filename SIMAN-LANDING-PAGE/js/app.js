/*
Aplicacion js

*/


function showData(data) {
  const productSection = document.querySelector(".products-section .section-cards");
  productSection.innerHTML = ""; // Limpiar contenido previo..

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
            <small>Antes <s>$${(prod.precio * 1.4).toFixed(2)}</s></small>
            <button class="look"> <i class="icon bi bi-plus"></i> </button>
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


        const burgerMenu = document.getElementById('burger-menu');
        const navbar = document.getElementById('navbar');

        burgerMenu.addEventListener('click', () => {
            navbar.classList.toggle('activo');
        });
                

// const bannerImage = document.getElementById("banner-img");
// let counter = 0;
// let images = [
//     "./assets/images/promo.png",
//     "./assets/images/anuncio.png",
// ]
// setInterval(() => {
     
//     if (counter != images.length) {
//         bannerImage.src = `${images[counter]}`; 
//         counter++;
//     }else{
//         counter = 0; // resetear el contador
//     }
// }, 4000);
