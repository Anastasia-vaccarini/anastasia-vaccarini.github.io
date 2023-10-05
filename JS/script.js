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
                header.style.height = '100px'
            }
            if( 684 <= anchoPantalla && anchoPantalla <724){
                header.style.height = '110px'
            }
            if( 465 <= anchoPantalla && anchoPantalla <684){
                header.style.height = '130px'
            }
            if( 450 <= anchoPantalla && anchoPantalla <465){
                header.style.height = '140px'
            }
            if( 410 <= anchoPantalla && anchoPantalla < 450){
                header.style.height = '150px'
            }
            if( 357 < anchoPantalla && anchoPantalla < 410){
                header.style.height = '160px'
            }
            if( anchoPantalla <= 357){
                header.style.height = '330px'
            }

        } else {
            
            contenidoMenu.style.display = 'none';
            header.style.height = ''
           
            
        }
        
    });
    
});


