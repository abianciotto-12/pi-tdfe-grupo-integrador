let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

let id = queryStringObj.get("id");  

fetch(`https://dummyjson.com/products/categories/${id}`) /*agregar el id*/

.then(function(response) {

    return response.json();

})

.then(function(data) {

    console.log(data);

    let seccion = document.querySelector(".productos1");

    let productos = "";

    for (let i = 0; i < data.length; i++) {

        let producto = data[i];

        productos += `<article class="elementos">
                            <img class="fotos" src="${producto.thumbnail}" alt="">
                            <h4 class="titulo-producto">${producto.title}</h4>
                            <p class="texto marca">Marca: ${producto.brand}</p>
                            <p class="texto descripcion">${producto.description}</p>
                            <p class="texto precio">${producto.price}</p>
                        </article>`;
    }

    seccion.innerHTML = productos;

    console.log(seccion);


})

.catch(function(error) {

    console.log("Error al cargar la categoría: " + error);

});