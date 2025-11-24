/*En un catch dentro de una función imprimir un mensaje de error y luego volver a lanzar el mismo error con throw hacia otra
función que la invocó. El error también será capturado en esa otra función y finalmente será capturado en un catch externo
a cualquier de las funciones, el cual lo recibe e imprime. Comprueba que el error sigue propagándose
Salida:
Nivel 2 atrapó el error: x is not defined
Nivel 1 recibió el error: x is not defined
ERROR FINAL capturado en el nivel superior: x is not defined
*/