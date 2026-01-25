var estudiantes = [];
var formulario = document.getElementById('formulario');
var txt_tabla = document.getElementById('cuerpo_tabla_estudiantes');
var txt_total_estudiantes = document.getElementById('txt_numero_estudiantes');
var txt_aprobados = document.getElementById('txt_aprobados');
var txt_reprobados = document.getElementById('txt_reprobados');
var txt_supletorio = document.getElementById('txt_supletorio');
var txt_promedio = document.getElementById('txt_promedio');
var txt_estado_curso = document.getElementById('txt_estado_curso');

var txt_nombre = document.getElementById('txt_nombre');

// Limpiar la validacion cuando el usuario escribe
txt_nombre.addEventListener('input', function () {
    txt_nombre.setCustomValidity("");
});

formulario.addEventListener('submit', function (evento) {
    //Se usa el formulario envez del boton para poder usar las propias validaciones de la etiqueta
    //form y para poder detectar el evento submit
    evento.preventDefault();
    //sirve para evitar que se recargue la pagina al "enviar el formulario"
    let txt_nombre = document.getElementById('txt_nombre');
    let txt_nota = document.getElementById('txt_nota');
    txt_nombre.setCustomValidity("");

    if (verificarDuplicadosEstudiante(txt_nombre.value)) {
        txt_nombre.setCustomValidity("Ya existe un estudiante con ese nombre.");
        txt_nombre.reportValidity();
        txt_nombre.focus();
        return;
    }

    let estudiante = {
        nombre: txt_nombre.value,
        nota: parseFloat(txt_nota.value),
        estado: calcularEstado(parseFloat(txt_nota.value))
    };
    //es para que se borren los datos de los campos nombre y nota en el html

    estudiantes.push(estudiante);
    agregarElementoTabla(estudiante);
    actualizarCards();
    formulario.reset();

});

function verificarDuplicadosEstudiante(nombreEstudiante){
    let existe = false;

    nombreEstudiante = nombreEstudiante.trim().toLowerCase();

    estudiantes.forEach(estudiante => {
        if (nombreEstudiante === estudiante.nombre.trim().toLowerCase()) {
            existe = true;
        }
    });

    return existe;
}


function calcularEstado(nota) {
    if (nota <= 4) {
        return 'Reprobado'
    }
    else if (nota > 4 && nota <= 6) {
        return 'Supletorio'
    }
    else {
        return 'Aprobado'
    }
}

function agregarElementoTabla(estudiante) {
    let fila = document.createElement('tr');
    fila.classList.add('table-primary');
    let col_nombre = document.createElement('td');
    let col_nota = document.createElement('td');
    let col_estado = document.createElement('td');
    col_nombre.textContent = estudiante.nombre;
    col_nota.textContent = estudiante.nota;
    col_estado.textContent = estudiante.estado;
    fila.appendChild(col_nombre);
    fila.appendChild(col_nota);
    fila.appendChild(col_estado);
    txt_tabla.appendChild(fila);
}

function actualizarCards(){
    let aprobados = 0;
    let supletorios = 0;
    let reprobados = 0;
    let promedio = 0;
    estudiantes.forEach(function(estudiante){
        switch(calcularEstado(estudiante.nota)){
            case 'Reprobado':
                reprobados++;
                break;
            case 'Supletorio':
                supletorios++;
                break;
            case 'Aprobado':
                aprobados++;
                break;
        }
        promedio+=estudiante.nota;
    })
    promedio/=estudiantes.length;
    txt_total_estudiantes.innerHTML = estudiantes.length;
    txt_aprobados.innerHTML = aprobados;
    txt_reprobados.innerHTML = reprobados;
    txt_supletorio.innerHTML = supletorios;
    txt_promedio.innerHTML = promedio.toFixed(2);
    txt_estado_curso.innerHTML = promedio < 7 ? 'En riesgo' : 'Aprobado';
}