//Ejercicio 10 con async/await
function cargarUsuario() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: 1,
                nombre:"Juancito"
            });
        }, Math.floor(Math.random() * 800) + 700);
    });
}
async function iniciar() {
    const salida = document.getElementById("salida");
    salida.innerHTML = "Cargando usuario...";
    const usuario = await cargarUsuario();
    salida.innerHTML = 'Usuario cargado: ${usuario.nombre} (ID: ${usuario.id})';
}