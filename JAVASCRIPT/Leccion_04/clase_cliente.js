class Cliente extends Persona {
    static contadorclientes = 0;
    constructor(fechaRegistro) {
        this._idCliente = ++Cliente.contadorclientes;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    tostring(){
        return super.toString() + ` ${this._idCliente} ${this._fechaRegistro}`;
    }
}