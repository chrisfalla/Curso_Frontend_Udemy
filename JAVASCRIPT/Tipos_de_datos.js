var a = "Hola Mundo";
var numero = 10;
var decimal = 10.5;
var object = {
  nombre: "Juan",
  apellido: "Perez",
  telefono: 3134046615,
};
var float = 10.5;
// console.log(object);

// variables redefinidas
var a = "chanchito feliz";
// console.log(typeof a);
// tipo de dato bolean (true o false)
var bandera = true;
// console.log(typeof bandera);

// funciones
function suma(x, y) {
  return x + y;
}
// console.log(typeof suma(3,2));

// tipo de dato simbol
var simbolo = Symbol("mi simbolo");
// console.log(typeof simbolo);

// clases 
var numero = 10;

// puedo smar dos numero?
function suma(a, b) {
  return a + b;
}
// console.log(suma(3,2))
class carro {
  constructor(color, marca) {
    this.color = color;
    this.marca = marca;
  }
}
// console.log(carro);

//tipo de daro undefined
var x;
// console.log(typeof x);

//tipo de dato null
var y = null;
console.log(typeof y);