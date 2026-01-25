var btn_mostrar_numeros = document.getElementById('btn_mostrar_numeros');
var txt_resultado = document.getElementById('txt_resultado');
// btn_mostrar_numeros.textContent="uwu"
btn_mostrar_numeros.addEventListener('click', function(evento){
    // lo que pones dentro de parentesis es una nueva variable digamos, como un parametro que recibe la funcion vaya
    let numeros = "";
    for(var i = 1; i<=10; i++){
        numeros+= `${i} <br>`;
    }
    txt_resultado.innerHTML=numeros;
});