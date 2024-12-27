// creamos la clase persona que va a servir de plantilla para crear otra clases co herencia 
class Persona {
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersona() {
        return this._idPersona;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        return this._edad = edad;
    }
    toString() {
        return `${this._idPersona}
                ${this._nombre} 
                ${this._apellido} 
                ${this._edad}`;
    }
}

class Empleado extends Persona {
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }
    get idEmpleado() {
        return this._idEmpleado;
    }
    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    // el metodo de tostring es para convertir a cadena de texto los atributos de un objeto 
    toString() {
        return super.toString() + ` ${this._idEmpleado} ${this._sueldo}`;
    }
}

class Cliente extends Persona {
    static contadorClientes = 0;
    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente() {
        return this._idCliente;
    }
    get fechaRegistro() {
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }
    toString() {
        return super.toString() + ` ${this._idCliente} ${this._fechaRegistro}`;
    }
}

// testing 
let persona1 = new Persona("Juan", "Perez", 25);
let empleado1 = new Empleado("Maria", "Jimenez", 30, 5000);
let cliente1 = new Cliente("Alberto", "Juarez", 35, new Date());;
console.log(persona1.toString());
console.log(empleado1.toString());
console.log(cliente1.toString());
let persona2 = new Persona("Juan", "Perez", 25);
let empleado2 = new Empleado("Maria", "Jimenez", 30, 5000);
let cliente2 = new Cliente("Alberto", "Juarez", 35, new Date());
console.log(persona2.toString());
console.log(empleado2.toString());
console.log(cliente2.toString()); 