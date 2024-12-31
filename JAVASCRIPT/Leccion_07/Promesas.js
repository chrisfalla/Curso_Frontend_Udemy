let miPromesa = new Promise((resolve, rejected) => {
    let prueba = true;
    if (prueba)
        resolve("every fine!!");
    else
        rejected("mmm...something is wrong")
});
//then 
miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);
//catch 
miPromesa
    .then(valor => console.log(valor))
    .catch(error => console.log(error));

let promesa = new Promise((resolve) => {
    console.log("inicio promesa");
    setTimeout(() => resolve("saludo con promesa y timeOut"), 2000);
    console.log("fin promesa");
});
promesa.then(valor => console.log(valor));

// async indica que una función regresa una promesa
async function miFuncionConPromesa() {
    return "saludo con promesa y async";
}
miFuncionConPromesa().then(valor => console.log(valor));