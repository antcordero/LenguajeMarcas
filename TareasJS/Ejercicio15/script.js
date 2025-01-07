//PASO 1: Seleccionar los elementos necesarios
var formularioColor = document.getElementById("colorForm");
var entradaColor = document.getElementById("colorInput");
var botonEnviarColor = document.getElementById("submitColor");
var nombreColor = document.getElementById("colorName");
var cajaColor = document.getElementById("colorBox");
var mensajeError = document.getElementById("errorMessage");

//PASO 2: Añadir un evento al botón del formulario
botonEnviarColor.addEventListener("click", function () {
    //PASO 3: Obtener el color ingresado por el usuario
    var colorIngresado = entradaColor.value.trim(); // Eliminar espacios al inicio/final

    //PASO 4: Validar si es un color válido
    if (esColorValido(colorIngresado)) {
        //Cambiar el fondo del área al color ingresado
        cajaColor.style.backgroundColor = colorIngresado;

        //Mostrar el color seleccionado en el span
        nombreColor.textContent = colorIngresado;

        //Ocultar el mensaje de error si estaba visible
        mensajeError.style.display = "none";
    } else {
        //Mostrar mensaje de error si el color no es válido
        mensajeError.style.display = "block";
        mensajeError.textContent = "El color ingresado no es válido.";
    }
});

//PASO 5: Función para validar si el color es válido
function esColorValido(color) {
    //Crear un elemento temporal para probar estilos
    var elementoTemporal = document.createElement("div");
    elementoTemporal.style.backgroundColor = color;

    //Si el navegador no reconoce el color, el estilo será vacío
    return elementoTemporal.style.backgroundColor !== "";
}
