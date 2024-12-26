var input = document.querySelector("#texto");
var boton = document.querySelector("#validacion");
var resultado = document.querySelector("#resultado");

function validarTexto() {
    if (input.value === "") {
        resultado.textContent = "No hay nada escrito"
    } else {
        resultado.textContent = "Texto válido"
    }
}

boton.addEventListener("click", validarTexto);