//declaramos un arreglo
var frutas = ["uva","pera","manzana", "kiwi", "sandia"];
//agrega al final
frutas.push("banana");
//agrega al inicio
frutas.unshift("guacamote");
console.log(frutas);
//tamanio del arreglo
var tamaio_arreglo_frutas=frutas.length;
console.log(tamaio_arreglo_frutas);
//eliminamos el ultimo
frutas.pop();
//eliminamos al inicio
frutas.shift();
console.log(frutas);

var frutas_foreach = frutas.forEach(function(fruta){
    console.log(`hola, soy una ${fruta.toUpperCase()}`)
});
console.log("================");
//ese map  hace cambios en el array digamos, por eso te deja retornar
//el map es para cuando quieres modificar los valores de ese arreglo
//el forEach no puede devolver datos
var frutas_map = frutas.map(function(fruta){
    return fruta
});
console.log("================");
console.log(frutas_foreach);
console.log(frutas_map);