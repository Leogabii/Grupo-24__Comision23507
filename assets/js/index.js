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
// Obtenemos todos los inputs del formulario
var inputs = document.querySelectorAll('input');

// Agregamos un evento de cambio a cada input
for (var i = 0; i < inputs.length; i++) {
inputs[i].addEventListener('input', function() {
// Cambiamos el color de la fuente
this.style.color = '#000';
});
}
});

document.addEventListener('DOMContentLoaded', function() {
const mayor = document.getElementById("btn-mayor");
const menor = document.getElementById("btn-menor");
const divModal = document.getElementById("div-modal");
const modalContainer = document.getElementById("modal-container");

mayor.addEventListener("click", function () {
divModal.style.display = "none";
modalContainer.style.display = "none";
});




});

