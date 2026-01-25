var radio_rojo=document.getElementById('radio_rojo');
var radio_amarillo=document.getElementById('radio_amarillo');
var radio_verde=document.getElementById('radio_verde');
var txt_resultado=document.getElementById('txt_resultado');

radio_rojo.addEventListener('click', function(event){
    txt_resultado.textContent="DETENGASE...!";
});

radio_amarillo.addEventListener('click', function(event){
    txt_resultado.textContent="PRECAUCION...!";
});

radio_verde.addEventListener('click', function(event){
    txt_resultado.textContent="AVANCE...!";
});