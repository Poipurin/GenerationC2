/*  Don José todos los martes y jueves realiza un 20% de descuento en el total de las
compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
valores de los productos a comprar, esta debe retornar el total final de la compra según
corresponda o no descuento.
Don José hace un 5% de descuento a los clientes que compran más de 3 productos y al
menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
total verificando si corresponde o no el descuento.
Se desea tener una función verificadora encargada de revisar si dentro de el arreglo de
valores de los productos a comprar no existan valores negativos ingresados por error,
en caso de no existir debe retornar un mensaje de éxito, en caso contrario debe retornar
un mensaje de error junto con el número negativo y el índice en el que se encontraba.
*/
function descuento(compra,dia){
    dia = dia.toLowerCase();
    var arrayNew = [];
    var totalCD = 0;
    var totalSD = 0;
    var c10 = 0;
    switch (dia) {
        case 'martes' || 'jueves':
            for (const obj of compra) {
                console.log(obj)
                if(obj>10000){
                    c10++
                    console.log(c10)
                }
            }
            if(compra.length>3 && c10>0){
                    for(let i = 0 ; i< compra.length; i++){
                        totalSD += compra[i]
                        arrayNew.push(compra[i]-(compra[i] * 0.25));
                        totalCD += arrayNew[i];
                    }
                    console.log(totalCD);
                    return `el total de la compra es: $${totalSD}, aplicando el descuento: $${Math.trunc(totalCD)}, con: $${Math.trunc(totalSD-totalCD)}`;
            }else{
                    for(let i = 0 ; i< compra.length; i++){
                        totalSD += compra[i]
                        arrayNew.push(compra[i]-(compra[i] * 0.20));
                        totalCD += arrayNew[i];
                    }
                    console.log(totalCD);
                    return `el total de la compra es: $${totalSD}, aplicando el descuento: $${Math.trunc(totalCD)}, con: $${Math.trunc(totalSD-totalCD)}`;
                }
        case 'lunes' || 'miercoles' || 'viernes' || 'sabado' || 'domingo': 
                for (const obj of compra) {
                    console.log(obj)
                    if(obj>10000){
                        c10++
                        console.log(c10)
                    }
                }
                if(compra.length>3 && c10>0){
                        for(let i = 0 ; i< compra.length; i++){
                            totalSD += compra[i]
                            arrayNew.push(compra[i]-(compra[i] * 0.05));
                            totalCD += arrayNew[i];
                        }
                    console.log(totalCD);
                    return `el total de la compra es: $${totalSD}, aplicando el descuento: $${Math.trunc(totalCD)}, con: $${Math.trunc(totalSD-totalCD)}`;
                }else{
                        for(let i = 0 ; i< compra.length; i++){
                            totalSD += compra[i]
                            arrayNew.push(compra[i]-(compra[i]));
                            totalCD += arrayNew[i];
                        }
                    console.log(totalCD);
                    return `el total de su compra es: $${totalSD}`;
                }
        
        default:
            return `uno de los precios es inválido`;
    }
}
console.log(descuento([200,2002,200,2000],'lunes'));
function precioNegativo(compra){
    let contadorN = 0;
    for (const obj of compra) {
        if(obj<0){
            contadorN++
        } 
    }
    if(contadorN>0){
        return `hay ${contadorN} con precio negativo, por favor verificar`
    }else{
        return `no hay precios negativos`
    }
}
console.log(precioNegativo([1000,3000,-34000,-3000,-1999]))

/* Dado el siguiente arreglo [200,5500,900,7000,500,300] 
con los valores de cada producto.
○ Crea una función que retorne el valor del producto más costoso.*/

var preciosProductos = [200, 5500, 900, 7000, 500, 300];
var productoMasCostoso = preciosProductos[0];
for (let i = 1; i < preciosProductos.length; i++) {
    if (preciosProductos[i] > productoMasCostoso) {
        productoMasCostoso = preciosProductos[i];
    }
}
console.log("El producto más costoso vale $", productoMasCostoso);

/*○ Crea una función que retorne el valor del producto menos costoso. */
var preciosProductos = [200, 5500, 900, 7000, 500, 300];
var productoMenosCostoso = preciosProductos[0];
for (let i = 1; i > preciosProductos.length; i++) {
    if (preciosProductos[i] < productoMenosCostoso) {
        productoMenosCostoso = preciosProductos[i];
    }
}
console.log("El producto menos costoso vale $", productoMenosCostoso);