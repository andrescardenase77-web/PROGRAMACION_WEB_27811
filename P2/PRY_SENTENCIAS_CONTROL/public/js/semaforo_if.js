var noSeleccionados = document.querySelectorAll('input[name="color"]');
var seleccionado = document.querySelector('input[name="color"]:checked');
var txt_resultado = document.getElementById('txt_resultado');
//change es para cambio de valor

if (!seleccionado) {
    txt_resultado.textContent = "SELECCIONA COLOR";
}

noSeleccionados.forEach(function (radio) {
    radio.addEventListener('change', function (event) {
        color = radio.value;
        if (color == 'rojo') {
            txt_resultado.textContent = "DETENGASE...!";
        }
        else if (color == 'amarillo') {
            txt_resultado.textContent = "PRECAUCION...!";
        }
        else if (color == 'verde') {
            txt_resultado.textContent = "AVANCE...!";
        }
    })
});

if (seleccionado) {
    seleccionado.dispatchEvent(new Event('change'));
}





