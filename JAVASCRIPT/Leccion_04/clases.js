// las clases son una plantilla para crear objetos, son modelos a seguir
//hoisting es cuando se declara una variable y se le asigna un valor despues no se puede declarar la variable antes de haber creado la clase
class Persona {
    constructor(nombre, apeliido) {
        this._nombre = nombre;
        this._apellido = apeliido;
    }//el metodo get se utiliza para obtener el valor de una propiedad
    get nombre() {
        return this._nombre;
    }//el metodo set se utiliza para asignar un valor a una propiedad
    set nombre(nombre) {
        this._nombre = nombre;
    }
}
let Persona1 = new Persona("Christofer", "Falla");
Persona1.nombre = "Christofer Mark";
console.log(Persona1.nombre);
let Persona2 = new Persona("Erika", "Villarreal");
console.log(Persona2.nombre);