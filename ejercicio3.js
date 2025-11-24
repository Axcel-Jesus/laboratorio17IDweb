//Que console.log genere un error de cualquier tipo, en el catch imprimir “falló” y en finally imprimir “siempre se ejecuta”
try {
    console.log(errorexistente);
} catch (e) {
    alert("falló");
} finally {
    alert("siempre se ejecuta");
}