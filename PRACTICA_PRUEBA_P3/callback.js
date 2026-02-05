//////////////////////////// FUNCIONES CALLBACK

const calcularPromedio = (nota1, nota2, nota3, callback) => {
console.log('Calculando Promedio')
setTimeout(() => {
    let promedio = (nota1 + nota2 + nota3) / 3;
    let objeto = {
        promedio:   promedio,
        estado:     promedio >= 14 ? 'Aprobado' : 'Reprobado'

    };
    callback(objeto);
},3000)
}

calcularPromedio(10, 12, 20, (reporte) => {
    console.log(`El estudiante tiene ${reporte.promedio} de promedio, por lo tanto su estado es: ${reporte.estado}`)
});