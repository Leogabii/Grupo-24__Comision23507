document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.forms["formulario"];
    formulario.addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
    var checkbox = document.getElementById('check').checked;

    if (nombre.length === 0 || email.length === 0 || mensaje.length === 0 || !checkbox) {
        alert('Por favor, completa todos los campos y acepta los términos.');
        return;
    }

    formulario.submit();
}

document.addEventListener('DOMContentLoaded', function() {
    const mayor = document.getElementById("btn-mayor");
    const menor = document.getElementById("btn-menor");
    const divModal = document.getElementById("div-modal");
    const modalContainer = document.getElementById("modal-container");

    // Verificar si el usuario ya ha confirmado ser mayor en la sesión anterior
    const isMayor = sessionStorage.getItem('isMayor');

    // Si el usuario ya es mayor, oculta el modal
    if (isMayor === 'true') {
        divModal.style.display = 'none';
        modalContainer.style.display = 'none';
    }

    mayor.addEventListener("click", function () {
        // Almacenar la confirmación en sessionStorage
        sessionStorage.setItem('isMayor', 'true');
        divModal.style.display = 'none';
        modalContainer.style.display = 'none';
    });

    menor.addEventListener("click", function () {
        window.location.href = "https://www.youtube.com/playlist?list=PLj9a64Hsq1qrFZYaNh1waoaFvTJrTn0LP";
    });
});




