//Definir una función validarEdad(edad), si edad < 0 o no es número, lanzar un error ("Edad inválida"). Capturar y mostrar el error
function validarEdad(edad) {
    try {
        if (isNaN(edad) || edad < 0) {
            throw new Error("Edad invalida");
        } else {
            alert("Edad válida: " + edad);
        }
    } catch (e) {
        alert("Mensaje: " + e.message);
        alert("Error: " + e.name);
    }
}