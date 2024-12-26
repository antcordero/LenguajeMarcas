var parrafo = document.getElementById("miParrafo");
var boton = document.getElementById("miBoton");

function cambiarTexto (){
  parrafo.textContent = "Texto del parrafo cambiado";
}

boton.addEventListener("click", cambiarTexto);


/* cambio ida y vuelta */
var parrafo2 = document.getElementById("miParrafo2");
var botonNuevo = document.getElementById("miBoton2");

// Texto original y alternativo
var textoOriginal = "Este es el texto inicial.";
var textoNuevo = "¡El texto ha cambiado!";

function cambioIdaVuelta() {
  if (parrafo2.textContent === textoOriginal) {
      parrafo2.textContent = textoNuevo; // Cambia al nuevo texto
  } else {
      parrafo2.textContent = textoOriginal; // Vuelve al texto original
  }
}

botonNuevo.addEventListener("click", cambioIdaVuelta);