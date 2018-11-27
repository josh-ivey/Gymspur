$(document).ready(function() {
   
  $('#interactivebody').fadeIn(1000);
  $('.link').click(function(event) {
    event.preventDefault();
    newLocation = $('.link a').attr("href");
    $('#interactivebody').fadeOut(1000, newpage);
  });
  function newpage() {
    window.location = newLocation;
  }
  
  
});

$(function() {
	
$('#Back').click(function(){
   $("#interactivebody").attr('src',"Images/backChosen.png");
   return false;
 });
 
 $('#Triceps').click(function(){
   $("#interactivebody").attr('src',"Images/tricepsChosen.png");
   return false;
 });
 
 $('#Hamstrings').click(function(){
   $("#interactivebody").attr('src',"Images/hamsChosen.png");
   return false;
 });
 
 // Get the modal
var imgpopup = document.getElementById('imgPopUp');


// Get the button that opens the modal
var btnTris = document.getElementById("Triceps");
var btnBack = document.getElementById("Back");
var btnHams = document.getElementById("Hamstrings");



// When the user clicks on the button, open the modal

btnBack.onclick = function() {
	
	document.getElementById('select').play();
    imgpopup.style.display = "block";
	$("#pectoralsimg").attr('src',"Images/back.png");
   return false;
}
btnTris.onclick = function() {
	
	document.getElementById('select').play();
    imgpopup.style.display = "block";
	$("#pectoralsimg").attr('src',"Images/triceps.png");
   return false;
}
btnHams.onclick = function() {
	
	document.getElementById('select').play();
    imgpopup.style.display = "block";
	$("#pectoralsimg").attr('src',"Images/hamstrings.png");
   return false;
}
 
	
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == imgpopup) {
        imgpopup.style.display = "none";
    }
}
var preEx = document.getElementById('pectoralsimg');

preEx.onclick = function() {
	
	
	document.getElementById('display').play();
    $('#imgPopUp').fadeOut(500);
    $('#arrow').fadeOut(500);
	
	$('#select').attr('src', "");
	
	$("#interactivebody").animate({
            marginLeft: "10px"
          }, 500 );
	
	
	
	fadeloop('#interactivebody',2000,4000,true);
	
	setExercisePictures();
	ridMap();
	
	$('#exercise1pic').fadeIn(1000);
	$('#exercise1').fadeIn(1000);
	$('#exercise2pic').fadeIn(1000);
	$('#exercise2').fadeIn(1000);
	
	
	
	}
 });
 
 function fadeloop(el,timeout,timein,loop){
    var $el = $(el),intId,fn = function(){
         $el.fadeOut(timeout).fadeIn(timein);
    };
    fn();
    if(loop){
        intId = setInterval(fn,timeout+timein+100);
        return intId;
    }
    return false;
}

function ridMap() {
	$('#Back').click(function(){
	location.reload(true);
	});
	$('#Triceps').click(function(){
	location.reload(true);
	});
	$('#Hamstrings').click(function(){
	location.reload(true);
	});
 
}

function setExercisePictures() {
	if ($('#interactivebody').attr('src') == 'Images/backChosen.png') {
		$('#exercise1pic').attr('src', 'Images/back/1.gif');
		$('#exercise2pic').attr('src', 'Images/back/2.gif');
		$('#exercise1').attr('src', 'Images/back/pullup.png');
		$('#exercise2').attr('src', 'Images/back/tbar.png');
	}
	else if ($('#interactivebody').attr('src') == 'Images/tricepsChosen.png') {
		$('#exercise1pic').attr('src', 'Images/triceps/1.gif');
		$('#exercise2pic').attr('src', 'Images/triceps/2.gif');
		$('#exercise1').attr('src', 'Images/triceps/skullcrusher.png');
		$('#exercise2').attr('src', 'Images/triceps/tricepextension.png');

	}
	else if ($('#interactivebody').attr('src') == 'Images/hamsChosen.png') {
		$('#exercise1pic').attr('src', 'Images/hams/1.gif');
		$('#exercise2pic').attr('src', 'Images/hams/2.gif');
		$('#exercise1').attr('src', 'Images/hams/dumbellstep.png');
		$('#exercise2').attr('src', 'Images/hams/widesquat.png');
	}
}
 

 