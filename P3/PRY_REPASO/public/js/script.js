//SIG CLASE: windsurf y trae ayudan a trabajar, code sandbox
//CLave valor, los valores pueden ser numeors, cadenas, funciones o incluso otros objetos

let persona = {
    nombre      : "Andres",
    apellido    : "Cardenas",
    email       : 'acardenas@',
    edad        : 20,
    nombreCompleto  : function(){
        return(this.nombre + " " + this.apellido)
    },
    saludar : function(){
        console.log(`Holaaa, me llamo ${this.nombre} ${this.apellido}`);
        //Esa doble coma simple tamb sirve para crear de forma dinamica un componente en html
    }
}

persona.saludar()
console.log(persona.nombreCompleto())

//CREACION DE UN OBJETO A TRAVES DE OBJECT

const persona2 = new Object();
persona2.nombre = "UWU";
persona2.edad = 20;
persona2.saludar = function(){
    console.log(`Holaaa, me llamo ${this.nombre}`);

}

console.log(persona2.nombre)
persona2.saludar();

//CREACION DE UN OBJETO CON OBJECT.CREATE

const prototipoPersona = {
    saludar : function(){
    console.log(`Holaaa, me llamo ${this.nombre}`);
    }
}

const persona3 = Object.create(prototipoPersona);
persona3.nombre = 'WAOS';
persona3.saludar();


//CLASES

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
    console.log(`Holaaa, me llamo ${this.nombre}`);
    }
}

const persona4 = new Persona('Crack', 20);
persona4.saludar()

//Creando objetos utilizando funciones constructores, una forma clasica antes de esc

function Personita(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function(){
    console.log(`Holaaa, me llamo ${this.nombre}`);
    }
}

const persona5 = new Personita('Jose',20)
persona5.saludar()

//AGREGAR O MODIFICAR PROPIEDADES

persona5.apellido="Andino"
console.log(persona5)

//ELIMINAR PROPIEDADES
delete persona5.apellido
console.log(persona5)

//ITERAR O RECORRER LAS PROPIEDADES DE UN OBJETO

for(let nombrePropiedad in persona){
    console.log(`${nombrePropiedad}: ${persona[nombrePropiedad]}`);
}

//VERIFICAR SI TIENE UN ATRIBUTO

console.log('nombre' in persona)
console.log(persona.hasOwnProperty('carro'))

//DEVOLVER TODAS LAS CLAVES CON Object.keys regresa un array con las claves

console.log(Object.keys(persona))

console.log(Object.values(persona))

console.log(Object.entries(persona))

//COPIAS DE OBJETOS

let copiaPersona = Object.assign({},persona)
console.log(copiaPersona)

//INMUTAR EL ANADIR, CREAR O MODIFICAR PROPIEDADES DE UN OBJETO
Object.freeze(copiaPersona)
console.log(Object.isFrozen(copiaPersona))

//MODIFICAR VALORES EXISTENTES PERO NO AGREGAR O ELIMINAR PROPIEDADES
Object.seal(copiaPersona)
copiaPersona.nombre='Pepito'
console.log(copiaPersona)



//ACTIVIDAD: Crear un objeto Vehiculo con almenos 5 propiedades de forma dinamica, una es exhonerado
// si el año es mayor a 2017 se pone si, caso contrario no
//ES LA CREACION DINAMICA DE LAS PROPIEDADES
let atributos = ['modelo', 'marca', 'estado', 'anio'];

function Vehiculo(claves, valores){
    claves.forEach((clave, posicion) => {
        this[clave] = valores[posicion];
    });
    this.exonerado = parseInt(this.anio) > 2017 ? 'si' : 'no';
}


function crearVehiculos(cantidad){
    for(let i = 0; i < cantidad; i++){
        let valores = [];
        atributos.forEach(function(atributo){
            let valor = prompt(`Ingresa el valor de ${atributo}`);
            valores.push(valor);
        });
        var vehiculo = new Vehiculo(atributos, valores)
        console.log(vehiculo)
    }
}

//crearVehiculos(3);