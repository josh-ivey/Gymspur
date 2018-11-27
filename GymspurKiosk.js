$(document).ready(function() {
	
  $('body').css('display', 'none');
  $('body').fadeIn(500);
  $('.link').click(function(event) {
    event.preventDefault();
    newLocation = $('.link a').attr("href");
    $('body').fadeOut(2000, newpage);
  });
  function newpage() {
    window.location = newLocation;
  }
  
  
});
  
 

});
	  
  