// un objeto tiene propiedades y metodos
let persona = {
    nombre: "pepe",
    apellido: "maniobra",
    numero: 3134046615,
    edad: 29,
    nombreCompleto: function () {
        return this.nombre + "" + this.apellido;
    }
};
// console.log("su nombre es: " + persona.nombre + "" + " y su edad es: " + persona.edad)
// console.log("su nombre completo es: " + "" + persona.nombreCompleto());
// console.log(persona["nombre"]);
// ciclo for in para recorrer las propiedades de un objeto 
for(nombrePropiedad in persona){
    console.log("estos son sus datos :" + nombrePropiedad + ":" + persona[nombrePropiedad]);
    // console.log(persona[nombrePropiedad])
};
// creacion de objetos 
let persona2 = new Object();
persona2.nombre = "pepito";
persona2.edad = 23;
persona2.instrumento = "guitarra";

// console.log(persona2.instrumento);