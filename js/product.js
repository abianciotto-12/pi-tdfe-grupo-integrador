fetch('https://dummyjson.com/products/1')

.then(function(response) {

    return response.json();

})

.then(function(data) {          /*para capturar elemento en el DOM*/

    console.log(data);

    let nombre = document.querySelector("h4");
    let marca = document.querySelector("");
    let descripcion = document.querySelector(".texto");
    let precio = document.querySelector(".texto");
    let foto = document.querySelector(".fotos");
    let categoria = document.querySelector(".footerNombres");
    let stock = document.querySelector(".footerNombres");
    let listaTags = document.querySelector(".footerNombres");

    /* falta agregar el contenido a cada uno de los elementos*/




    /*como la sec de reviews tambien viene de una api*/

    let tags = ""; 

    for (let i = 0; i < data.tags.length && i < 3; i++) {  /* la consigna dice hasta 3 tags*/

        tags += "#" + data.tags[i] + " ";  /* el espacio es para separar cada tag*/

        listaTags.innerHTML = tags;
    }

    let reviews = document.querySelector(".caja-flex");

    let listaReviews = "";

    for (let i = 0; i < data.reviews.length; i++) {  /* la consigna dice hasta 3 reviews*/

        /* tendria que poner template strings?*/

    }

    
})

.catch(function(error) {

    console.log("Error al cargar el producto: " + error);

});


/* nose en que parte va esto*/

let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

let producto = queryStringObj.get("");      /* tengo que agregar la etiqueta*/

