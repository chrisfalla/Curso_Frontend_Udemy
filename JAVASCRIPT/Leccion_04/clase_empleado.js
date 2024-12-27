class Empleado extends Persona {
    static contadorEmpleados = 0;
    constructor(sueldo) {
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