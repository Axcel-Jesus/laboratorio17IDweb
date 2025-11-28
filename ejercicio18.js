//Ejercicio 12 con async/await
function procesaNumero(n) {
    return new Promise(resolve => {
        setTimeout(() => {
            document.getElementById("log").innerHTML += "Procesando " + n + "..."+ "<br>";
            resolve();
        }, Math.floor(Math.random() * 1000) + 500);
    });
}
function procesarLista(numeros) {
    return new Promise(async resolve => {
        for(let num of numeros){
            await procesaNumero(num);
        }
        resolve("Proceso completado");
    });
}
function iniciar() {
    document.getElementById("log").innerHTML = "";
    document.getElementById("final").innerHTML = "procesando...";
    procesarLista([1,2,3,4,5,6,7,8,9,10])
        .then(mensaje => {
            document.getElementById("final").innerHTML = mensaje;
        })
}
