const GET_URL = "https://fakestoreapi.com/users";
const tablebody = document.getElementById("userGet");
const userForm = document.getElementById('userForm');

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
        icon: "error", title: "Oops...", text: getErrorMessage(status, method),
    });
}

const getSuccessMessage = (status, method) => {
    const code = {
        GET: { 200: `Se cargaron correctamente los usuarios` },
        POST: { 201: "Usuario creado con exito", 200: "Usuario guardado" },
        PUT: { 200: "Usuario actualizado correctamente" },
        DELETE: { 200: "Usuario eliminado con exito" }
    }
    return code[method]?.[status] || "Operacion realizada";
}

const showSuccess = (status, method) => {
    Swal.fire({
        title: "Exito", icon: "success", text: getSuccessMessage(status, method),
        timer: 3000, draggable: true
    });
}

const getUsers = async () => {
    try {
        const response = await fetch(GET_URL);
        if (!response.ok) {
            showError(response.status, "GET");
            throw new Error(`Error: ${response.status}`);
        }
        const users = await response.json();
        displayUsers(users);
        showSuccess(200, "GET");
    } catch (error) { console.error(error); }
}

const createUser = async (userData) => {
    try {
        const response = await fetch(GET_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        if (!response.ok) {
            showError(response.status, 'POST');
            throw new Error(`Error: ${response.status}`);
        }
        const userAdd = await response.json();
        showSuccess(response.status, 'POST');
        return userAdd;
    } catch (error) { showError(500, 'POST'); }
}

const updateUser = async (userData) => {
    try {
        const response = await fetch(`${GET_URL}/${userData.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        if (!response.ok) {
            showError(response.status, 'PUT');
            throw new Error(`Error: ${response.status}`);
        }
        const userUpdate = await response.json();
        showSuccess(response.status, 'PUT');
        return userUpdate;
    } catch (error) { showError(500, 'PUT'); }
}

const deleteUser = async (id) => {
    try {
        const response = await fetch(`${GET_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            showError(response.status, 'DELETE');
            throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        showSuccess(response.status, 'DELETE');
        return result;
    } catch (error) { showError(500, 'DELETE'); }
}

const displayUsers = (users) => {
    tablebody.innerHTML = "";

    if (users.length === 0) {
        tablebody.innerHTML = `<tr><td colspan="6" class="text-center">No hay usuarios</td></tr>`;
        return;
    }

    users.forEach(user => {
        const row = document.createElement("tr");

        // Columna ID
        const campoId = document.createElement("td");
        campoId.textContent = user.id;
        campoId.style.cursor = "pointer";
        campoId.title = "Doble click para borrar";
        campoId.addEventListener("dblclick", () => idDobleClick(user.id));
        row.appendChild(campoId);

        // Columnas Editables
        const campoEditable = (tipo, valor) => {
            const campo = document.createElement("td");
            campo.textContent = valor;
            campo.style.cursor = "text"; 
            campo.title = "Doble click para editar";
            
            campo.addEventListener("dblclick", () => {
                if (campo.querySelector('input')) return;

                const respaldo = campo.textContent;
                
                campo.innerHTML = "";
                const input = document.createElement("input");
                input.type = (tipo == "email" ? "email" : "text");
                input.value = respaldo; 
                input.className = "form-control form-control-sm";
                
                campo.appendChild(input);
                input.focus();

                input.addEventListener("keydown", (e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        input.blur();

                        user[tipo] = input.value;
                        actualizarUsuario(user, campo, respaldo, tipo);

                    } else if (e.key === "Escape") {
                        campo.textContent = respaldo;
                    }
                });
            });
            return campo;
        };

        row.appendChild(campoEditable("username", user.username));
        row.appendChild(campoEditable("email", user.email));
        row.appendChild(campoEditable("password", user.password));

        tablebody.appendChild(row);
    });
}

const idDobleClick = (id) => {
    Swal.fire({
        title: '¿Eliminar Usuario?',
        text: `Vas a eliminar el ID: ${id}.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
    }).then(async (result) => {
        if (result.isConfirmed) {
            await deleteUser(id);
        }
    });
}

const actualizarUsuario = (user, campo, respaldo, tipo) => {
    Swal.fire({
        title: '¿Confirmar cambios?',
        text: `¿Deseas actualizar el usuario?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#28a745',
        confirmButtonText: 'Actualizar',
        cancelButtonText: 'Cancelar'
    }).then(async (result) => {
        if (result.isConfirmed) {
            const response = await updateUser(user);
            
            if (response) {
                campo.textContent = user[tipo];
            } else {
                user[tipo] = respaldo;
                campo.textContent = respaldo;
            }
        } else {
            user[tipo] = respaldo;
            campo.textContent = respaldo;
        }
    });
}

const userFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const userData = Object.fromEntries(formData);


    const emptyFields = [];
    if (!userData.username || userData.username.trim() === "") emptyFields.push("Username");
    if (!userData.email || userData.email.trim() === "") emptyFields.push("Email");
    if (!userData.password || userData.password.trim() === "") emptyFields.push("Password");

    if (emptyFields.length > 0) {
        const fieldsList = emptyFields.join(", ");
        const plural = emptyFields.length > 1;

        Swal.fire({
            title: "Campos incompletos",
            icon: "warning",
            text: `Por favor completa ${plural ? 'los campos' : 'el campo'}: ${fieldsList}`,
            confirmButtonText: 'OK'
        });
        userForm.classList.add('was-validated');
        return; // Detiene la ejecución si hay vacíos
    }

   
    if (!userForm.checkValidity()) {
        userForm.classList.add('was-validated');
        Swal.fire({
            title: "Formato inválido",
            icon: "error",
            text: 'Revisa que el email sea válido (con @) y la contraseña cumpla el largo mínimo.',
        });
        return; 
    }

    try {
        //creacion del usuario
        await createUser(userData);

        const modal = bootstrap.Modal.getInstance(document.getElementById('userModal'));
        modal.hide();

        //limpiar datos del formulario
        userForm.reset();
        userForm.classList.remove('was-validated'); // Limpia los bordes rojos/verdes al terminar

    } catch (error) {
        console.error(`Error en el formulario: ${error.message}`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    getUsers();
    if(userForm) userForm.addEventListener('submit', userFormSubmit);
    
    const modalElement = document.getElementById('userModal');
    if(modalElement) {
        modalElement.addEventListener('show.bs.modal', (event) => {
             if (event.relatedTarget) {
                userForm.reset();
                userForm.classList.remove('was-validated');
             }
        });
    }
});