//Ejercicio 11 con promesas
function dividirNumeros(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b === 0) {
                reject("No se puede dividir por cero");
            } else {
                resolve(a / b);
            }
        }, 1500);
    });
}
function iniciar() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let resultado = document.getElementById("resultado");

    resultado.textContent = "Calculando...";
    dividirNumeros(a, b)
        .then(resultados => {
            resultado.textContent = "el resultado es: " + resultados;
        })
        .catch(error => {
            resultado.textContent = "error: " + error;
        })
}