var input = document.querySelector("#nombre");
var boton = document.querySelector("#mostrarDato");
var resultado = document.querySelector("#resultado");

function mostrarTexto() {
    var texto = input.value;
    resultado.textContent = texto;
}

boton.addEventListener("click", mostrarTexto);