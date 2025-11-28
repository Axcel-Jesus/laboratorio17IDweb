//Ejercicio 10 con promesas

function cargarUsuario() {
    return new Promise(resolve => {
        let tiempo = Math.floor(Math.random() * 700) + 800;

        setTimeout(() => {
            const usuario = {
                id: 1,
                nombre: "Juancito"
            };
            resolve(usuario);
        }, tiempo);
    });
}

function iniciar() {
    const res = document.getElementById("resultado");
    res.textContent = "Cargando usuario...";

    cargarUsuario().then(user => {
        res.textContent = `Usuario cargado: ${user.nombre} (ID: ${user.id})`;
    });
}
