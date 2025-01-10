const mostrarReloj = () => {
    let fecha = new Date();
    let hora = fecha.getHours();
    let min = formatoHora(fecha.getMinutes());
    let seg = fecha.getSeconds();
    document.getElementById("hora").innerHTML = `${hora}:${min}:${seg}`;
    const meses = ["enero", "febrero", "abril"];
    const dias = ["dom", "lun", "mar", "mie", "jue", "vie", "sab"];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} de ${mes}`;
    document.getElementById("fecha").innerHTML = fechaTexto;

    document.getElementById("contenedor").classList.toggle("animar");
}

const formatoHora = (hora) => {
    if (hora < 10)
        hora = "0" + hora;
    return hora;
}

setInterval(mostrarReloj, 1000);