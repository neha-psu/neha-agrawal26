$(document).ready(function(){
          
  $(window).scroll(function(){

    if($(window).scrollTop()>390){
      $('nav').addClass('color');
    }else{
      $('nav').removeClass('color');
    }

  });

});

