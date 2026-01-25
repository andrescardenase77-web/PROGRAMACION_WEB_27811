var semaforo = document.querySelectorAll('input[name="color"]');
var seleccionado = document.querySelector('input[name="color"]:checked');
var txt_resultado = document.getElementById('txt_resultado');
var colores = ['rojo', 'amarillo', 'verde'];
var encontrado = false;
var i = 0;

semaforo.forEach(function (radio) {
    radio.addEventListener('change', function (event) {
        while (!encontrado) {
            if (i == colores.length) {
                i = -1;
                break;
            }
            if (radio.value == colores[i] && radio.checked) {
                encontrado = true;
                break;
            }
            i++;
        }
        encontrado = false;
        switch (i) {
            case 0:
                txt_resultado.textContent = "DETENGASE...!";
                break;
            case 1:
                txt_resultado.textContent = "PRECAUCION...!";
                break;
            case 2:
                txt_resultado.textContent = "AVANCE...!";
                break;
            default:
                txt_resultado.textContent = "SELECCIONA COLOR";
                break;
        }
        i = 0;
    })
});

if(seleccionado){
    seleccionado.dispatchEvent(new Event('change'));
}
else{
    semaforo[0].dispatchEvent(new Event('change'));
}