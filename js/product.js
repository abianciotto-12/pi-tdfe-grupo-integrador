fetch(`https://dummyjson.com/products/${id}`) /*agregar el id*/

.then(function(response) {

    return response.json();

})

.then(function(data) {         

    console.log(data);

    /* necesito clases diferentes para cada texto???*/
    let nombre = document.querySelector("h4");
    let marca = document.querySelector(".texto");
    let descripcion = document.querySelector(".texto");
    let precio = document.querySelector(".texto");
    let foto = document.querySelector(".fotos");
    let categoria = document.querySelector(".footerNombres");
    let stock = document.querySelector(".footerNombres");
    let listaTags = document.querySelector(".footerNombres");

    /* falta agregar el contenido a cada uno de los elementos*/

    nombre.innerText = data.title;
    marca.innerText = data.brand;
    descripcion.innerText = data.description;
    precio.innerText = data.price;
    foto.src = data.thumbnail;
    categoria.innerText = data.category;
    stock.innerText = data.stock;
    listaTags.innerText = data.tags;

    /*Categoría:  hacer click debe llevar a la página de la categoría*/

    linkCatehoria.innerText = "Categoría: " + data.category;  /* el link lo tengo que agregar en el html*/


    /*como la sec de reviews tambien viene de una api*/

    let tags = ""; 

    for (let i = 0; i < data.tags.length && i < 3; i++) {  /* la consigna dice hasta 3 tags*/
        
        tags += "#" + data.tags[i] + " ";  /* el espacio es para separar cada tag*/

        listaTags.innerHTML = tags;
    }

    let reviews = document.querySelector(".caja-flex");

    let listaReviews = "";

    for (let i = 0; i < data.reviews.length; i++) { 

        listaReviews += `<article class="contenedor-reviews">
                            <h3 class="nombreReview">${data.reviews[i]}</h3>   
                            <p class="texto-comentario"> ${data.reviews[i]} </p>
                            <p class="texto-comentario">${data.reviews[i]}</p>
                        </article>`;

                         /*tengo que poner algo despues de los i???*/
    }
    
    reviews.innerHTML = listaReviews;
    
})

.catch(function(error) {

    console.log("Error al cargar el producto: " + error);

});


/* nose en que parte va esto*/

let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

let producto = queryStringObj.get("");      /* tengo que agregar la etiqueta*/

