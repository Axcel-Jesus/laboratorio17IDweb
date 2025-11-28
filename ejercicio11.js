//Ejercicio 9 con promesas
function cargarMensaje() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Mensaje cargado");
        }, 1000);
    });
}

function iniciar() {
    const salida = document.getElementById("salida");
    salida.textContent = "Cargando...";

    cargarMensaje().then(msg => {
        salida.textContent = msg;
    });
}
