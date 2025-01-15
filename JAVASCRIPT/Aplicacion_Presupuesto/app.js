const ingresos = [
    new Ingreso("salario", 1000000),
    new Ingreso("venta de coche", 1500000),
];

const egresos = [
    new Egreso("renta", 800000),
    new Egreso("gasolina", 200000)
];

let cargarApp = () => {
    cargarCabecero();
}

let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
}

let totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

formatoMoneda = (valor) => {
    return valor.toLocaleString("en-US", {
        style: "currency", currency: "USD", minimumFractionDigits: 2
    })
};

formatoPorcentaje = (porcentaje) => {
    return porcentaje.toLocaleString("en-US", {
        style: "percent", minimumFractionDigits: 2
    })
};