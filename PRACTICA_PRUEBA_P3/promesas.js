// 1. Usamos LET porque el saldo va a cambiar
let saldo = 1000;

const retirarDinero = (monto) => {
    // 2. Retornamos directamente la Promesa
    return new Promise((resolver, rechazar) => {
        console.log('Procesando transacción en cajero...');
        
        // 3. El setTimeout va ADENTRO de la Promesa
        setTimeout(() => {
            if (monto > saldo) {
                // Caso Error
                rechazar(`Fondos insuficientes. Tu saldo es solo: ${saldo}`);
            } else {
                // Caso Éxito: Actualizamos saldo global y resolvemos
                saldo = saldo - monto;
                resolver(`Retiro exitoso. Nuevo saldo: ${saldo}`);
            }
        }, 2000);
    });
}

// 4. CONSUMO DE LA PROMESA (Afuera de la función)
console.log(`Saldo inicial: ${saldo}`);

retirarDinero(500)
    .then(mensaje => {
        console.log('✅ ' + mensaje);
    })
    .catch(error => {
        console.log('❌ ' + error);
    })
    .finally(() => { // Fíjate en la función flecha aquí
        console.log('🏧 Operación finalizada (Tarjeta devuelta)');
    });

/*
Salida esperada después de 2 segs:
✅ Retiro exitoso. Nuevo saldo: 500
🏧 Operación finalizada (Tarjeta devuelta)
*/