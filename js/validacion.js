document.addEventListener("DOMContentLoaded", () => {
    //Inicio del DOMContentLoaded
    //Boton para registrarse
    document.getElementById("regBtn").addEventListener("click", () => {
        register();
    })

    //Fin del DOMContenLoaded
});

function register() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    if (nombre === "") {
        alert("Ingrese Nombre");
    } else if (apellido === "") {
        alert("Ingrese Apellido");
    } else if (email ===""){
        alert("Ingrese Email");
    } else if (!document.getElementById('terminos').checked){
        alert("Acepte los terminos");

    }else{
alert("Se registro correctamente");
    }
}

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}