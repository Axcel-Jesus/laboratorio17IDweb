//Ejercicio 11 con async/await
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
async function iniciar() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const resultadoEl = document.getElementById("resultado");

    resultadoEl.textContent = "Calculando...";
    try {
        const resultado = await dividirNumeros(a, b);
        resultadoEl.textContent = "El resultado es: " + resultado;
    } catch (error) {
        resultadoEl.textContent = "Error: " + error;
    }
}