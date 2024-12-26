var fondo = document.querySelector("body");
var boton = document.getElementById("btn-cambioColor");

function cambioFondo() {
    fondo.classList.toggle("cambioColorFondo");
}

boton.addEventListener("click", cambioFondo);
