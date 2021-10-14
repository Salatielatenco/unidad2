var examen = /** @class */ (function () {
    function examen() {
    }
    examen.prototype.ejercicio1 = function () {
        console.log("hola mundo");
    };
    examen.prototype.ejercicio2 = function () {
        var saludo = "hola mundo";
        console.log(saludo);
    };
    examen.prototype.ejercicio3 = function () {
        var nombre = prompt("ingresa tu nombre");
        console.log('¡ hola !' + " " + nombre);
    };
    examen.prototype.ejercicio4 = function () {
        var nombre = prompt("ingresa tu nombre");
        var numero = prompt("ingresa un numero");
        numero = parseInt(numero);
        for (var i = 1; i <= numero; i++) {
            console.log(nombre + " " + i);
        }
    };
    examen.prototype.ejercicio5 = function () {
        var nombre = prompt("ingrese su nombre completo");
        console.log(nombre.toUpperCase());
        console.log(nombre.toLowerCase());
    };
    examen.prototype.ejercicio6 = function () {
        var edad = prompt("Ingresa tu edad");
        edad = parseInt(edad);
        if (edad >= 18) {
            console.log("eres mayor de edad");
        }
        else {
            console.log("eres menor de edad");
        }
    };
    examen.prototype.ejercicio7 = function () {
        var password = ("hola");
        var password1 = prompt("ingresa tu password");
        if (password === password1) {
            console.log("la contraseña coinciden ");
        }
        else {
            console.log("no coinciden las contraseñas");
        }
    };
    examen.prototype.ejercicio8 = function () {
        var palabra = prompt("ingrese una palabra");
        for (var i = 1; i < 11; i++) {
            console.log(palabra + " " + i);
        }
    };
    examen.prototype.ejercicio9 = function () {
        var edad = prompt("ingresa tu edad");
        edad = parseInt(edad);
        for (var i = 0; i < edad; i++) {
            console.log("has cumplido" + " " + (i + 1) + " " + "años");
        }
    };
    examen.prototype.ejercicio10 = function () {
        var cantidad_invertir = prompt("ingresa una cantidad a invertir ");
        var intereses_anual = prompt("ingresa el interes anual");
        var años = prompt("ingresa el numero de años ");
        cantidad_invertir = parseInt(cantidad_invertir);
        intereses_anual = parseInt(intereses_anual);
        var porciento = intereses_anual / 100;
        var ganancias1 = Math.pow(años, porciento);
        var ganancias2 = cantidad_invertir * ganancias1;
        console.log("las ganacia futuras fueron " + " " + ganancias2);
    };
    return examen;
}());
var temas = new examen();
temas.ejercicio10();
