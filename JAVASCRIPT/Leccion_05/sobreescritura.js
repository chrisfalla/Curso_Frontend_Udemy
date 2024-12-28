class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    // Método obtenerDetalles en la clase base Empleado
    obtenerDetalles() {
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        // Llamada al constructor de la clase base
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    // Sobreescritura del método obtenerDetalles en la clase derivada Gerente
    obtenerDetalles() {
        // Llamada al método obtenerDetalles de la clase base usando super
        return `Gerente: ${super.obtenerDetalles()}, departamento: ${this.departamento}`;
    }
}
function determinarTipo(tipo) {
    console.log(tipo.obtenerDetalles());
    // instanceof es un operador que se utiliza para saber si un objeto es de una clase en particular
    if (tipo instanceof Gerente) {
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo.departamento);
    } if (tipo instanceof Empleado) {
        console.log('Es un objeto de tipo Empleado');
        console.log(tipo.departamento);
    } if (tipo instanceof Object) {
        console.log('Es un objeto de tipo Object');
    }
}// aqui aplicamos el polimorfismo,
//  que es la capacidad de un objeto de comportarse de diferentes formas
//  dependiendo de la clase que se este utilizando
//  en este caso el metodo obtenerDetalles se comporta de diferente forma

let empleado1 = new Empleado('Juan', 3000);
let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');
// cuando hacemos la sobreeescritura el metodo de la clase padre se esconde
//  y solo se puede acceder al metodo de a clase padre con la palabra super
determinarTipo(empleado1);
determinarTipo(gerente1);

