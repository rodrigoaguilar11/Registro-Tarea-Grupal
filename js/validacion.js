document.addEventListener("DOMContentLoaded", () => {
    //Inicio del DOMContentLoaded
    //Boton para registrarse
    document.getElementById("regBtn").addEventListener("click", () => {
        register();
    })

    //Fin del DOMContenLoaded
});

function register() {
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let password;
    if (password1 != password2) {
        alert("La contraseñas deben ser iguales");
    } else if (password1.length <6) {
        alert("La contraseña debe ser mayor o igual a 6");
    } else {
        password = password1;
    }
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    if (nombre === "") {
        alert("Ingrese Nombre");
    } else if (apellido === "") {
        alert("Ingrese Apellido");
    } else if (email === "") {
        alert("Ingrese Email");
    } else if (password === undefined) {
        alert("Ingrese Contraseña");
    } else if (!document.getElementById('terminos').checked) {
        alert("Debe aceptar los terminos");
    } else {
        alert("Se registro correctamente");
    }
}

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}