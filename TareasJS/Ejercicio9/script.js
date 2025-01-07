var imagenes = [
    "https://picsum.photos/200?1", 
    "https://picsum.photos/200?2", 
    "https://picsum.photos/200?3", 
    "https://picsum.photos/200?4",
];

var indiceActual = 0;

var imagenCarrusel = document.getElementById("imagenCarrusel");
var botonAnterior = document.getElementById("anterior");
var botonSiguiente = document.getElementById("siguiente");

//Actualizar la imagen mostrada
function actualizarImagen() {
    imagenCarrusel.src = imagenes[indiceActual];
}

//ir a la imagen anterior
function imagenAnterior() {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    actualizarImagen();
}

//ir a la imagen siguiente
function imagenSiguiente() {
    indiceActual = (indiceActual + 1) % imagenes.length;
    actualizarImagen();
}


botonAnterior.addEventListener("click", imagenAnterior);
botonSiguiente.addEventListener("click", imagenSiguiente);
