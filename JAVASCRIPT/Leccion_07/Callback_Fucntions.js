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
// llamadas asincronas con el uso del settimeout 
function miFuncionCallback() {
    console.log('saludo desde mi funcion callback asincrona osea despues de 3 segundos');
}
// setTimeout recibe dos parametros, el primero es la funcion que se va a ejecutar y el segundo es el tiempo en milisegundos
setTimeout(miFuncionCallback, 3000);
setTimeout(function saludo() { console.log('saludo desde mi funcion callback anonima') }, 2000);
setTimeout( () => console.log('saludo desde mi funcion callback flecha'), 4000);
// setInterval se ejecuta cada cierto tiempo
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}: ${fecha.getMinutes()}:${fecha.getSeconds()}`);
}
// setInterval(reloj, 10);