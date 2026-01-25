//declaramos una variable boton y hacemos la llamada
var btn_sumar = document.getElementById('btn_sumar');
//console.log(btn_sumar);   esto deberia mostrarte los atributos del boton
//accedemos al evento click
btn_sumar.addEventListener('click', function(event){
    //capturamos las entradas
    let n1 = document.getElementById('txt_numero_1').value;
    let n2 = document.getElementById('txt_numero_2').value;
    let txt_resultado_suma = document.getElementById('txt_resultado_suma');
    //innerHTML para mostrar/actualizar el resultado
    let resultado = parseFloat(n1)+parseFloat(n2);
    txt_resultado_suma.innerHTML = resultado.toFixed(2);
});