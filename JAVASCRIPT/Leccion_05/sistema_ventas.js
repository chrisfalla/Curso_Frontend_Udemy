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
let producto1 = new Producto("chris", 3000);
console.log(producto1.toString());