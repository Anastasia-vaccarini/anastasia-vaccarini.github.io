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
            } else if( 684 <= anchoPantalla && anchoPantalla <724){
                header.style.height = '120px'
            }else if( 547 < anchoPantalla && anchoPantalla <684){
                header.style.height = '130px'
            }else if( 465 <= anchoPantalla && anchoPantalla <=547){
                header.style.height = '195px'
            } else if( 454 <= anchoPantalla && anchoPantalla <465){
                header.style.height = '200px'
            }else if( 389 <= anchoPantalla && anchoPantalla < 454){
                header.style.height = '220px'
            }else if( 357 < anchoPantalla && anchoPantalla < 389){
                header.style.height = '250px'
            } else if( anchoPantalla <= 357){
                header.style.height = '350px'
            }
        } else {
            
            contenidoMenu.style.display = 'none';
            header.style.height = ''
           
            
        }
        

        
    });
    window.addEventListener('resize', function() {
        anchoPantalla = window.innerWidth;
        if (anchoPantalla >=900 ){
            contenidoMenu.style.display ='block'
        }
        if (anchoPantalla < 900){
            contenidoMenu.style.display ='none'
            header.style.height = ''
        }

        if (contenidoMenu.style.display == "block"){
            if( 724 <= anchoPantalla && anchoPantalla <=900){
                header.style.height = '110px'
            } else if( 684 <= anchoPantalla && anchoPantalla <724){
                header.style.height = '120px'
            }else if( 547 < anchoPantalla && anchoPantalla <684){
                header.style.height = '130px'
            }else if( 465 <= anchoPantalla && anchoPantalla <=547){
                header.style.height = '195px'
            } else if( 454 <= anchoPantalla && anchoPantalla <465){
                header.style.height = '200px'
            }else if( 389 <= anchoPantalla && anchoPantalla < 454){
                header.style.height = '220px'
            }else if( 357 < anchoPantalla && anchoPantalla < 389){
                header.style.height = '250px'
            } else if( anchoPantalla <= 357){
                header.style.height = '350px'
            };
        };

    });    

    const selectordeofertaTicket = document.querySelector('.selectcom');
    const inputvalorfinalapagar = document.getElementById('BedesPagar');
    const InputCantidadDeBoletos = document.getElementById('cantidadBoletos');

    InputCantidadDeBoletos.addEventListener('input', function(){
        divResumeHere.innerHTML = '';
        if (InputCantidadDeBoletos.value < 1 ){
            InputCantidadDeBoletos.value = 1;
        }

        valorDelboleto()
    });


    function valorDelboleto (){
        var cantidadBoletos = InputCantidadDeBoletos.value;
        var valorselection = selectordeofertaTicket.value;
        const valorboleto = 200 ;

        var ApagarDeBoletos = valorboleto * cantidadBoletos;

        let valorboletofinal = valorboleto;

        if (valorselection == "Estudiante"){
            valorboletofinal = ApagarDeBoletos*20/100
           

        }else if (valorselection == "Trainee"){
            valorboletofinal = ApagarDeBoletos*50/100
           
        }else if (valorselection == "Junior"){
            valorboletofinal = ApagarDeBoletos*85/100
           
        }
        inputvalorfinalapagar.value = valorboletofinal


        var detalle = 'Valor regular del boleto: $'+valorboleto+'x'+cantidadBoletos+'u Debería abonar : $' + ApagarDeBoletos +' Con su descuento de '+valorselection + ' Queda a : $'+valorboletofinal

        return detalle
    };
    valorDelboleto()
    
    // aqí es para el cambio de la cantidad 
    InputCantidadDeBoletos.addEventListener("change", function(){
        divResumeHere.innerHTML = '';
        valorDelboleto()

    });
    // ---------------------

    selectordeofertaTicket.addEventListener("change", function(){
        divResumeHere.innerHTML = '';
        valorDelboleto()

    });
    selectordeofertaTicket.addEventListener("click", function(){
        divResumeHere.innerHTML = '';
        valorDelboleto()

    });

    var ofertaJUNIOR = document.querySelector('.ofertas-3')
    

    ofertaJUNIOR.addEventListener("click", function(){
        divResumeHere.innerHTML = '';
        selectordeofertaTicket.value = "Junior"
        valorDelboleto()
        
    });

    var ofertaTRAINEE = document.querySelector('.ofertas-2')

    ofertaTRAINEE.addEventListener("click", function(){
        divResumeHere.innerHTML = '';
        selectordeofertaTicket.value = "Trainee"
        valorDelboleto()

    });

    var ofertaSTUDENT = document.querySelector('.ofertas-1')
    ofertaSTUDENT.addEventListener("click", function(){
        divResumeHere.innerHTML = '';
        selectordeofertaTicket.value = "Estudiante"
        valorDelboleto()
    });

    const botonborrar = document.getElementById('Borrar');
    const inputtoreset = document.querySelectorAll('.resets');
    
    botonborrar.addEventListener("click", function(){
        divResumeHere.innerHTML = '';
        inputtoreset.forEach(function(input ){
            input.value= ""
        });
        selectordeofertaTicket.value = "Estudiante"
        InputCantidadDeBoletos.value = 1


        valorDelboleto()
    });

    const BotonResume = document.getElementById('RESUME');
    const divResumeHere = document.getElementById('resumeHere')

    BotonResume.addEventListener("click", function(){
        event.preventDefault();
        

        var cantidadBoletos = InputCantidadDeBoletos.value;
        var valorboleto = 200

        divResumeHere.innerHTML= ''
        const objetoDetalletitulo = document.createElement('h3')
        const objetoDetalle = document.createElement('p')

        objetoDetalletitulo.textContent = 'Detalle de su compra'
    
        objetoDetalle.textContent = valorDelboleto()



        divResumeHere.appendChild(objetoDetalletitulo)
        divResumeHere.appendChild(objetoDetalle)



        // var titulodetalle = objetoDetalletitulo.textContent

    });

});


