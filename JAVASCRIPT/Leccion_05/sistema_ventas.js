class Producto {
    static contadorProductos = 0;
    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto() {
        return this._idProducto;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        return this._nombre = nombre;
    }
    get precio() {
        return this._precio;
    }
    set precio(precio) {
        return this._precio = precio;
    }
    toString() {
        return this.idProducto + " " + this.nombre + " " + this.precio;
    }
}

class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS() {
        return 5;
    }
    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this.productosAgregados = 0;
    }
    get idOrden() {
        return this._idOrden;
    }
    agregarProductos(producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto);
        }
        else {
            return console.log("no se pueden agregar mas productos");
        }
    }
    calcularTotal() {
        let totalVenta = 0;
        for (let producto of this._productos) {
            totalVenta += producto.precio;
        }
        return totalVenta;
    }
    mostrarOrden() {
        let productosOrden = " ";
        for (let producto of this._productos) {
            productosOrden +=  producto.toString() + " ";
        }
        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()} Productos: ${productosOrden}`);
    }
}

let producto1 = new Producto("casco", 200);
let producto2 = new Producto("jean", 150);
let orden1 = new Orden(); 
orden1.agregarProductos(producto1);
orden1.agregarProductos(producto2);
orden1.mostrarOrden();
let orden2 = new Orden();
let producto3 = new Producto("camisa", 100);
let producto4 = new Producto("zapatos", 250);
orden2.agregarProductos(producto3);
orden2.agregarProductos(producto1);
orden2.agregarProductos(producto4);
orden2.mostrarOrden();