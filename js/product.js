let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

let id = queryStringObj.get("id");      /* tengo que agregar la etiqueta*/

let nombre = document.querySelector(".titulo-producto");
let marca = document.querySelector(".marca");
let descripcion = document.querySelector(".descripcion");
let precio = document.querySelector(".precio");
let foto = document.querySelector(".fotos");
let categoria = document.querySelector(".categoria");
let stock = document.querySelector(".stock");
let listaTags = document.querySelector(".tags");
let reviews = document.querySelector(".caja-flex");


fetch(`https://dummyjson.com/products/${id}`) 

.then(function(response) {

    return response.json();

})

.then(function(data) {         

    console.log(data);

    /* falta agregar el contenido a cada uno de los elementos*/

    nombre.innerText = data.title;
    marca.innerHTML = `<a href="./category.html?category=${data.brand}">${data.brand}</a>   `;
    descripcion.innerText = data.description;
    precio.innerText = data.price;
    foto.src = data.thumbnail;
    categoria.innerText = data.category;
    stock.innerText = data.stock;
    listaTags.innerText = data.tags;


    /*como la sec de reviews tambien viene de una api*/

    let tags = ""; 

    for (let i = 0; i < data.tags.length && i < 3; i++) {  /* la consigna dice hasta 3 tags*/
        
        tags += "#" + data.tags[i] + " ";  /* el espacio es para separar cada tag*/

        listaTags.innerHTML = tags;
    }

    

    let listaReviews = "";

    for (let i = 0; i < data.reviews.length; i++) { 

        listaReviews += `<article class="contenedor-reviews">
                            <h3 class="nombreReview">${data.reviews[i].reviewerEmail}</h3>   
                            <p class="texto-comentario"> ${data.reviews[i].comment} </p>
                            <p class="texto-comentario">${data.reviews[i].rating}</p>
                        </article>`;

                         /*tengo que poner algo despues de los i???*/
    }
    
    reviews.innerHTML = listaReviews;
    
})

.catch(function(error) {

    console.log("Error al cargar el producto: " + error);

});




