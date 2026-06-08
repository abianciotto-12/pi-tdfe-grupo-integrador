let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

let categoria = queryStringObj.get("");  

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

        productos += `<article>
                        <p>${producto}</p>
                    </article>`;
    }

    seccion.innerHTML = productos;

    console.log(seccion);


})

.catch(function(error) {

    console.log("Error al cargar la categoría: " + error);

});