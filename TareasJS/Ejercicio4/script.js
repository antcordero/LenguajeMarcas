var fondo = document.getElementById("miDiv");
var boton = document.getElementById("miBoton");

function cambiarFondo() {
    fondo.classList.toggle("cambioFondo");
}

boton.addEventListener("click", cambiarFondo);