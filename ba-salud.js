let dniUsuario;

function checkCredentials() {
    return !isNaN(document.forms["login"]["dni"].value) && document.forms["login"]["password"].value.length > 3
}


function placeDniUsuario() {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById("nombre-usuario").innerHTML = `DNI: ${urlParams.get("DNI")}`

}

window.onload = function () {
    placeDniUsuario()
};
