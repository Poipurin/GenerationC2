//bucle FOR
//para incrementar, arreglos
//se puede inicializar dónde uno quiera
var i = 2; //dura para todo el código, es global
for (let i = 0; i < 10; i++) {//i=i+1==i++== i+1
    console.log("el valor de i es", i);
}
console.clear();
var numeros_pares = [2, 4, 6, 8, 10];
numeros_pares[0];
console.log("el arreglo es", numeros_pares);
/*
numeros_pares [numeros_pares.length-1] ; 
numeros_pares [5-1];
numeros_pares [4];*/
for (let i = 0; i < numeros_pares.length; i++) {//i=1
    console.log("la posicion es", i);
    console.log("el elemento es", numeros_pares[i]);
    console.log("");
}
var element = 0;
//let nace y muere en el for
//var : para la creación de vaiables globales
//let : solo para bloques específicos
//const : bloques específicos pero se recomiendan para establecer variables constantes.
for (let i = 0; i < numeros_pares.length; i++) {
    element = numeros_pares[i];
    console.log("la posición: " + i + ", tiene el elemento: " + element)

}

console.log("element", element);
//varibles acumuladoras
//variable = variable + algo;
var suma_pares = 0;
for (let i = 0; i < numeros_pares.length; i++) {
    suma_pares = suma_pares + numeros_pares[i];
    //suma_pares= 0 + numeros_pares[0];
    //suma_pares= 0 + 2;
    //suma_pares= 2;
    console.log("suma parcial", suma_pares);

}

console.log("suma total", suma_pares);

