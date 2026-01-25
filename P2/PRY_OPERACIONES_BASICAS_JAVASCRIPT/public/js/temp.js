//declaramos una variable boton y hacemos la llamada
var btn_convertir = document.getElementById('btn_transformar');
//console.log(btn_sumar);   esto deberia mostrarte los atributos del boton
//accedemos al evento click
btn_convertir.addEventListener('click', function(event){
    //capturamos las entradas
    let n1 = document.getElementById('temperatura').value;
    let centigrados = document.getElementById('centigrados');
    let farenhei = document.getElementById('faren');

    let resultadoF = (n1*(9/5)+32);
    let resultadoC = (resultadoF-32)*(5/9)
    

    //innerHTML para mostrar/actualizar el resultado
    centigrados.innerHTML = resultadoC.toFixed(2);
    farenhei.innerHTML = resultadoF.toFixed(2);
});