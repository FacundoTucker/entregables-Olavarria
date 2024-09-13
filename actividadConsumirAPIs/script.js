"use strict";

fetch("https://fakestoreapi.com/products")
.then(resp => resp.json())
.then(data => {
    data.forEach(prod => {
        let contenedor = document.getElementById("contenedor");
        let card = document.createElement("div");           
        card.classList.add("card");

        let contenido = `<h3>Producto: ${prod.title}</h3>
                        <h4>Precio: ${prod.price}</h4>
                        <h5>Descripción: ${prod.description}</h5>
                        <h5>Categoría: ${prod.category}</h5>
                        <img src=${prod.image} alt=${prod.title}>`

        card.innerHTML = contenido;
        contenedor.appendChild(card);
    })
})
.catch(err => console.log(err));