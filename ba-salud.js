let dniUsuario;

function checkCredentials() {
    return !isNaN(document.forms["login"]["dni"].value) && document.forms["login"]["password"].value.length > 3
}


function placeDniUsuario() {
    const urlParams = new URLSearchParams(window.location.search);
    let dni = urlParams.get("DNI");
    if (dni != null) {
        document.getElementById("nombre-usuario").innerHTML = `DNI: ${dni}`
    }

}

window.onload = function () {
    placeDniUsuario()
};
