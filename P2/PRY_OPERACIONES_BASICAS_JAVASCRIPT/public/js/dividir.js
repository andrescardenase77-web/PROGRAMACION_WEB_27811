//declaramos una variable boton y hacemos la llamada
var btn_dividir = document.getElementById('btn_dividir');
//console.log(btn_dividir);   esto deberia mostrarte los atributos del boton
//accedemos al evento click
btn_dividir.addEventListener('click', function(event){
    //capturamos las entradas
    let n1 = document.getElementById('txt_div_numero_1').value;
    let n2 = document.getElementById('txt_div_numero_2').value;
    let txt_resultado_suma = document.getElementById('txt_resultado_div');
    //innerHTML para mostrar/actualizar el resultado
    if(parseFloat(n2)!=0){
        let resultado = parseFloat(n1)/parseFloat(n2);
        txt_resultado_suma.innerHTML = resultado.toFixed(2);
    }
    else{
        txt_resultado_suma.innerHTML = "Infinito";
    }
    
});