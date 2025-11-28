//Ejercicio 9 con async/await
function cargarMensaje() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hola, se mostrara este mensaje");
        }, 1000);
    });
}
async function iniciar() {
    const salida = document.getElementById("salida");
    salida.innerHTML = "Cargando mensaje...";
    const mensaje = await cargarMensaje();
    salida.innerHTML = mensaje;
}