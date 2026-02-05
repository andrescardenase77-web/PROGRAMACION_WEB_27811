const BASE_URL = 'https://fakestoreapi.com/users';

let txt_boton_obtener = document.getElementById('txt_boton_obtener');
let txt_boton_insertar = document.getElementById('txt_boton_insertar');
let txt_boton_actualizar = document.getElementById('txt_boton_actualizar');
let txt_boton_eliminar = document.getElementById('txt_boton_eliminar');
let txt_resultados = document.getElementById('txt_resultados');




txt_boton_obtener.addEventListener('click', () => {
    getUsers();
});

txt_boton_insertar.addEventListener('click', () => {
    let txt_username = document.getElementById('txt_username');
    let txt_email = document.getElementById('txt_email');
    let txt_password = document.getElementById('txt_password');
    Swal.fire({
        title: "Estas seguro de insertar?",
        text: "No podras revertir los cambios!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, insertar!"
    }).then((result) => {
        if (result.isConfirmed) {
            postUser(txt_username.value, txt_email.value, txt_password.value); 
        }
    });
});

txt_boton_actualizar.addEventListener('click', () => {
    let txt_id = document.getElementById('txt_id');
    let txt_username = document.getElementById('txt_username');
    let txt_email = document.getElementById('txt_email');
    let txt_password = document.getElementById('txt_password');
    Swal.fire({
        title: "Estas seguro de actualizar?",
        text: "No podras revertir los cambios!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, actualizar!"
    }).then((result) => {
        if (result.isConfirmed) {
            putUser(txt_id.value, txt_username.value, txt_email.value, txt_password.value); 
        }
    });
});

txt_boton_eliminar.addEventListener('click', () => {
    let txt_id = document.getElementById('txt_id');
    Swal.fire({
        title: "Estas seguro de eliminar?",
        text: "No podras revertir los cambios!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
    }).then((result) => {
        if (result.isConfirmed) {
            deleteUser(txt_id.value); 
        }
    });
});



async function getUsers() {
    try {
        const response = await fetch(BASE_URL);
        if (response.status == 200) {
            Swal.fire({
                title: "Reporte de usuarios generado exitosamente!",
                icon: "success",
                draggable: true
            });
        }
        else {
            throw new Error('Hubo un error en la obtencion de usuarios');
        }
        let users = await response.json();
        console.log(users);
        return users;
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
        });
    }
}

async function postUser(username, email, password) {
    try {
        const user = { username: username, email: email, password: password };
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });
        if (response.status == 201) {
            Swal.fire({
                title: "Usuario insertado exitosamente!",
                icon: "success",
                draggable: true
            });
        }
        else {
            throw new Error('Hubo un error de insercion del usuario');
        }
        let users = await response.json();
        return users;
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
        });
    }
}

async function putUser(id, username, email, password) {
    try {
        const user = { username: username, email: email, password: password };
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });
        if (response.status == 200) {
            Swal.fire({
                title: "Usuario modificado exitosamente!",
                icon: "success",
                draggable: true
            });
        }
        else {
            throw new Error('Hubo un error en la modificacion del usuario');
        }
        let users = await response.json();
        return users;
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
        });
    }
}

async function deleteUser(id) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE'
        });
        if (response.status == 200) {
            Swal.fire({
                title: "Usuario ELIMINADO exitosamente!",
                icon: "success",
                draggable: true
            });
        }
        else {
            throw new Error('Hubo un error en la ELIMINACION del usuario');
        }
        let users = await response.json();
        return users;
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
        });
    }
}

