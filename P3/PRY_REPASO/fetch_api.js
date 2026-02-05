// /*
// Concepto: Una fetch api es una interfaz moderna para realizar peticiones HTTP desde un navegador
// FETCH API: uso de promesas 

// fetch('https://api.com.ec') //url de la api

// .then(response => response.json()); // convertir la respuesta que se obtiene del servidor en formato json
// .then(data => console.log(data)); //mostrar los datos en consola
// .catch(error => console.error('Error: ', error)); //manejo de errores

// fetch retorna una promesa
// para ller el cuerpo de una determinada respuesta
// */

// /*
// METODOS CONOCIDOS
// .json()
// .text()
// .blob()
// .formData()

// VER CUALES SON LOS CODIGOS DE ERROR QUE SE VEN A TRAVES DE PETICIONES HTTP (de que 200, 400, 500...)

// IMPORTANTE:
// fetch() no lanza algun error por codigo HTTP, solo falla si hay un problema de red
// si el servidor responde con un error 404, el codigo no va a ingresar al catch, solo fallaria al hacer
// .json siempre y cuando el JSON sea valido

// get es para obtener data
// post es para actualizar

// OJOOOO: json placeholder. fakeapi
// */

// async function fetchData (){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if(!response.ok){
//             throw new error(`HTTP Error status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log(data);
//     }
//     catch (error) {
//         console.error('Fetch error: ', error);
//     }
// }

// fetchData();

// /*
// ASYNC y AWAIT es una sintaxis moderna que trabaja con promesas de forma mas limpia
// el codigo se torna mas legible 

// verifica explicitamente response.ok que es un valor correcto solo si el status esta entre el 200...
// Si hay un error 4xx o 5xx, etc lanza un error y este lo captura en un catch
// */


// //USO DE GET, se usa para recuperar datos del servidor (es solo lectura)

// //Ejercicio: obtener los datos de usuarios

const BASE_URL = 'https://api.escuelajs.co/api/v1';

// async function getUsers(){
//     try{
//         const response = await fetch(`${BASE_URL}/users`);
//         if(!response.ok){
//             throw new error(`HTTP Error status: ${response.status}`);
//         }

//         const users = await response.json();
//         console.log('Usuarios: ',users);
//     }
//     catch (error) {
//         console.error('Fetch error: ', error.message);
//     }
// }

// getUsers()

// /*
// fetch() aqui hace una peticion por defecto
// se verifica response.ok para detectar errores HTTP(en GET es muy dificil que atrape un error)
// */


// /*
// METODO POST

// crea un nuevo recurso
// Envia al servidor los datos o la informacion para crear un nuevo recurso
// */

// //Ejercicio: crear un nuevo POST

const BASE_URL1 = 'https://jsonplaceholder.typicode.com/'

// async function createPost(title, body, userId = 1) {
//     try {
//         const newPost = {title, body, userId};

//         const response = await fetch(`${BASE_URL1}/posts`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newPost)
//         });

//         if(!response.ok){
//             throw new Error(`HTTP Error status: ${response.status}`);
//         }

//         const createdPost = await response.json();
//         console.log('Post creado exitosamente: ', createdPost);
//         return createdPost;

//     } catch (error) {
//         console.error('Fetch error: ', error.message);        
//     }
// }

// createPost('Post Actualizado', 'Este cuerpo de Post fue actualizado', 1);


//ACTIVIDAD, CREAR UNA NUEVA CATEGORIA

// async function getCategories(){
//     try{
//         const response = await fetch(`${BASE_URL}/categories`);
//         if(!response.ok){
//             throw new error(`HTTP Error status: ${response.status}`);
//         }

//         const users = await response.json();
//         console.log('Categorias: ',users);
//     }
//     catch (error) {
//         console.error('Fetch error: ', error.message);
//     }
// }

// getCategories();

///

//  const BASE_URL3 = 'https://api.escuelajs.co/api/v1';
// const createCategoria = async (name, image) => {
//     try {
//         const newCategory = {name, image};
//         const response = await fetch(`${BASE_URL3}/categories`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newCategory)
//         });
//         if(!response.ok){
//             throw new Error(`HTTP Error status: ${response.status}`);
//         }
//         const createdCategory = await response.json();
//         console.log('Categoria creada exitosamente: ', createdCategory);
//         return createdCategory;
//     } catch (error) {
//         console.error('Fetch error: ', error.message);        
//     }
// }

// createCategoria('Nueva Categoria andres C', 'https://example.com/image.jpg');

/* METODO PUT
actualiza un registro completo que reemplazara todos los campos
*/

// const updatePosts = async (id, title, body, userId) => {
//      try{
//         const updatedData = {id, title, body, userId};

//         const response = await fetch(`${BASE_URL1}/posts/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(updatedData)
//         });

//         if(!response.ok){
//             throw new Error(`HTTP Error status: ${response.status}`);
//         }

//         const updatedPost = await response.json();
//         console.log('Post actualizado exitosamente: ', updatedPost);
//         return updatedPost;

//     } catch (error) {
//         console.error('Fetch error: ', error.message);        
//     }
// }

// updatePosts(1, 'Titulo actualizado PUT', 'Contenido actualizado', 1)

/*
ACTUALIZAR EL METODO POST USANDO UN OBJETO
*/

// const userData = {
//     name: 'Pepe',
//     email : 'pep@gmail.com',
//     password : 'pepe123',
//     avatar : 'https://picsum.photos/800'
// }

// async function createPost(userData) {
//     try {
//         const response = await fetch(`${BASE_URL}/users`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(userData)
//         });

//         if(!response.ok){
//             throw new Error(`HTTP Error status: ${response.status}`);
//         }

//         const createdPost = await response.json();
//         console.log('Post creado exitosamente: ', createdPost);
//         return createdPost;

//     } catch (error) {
//         console.error('Fetch error: ', error.message);        
//     }
// }

// createPost(userData);

//PUT ESPERA A QUE SE ENVIEN TODOS LOS CAMPOS A ACTUALIZARSE, SI SE OMITE UN CAMPO, ESE CAMPO SE PERDERA EN LA SIMULACION

/*
METODO DELETE
Elimina un recurso del servidor
siempre y cuando las reglas de negocio lo permita y este dentro de la BDD subyacente
*/

// async function deletePost(id){
//     try {
//         const response = await fetch(`${BASE_URL}/posts${id}`, {
//             method : 'DELETE'
//         });

//         //en el delete normalmente no hay cuerpo de respuesta
//         if(response.ok)
//         {
//             console.log(`Post ${id} eliminado exitosamente`);
//             return true;
//         }
//         else{
//             throw new Error(`HTTP Error status: ${response.status}`);  
//         }
//     } catch (error) {
//         console.error('Fetch error: ', error.message);        
//         return false;
//     }
// }

// deletePost(2)


//Actividad de crear con comandos
const userData = {
    name: 'Pepe',
    email : 'pep@gmail.com',
    password : 'pepe123',
    avatar : 'https://picsum.photos/800'
}

async function createPost(userData) {
    try {
        const response = await fetch(`${BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if(response.status = 201){
            const createdPost = await response.json();
            console.log('Post creado exitosamente usando el codigo 201: ', createdPost);
            return createdPost;
        }
        else{
            throw new Error(`HTTP Error status: ${response.status}`);
            return false
        }

    } catch (error) {
        console.error('Fetch error: ', error.message);        
    }
}

createPost(userData);


//METODO DELETE CON CODIGO
async function deletePost(id){
    try {
        const response = await fetch(`${BASE_URL}/postesssss${id}`, {
            method : 'DELETE'
        });

        //en el delete normalmente no hay cuerpo de respuesta
        if(response.ok)
        {
            console.log(`Post ${id} eliminado exitosamente`);
            return true;
        }
        else{
            throw new Error(`HTTP Error status: ${response.status}`);  
        }
    } catch (error) {
        console.error('Fetch error: ', error.message);        
        return false;
    }
}

deletePost(2)

const controlarComandos = function(comando){
    switch(comando){
        
    }
}
