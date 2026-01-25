var productos = [ 
    {
        nombre : "Uva",
        precio : 1.2,
        categoria: "fruta"
    }
    ,{
        nombre : "Limon",
        precio : 2.6,
        categoria: "fruta"
    } 
    ,{
        nombre : "Arroz",
        precio : 5.95,
        categoria: "viveres"
    },
];

var txt_nombre1 = document.getElementById('nombre1');
var txt_nombre2 = document.getElementById('nombre2');
var txt_nombre3 = document.getElementById('nombre3');
var txt_precio1 = document.getElementById('precio1');
var txt_precio2 = document.getElementById('precio2');
var txt_precio3 = document.getElementById('precio3');
var txt_categoria1 = document.getElementById('categoria1');
var txt_categoria2 = document.getElementById('categoria2');
var txt_categoria3 = document.getElementById('categoria3');
var btn_calcular = document.getElementById('btn_calcular');
var txt_total = document.getElementById('total');
var total = 0;

mostrarProductos();

btn_calcular.addEventListener('click',calcularTotal);

function mostrarProductos(){
    let nombres = [txt_nombre1,txt_nombre2,txt_nombre3];
    let precios = [txt_precio1,txt_precio2,txt_precio3];
    let categorias = [txt_categoria1,txt_categoria2,txt_categoria3];
    for(let i=0; i<productos.length;i++){
        nombres[i].innerHTML = productos[i].nombre;
        precios[i].innerHTML = productos[i].precio;
        categorias[i].innerHTML = productos[i].categoria;
    }
}

function calcularTotal(){
    total=0;
    productos.forEach(function(producto){
        total+=parseFloat(producto.precio);
    });
    txt_total.innerHTML = `Total a pagar: $${total.toFixed(2)}`;
}