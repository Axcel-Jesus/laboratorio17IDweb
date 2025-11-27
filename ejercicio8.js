/*Crea una función llamada cargarUsuario que reciba un callback. La función debe esperar entre 800 ms y 1500 ms (tiempo
aleatorio usando setTimeout). Luego debe llamar al callback con un objeto que represente un usuario (id y nombre). El
callback debe imprimir el usuario formateado, por ejemplo: Usuario cargado: Juancito (ID: 1)
*/
function cargarUsuario(callback) {
        const delay = Math.floor(Math.random() * (700)) + 800;
        setTimeout(() => {
        const usuario = { id: 1, nombre: 'Juancito' };
        callback(usuario);
    }, delay);
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnCargar');
    const resultado = document.getElementById('resultado');

        btn.addEventListener('click', () => {
        resultado.textContent = 'Cargando usuario...';
        cargarUsuario(usuario => {
            const mensaje = "Usuario cargado:"+usuario.nombre+" ID:"+usuario.id;
            console.log(mensaje); 
            resultado.textContent = mensaje; 
        });
    });
});
