
              
      $('.email-button').on('click', function() {
      
      $('#form').addClass('show');
      $('#form').removeClass('hide');
      $('#body').addClass('blur');
      $('#background').addClass('hide');
      $('#background').removeClass('show');
      
    });

  $('#back-button').on('click', function() {
      
    $('#form').removeClass('show');
    $('#form').addClass('hide');
    $('#body').removeClass('blur');
    $('#background').toggleClass('hide');
    $('#background').addClass('show');
      
    });

    $('.signup-button').on('click', function() {
      
      $('#form').addClass('hide');
      $('#form').removeClass('show');
      $('#form-signup').addClass('show');
      $('#form-signup').removeClass('hide');
    });

    $('#back-button-signup').on('click', function() {
      
      $('#form').addClass('show');
      $('#form').removeClass('hide');
      $('#form-signup').removeClass('show');
      $('#form-signup').addClass('hide');
        
      });

      $('.login-button-signup').on('click', function() {
      
        $('#form').addClass('show');
        $('#form').removeClass('hide');
        $('#form-signup').removeClass('show');
        $('#form-signup').addClass('hide');
        
      });