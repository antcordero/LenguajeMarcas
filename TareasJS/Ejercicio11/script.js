// PASO 1: Seleccionar los elementos necesarios
var campoFiltro = document.getElementById("filtro");
var elementosLista = document.querySelectorAll("#lista li");

// PASO 2: Añadir un evento al campo de texto
campoFiltro.addEventListener("input", function () {
    // PASO 3: Obtener el texto ingresado en el campo de texto
    var textoFiltro = campoFiltro.value.toLowerCase();

    // PASO 4: Recorrer todos los elementos de la lista
    elementosLista.forEach(function (elemento) {
        var textoElemento = elemento.textContent.toLowerCase();

        // PASO 5: Comparar el texto del campo de filtro con el texto del elemento
        if (textoElemento.includes(textoFiltro)) {
            elemento.style.display = "";
        } else {
            elemento.style.display = "none";
        }
    });
});
