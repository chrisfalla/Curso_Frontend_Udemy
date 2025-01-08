function sumar() {
    const forma = document.getElementById('forma');
    let operandoa = forma["operandoa"];
    let operandob = forma["operandob"];
    let resultado = parseInt(operandoa.value) + parseInt(operandob.value);
    if (isNaN(resultado)) {
        resultado = "La operación no incluye números";
    }
    document.getElementById("resultado").innerHTML = `el resultado es: ${resultado}`;
}