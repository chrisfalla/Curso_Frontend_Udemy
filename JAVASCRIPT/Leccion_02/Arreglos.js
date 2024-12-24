// // let instrumentos = new Array("Guitarra", "Bajo", "Batería", "Teclado");
const instrumentos = ["Guitarra", "Bajo", "Batería", "Teclado"];

// console.log(instrumentos[0])
for (let i = 0; i < instrumentos.length; i++) {
    console.log(i + " : " + instrumentos[i]);
};

// modificar arreglos o arrays

instrumentos[3] = "Cuatro";
console.log(instrumentos);
// funcion o metodo para agregar elementos a un array
instrumentos.push("Ukelele");
console.log(instrumentos);

console.log(instrumentos.length);
instrumentos[instrumentos.length] = "Violin";
console.log(instrumentos);

instrumentos[5] = "maracas";
console.log(instrumentos);

console.log(typeof intrumentos);
console.log(Array.isArray(instrumentos));
console.log(instrumentos instanceof Array);