var div = document.getElementById("miDiv");
var boton = document.getElementById("miBoton");

function quitarDiv() {
    div.classList.toggle("hide");
}

boton.addEventListener("click", quitarDiv);