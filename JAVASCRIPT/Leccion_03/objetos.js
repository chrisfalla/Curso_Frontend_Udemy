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
for (nombrePropiedad in persona) {
    // console.log("estos son sus datos :" + nombrePropiedad + ":" + persona[nombrePropiedad]);
    // console.log(persona[nombrePropiedad])
};
// creacion de objetos 
let persona2 = new Object();
persona2.nombre = "pepito";
persona2.edad = 23;
persona2.instrumento = "guitarra";

// console.log(persona2.instrumento);

//agregar y eliminar propiedades a un objeto
persona.edad = "30";
persona.carro = "mazda";
persona.carro = "chevrolet";
delete persona.nombreCompleto;
// console.log(persona);

// imprimir las propiedades de un objeto
//concatenar cada valor de cada propiedad
// console.log(persona.nombre + " " + persona.apellido + " " + persona.numero + " " + persona.edad + " " + persona.carro);

// con un for 
for (nombrePropiedad in persona) {
    // console.log(persona[nombrePropiedad]);
}

let personaArray = Object.values(persona);
//console.log(personaArray); nos muestra un array con los valores de las propiedades del objeto

let personaString = JSON.stringify(persona);
//console.log(personaString); nos muestra un string con las propiedades del objeto

// buenas practicas get y set
let persona3 = {
    nombre: "pepe",
    apellido: "maniobra",
    idioma: "español",
    get lang() {
        return this.idioma.toUpperCase();
    },
    set lang(lang) {
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto() {
        return this.nombre + " " + this.apellido;
    },
    set nombreCompleto(nom) {
        let palabras = nom.split(" ");
        this.nombre = palabras[0];
        this.apellido = palabras[1];
    }
};
persona.lang = "ingles";
console.log(persona3.idioma);

// constructores de objetos
function People(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nameComplete = function () {
        return this.nombre + " " + this.apellido;
    }
}
// cada vez que uso la palabra new se crea un nuevo objeto
// osea el constructor permite crear algo general y de ahi se crean mas objetos
let padre = new People("juan", "perez", 50);
console.log(padre.nameComplete());

let madre = new People("erika", "villarreal", 45);
console.log(madre.nameComplete());

padre.nombre = "pedro";
// console.log(padre);
// las que s¿son simplificadas son las que mas se recomiendan
let miObjeto = new Object();
let miObjeto2 = {};

let miString = new String("hola_mundo");
let miString2 = "hola_mundo";

let miNumero = new Number(12);
let miNumero2 = 12;

let miBoleano = new Boolean(true);
let miBoleano2 = true;

let miArreglo = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function () { };