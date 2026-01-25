var btn_actualizar = document.getElementById('btn_actualizar');
var productos = document.getElementsByName('productos[]');
productos = Array.from(productos);
//Al parecer el getElementsByName no te da un array normal, sino un array de nodos, entonces 
//debes transformarlo manualmente
var txt_lista_carrito = document.getElementById('lista_carrito');
var txt_resultado = document.getElementById('txt_resultados');
btn_buscar = document.getElementById('btn_buscar');
let carrito = [];


actualizarCarrito();

btn_actualizar.addEventListener('click', actualizarCarrito);

btn_buscar.addEventListener('click',function(){
    let seleccionados = productos.filter(producto => producto.checked);
    let encontrados = [];
    let no_encontrados = [];
    seleccionados.forEach(function(producto){
        if(carrito.includes(producto.value)){
            encontrados.push(` ${producto.value}`);
        }
        else{
            no_encontrados.push(` ${producto.value}`);
        }
    });

    let resultado = `
    Se encontraron los siguientes elementos: ${encontrados.length > 0 ? encontrados : "ninguno"} en el carrito<br>
    No se encontraron los siguientes elementos: ${no_encontrados.length > 0 ? no_encontrados : "ninguno"} en el carrito
    `;
    txt_resultado.innerHTML = resultado;
});

function actualizarCarrito() {
    carrito = [];
    txt_lista_carrito.innerHTML = '';

    productos.forEach(function(producto){
        if (producto.checked) {
            var elementoCarrito = producto.value;

            carrito.push(elementoCarrito);
            var elementoLista = document.createElement('li');
            elementoLista.classList.add('list-group-item', 'active');

            elementoLista.textContent = elementoCarrito;
            txt_lista_carrito.appendChild(elementoLista);
        }
    });
    txt_resultado.innerHTML = "Se modifico el carrito";
}