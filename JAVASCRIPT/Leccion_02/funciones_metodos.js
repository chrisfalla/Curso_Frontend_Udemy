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
(function (a, b) {
    console.log('Ejecutando la funcion ' + (a + b));
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
})(2, 3);

// funciones como objetos
// var miFunctionText = miFunctionText.tostring();
// console.log(miFunctionText);

// funciones flecha (arrowfunctions)
// x, z son parametros, y se puede asignar un valor por defecto
const restar = (x = 10, z = 20) => x - z;
requets = restar(10, 3);
//10 y 3 son argumentos
console.log("la resta es: " + requets);

let result = sumarTodo(1, 2, 3);
function sumarTodo() {
    let count = 0;
    for (let i = 0; i < arguments.length; i++) {
        count += arguments[i];
    }
    return count;
}
console.log(result)
// paso por valor 
let y = 10;

function change(a) {
    a = 20;
}
console.log(y);

// paso por referencia como un reemplazo 
const persona = {
    nombre: "pepe",
    apellido: "maniobra"
}

function cambiarValorObejto(p1) {
    p1.nombre = "camilo";
    p1.apellido = "basquez";
}
cambiarValorObejto(persona)
console.log(persona)

const instrumento = {
    nombre: "guitarra",
    color: "madera"
}

function cambiarColor(q) {
    q.color = "negro con naranja"
}
cambiarColor(instrumento);
console.log(instrumento);