const BASE_URL_PLATZI = 'https://api.escuelajs.co/api/v1';
//https://fakeapi.platzi.com/en/rest/users/
const BASE_URL_PLACEHOLDER = 'https://jsonplaceholder.typicode.com/';
//https://jsonplaceholder.typicode.com/

const manejarEstados = async (response) => {
    switch (response.status) {
        case 200:
            console.log('200: Petición exitosa (OK)');
            return await response.json(); // Devolvemos la data parseada
            
        case 201:
            console.log('201: Recurso creado exitosamente (Created)');
            return await response.json();

        case 204:
            console.log('204: Recurso eliminado/sin contenido (No Content)');
            return true; // No hay JSON que parsear

        case 400:
            // Bad Request
            throw new Error(`400: Solicitud incorrecta. Revisa los datos enviados.`);

        case 401:
            // Unauthorized
            throw new Error(`401: No autorizado. Necesitas loguearte.`);

        case 404:
            // Not Found
            throw new Error(`404: El recurso no fue encontrado en el servidor.`);

        case 500:
            // Internal Server Error
            throw new Error(`500: Error interno del servidor. Intenta más tarde.`);

        default:
            // Cualquier otro código no controlado
            if (!response.ok) {
                throw new Error(`Error desconocido: ${response.status}`);
            }
            return await response.json();
    }
};


//                          PRACTICA DEL METODO GET

//Platzi

let getUsersPlatzi = async () => {
    try {
        const response = await fetch(`${BASE_URL_PLATZI}/users`);
        let users = await manejarEstados(response);
        console.log('Usuarios encontrados: ', users);
    } catch (error) {
        console.error('Error en GET: ', error.message);
    }
}

// getUsersPlatzi();

//Placeholder

let getPostsPlaceholder = async () =>{
    try {
        const response = await fetch(`${BASE_URL_PLACEHOLDER}/posts`);
        let posts = await manejarEstados(response);
        console.log('Posts encontrados: ', posts);
    } catch (error) {
        console.log('Error en GET: ', error.message);
    }
};
// getPostsPlaceholder();


//PRACTICA DEL METODO POST
//platzi

async function postUser(user) {
    try {
        const response = await fetch(`${BASE_URL_PLATZI}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });

        let userCreated = await manejarEstados(response);
        console.log('Usuario creado exitosamente: ', userCreated);
    } catch (error) {
        console.error('Error en POST: ', error.message);
    }
}

// postUser({
//     name: 'Andres',
//     email: 'aa@aa.com',
//     password: 'aa123',
//     avatar: "https://picsum.photos/800"
// });

//placeholder

async function postPosts(post){
    try {
        const response = await fetch(`${BASE_URL_PLACEHOLDER}/posts`, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(post)
        });
        const postCreated = await manejarEstados(response);
        console.log('Post creado exitosamente', postCreated);
    } catch (error) {
        console.error('ERROR EN EL METODO POST: ', error.message)
    }
}

// postPosts({
//     userId: 4,
//     title: 'post creado',
//     body: 'usando el metodo'
// });


//// METODO PUT

//platzi
// ==========================================
// 1. TU FUNCIÓN PUT CORREGIDA (Reemplazo Total)
// ==========================================
const putUser = async function (id, name, email) {
    try {
        // En PUT, idealmente deberías enviar TODOS los campos del usuario
        // Si la API es estricta, aquí perderías el avatar y password
        let userChanged = { name: name, email: email }; // ID no se suele mandar en el body, ya va en la URL
        
        const response = await fetch(`${BASE_URL_PLATZI}/users/${id}`, {
            method: 'PUT',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(userChanged)
        });

        // CORRECCIÓN: Agregado el await
        const userUpdated = await manejarEstados(response);
        console.log('Usuario actualizado (PUT): ', userUpdated);
        
    } catch (error) {
        console.error('ERROR PUT: ', error.message);
    }
}

// ==========================================
// 2. NUEVA FUNCIÓN PATCH (Cambio Parcial)
// ==========================================
// Imagina que solo quieres cambiar el password, sin tocar lo demás
const patchUser = async function (id, newPassword) {
    try {
        // Solo mandamos lo que queremos cambiar
        let partialData = { password: newPassword }; 
        
        const response = await fetch(`${BASE_URL_PLATZI}/users/${id}`, {
            method: 'PATCH', // CAMBIO DE VERBO
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(partialData)
        });

        const userUpdated = await manejarEstados(response);
        console.log('Usuario actualizado (PATCH): ', userUpdated);
        
    } catch (error) {
        console.error('ERROR PATCH: ', error.message);
    }
}

// PRUEBAS
putUser(140, 'Andy Reemplazado', 'an@an.com'); 
patchUser(140, 'nuevaPass1234');


const BASE_URL = 'https://api.escuelajs.co/api/v1';

// ... (Aquí iría tu función manejarEstados tal cual la pusiste) ...

// ==========================================
// 1. MÉTODO GET (Lectura - Espera un 200)
// ==========================================
async function obtenerProducto(id) {
    try {
        console.log(`--- Buscando producto ${id} ---`);
        const response = await fetch(`${BASE_URL}/products/${id}`);

        // USO DE LA FUNCIÓN:
        // No hacemos .json() aquí. manejarEstados lo hace por nosotros.
        const data = await manejarEstados(response);

        // Si la línea de arriba no lanzó error, tenemos los datos limpios
        console.log("Producto encontrado:", data.title);

    } catch (error) {
        // Aquí atrapamos los errores que lanza manejarEstados (404, 500, etc.)
        console.error("Error en GET:", error.message);
    }
}

// ==========================================
// 2. MÉTODO POST (Creación - Espera un 201)
// ==========================================
async function crearProducto(nuevoProducto) {
    try {
        console.log(`--- Creando producto ---`);
        const response = await fetch(`${BASE_URL}/products`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoProducto)
        });

        // USO DE LA FUNCIÓN:
        // Si el servidor devuelve 201, manejarEstados imprime el log de "Created" 
        // y nos devuelve el objeto creado.
        const productoCreado = await manejarEstados(response);

        console.log("ID del nuevo producto:", productoCreado.id);

    } catch (error) {
        // Si enviaste datos mal, manejarEstados lanza el error 400 y cae aquí
        console.error("Error en POST:", error.message);
    }
}

// ==========================================
// 3. MÉTODO PUT (Actualización - Espera un 200)
// ==========================================
async function actualizarProducto(id, cambios) {
    try {
        console.log(`--- Actualizando producto ${id} ---`);
        const response = await fetch(`${BASE_URL}/products/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cambios)
        });

        // USO DE LA FUNCIÓN:
        // Si el servidor devuelve 200, recibimos el objeto actualizado.
        const productoActualizado = await manejarEstados(response);

        console.log("Datos actualizados:", productoActualizado);

    } catch (error) {
        console.error("Error en PUT:", error.message);
    }
}

// ==========================================
// 4. MÉTODO DELETE (Eliminación - Espera un 204 o 200)
// ==========================================
async function eliminarProducto(id) {
    try {
        console.log(`--- Eliminando producto ${id} ---`);
        const response = await fetch(`${BASE_URL}/products/${id}`, {
            method: 'DELETE'
        });

        // USO DE LA FUNCIÓN:
        // OJO AQUÍ: Si devuelve 204 (No Content), manejarEstados retorna 'true'.
        // No intentamos leer propiedades porque no hay JSON.
        const exito = await manejarEstados(response);

        if (exito) {
            console.log("El producto fue eliminado correctamente de la BDD.");
        }

    } catch (error) {
        // Si el ID no existe, manejarEstados lanza el error 404 y cae aquí
        console.error("Error en DELETE:", error.message);
    }
}

// --- EJECUCIÓN DE PRUEBA (Para que veas el flujo) ---

// 1. GET Exitoso
obtenerProducto(1);

// 2. GET Fallido (Para probar el switch case 404)
obtenerProducto(99999);