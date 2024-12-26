var imagen = document.querySelector("#miImagen");
var boton = document.querySelector("#miBoton");

function cambiarImagen() {
    if (imagen.src = "https://picsum.photos/200?1") {
        imagen.classList.toggle("fade");
        imagen.src = "https://picsum.photos/200?2"
    } else {
        imagen.src = "https://picsum.photos/200?1"
    }
}

boton.addEventListener("click", cambiarImagen);