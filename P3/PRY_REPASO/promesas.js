/*Promesas en JS
Son codigos que tienen varios estados
Es la representacion de un objeto que simboliza el exito o fracaso de un proceso
Se ejecutan procesos asincronos
Es la forma de programar una alerta de un evento a ejecutarse

EJECUCION

Al momento de lanzar una peticion para procesar un codigo en el caso de que se ha resuelto
de manera exitosa y en el caso de que haya ocurrido algun error

Inicia en pendiente pero luego puede pasar a 2 estados: resolved (then) o rejected (catch)
*/

//Creacion de un objeto de tipo promesa (dos parametros/funciones de tipo callback, la una si se ejecuta correctamente y la otra el caso contrario)

let miPromesa = new Promise((resolved, rejected) => {
    let expresion = false;
    if(expresion)
        resolved('Se resolvio correctamente la promesa');
    else
        rejected('Ocurrio un error');
});

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );

miPromesa.then(valor => console.log(valor)).catch(error => console.log(error)).finally(()=> console.log('EJECUCION TERMINADA'));

//Uso de settimeout junto a promesas
let promesa = new Promise((resolver)=>{
    console.log('Antes de ejecutar la promesa......')
    setTimeout(()=>{
        resolver('Saludos con promesa y settimeout');
    },1000);
    console.log('Despues de ejecutar la promesa.......')
});

promesa.then(valor => console.log(valor));


//Realizar un ejercicio que genere un numero random entre 0 y 10, cuando el numero sea menor o igual a 5
//la promesa debe ser resuelta, caso contrario debe ser rechazada
//independientemente del resultado de la promesa mostrar el mensaje: promesa acabada
//para indicar que mi proceso termino

let promesaNumero = new Promise((resolver,error)=>{
    let numero = Math.floor(Math.random()*11);
    console.log('Numero generado');
    setTimeout(()=>{
        if(numero<=5)
        resolver(numero);
        else
            error(numero);
    },1000);
});

promesaNumero.then(valor => console.log(`El numero ${valor} esta dentro del rango, resolveremos la promesa`)
).catch(error => console.log(`El numero ${error} NO esta dentro del rango, la promesa es rechazada`)
).finally(()=>console.log('Promesa acabada'));


//Simular el lanzamiento de un dado que genere un numero entre el 1 y 6
//La tarea consiste en usar una promesa para determinar si el numero es par o impar
//La promesa se resuelve si es par y se rechaza si es impar

let promesaDado = new Promise((resolver,error)=>{
    let dado = Math.floor(Math.random()*6+1);
    setTimeout(()=>{
        if(dado%2==0)
        resolver(dado);
        else
            error(dado);
    },2000);
});

promesaDado.then(valor => console.log(`El numero ${valor} salio par, resolveremos la promesa`)
).catch(error => console.log(`El numero ${error} salio impar, la promesa es rechazada`)
).finally(()=>console.log('Promesa acabada'));


/*
node promesas.js
*/