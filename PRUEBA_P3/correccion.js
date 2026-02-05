const GET_URL = "https://fakestoreapi.com/users";
const tablebody = document.getElementById("userGet");

const btn_mostrar = document.getElementById('btn_mostrar');
const btn_guardar = document.getElementById('btn_guardar');
const btn_actualizar = document.getElementById('btn_actualizar');
const btn_eliminar = document.getElementById('btn_eliminar');

const txt_id = document.getElementById('id');
const txt_username = document.getElementById('username');
const txt_email = document.getElementById('email');
const txt_password = document.getElementById('password');

// OBTENER Y MOSTRAR LOS DATOS A TRAVEZ DE LA API UTILIANDO EL METODO GET
const getUsers = async () => {
    try {
        const response = await fetch(GET_URL);
        if (!response.ok) {
            showError(response.status, 'GET');
            return;
        }
        const users = await response.json();
        
        // MOSTRAR LOS USUARIOS
        // Utilizar una funcion para obtener los datos
        displayUsers(users);
        showSuccess(response.status, 'GET', users.length);
    } catch (error) {
        showError(500, 'GET');
    }
}

// CREAR USUARIO UTILIZANDO EL METODO POST
const createUser = async () => {
    try {
        const user = {
            username: txt_username.value,
            email: txt_email.value,
            password: txt_password.value
        };
        const response = await fetch(GET_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            showError(response.status, 'POST');
            return;
        }
        showSuccess(response.status, 'POST');
    } catch (error) {
        showError(500, 'POST');
    }
}

// ACTUALIZAR USUARIO UTILIZANDO EL METODO PUT
const updateUser = async () => {
    try {
        const id = txt_id.value;
        const user = {
            username: txt_username.value,
            email: txt_email.value,
            password: txt_password.value
        };
        const response = await fetch(`${GET_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            showError(response.status, 'PUT');
            return;
        }
        showSuccess(response.status, 'PUT');
    } catch (error) {
        showError(500, 'PUT');
    }
}

// ELIMINAR USUARIO UTILIZANDO EL METODO DELETE
const deleteUser = async () => {
    try {
        const id = txt_id.value;
        if (!id) return Swal.fire("Atencion", "Ingresa un ID para eliminar", "info");

        const response = await fetch(`${GET_URL}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            showError(response.status, 'DELETE');
            return;
        }
        showSuccess(response.status, 'DELETE');
    } catch (error) {
        showError(500, 'DELETE');
    }
}

// --- MANEJO DINAMICO DE EXITO ---

const getSuccessMessage = (status, method, count) => {
    const code = {
        GET: { 200: `Se cargaron correctamente ${count} usuarios` },
        POST: { 201: "Usuario creado con exito", 200: "Usuario guardado" },
        PUT: { 200: "Usuario actualizado correctamente" },
        DELETE: { 200: "Usuario eliminado con exito" }
    }
    return code[method]?.[status] || "Operacion realizada";
}

const showSuccess = (status, method, count) => {
    Swal.fire({
        title: "Exito",
        icon: "success",
        text: getSuccessMessage(status, method, count),
        timer: 3000,
        draggable: true
    });
}

// --- MANEJO DINAMICO DE ERROR ---

const getErrorMessage = (status, method) => {
    const code = {
        GET: { 404: 'no encontrado', 500: 'Error del servidor', 401: 'No autorizado' },
        POST: { 400: 'Datos invalidos', 500: 'Error al crear' },
        PUT: { 404: 'Usuario no encontrado', 500: 'Error al actualizar' },
        DELETE: { 404: 'No se pudo eliminar', 500: 'Error del servidor' }
    }
    return code[method]?.[status] || `Error ${status}`;
}

const showError = (status, method) => {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: getErrorMessage(status, method),
    });
}

const displayUsers = (users) => {
    tablebody.innerHTML = "";
    if (users.length === 0) {
        tablebody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center">
                    No hay usuarios para mostrar
                </td>
            </tr>`;
        return;
    }
    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>`;
        tablebody.appendChild(row);
    });
}

// Listeners de los botones
btn_mostrar.addEventListener("click", getUsers);
btn_guardar.addEventListener("click", createUser);
btn_actualizar.addEventListener("click", updateUser);
btn_eliminar.addEventListener("click", deleteUser);