//PASO 1: Seleccionar los elementos necesarios
var colorPicker = document.getElementById("colorPicker"); // Campo de selección de color
var colorName = document.getElementById("colorName"); // Span para mostrar el color seleccionado
var colorBox = document.getElementById("colorBox"); // Div cuyo fondo cambiará

//PASO 2: Añadir un evento al selector de color
//el evento 'input' detecta cambios en tiempo real al elegir un color
colorPicker.addEventListener("input", function () {
    //PASO 3: Obtener el color seleccionado
    var colorSeleccionado = colorPicker.value;

    //PASO 4: Cambiar el fondo del área al color seleccionado
    colorBox.style.backgroundColor = colorSeleccionado;

    //PASO 5: Mostrar el color seleccionado en el span
    colorName.textContent = colorSeleccionado;
});