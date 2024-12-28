"use strict";
try {
    x = 10;
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