// las clases son una plantilla para crear objetos, son modelos a seguir
//hoisting es cuando se declara una variable y se le asigna un valor despues no se puede declarar la variable antes de haber creado la clase
class Persona {
    static contadorPersonas = 0;// y este si es de la clase y no de los objetos
    static get MAX_OBJ() {
        return 5;
    }
    constructor(nombre, apeliido) {
        this._nombre = nombre;
        this._apellido = apeliido;
        this.idPersona.contadorPersonas++;
    }//el metodo get se utiliza para obtener el valor de una propiedad
    get nombre() {
        return this._nombre;
    }//el metodo set se utiliza para asignar un valor a una propiedad
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    nombreCompleto() {
        return this._nombre + " " + this._apellido;
    }
    toString() {
        return this.nombreCompleto();
    }
    static saludar() {
        console.log("Saludos desde el metodo static");
    }
    static saludar2(persona) {
        console.log(persona.nombre + " " + persona.apellido);
    }
}
class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = departamento;
    }//sobreescritura de metodos, la palabra resevada de super se utiliza para llamar al metodo de la clase padre
    nombreCompleto() {
        return super.nombreCompleto() + "" + this._departamento;
    }
}
let Persona1 = new Persona("Christofer", "Falla");
// Persona1.nombre = "Christofer Mark";
// console.log(Persona1.nombre);
// let Persona2 = new Persona("Erika", "Villarreal");
// console.log(Persona2.nombre);
let Empleado1 = new Empleado("Christofer", "Falla", "Sistemas");
// el polimorfismo es cuando puedo llamar de un obejto de una clase hija a un metodo de la clase padre
console.log(Empleado1.toString());
console.log(Empleado1.nombreCompleto());
//los metodos estaticos se pueden llamar sin necesidad de instanciar un objeto
Persona.saludar();
Persona.saludar2(Empleado1);
console.log(persona1.email); 