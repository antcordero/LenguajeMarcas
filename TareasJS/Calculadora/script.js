//variables de la botonera de operaciones
var bntBorrar = document.querySelector("button.borrar");
var bntSumar = document.querySelector("button.sumar");
var bntRestar = document.querySelector("button.restar");
var bntMultiplicar = document.querySelector("button.multiplicar");
var bntDividir = document.querySelector("button.dividir");
var bntIgual = document.querySelector("button.igual");

//variables de la botonera de números
var n1 = document.querySelector("button.n1");
var n2 = document.querySelector("button.n2");
var n3 = document.querySelector("button.n3");
var n4 = document.querySelector("button.n4");
var n5 = document.querySelector("button.n5");
var n6 = document.querySelector("button.n6");
var n7 = document.querySelector("button.n7");
var n8 = document.querySelector("button.n8");
var n9 = document.querySelector("button.n9");
var n0 = document.querySelector("button.n0");

//variable resultado en el input
var input = document.querySelector("input");

//variable para almacenar la expresión
var expresion = "";

//--------------FUNCIONES-------------------

/*
 *  función click en los botones numéricos
 */
function escribirNumero(event) {
    var numero = event.target.textContent;
    if (input.value === "0") {
        input.value = numero;
    } else {
        input.value += numero;
    }
    expresion += numero;
}

/*
 * función click en los botones de operaciones
 */
function escribirOperacion(event) {
    var operacion = event.target.textContent;
    input.value += " " + operacion + " ";
    expresion += operacion;
}

/*
 * función para calcular y mostrar el resultado
 */
function calcularResultado() {
    //bloque try-catch
    try {
        var resultado = eval(expresion);
        input.value = resultado;
        expresion = resultado.toString(); //Actualizar la expresión
    } catch (e) {
        input.value = "Error";
        expresion = "";
    }
}


/* 
 * función para borrar el input
 */
function borrar() {
    input.value = "0"; 
    expresion = "";
}



//--------------EVENTOS-------------------

//event listeners de los botones numéricos
n1.addEventListener("click", escribirNumero);
n2.addEventListener("click", escribirNumero);
n3.addEventListener("click", escribirNumero);
n4.addEventListener("click", escribirNumero);
n5.addEventListener("click", escribirNumero);
n6.addEventListener("click", escribirNumero);
n7.addEventListener("click", escribirNumero);
n8.addEventListener("click", escribirNumero);
n9.addEventListener("click", escribirNumero);
n0.addEventListener("click", escribirNumero);

//event listeners de los botones de operaciones
bntSumar.addEventListener("click", escribirOperacion);
bntRestar.addEventListener("click", escribirOperacion);
bntMultiplicar.addEventListener("click", escribirOperacion);
bntDividir.addEventListener("click", escribirOperacion);

//event listener al botón igual
bntIgual.addEventListener("click", calcularResultado);

//event listener al botón de borrar
bntBorrar.addEventListener("click", borrar);