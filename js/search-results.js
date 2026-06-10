let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let termino = queryStringObj.get("busqueda");

fetch('https://dummyjson.com/products/search?q=' + termino)

.then(function(response) {
    return response.json();
})

.then(function(data){
    let titulo = document.querySelector(".resultadosTitulo");
    let seccionResultados = document.querySelector(".busqueda1");

    if (data.products.length === 0){
        titulo.innerText = "No hay resultado para el termino:" + termino; 
    } else {
        titulo.innerText = "Resultado de busqueda para: " + termino;

        let productos = "";
        
        for(let i=0;i < data.products.length; i++){
            let producto = data.products[i];

               productos += `
                <article class="elementos">
                    <img class="fotos" src="${producto.thumbnail}" alt="${producto.title}">
                    <h4>${producto.title}</h4>
                    <p class="texto">${producto.description}</p>
                    <p class="texto">$${producto.price}</p>
                    <a class="detalle" href="./product.html?id=${producto.id}">Ver detalle</a>
                </article>
            `;
        }
        seccionResultados.innerHTML = productos;
    }

})

.catch(function(error){
    console.log("Error al buscar productos" + error);
});