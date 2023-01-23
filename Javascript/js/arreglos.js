//Arreglos
//variables con más variables
//varias cajitas dentro de corchetes
//contenedor de variables
//conjunto de datos agrupados en una variable, como una matriz
//TODOS los arreglos comienzan en la posición 0, se escriben con []
//lista de elementos, que se puede tenr distintos tipos de datos
//muchos objetos en una sola caja

//conjunto de datos, ordenados según su ingreso, separados por la coma
//arreglo= tamaño definido, no puede cambiar
//lista= tamaño dinámico, flexible
var vocales = ["a", "u", "i", "e", "o"];
// tiene 5 elementos, el último está en la posición 4
//el primero en la posición 0, SIEMPRE.
vocales = ["u", "i", "e", "o", "a"];
console.log(vocales);
//lenght -> cantidad de elementos o tamaño del arreglo
console.log(vocales[0], vocales[1], vocales[2], vocales[3], vocales[4], vocales[5]);
console.log(vocales[5]);
console.log(vocales[-1]);
console.log(vocales[2 - 1]);//vocales [1]//i
//re escribiendo datos, en una posición específica.
vocales[1] = "y";
console.log(vocales);
//push, agrega un dato al final
vocales.push("i");
console.log(vocales);
//pop,elimina el último dato ingresado 
vocales.pop();
console.log(vocales);

//( elimina datos de derecha a izquierda)
vocales.pop();
vocales.pop();
vocales.pop();
vocales.pop();
vocales.pop();
console.log(vocales); //[]

var arreglo1 = []; //arreglo vacío 
//El tamaño es cero
console.log(arreglo1.length);
arreglo1.push(1);
arreglo1.push(8);
console.log(arreglo1);

var ultimo = arreglo1.pop();
console.log(ultimo);// retorna 8





/*vocales = "aeiouAEIOU"
console.log(vocales);
console.log("string aeiou",vocales[3]);*/ //o;
//única y exclusivamente con los String


