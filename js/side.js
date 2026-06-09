fetch('https://dummyjson.com/products/categories/')

.then(function(response) {
    return response.json();
})

.then(function(data) {
    let listaCategorias = document.querySelector(".listaCategorias");
    let categorias = "";
    for (let i = 0; i < data.length; i++) {
        let categoria = data[i];
        categorias += `<li><a href="./category.html?cat=${categoria.slug}">${categoria.name}</a></li>`;
    }
    listaCategorias.innerHTML = categorias;
})

.catch(function(error) {
    console.log("Error al cargar las categorías: " + error);
});
