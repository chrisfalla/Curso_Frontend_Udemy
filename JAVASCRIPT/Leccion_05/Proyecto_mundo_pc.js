class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada() {
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada) {
        return this._tipoEntrada = tipoEntrada;
    }
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        return this._marca = marca;
    }
    toString() {
        return "Tipo de entrada:" + "" + this.tipoEntrada + " Marca" + ":" + this.marca
    }
}

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca)
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton() {
        return this._idRaton
    }
    toString() {
        return "Raton:" + this._idRaton + "  " + "Tipo entrada:" + this.tipoEntrada + "  " + "Marca:" + this.marca;
    }
}

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado() {
        return this._idTeclado;
    }
    toString() {
        return " Teclado:" + " " + this.idTeclado + " Tipo Entrada:" + " " + this.tipoEntrada + " Marca:" + " " + this.marca;
    }
}

class Monitor {
    static contadorMonitores = 0;
    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor() {
        return this._idTeclado;
    }
    toString() {
        return "Monitor:" + this._idMonitor + " " + "Marca:" + " " + this._marca + " " + "Tamaño:" + " " + this._tamaño;
    }
}

class Computadora {
    static contadorComputadoras = 0;
    constructor(nombre, monitor, raton, teclado) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    toString() {
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`
    }
}

class Orden {
    static contadorOrdenes = 0;
    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden() {
        return this._idOrden;
    }
    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }
    mostrarOrden() {
        let computadorasOrden = "";
        for (let computadora of this._computadoras) {
            computadorasOrden += `\n ${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let dispo1 = new DispositivoEntrada("USB", "Lenovo");
let dispo2 = new DispositivoEntrada("VGA", "Acer");
let raton1 = new Raton("usb", "Lenovo");
let raton2 = new Raton("bluetoh", "DELL");
raton1.marca = "HP";
let teclado1 = new Teclado("USB", "HP");
let teclado2 = new Teclado("Bluetu", "Kalley");
let monitor1 = new Monitor("HP", 20);
let monitor2 = new Monitor("Acer", 15);
let computora1 = new Computadora("HP", monitor1, raton1, teclado1);
let computora2 = new Computadora("Lenovo", monitor2, raton2, teclado2);
let computora3 = new Computadora("Acer", monitor1, raton2, teclado1);
// console.log(computora1.toString());
// console.log(computora2.toString());
// console.log(`${computora3}`);
let orden1 = new Orden();
let orden2 = new Orden();
let orden3 = new Orden();
orden1.agregarComputadora(computora1);
orden1.agregarComputadora(computora2);
orden2.agregarComputadora(computora3);
orden2.agregarComputadora(computora3);
orden3.agregarComputadora(computora3);
orden3.agregarComputadora(computora3);
orden1.mostrarOrden();
orden2.mostrarOrden();
orden3.mostrarOrden();
