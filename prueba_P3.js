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

//obtener, insertar, eliminar y modificar (get, post, put, delete)