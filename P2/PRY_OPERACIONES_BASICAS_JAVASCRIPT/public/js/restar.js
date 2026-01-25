//declaramos una variable boton y hacemos la llamada
var btn_restar = document.getElementById('btn_restar');
//console.log(btn_restar);   esto deberia mostrarte los atributos del boton
//accedemos al evento click
btn_restar.addEventListener('click', function(event){
    //capturamos las entradas
    let n1 = document.getElementById('txt_rest_numero_1').value;
    let n2 = document.getElementById('txt_rest_numero_2').value;
    let txt_resultado_suma = document.getElementById('txt_resultado_resta');
    //innerHTML para mostrar/actualizar el resultado
    let resultado = parseFloat(n1)-parseFloat(n2);
    txt_resultado_suma.innerHTML = resultado.toFixed(2);
});