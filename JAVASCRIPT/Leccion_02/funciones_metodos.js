miFunction(5, 5);
function miFunction(a, b) {
    return a * 2 + b - 1;
}
miFunction(2, 3);
let resultado = miFunction(1, 1);
console.log()
// hoisting 

// funciones de tipo expresion 
let x = function (a, b) { return a + b };
resultado = x(2, 2);
console.log(resultado);

// funciones self-invoking
(function(a, b){
    console.log('Ejecutando la funcion ' + (a + b));
})(2, 3);