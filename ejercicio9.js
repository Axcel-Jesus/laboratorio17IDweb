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
    const resultado = document.getElementById("resultado");

    btn.addEventListener('click', () => {
        resultado.textContent = 'Calculando...';
        setTimeout(() => {
            dividirAsync(a.value, b.value, (error, resultado) => {
            if (error) {
                resultado.textContent = error.message;
            } else {
                resultado.textContent = a.value+"/"+b.value+" = "+parseInt(a.value)/parseInt(b.value);
            }
        });
        }, 1000);
        
    });
});