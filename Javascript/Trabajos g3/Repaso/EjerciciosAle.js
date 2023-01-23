/* ## Operaciones básicas, Tipos de datos, Prompt y Alert

- Escribir un programa que muestre un prompt donde el usuario ingresa un número, 
luego muestra otro prompt pidiendo otro número, 
finalmente el programa muestra una alerta con el resultado de la suma. */

var num1 = parseInt(prompt("ingresa un numero"));
var num2 = parseInt(prompt("ingresa un numero"));
alert(num1 + num2);
var num1 = parseInt(prompt("ingresa un numero"));
var num2 = parseInt(prompt("ingresa un numero"));
var sum = num1 + num2;
alert("La suma es " + sum);


/* - Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y 
el programa muestre en una alerta la temperatura en Fahrenheit. */

var gradosC = parseInt(prompt("ingresa la temperatua en °C"));
var F = (gradosC * 9 / 5) + 32;
alert("En F " + F);

/* - Pedir un número a un usuario a través de un prompt 
y luego dividirlo por 10, ejemplo: 5 / 10  igual 0.5 */

var numUsu = parseInt(prompt("Ingresa un número"));
var div = numUsu / 10;
alert("Tu número es " + div);

/* - Si a = [1,2,3] crear un script que determine demuestre un alert del tipo de dato de a. */

var a = [1, 2, 3];
alert(typeof a);

/* ## If and else

- Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta. */

var numeroIng = parseInt(prompt("Ingresa un número"));
var numeroPar = numeroIng % 2;
if (numeroPar == 0) {
    alert("El número es par");
} else {
    alert("El número es impar");
}

/*  - Crear un programa que determine si un número introducido en un Prompt
es divisible por 5 o no, mostrar el resultado con console.log */

var ingNum = parseInt(prompt("Ingrese un número"));
var div = ingNum % 5;
if (div == 0) {
    alert("El número es divisible por 5");
} else {
    alert("El número no es divisible por 5");
};

/* - Crear un programa que determine si un número introducido en un 
popup es divisible por 11 y 5 o no, mostrar el resultado con console.log */
var numIngUser = parseInt(prompt("Ingrese número divisible por 11 y 5"));
var div5 = numIngUser % 5;
var divEntonces = numIngUser % 11;

if (div5 == 0 && divEntonces == 0) {
    alert("El número es divisible por 11 y 5");
} else {
    alert("El número no es divisible por 11 y 5");
}

/* - Crear un programa  que le pida al usuario dos números 
en un Prompt y luego muestre en un alerta el número mayor.*/

var num1 = parseInt(prompt("Ingrese el primer número"));
var num2 = parseInt(prompt("Ingrese el segundo número"));
if (num1 > num2) {
    alert("El número mayor es " + num1);
} else {
    alert("El número mayor es " + num2);
}

/*  - Crear un programa que le pida al usuario primero un número al usuario a través de un prompt
 y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el 
 ejercicio ocupando un if ternario. */

var num1 = parseInt(prompt("Ingrese el primer número"));
var num2 = parseInt(prompt("Ingrese el segundo número"));
var numMayor = (num1 > num2) ? ("El número mayor es", num1) : ("El número mayor es", num2);
alert("El número mayor es " + numMayor);

// Obtener edad
var edad = 11;

if (edad < 13) {
    console.log("Es niño");
} else if (edad > 18) {
    console.log("Adulto");
} else {
    console.log("Es adolecente");
}

//## Loops

/* - Mostrar todos los números de 1 a n aumentando de 1 en 1 
donde n lo ingresa el usuario en un prompt.*/

var userNum1 = parseInt(prompt("Ingrese un número"));
var arreglo1 = [];

for (let i = 1; i <= userNum1; i++) { //length se utiliza en array y cuando es en posición de los valores.
    arreglo1.push(i);

};
alert("El número ingresado es " + userNum1);
alert("El arreglo es " + arreglo1);


/*  - Mostrar todos los números de 1 a N aumentando 
de 2 en 2 donde n lo ingresa el usuario en un prompt. */
var userNum2 = parseInt(prompt("ingresa"));
var restoNum2 = userNum2 % 2;
var arreglo2 = [];


if (restoNum2 == 0) {
    for (let i = 1; i <= userNum2 / 2; i++) {
        arreglo2.push(i * 2);
    }
} else {
    for (let i = 1; i <= (userNum2 / 2) + 1; i++) {
        arreglo2.push((i * 2) - 1);
    }
}
alert("El número es " + userNum2);
alert("El arreglo es " + arreglo2);

/* - Mostrar todos los números de N a 1 disminuyendo 
de 1 en 1 donde n lo ingresa el usuario en un prompt. */

var userNum3 = parseInt(prompt("Ingresa tu número de la suerte"));
var arreglo3 = [];

for (let i = userNum3; i >= 1; i--) {//decrementa
    arreglo3.push(i);
}

alert("El arreglo es " + arreglo3);
console.log("El arreglo es " + arreglo3);

/* - Escribir utilizando console.log la tabla del 9 hasta 9x10. */

var arreglo9 = [];
for (let i = 0; i <= 10; i++) {//incrementa
    arreglo9.push(i * 9);
}
console.log("Tabla del nueve", arreglo9);

//segunda manera sin arreglo

for (let i = 1; i <= 10; i++) {
    console.log("9 * " + i + " =", i * 9);
}

/* - Pedir al usuario que ingrese un número en un prompt, 
hacer la suma de todos los dígitos, validar que el número 
ingresado no contenga letras. */

var numerito = (prompt("Ingresa un número de más de dos dígitos"));
var resultado = 0;

if (typeof numerito == "string") {
    alert("Eso no es un número amiguito");
} else {
    var sumaNum = numerito.toString();
    for (let i = 0; i < sumaNum.length; i++) {
        resultado = resultado + parseInt(sumaNum[i]);

    }
    alert("El resultado es " + resultado);
};




/* - Realizar la suma de todos los números pares entre 
N y M donde N y M los ingresa un usuario. */
var num1 = parseInt(prompt("Ingrese el primer número"));
var num2 = parseInt(prompt("Ingrese el segundo número"));


//## Funciones

/* - Crear una función que reciba un valor cualquiera y lo muestre ocupando 
console.log(), llamar a la función pasando el valor 5 */

var number = parseInt(prompt("Ingresa un número que no supere 5"))

function imprimir() {
    alert("El número " + number + " es mayor a 5");
}

if (number < 5) {
    alert("El número " + number + "  se encuentra en el rango");
} else {
    imprimir();
}


/* - La siguiente función devuelve undefined en 
lugar de la multiplicación, se pide arreglarla */


function multiply(a, b) {
    console.log(a * b);
};

multiply(7, 5);

/* - Crear una función que reciba dos valores y devuelva la suma de ellos. */

function suma(a, b) {
    console.log(a + b);
};
var a = parseInt(prompt("Ingresa el primer número"));
var b = parseInt(prompt("Ingresa el segundo número"));

suma(a, b);


/* - Crear una función que reciba un número entero y muestre un error si el tipo de
dato pasado es de otro tipo. */

var dato = prompt("Ingresa un número entero");

function numeroEntero() {
    console.log("El dato es ", typeof dato);
};
console.log(typeof dato);
if (typeof dato == "int") {
    alert("muy bien el número es entero");
} else {
    alert("Esto es un " + typeof dato);
}
numeroEntero();

/* - Crear una función autoejecutable que muestre "muuu" en pantalla */
function muuu() {
    document.write("muuu");
}

muuu();

//    ## Array

/* - Dado el array = [1,2,3,4,5,6]

- Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.

- Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.

- Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.

- Mostrar todos los elementos dentro de un array sumándole uno a cada uno.

- Generar una copia de un array pero con todos los elementos incrementado en 1.

- Calcular el promedio */


while (i < 1) {
    document.write("El arreglo es", arreglin1);
    i++
}  // la ejecución de while dependerá del valor de la variable a evaluar, la que puede ser manipulada fuera del mismo.

for (let i = 0; i < 1; i++) {
    document.write("El arreglo es ", arreglin1); //la condición se ejecutará si osi en el código
};




