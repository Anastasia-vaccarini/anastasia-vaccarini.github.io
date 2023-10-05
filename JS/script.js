document.addEventListener('DOMContentLoaded', function () {
    var botonMenu = document.getElementById('botonMenu');
    var contenidoMenu = document.getElementById('contenidoMenu');
    var header = document.getElementsByClassName('header')[0];
    var anchoPantalla = window.innerWidth;

    botonMenu.addEventListener('click', function () {
        // Alternar la visibilidad del menú al hacer clic en el botón
        if (contenidoMenu.style.display === 'none') {

            contenidoMenu.style.display = 'block';
            if( 724 <= anchoPantalla && anchoPantalla <=900){
                header.style.height = '110px'
            }
            if( 684 <= anchoPantalla && anchoPantalla <724){
                header.style.height = '120px'
            }
            if( 547 < anchoPantalla && anchoPantalla <684){
                header.style.height = '130px'
            }
            if( 465 <= anchoPantalla && anchoPantalla <=547){
                header.style.height = '195px'
            }
            if( 454 <= anchoPantalla && anchoPantalla <465){
                header.style.height = '200px'
            }
            if( 389 <= anchoPantalla && anchoPantalla < 454){
                header.style.height = '220px'
            }
            if( 357 < anchoPantalla && anchoPantalla < 389){
                header.style.height = '250px'
            }
            if( anchoPantalla <= 357){
                header.style.height = '350px'
            }

        } else {
            
            contenidoMenu.style.display = 'none';
            header.style.height = ''
           
            
        }
        
    });
    
});


