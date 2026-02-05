//OBJETOS

class Producto {
    // 1. Recibimos precio y stock en el constructor para que sea dinámico
    constructor(nombre, precio, stock, claves, valores) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;

        // 2. CORRECCIÓN DEL BUCLE
        // 'clave' recibe el string (ej: "ram")
        // 'index' recibe el número (ej: 1)
        claves.forEach((clave, index) => {
            // Usamos 'index' para sacar el valor correspondiente del otro array
            this[clave] = valores[index]; 
        });
    }

    // 3. Método definido en el prototipo (Forma estándar de clases)
    aplicarDescuento(porcentaje) {
        // Cálculo correcto: Precio actual * factor decimal (ej: 0.80)
        this.precio = this.precio * ((100 - porcentaje) / 100);
    }
}

const specsNombres = ["procesador", "ram", "disco"];
const specsValores = ["Intel i7", "16GB", "512GB SSD"];

// Pasamos el nombre, precio y stock al instanciar
const laptop = new Producto("Laptop Gamer", 1000, 20, specsNombres, specsValores);

// --- APLICANDO SEGURIDAD ---
Object.seal(laptop); 
// Ahora el objeto está SELLADO:
// - No se pueden borrar propiedades.
// - No se pueden agregar nuevas.
// - SÍ se pueden modificar las existentes (como precio o stock).

// --- PRUEBAS ---

// 1. Modificar existente (PERMITIDO por seal)
laptop.precio = 1200; 
console.log("Precio modificado:", laptop.precio); // 1200

// 2. Método de clase (PERMITIDO modificar valores internos)
laptop.aplicarDescuento(50);
console.log("Precio con descuento:", laptop.precio); // 600

// 3. Agregar propiedad nueva (BLOQUEADO por seal)
laptop.color = "rojo"; 
console.log("Color (no debería existir):", laptop.color); // undefined

// 4. Eliminar propiedad (BLOQUEADO por seal)
delete laptop.stock;
console.log("Stock (debería seguir existiendo):", laptop.stock); // 20

// Verificamos todo el objeto
console.log(laptop);


///////////////////////// Parte 2
function Articulo(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

// FORMA CORRECTA: Asignar al prototype del constructor
Articulo.prototype.impuestos = function(){
    return this.precio * 1.12;
}

let juego = new Articulo('FIFA', 50);

// Ahora SÍ funciona la herencia natural:
console.log(juego.impuestos()); // 56

// Y también funciona tu truco con call:
const promoBlackFriday = { precio: 20 };
// Nota cómo lo llamamos desde la clase madre:
console.log(Articulo.prototype.impuestos.call(promoBlackFriday)); // 22.4

function imprimirEtiqueta(moneda) {
    console.log(`Producto: ${this.nombre} | Total: ${this.precio} ${moneda}`);
}

imprimirEtiqueta.call(juego, 'USD');