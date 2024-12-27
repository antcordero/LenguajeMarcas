var imagenPrincipal = document.getElementById("imgPrincipal"); // Imagen principal
var miniaturas = document.getElementById("miniaturas"); // Contenedor de miniaturas

function cambioImagen(event) {
    if (event.target.classList.contains("miniatura")) {
        imagenPrincipal.src = event.target.src;

        //Quitar el borde de la imagen
        var todasLasMiniaturas = miniaturas.querySelectorAll(".miniatura");
        todasLasMiniaturas.forEach(function(miniatura) {
            miniatura.classList.remove("resalto");
        });

        //Añadir borde
        event.target.classList.add("resalto");
    }
}

miniaturas.addEventListener("click", cambioImagen);
