var btn_mostrar_numeros = document.getElementById('btn_mostrar');
var txt_resultado = document.getElementById('result');

btn_mostrar_numeros.addEventListener('click', function(evento){
    var num1=document.getElementById('numInicio');
    var num2=document.getElementById('numFin');
    let numeros = "";
    for(var i = num1.value; i<=num2.value; i++){
        numeros+= `${i} <br>`;
    }
    txt_resultado.innerHTML=numeros;
});