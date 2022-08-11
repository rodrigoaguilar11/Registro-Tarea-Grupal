document.addEventListener("DOMContentLoaded", () => {
    //Boton para registrarse
    document.getElementById("regBtn").addEventListener("click", () => {
        register();
    })
});

function register() {
    //parrafo de los errores
    let errors = document.querySelector('#errors');
    let passerror = document.querySelector('#passerror');
    let completo = document.querySelector('#completo');

    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let password;
    if (password1 != password2) {
        errors.textContent = "Las contraseñas deben ser iguales";

    } else if (password1.length <6) {
        errors.textContent = "La contraseña debe ser mayor o igual a 6";

    } else {
        password = password1;
    }
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;

    if (nombre === "") {
        errors.textContent = 'Ingrese Nombre';
    } else if (apellido === "") {
        errors.textContent = 'Ingrese Apellido';
    } else if (email === "") {
        errors.textContent = 'Ingrese Email';
    } else if (password === undefined) {
        passerror.textContent = 'Ingrese Contraseña';
    } else if (!document.getElementById('terminos').checked) {
        passerror.textContent = '';
        errors.textContent = 'Debe aceptar los terminos';
    } else {
        completo.textContent = "Se registro correctamente";
        errors.textContent = '';
    }
}

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}