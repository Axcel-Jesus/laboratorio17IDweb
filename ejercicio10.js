/*Crea una función llamada procesarLista. Debe recibir un arreglo de números, un callback, por cada número del arreglo
esperar entre 500 y 1500 ms usando setTimeout. Imprimir "Procesando <numero>..." y cuando todos los números estén
procesados llamar al callback final con el mensaje "Proceso completado"
*/
function procesarLista(numeros, callbackFinal) {
    const containerId = 'resultadoProcesar';
    let container = document.getElementById(containerId);
    if (!container) {
        container = document.createElement('div');
        container.id = containerId;
        container.setAttribute('aria-live', 'polite');
        document.body.appendChild(container);
    }
    container.innerHTML = '';

    if (!Array.isArray(numeros)) {
        if (typeof callbackFinal === 'function') callbackFinal(new Error('Se esperaba un arreglo de números'));
        return;
    }

    if (numeros.length === 0) {
        if (typeof callbackFinal === 'function') callbackFinal('Proceso completado');
        return;
    }
    numeros.forEach(numero => {
        setTimeout(() => {
            const div = document.createElement('div');
            div.textContent = 'Procesando ' + numero + '...';
            container.appendChild(div);
            if (procesados === numeros.length) {
                if (typeof callbackFinal === 'function') callbackFinal('Proceso completado');
            }
        }, Math.floor(Math.random() * 1000) + 500);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnCargar');
    let resultadoFinal = document.getElementById('resultadoFinal');
    if (!resultadoFinal) {
        resultadoFinal = document.createElement('div');
        resultadoFinal.id = 'resultadoFinal';
        resultadoFinal.setAttribute('aria-live', 'polite');
        document.body.appendChild(resultadoFinal);
    }

    btn.addEventListener('click', () => {
        resultadoFinal.textContent = 'Iniciando proceso...';
        procesarLista([1,2,3,4,5,6,7,8,9,10], (mensaje) => {
            resultadoFinal.textContent = mensaje;
        });
    });
});