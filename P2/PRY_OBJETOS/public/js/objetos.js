//declaramos un obejto
var persona = {
    nombres: "Andres Sebastian",
    apellidos: "Cardenas Erazo",
    edad: 20,
    es_profesor: false,
    estatura: 1.7
};
//console.log(persona["nombres"]);
console.log(persona.nombres);
console.log(persona.apellidos);

var datos_persona = document.getElementById('datos_persona');
datos_persona.innerHTML = `
La persona se llama ${persona.nombres} ${persona.apellidos}
y su edad es ${persona.edad} y menciona que ${persona.es_profesor ? 'si' : 'no'} es profesor, 
y su estatura es ${persona.estatura} y ${persona.edad > 18 ? "si" : "no"} es mayor de edad
`;

var txt_nombres = document.getElementById('nombres');
txt_nombres.value = persona.nombres;
var txt_apellidos = document.getElementById('apellidos');
txt_apellidos.value = persona.apellidos;
var txt_edad = document.getElementById('edad');
txt_edad.value = persona.edad;
var txt_estatura = document.getElementById('estatura');
txt_estatura.value = persona.estatura;
var txt_es_profesor = document.getElementById('es_profesor');
txt_es_profesor.value = persona.es_profesor ? 'si' : 'no';
var txt_mayor_edad = document.getElementById('mayor_edad');
if (persona.edad >= 18) {
    txt_mayor_edad.checked = true;
}
else {
    txt_mayor_edad.checked = false;
}

var btn_actualizar = document.getElementById('btn_actualizar');
btn_actualizar.addEventListener('click', function (e) {
    persona.nombres = txt_nombres.value;
    persona.apellidos = txt_apellidos.value;
    persona.edad = txt_edad.value;
    persona.es_profesor = txt_es_profesor.value == "si" ? true : false;
    persona.estatura = txt_estatura.value;
    txt_mayor_edad.checked=persona.edad >= 18? true:false;
    cambiarTexto();
});

function cambiarTexto() {
    datos_persona.innerHTML = `
    La persona se llama ${persona.nombres} ${persona.apellidos}
    y su edad es ${persona.edad} y menciona que ${persona.es_profesor ? 'si' : 'no'} es profesor, 
    y su estatura es ${persona.estatura} y ${persona.edad >= 18 ? "si" : "no"} es mayor de edad
    `;
}