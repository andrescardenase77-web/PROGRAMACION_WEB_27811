// /*
// Palabra async a traves de funciones, la funcion esta obligada a recibir una promesa
// la funcion siempre devolvera una promesa
// */

// async function miFuncionPromesa() {
//     return 'Datos recibidos';
// }

// miFuncionPromesa().then(valor => console.log(valor));

// async function funcionConPromesaAwait(){
//     let miPromesa = new Promise(resolver => {
//         resolver('Promesa con await');
//     });
//     console.log(await miPromesa);
// }

// funcionConPromesaAwait();

// let funcionPromesaAwaitFlecha = async () => {
//     let miPromesa = new Promise(resolver => {
//         resolver('Promesa con await y flecha');
//     });
//     console.log(await miPromesa);
// } 

// funcionPromesaAwaitFlecha();

// //Uso de async de manera completa, await y timeout

// async function funcionSetTimeOut() {
//     console.log('Proceso 1')
//     let miPromesa = new Promise(resolver => {
//         setTimeout(() => {
//             resolver('Promesa con await y time out');
//         }, 3000);
//     });
//     console.log(await miPromesa);
//     console.log('Proceso 3')
// }

// funcionSetTimeOut()

/// SIMULAR LA CONEXION A UNA BASE DE DATOS, delay de unos 3 segundos, se ingresa usuario y contrasena, devuelve autenticado si existe y
//un mensaje de error si no se autentico

bd = [
    {
        usuario : "Andres",
        contrasenia : "basededatos",
        validar : function(persona){
            if(this.usuario == persona.usuario && this.contrasenia == persona.contrasenia)
                return true
            else
                return false
        }
    }
]

async function verificarBaseDatos(persona) {
    console.log('Verificando la persona en la bd');
    let miPromesa = new Promise((resolver, rechazar) => {
        let verificador = false;
        for (let e of bd){
            if(e.validar(persona))
                verificador=true;
        }
        setTimeout(() => {
            if(verificador)
                resolver(persona);
            else
                rechazar(persona);
        }, 3000);
    });
    await miPromesa.then(valor => console.log(`La persona ${valor.usuario} si esta en la BD`)
    ).catch(error => console.log(`ERROR, La persona ${error.usuario} NO esta en la BD`));
}

verificarBaseDatos({
    usuario:'Andresxx',
    contrasenia: 'basededatos'
});