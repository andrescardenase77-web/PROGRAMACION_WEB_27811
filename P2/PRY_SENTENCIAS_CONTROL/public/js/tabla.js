var btn_mostrar_tabla = document.getElementById('btn_mostrar_tabla');
//var mostrarResultado = document.getElementById('resultado');
var res1 = document.getElementById('resultado1');
var res2 = document.getElementById('resultado2');


// btn_mostrar_tabla.addEventListener('click', function (evento) {
//     var txt_num1 = parseInt(document.getElementById("txt_num1").value);
//     let resultado = "";
//     if (txt_num1) {
//         for (let index = 1; index <= 12; index++) {
//             //quiero que se multiplique el numero por todos los index 
//             resultado += `${txt_num1} x ${index} = ${txt_num1 * index} <br>`;
//         }
//         mostrarResultado.innerHTML = resultado;
//     }
//     else {
//         mostrarResultado.innerHTML = `Ingrese un numero por favor`;

//     }
// });

document.getElementById('btn_limpiar').addEventListener('click', function () {
    document.getElementById('txt_num1').value = '';
    res1.innerHTML = "";
    res2.innerHTML = "";
})

btn_mostrar_tabla.addEventListener('click', function (evento) {
    var txt_num1 = parseInt(document.getElementById("txt_num1").value);
    let pares = "";
    let impares = "";

    if (txt_num1) {
        for (let index = 1; index <= txt_num1; index++) {
            if(index%2==0){
                pares+=`${index} <br>`;
            }
            else{
                impares+=`${index} <br>`;
            }
        }

        res1.innerHTML = pares;
        res2.innerHTML = impares;

    }
    else {
        //mostrarResultado.innerHTML = `Ingrese un numero por favor`;

    }
});