/*
1. Obtén del 1 al 255: Escribe un programa que devuelve un array con 
todos los números del 1 al 255. */

console.log("*********** Ejercicio 1 *************");
var numero = [];
for (let i = 1; i <= 255; i++) {
    numero.push(i)

}
console.log(numero)





/*2. Consigue pares hasta 1000: Escribe un programa que entregue la suma 
de todos los números pares del 1 al 1000 - Puedes usar un operador de
módulo para este ejercicio.*/

console.log("*********** Ejercicio 2 *************");
var numeros_pares = [];
var sum = 0;
for (let i = 0; i <= 500; i++) {
    numeros_pares.push(i * 2);
    sum = sum + numeros_pares[i];
}
console.log("Numero:", numeros_pares);
console.log("La suma es igual a ", sum);

/*   3. Suma impares hasta 5000: Escribe un programa que devuelva la suma 
    de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999). */

console.log("*********** Ejercicio 3 *************");

var numeros_impares = [];
var sumImpares = 0;
for (let i = 0; i < 2500; i++) {
    numeros_impares.push((i * 2) + 1);
    sumImpares = sumImpares + numeros_impares[i];
}
console.log("Numero:", numeros_impares);
console.log("La suma es igual a ", sumImpares);

/* 4. Itera un array: Escribe un programa que devuelva la suma de 
todos los valores dentro de un array (ej:  [1,2,5] retorna 8. 
[-5,2,5,12] retorna 14). */

console.log("*********** Ejercicio 4 *************");
var arreglo = [1, 2, 3, 4];
var suma_arreglo = 0;
for (let i = 0; i < arreglo.length; i++) {
    suma_arreglo = suma_arreglo + arreglo[i];

    console.log("suma parcial", suma_arreglo);

}
console.log("suma total", suma_arreglo);



/* 5. Encuentra el mayor (max): Dado un array con múltiples valores, 
escribe un programa que devuelva el número mayor (ej: para [-3,3,5,7]
 el número mayor (max) es 7).  */
console.log("*** Ejercicio 6****");
/* var numeros = [22,44,66,3];
var numeroMayor = 0;
for (let i=0; i<numeros.length; i++){
 if(numeros[i]> numeroMayor){
   numeroMayor = numeros[i];
 }
 
}
   console.log(numeroMayor); */

var numeros = [22, 44, 66, 3];
var numeroMayor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMayor) {
        numeroMayor = numeros[i];
        console.log(numeroMayor);
    }

}
console.log(numeroMayor);


/* 6. Encuentra el promedio (avg): Dado un array con múltiples valores, 
escribe un programa que devuelva el promedio de los valores 
(ej: para [1,3,5,7,20] el promedio es 7.2). */

console.log("*** Ejercicio 6****");

var numeros = [29, 25, 10, 3, 50];
var total = 0;
for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];

}

var avg = total / numeros.length
console.log(avg);




/* 7. Array de impares: Escribe un programa que devuelva un array de todos 
los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]).
Pista: Usa el método ‘push’.
*/
var impares = [];
for (let i = 0; i < 50; i++) {
    impar.push((i * 2) + 1);
}

console.log(impares)


/*console.log("suma del los numeros pares del 1 al 1000")
var numPar = 0;
for ( i = 0 ; i <= 1000 ; i++){
if(i % 2 == 0){ 
    numPar = numPar + i
}
}
console.log(numPar)
*/
