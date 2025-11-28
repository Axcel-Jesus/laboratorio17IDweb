//Crea una función dividirAsync que reciba a, b y un callback. Espere 1.5 segundos. Si b === 0, llame a callback(new Error("No se puede dividir entre cero"), null); Si no, llame a: callback(null, a / b);
function dividirAsync(a, b, callback) {
    setTimeout(() => {
        if (b === 0) {
            callback(new Error("No se puede dividir entre cero"), null);
        } else {
            callback(null, a / b);
        }
    }, 1500);
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById("btnDividir");
    const a = document.getElementById("a");
    const b = document.getElementById("b");
    const resultadoDiv = document.getElementById("resultado");

    btn.addEventListener('click', () => {
        resultadoDiv.textContent = 'Calculando...';
        
        dividirAsync(parseInt(a.value), parseInt(b.value), (error, resultado) => {
            if (error) {
                resultadoDiv.textContent = error.message;
            } else {
                resultadoDiv.textContent = a.value + "/" + b.value + " = " + resultado;
            }
        });
    });
});