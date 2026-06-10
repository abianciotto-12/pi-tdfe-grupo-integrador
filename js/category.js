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

    let listaProductos = data.products;

    for (let i = 0; i < listaProductos.length; i++) {

        let producto = listaProductos[i];

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