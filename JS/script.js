document.addEventListener('DOMContentLoaded', function () {
    var botonMenu = document.getElementById('botonMenu');
    var contenidoMenu = document.getElementById('contenidoMenu');
    var header = document.getElementsByClassName('header');

    botonMenu.addEventListener('click', function () {
        // Alternar la visibilidad del menú al hacer clic en el botón
        if (contenidoMenu.style.display === 'none') {
            contenidoMenu.style.display = 'block';
            header.style.height = 150+'px'
            

        } else {
            contenidoMenu.style.display = 'none';
        }
    });
    
});


