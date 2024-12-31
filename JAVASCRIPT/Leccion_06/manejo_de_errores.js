"use strict";
try {
    let x = 10;
    throw 'mi error';
}
catch (error) {
    console.log(error);
}
finally {
    console.log('se termina la revision de errores');
}
console.log('continuamos...');
// lo que pasa es que cuando no tenemos un manejo de errores 
// javascript no nos muestra el error y sigue ejecutando el codigo
// para evitar esto se usa el try catch y si se ejecuto el resto del codigo y muestra el error
// y el finally se ejecuta siempre al
let resultado = 5;

try {
    if (isNaN(resltado)) {
        throw new Error('No es un número');
    }else if (resultado === 5) {
        throw new Error('El número no puede ser 5');
    }
    console.log(resultado * resultado);
} catch (error) {
    console.log(error);
    // console.log(error.name);
    // console.log(error.message);
}