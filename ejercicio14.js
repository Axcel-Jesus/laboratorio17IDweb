//Ejercicio 12 con promesas
function procesaNumero(n) {
    return new Promise(resolve => {
        setTimeout(() => {
            document.getElementById("log").innerHTML += "Procesando " + n + "..."+ "<br>";
            resolve();
        }, Math.floor(Math.random() * 1000) + 500);
    });
}
function procesarLista(numeros) {
    let cadena =Promise.resolve();
    numeros.forEach(numero => {
        cadena = cadena.then(() => procesaNumero(numero));
    });
    return cadena.then(() => "Proceso completado");
}
function iniciar() {
    document.getElementById("log").innerHTML = "";
    document.getElementById("final").innerHTML = "procesando...";
    procesarLista([1,2,3,4,5,6,7,8,9,10])
        .then(mensaje => {
            document.getElementById("final").innerHTML = mensaje;
        })
}