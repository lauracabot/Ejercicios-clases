function mostrarNoticias(seccionId) {
    var secciones = document.querySelectorAll('.seccion-noticias');
    secciones.forEach(function(seccion) {
        seccion.style.display = 'none';
    });
    var seccionSeleccionada = document.getElementById(seccionId);
    if (seccionSeleccionada) {
        seccionSeleccionada.style.display = 'block';
    }
}


// script.js
function mostrarNoticias(seccionId) {
    // Ocultar todas las secciones de noticias
    var secciones = document.querySelectorAll('.seccion-noticias');
    secciones.forEach(function(seccion) {
        seccion.style.display = 'none';
    });
  
    // Mostrar la sección de noticias seleccionada
    var seccionSeleccionada = document.getElementById(seccionId);
    if (seccionSeleccionada) {
        seccionSeleccionada.style.display = 'block';
    }
  }
  