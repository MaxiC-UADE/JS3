var nombre = prompt("Por favor, ingresa tu nombre:");
var apellido = prompt("Por favor, ingresa tu apellido:");
var edad = prompt("Por favor, ingresa tu edad:");

function validarEdad(edad) {
    let dias = edad * 365;
    return dias;
}

alert("Hola " + nombre + " " + apellido + ", bienvenido, tienes " + edad + " años y has vivido " + validarEdad(edad) + " días");