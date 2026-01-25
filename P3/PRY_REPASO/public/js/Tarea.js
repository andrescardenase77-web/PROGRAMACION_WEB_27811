//ACTIVIDAD: Crear un objeto Vehiculo con almenos 5 propiedades de forma dinamica, una es exhonerado
// si el año es mayor a 2017 se pone si, caso contrario no
//ES LA CREACION DINAMICA DE LAS PROPIEDADES
const readline = require('readline');

// Configuración de la interfaz de entrada y salida
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para convertir readline en una "promesa" (para que espere el dato)
const cuestionario = (pregunta) => new Promise((resolve) => rl.question(pregunta, resolve));

let atributos = ['modelo', 'marca', 'estado', 'anio'];

function Vehiculo(claves, valores){
    claves.forEach((clave, posicion) => {
        this[clave] = valores[posicion];
    });
    this.exonerado = parseInt(this.anio) > 2017 ? 'si' : 'no';
}

// Cambiamos a función 'async' para poder usar 'await'
async function crearVehiculos(cantidad){
    for(let i = 0; i < cantidad; i++){
        let valores = [];
        console.log(`\n--- Vehículo ${i + 1} ---`);
        
        for (const atributo of atributos) {
            let valor = await cuestionario(`Ingresa el valor de ${atributo}: `);
            valores.push(valor);
        }

        var vehiculo = new Vehiculo(atributos, valores);
        console.log(vehiculo);
    }
    rl.close(); // Cerramos la terminal al terminar
}

crearVehiculos(1);