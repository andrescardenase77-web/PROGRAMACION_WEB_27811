const bd = [
    { usuario: "Andres", contrasenia: "basededatos" }
];

async function verificarBaseDatos(persona) {
    console.log('Verificando la persona en la bd...');
    
    let miPromesa = new Promise((resolver, rechazar) => {
        // EL CAMBIO ESTÁ AQUÍ ADENTRO:
        // Todo ocurre dentro del setTimeout para simular que "buscar cuesta tiempo"
        setTimeout(() => {
            let verificador = false;
            
            // La búsqueda (el trabajo pesado) ocurre aquí dentro
            for (let e of bd){
                if(e.usuario == persona.usuario && e.contrasenia == persona.contrasenia)
                    verificador = true;
            }

            // Aquí mismo decidimos si resolvemos o rechazamos
            if(verificador)
                resolver(persona);
            else
                rechazar(persona);
                
        }, 3000);
    });

    // MANTENEMOS TU SINTAXIS EXACTA:
    // El await espera a que termine toda la cadena de then/catch
    await miPromesa
        .then(valor => console.log(`La persona ${valor.usuario} si esta en la BD`))
        .catch(error => console.log(`ERROR, La persona ${error.usuario} NO esta en la BD`));
}

verificarBaseDatos({
    usuario:'Andresxx',


    contrasenia: 'basededatos'
});



///////////////////PRACTICA
let funciones = [
    { pelicula: "Batman", asientos: 5 },
    { pelicula: "Barbie", asientos: 0 }
];

let comprarEntradas = async (pelicula, cantidad) => {
    console.log('Procesando la compra...');
    
    let promesa = new Promise((resolver, rechazar) => {
        setTimeout(() => {
            let peliculaEncontrada = null; // Variable auxiliar

            // 1. Primero BUSCAMOS la película correcta
            funciones.forEach((funcion) => {
                if(funcion.pelicula == pelicula){
                    peliculaEncontrada = funcion;
                }
            });

            // 2. Ahora VALIDAMOS (fuera del bucle para no mezclar)
            if (peliculaEncontrada) {
                // Si la película existe, revisamos stock
                if (peliculaEncontrada.asientos >= cantidad) {
                    peliculaEncontrada.asientos = peliculaEncontrada.asientos - cantidad;
                    resolver(`Boletos para ${pelicula} adquiridos exitosamente`);
                } else {
                    rechazar(`No hay suficientes asientos para ${pelicula}`);
                }
            } else {
                // Si la variable sigue null, es que no existe la película
                rechazar('La película no existe en cartelera');
            }

        }, 2000);
    });

    await promesa
        .then(valor => console.log(valor))
        .catch(error => console.log(error))
        .finally(()=> console.log('Proceso terminado'));
} 

// PRUEBAS
comprarEntradas('Batman', 2); // Debería funcionar
// comprarEntradas('Barbie', 1); // Debería dar error de asientos
// comprarEntradas('Superman', 1); // Debería dar error de no existe