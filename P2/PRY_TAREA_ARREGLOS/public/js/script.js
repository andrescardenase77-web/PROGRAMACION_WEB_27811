let notas = [8, 4, 10, 6, 3, 9, 5, 7, 2];
var totalAprobados = 0;
var totalSupletorio = 0;
var totalReprobados = 0;
var promedioCurso = 0;
var listaAprobados = document.getElementById('lista_aprobados');
var txt_aprobados = document.getElementById('txt_total_aprobados');
var listaSupletorio = document.getElementById('lista_supletorios');
var txt_supletorios = document.getElementById('txt_total_supletorios');
var listaReprobados = document.getElementById('lista_reprobados');
var txt_reprobados = document.getElementById('txt_total_reprobados');
var txt_promedio = document.getElementById('txt_promedio');
var txt_estado_curso = document.getElementById('txt_estado_curso');

notas.forEach(function(nota){
    let elementoLista = document.createElement('li');
    elementoLista.textContent = nota;
    elementoLista.classList.add('list-group-item');

    if(nota>6 && nota<=10){
        elementoLista.classList.add('list-group-item-success');
        totalAprobados++;
        listaAprobados.appendChild(elementoLista);
    }
    else if(nota>4 && nota<=6){
        elementoLista.classList.add('list-group-item-warning');
        totalSupletorio++;
        listaSupletorio.appendChild(elementoLista);
    }
    else if(nota>=0 && nota<=4){
        elementoLista.classList.add('list-group-item-danger');
        totalReprobados++;
        listaReprobados.appendChild(elementoLista);
    }
    else{
        console.log(`La nota ${nota} esta fuera del rango`);
        nota=0;
    }
    promedioCurso+=nota;
});

promedioCurso/=notas.length;
txt_promedio.value=promedioCurso.toFixed(2);

txt_aprobados.value = totalAprobados;
txt_supletorios.value = totalSupletorio;
txt_reprobados.value = totalReprobados;

if(promedioCurso>=7){
    txt_estado_curso.value = "El curso esta Aprobado";
    txt_estado_curso.classList.add('bg-success');
}
else{
    txt_estado_curso.value = "El curso esta en Riesgo";
    txt_estado_curso.classList.add('bg-warning');
}