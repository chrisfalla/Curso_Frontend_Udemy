// creamos la clase persona que va a servir de plantilla para crear otra clases co herencia 
class Persona {
    constructor(idPeronsa, nombre, apellido, edad) {
        static = idPeronsa = 0;
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