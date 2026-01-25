//declaramos una variable boton y hacemos la llamada
var btn_multiplicar = document.getElementById('btn_multiplicar');
//console.log(btn_multiplicar);   esto deberia mostrarte los atributos del boton
//accedemos al evento click
btn_multiplicar.addEventListener('click', function(event){
    //capturamos las entradas
    let n1 = document.getElementById('txt_mult_numero_1').value;
    let n2 = document.getElementById('txt_mult_numero_2').value;
    let txt_resultado_suma = document.getElementById('txt_resultado_mult');
    //innerHTML para mostrar/actualizar el resultado
    let resultado = parseFloat(n1)*parseFloat(n2);
    txt_resultado_suma.innerHTML = resultado.toFixed(2);
});