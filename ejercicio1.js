//Provocar un error de cualquier tipo e imprimir su mensaje
try {
    alert(Variblequenoexiste);
} catch (e) {
    alert("Error: " + e.name);
    alert("Mensaje: " + e.message);
}