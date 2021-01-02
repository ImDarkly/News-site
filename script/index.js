
              
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