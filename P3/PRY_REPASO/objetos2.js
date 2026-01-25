//Constructores en JS
//Si deseamos crear mas objetos del mismo tipo no es posible, para ello se crean constructores

function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona('Juan', 'Sanchez', 'js@gmail.com');
console.log(padre);

let madre = new Persona('Laura', 'Moya', 'lm@gmail.com');
console.log(padre);

padre.nombre = 'Carlos';
console.log(padre)

//Uso de Prototype

Persona.prototype.tel = '0999919481';
Persona.prototype.direccion = 'Sangolqui';

console.log(madre.tel);
console.log(madre.direccion);
console.log(padre.direccion);
console.log(madre);

//Anadir un metodo del tipo prototype

Persona.prototype.saludar = function(){
    console.log(`Hola soy ${this.nombre}!`);
}

let hijo = new Persona('Diego', 'Escobar', 'de@gmail.com');
hijo.saludar();

//La funcion call permite invocar una funcion con un contexto .this especifico y argumentos individuales
//FUncion que queremos usar con diferentes objetos

function saludar(){
    console.log(`Hola soy ${this.nombre} y tengo ${this.edad} anios!`);
}

const persona1 = new Persona('Ana', 'Juarez', 'aj@gmail.com');
persona1.edad = 26;
persona1.decirCorreo = function(){
    console.log(`Mi correo es ${this.email}`);
}

const persona2 = new Persona('Juan', 'Juarez', 'jj@gmail.com');
persona2.edad = 16;

//usamos call para que la funcion saludar se ejecute desde el contexto de persona1

saludar.call(persona1)
saludar.call(persona2)

//ACTIVIDAD
let objeto1 = {
    nombre : 'Juan',
    apellido:    'Erazo',
    nombreCompleto  :   function(){
        return this.nombre + ' ' + this.apellido
    }
}

let objeto2 = {
    nombre : 'Carla',
    apellido:    'Perez',
}

console.log(objeto1.nombreCompleto.call(objeto2));


/*
node objetos2.js
*/ 

