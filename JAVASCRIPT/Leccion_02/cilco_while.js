// ciclo while

// let contador = 0;
// while (contador < 21) {
//     console.log(contador);
//     contador++;
// }
// console.log("Fin del ciclo while");

// ciclo do while
// let contador = 0;
// while (contador < 21) {
//     console.log(contador);
//     contador++;
// }
// do {
//     console.log(contador);
//     contador++;
// } while (contador < 3);
// console.log("Fin del ciclo Do while");

// ciclo for 
// for (let contador = 0; contador < 11; contador++) {
//     console.log(contador)
// };
// console.log("fin del ciclo for");

// for (let count = 0; count <= 10; count++) {
//     if (count % 2 == 0) {
//         console.log(count)
//         break;
//     }
// }
// console.log("fin del ciclo for")

inicio:
for (let count = 0; count <= 10; count++) {
    if (count % 2 == 0) {
        console.log(count)
        continue  inicio;// ir a la siguiente iteracion
    } else{
        console.log("Impar: " + count);
    }
};
console.log("fin del ciclo for");
