'use strict';
$(document).ready(function(){

  // vanillabox
  $('a.image').vanillabox();

  $('a.vimeo').vanillabox({
    type: 'iframe'
  });

  $('a.youtube').vanillabox({
    type: 'iframe'
  });

  $('a.website').vanillabox({
    type: 'iframe'
  });


  // smooth scroll
	$('html').smoothScroll();


  // matchHeight
  $('.match-height').matchHeight();

}); // end (document).ready(function()



// parallax
jQuery(window).trigger('resize').trigger('scroll');

window.setTimeout(function(){
    $(window).resize();
},500);


// mixItUp
$('#work-container').mixItUp({
  controls: {
    activeClass: 'on'
  }
});



// fade out intro on scroll
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $('.intro-content').css({'opacity':(( 1000-scroll )/1000)});
});



// scrollReveal
//window.sr = new scrollReveal();



// sticky nav
$(".js_fixedcontent").fixedcontent({
  marginTop: 0,
  minWidth: 0,
  zIndex: 500
});



// close collapsed bootstrap nav
$(document).on('click','.navbar-collapse.in',function(e) {
  if( $(e.target).is('a') ) {
    $(this).collapse('hide');
  }
});
