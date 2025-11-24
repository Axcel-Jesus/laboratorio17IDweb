//Generar un SyntaxError usando JSON.parse con texto inválido. En el catch mostrar e.name y e.message
try {
    JSON.parse("JSON no valido para imprimir");
} catch (e) {
    alert("Error: " + e.name);
    alert("Mensaje: " + e.message);
}