// esta es una funcion normal
function miFunction() {
    console.log('saludo desde mi funcion');
}
miFunction();
// let miFunction2 = function () {
//     console.log('saludo desde mi funcion arrow');
// }

// se declara el nombre de la funcion y se le asigna el valor de la funcion
// const myArrowFunction = () => {
//     console.log('saludo desde mi funcion arrow');
// }// con las arrows functios no funciona el hoisting asi que hay que llamarlas despues de declararlas

// const myArrowFunction = () => console.log("saludo desde mi funcion felcha ")

// myArrowFunction();

// const saludar = () => {
//     return 'saludo desde mi funcion arrow(saludar)';
// }
const saludar = () => "saludo desde mi funcion arrow(saludar)";
console.log(saludar());

const regresarObjeto = () => ({ name: 'Juan', apellido: 'Lara' });
console.log(regresarObjeto());

const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros('este es el mensaje que se va a impirmir poque es es el que le estoy pasando');

const suma = (a, b) => a + b;
console.log(suma(3, 2));