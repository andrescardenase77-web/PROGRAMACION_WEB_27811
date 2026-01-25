var btn_agregar = document.getElementById('btn_agregar');
var arreglo_productos=[];

btn_agregar.addEventListener('click', function(event){
    let nombre_producto = document.getElementById('producto');
    var lista_productos = document.getElementById('lista_productos');
    var lista2 = document.getElementById('lista2');


    if(nombre_producto.value != ""){
        var elementoLista = document.createElement('li');
        elementoLista.classList.add('list-group-item');
        elementoLista.textContent = nombre_producto.value;

        var elementoLista2 = document.createElement('li');
        elementoLista2.classList.add('list-group-item');
        elementoLista2.textContent = nombre_producto.value.toUpperCase();

        arreglo_productos.push(nombre_producto.value);

        nombre_producto.value='';

        lista_productos.appendChild(elementoLista);
        console.log(arreglo_productos);

        lista2.appendChild(elementoLista2);

    }

    else{
        console.log("Ingrese un producto valido");
    }
    
    var productos_mayus = arreglo_productos.map(function(producto){
        return producto.toUpperCase()
    })
    console.log(productos_mayus);

});