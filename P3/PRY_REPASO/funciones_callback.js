//Funciones Callback

function imprimir(mensaje){
    console.log(mensaje);
} 
//funcion como argumento de otra funcion se conviert en una funcion de tipo callback

function sumar(a, b, funcionCallback){
    let res = a + b;
    funcionCallback(`El resultado de esta operacion es ${res}`);
}

sumar(1,2,imprimir)

//A nivel de BDD

const getUsers = (callback) => {
    setTimeout(() => {
        const users = [
            { id: 1, name: 'Pepito' },
            { id: 2, name: 'Juanita' },
            { id: 3, name: 'Carlos' },
        ];
        callback(users);
    }, 500);
}

getUsers((users) => {
    console.log('Users:', users);
});

//ACTIVIDAD, Crear una funcion que instancie un producto, de acuerdo al stock y si el stock cambia 
// (0 o menor) el precio tambien debe cambiar
//

const actualizarProductos = (id, stock, precio, callback) => {
    setTimeout(() => {
        const producto = { 
            id: id,
            stock: stock,
            precio: stock <= 0 ? 0 : precio
        };
        callback(producto);
    }, 5000);
}


actualizarProductos(1, 15, 5, (producto) => {
    console.log('Producto actualizado:', producto);
});

actualizarProductos(1, 0, 5, (producto) => {
    console.log('Producto actualizado:', producto);
});





/*
node funciones_callback.js
*/ 