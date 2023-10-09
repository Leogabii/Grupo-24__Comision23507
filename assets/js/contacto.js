$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
              label.removeClass('active highlight'); 
              } else {
              label.removeClass('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
              label.removeClass('highlight'); 
              } 
        else if( $this.val() !== '' ) {
              label.addClass('highlight');
              }
      }
  
  });
  
  $('.tab a').on('click', function (e) {
    
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');
  
    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(600);
    
  });

  // Función para validar que solo se ingresen letras en los campos de nombre y apellido
function validarNombreApellido(input) {
  var regex = /^[a-zA-Z]+$/; // Expresión regular que permite solo letras
  return regex.test(input);
}

// Evento que maneja la validación en tiempo real
$('.nombre, .apellido').on('keyup blur focus', function (e) {
  var $this = $(this),
      label = $this.prev('label');

  if (e.type === 'keyup' || e.type === 'blur') {
    if ($this.val() === '' || !validarNombreApellido($this.val())) {
      label.removeClass('active highlight');
    } else {
      label.addClass('active highlight');
    }
  } else if (e.type === 'focus') {
    if ($this.val() === '') {
      label.removeClass('highlight');
    } else if (validarNombreApellido($this.val())) {
      label.addClass('highlight');
    }
  }
});
