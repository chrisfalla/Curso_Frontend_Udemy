function uno() {
    console.log('funcion 1');
}
function dos() {
    console.log('funcion 2');
}

// funcion callback
function imprimir(mensaje) {
    console.log(mensaje);
}

function sumar(a, b, funcionCallback) {
    let resultado = a + b;
    funcionCallback(`Resultado: ${resultado}`);
}

sumar(2, 3, imprimir);