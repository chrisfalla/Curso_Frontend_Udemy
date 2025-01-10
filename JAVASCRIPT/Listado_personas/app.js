const personas = [
    new Persona("Christofer", "Falla"),
    new Persona("Paula", "Lara")
];

function mostrarPersonas() {
    console.log("saludos desde mostrar personas")
    let texto = "";
    for (let persona of personas) {
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    };
    document.getElementById("personas").innerHTML = texto;
}