var fondo = document.querySelector("body");
var boton = document.getElementById("btn-cambioColor");
var contador = 0;

function cambioFondo() {
    contador++;

    if (contador === 1) {
        fondo.classList.add("fondo1");
        fondo.classList.remove("fondo2");
        boton.textContent = "Cambiar a fondo 2"
    } else if (contador === 2) {
        fondo.classList.add("fondo2");
        fondo.classList.remove("fondo1");
         boton.textContent = "Cambiar a fondo por defecto"
    } else {
        fondo.classList.remove("fondo1", "fondo2");
        contador = 0;
        boton.textContent = "Cambiar a fondo 1"
    }
}

boton.addEventListener("click", cambioFondo);
