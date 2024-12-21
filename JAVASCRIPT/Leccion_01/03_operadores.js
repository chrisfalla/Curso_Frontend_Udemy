// let a = 3, b = 2;
// let c = a + b
// // console.log("el resultado de la suma es: " + c);

// // z = a - b
// // console.log("resultado de la resta: "+z);

// // z = a * b
// // console.log ("el resultado de la multiplicacion es: "+z);

// // z = a / b 
// // console.log ("el resultado de la division es: "+z);

// // z = a ** b 
// // console.log("el resultado de el exponencial es: "+z):

// // z = a % b
// // console.log("el resultado de el modulo es :"+z);


// // concepto de incremento 
// // preincremento (el operador ++ antes de la variable)

// z = ++a;
// console.log(a);
// console.log(z);

// // postincremento (el operador ++ despues de la variable)

// z = b++;
// console.log(b);
// console.log(z);

// // decremento
// z = --a;
// console.log(a);
// console.log(z);

// // predecremento
// z = b--;
// console.log(b);
// console.log(z);

// // precednecia de operadores

// let a = 1, b = 2, c = 3, d = 4;

// let z = a * b + c / d;

// console.log(z);

// z = c + a * b / d;
// console.log(z);


//operadores de asignacion 

// let a = 1;

// a += 3;
// console.log(a);

// a -= 2;
// console.log(a);

/*
*=
/=
%=
**=
*/

// let a = 3, b = 2, c = "3";

// let z = a == c;
// console.log(z);

// let q = a === c;
// console.log(q);

// let z = a != c;
// console.log(z);

// let q = a !== c;
// console.log(q);

// z = a < b;
// console.log(z);

// let z = a <= b;
// console.log(z);

// let a = 12, b = 14
// if (a > b && a % 2 == 0) {
//     console.log("a es mayor b, y a es par")
// }
// else {
//     console.log("b es mayor que a, y b es impar")
// }

// let edad = 17
// if(edad >= 18){
//     console.log("es mayor de edad")
// }
// else{
//     console.log("es menor de edad")
// }

// let w = 8;
// let valMin = 0, valMax = 10;
// if (w >= valMin && w <= valMax) {
//     console.log("el numero esta dentro del rango")
// } else {
//     console.log("el numero no esta dentro del rango");
// }

// let vacaiones = true, diaDescanso = false
// if (vacaiones || diaDescanso) {
//     console.log("el papa puede asistir al juego del hijo");
// } else {
// console.log("el papa no tiene permiso para ir al juego del hijo")
// }

//operado ternario

// let resultado = (1>2) ? "true" : "false";
// console.log(resultado)

// let numero = 6;
// resultado = (numero % 2 == 0) ? "numero par" : "numero impar";
// console.log(resultado)

//conversion de string a numero

// let number = "diez"
// let edad = Number(number);
// if (edad >= 18) {
//     console.log("si puede votar");
// } else {
//     console.log("no puede votar");
// }

// let number = (edad >= 18) ? "puede votar" : "no puede votar";

// let edadMin = "18";
// let edad = Number(edadMin);
// console.log(edad); // NaN (not a number)
// if (isNaN(edad)) {
//     console.log("no es un numero");
// } else {
//     if (edad >= 18) {
//         console.log("si puede votar");
//     } else {
//         console.log("no puede votar");
//     }
// }

// presedencia de operadores
let = x = 5;
let = y = 10;
let = z = ++x + y--;
// console.log(z)

let resultado = 4 + 5 * 6 / 3
console.log(resultado)

resultado = (4 + 5) * 6 / 3
console.log(resultado)
