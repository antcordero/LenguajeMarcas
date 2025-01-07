var formulario = document.getElementById("formulario");
var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var mensaje = document.getElementById("mensaje");

//contenedores de error
var errorNombre = document.getElementById("errorNombre");
var errorCorreo = document.getElementById("errorCorreo");
var errorMensaje = document.getElementById("errorMensaje");

//Botón de enviar
var botonEnviar = document.getElementById("enviarFormulario");

//Función para validar el formulario
function validarFormulario() {
    //Bandera para controlar si hay errores
    var hayErrores = false;

    //Limpiar mensajes de error
    limpiarErrores();

    //Validar el campo de nombre
    if (nombre.value.trim() === "") {
        errorNombre.textContent = "El nombre es obligatorio.";
        errorNombre.style.visibility = "visible";
        hayErrores = true;
    }

    //Validar el campo de correo
    if (correo.value.trim() === "") {
        errorCorreo.textContent = "El correo es obligatorio.";
        errorCorreo.style.visibility = "visible";
        hayErrores = true;
    } else if (!validarCorreo(correo.value)) {
        errorCorreo.textContent = "El correo no tiene un formato válido.";
        errorCorreo.style.visibility = "visible";
        hayErrores = true;
    }

    //Validar el campo de mensaje
    if (mensaje.value.trim() === "") {
        errorMensaje.textContent = "El mensaje es obligatorio.";
        errorMensaje.style.visibility = "visible";
        hayErrores = true;
    }

    //Si no hay errores, mostrar un mensaje de éxito (opcional)
    if (!hayErrores) {
        alert("Formulario enviado con éxito.");
        formulario.reset(); // Reinicia el formulario
    }
}

//Función para limpiar los mensajes de error
function limpiarErrores() {
    errorNombre.textContent = "";
    errorNombre.style.visibility = "hidden";
    errorCorreo.textContent = "";
    errorCorreo.style.visibility = "hidden";
    errorMensaje.textContent = "";
    errorMensaje.style.visibility = "hidden";
}

//Función para validar el formato de un correo
function validarCorreo(correo) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

botonEnviar.addEventListener("click", validarFormulario);
