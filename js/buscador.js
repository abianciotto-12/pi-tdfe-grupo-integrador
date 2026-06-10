let formBuscador = document.querySelector (".formBuscador");

formBuscador .addEventListener("submit", function(e){
    let inputBusqueda = document.querySelector(`[name="busqueda"]`);
   
        if (inputBusqueda.value ===``){
            e.preventDefault();
            alert("El campo de busqueda no puede estar vacio");
        } else if (inputBusqueda.value.length < 3){
            e.preventDefault();
            alert("El termino de busqueda debe tener al menos 3 (tres) caracteres");

        }
});