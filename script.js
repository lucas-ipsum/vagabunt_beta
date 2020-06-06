$(document).ready(function(){
    $('.logo').hover(function(){
      $('.window').fadeIn(3000);
    });
    $('#arrow_down').click(function(){
      $('#team').scroll();
    });
  });