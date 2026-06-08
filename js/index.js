fetch(`https://dummyjson.com/products/categories/`)

.then(function(response) {
    return response.json();
})

.then(function(data) {
    console.log(data);
    let listaCategorias = document.querySelector(".listaCategorias");
    let categorias = "";
    for (let i = 0; i < data.length; i++) {
        let categoria = data[i];
     categorias += `<li><a href="./category.html?cat=${categoria.slug}">${categoria.name}</a></li>`;
    }
    listaCategorias.innerHTML = categorias;
})
.catch(function(error) {
    console.log("Error al cargar la categoría: " + error);  
});

fetch(`https://dummyjson.com/products/category/mens-shirts`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let seccion1 = document.querySelector(".productos1");
        let productos = "";

        for (let i = 0; i < data.products.length; i++) {
            let producto = data.products[i];
           
            productos +=`
            <article class="elementos">
            <img class="fotos" src="${producto.thumbnail}" alt="${producto.title}">
            <h4>${producto.title}</h4>
            <p class="texto"> ${producto.description}</p>
            <p class="texto"> $${producto.price}</p>
            <a class="detalle" href="./product.html?id=${producto.id}">Ver detalle</a>
            </article>
            `;
        }
        seccion1.innerHTML = productos;

    })
    .catch(function(error) {
        console.log("Error al cargar los productos: " + error);
    });
    