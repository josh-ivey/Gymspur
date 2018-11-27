$(document).ready(function() {
   
  $('#interactivebody').fadeIn(2000);
  $('.link').click(function(event) {
    event.preventDefault();
    newLocation = $('.link a').attr("href");
    $('#interactivebody').fadeOut(2000, newpage);
  });
  function newpage() {
    window.location = newLocation;
  }
  
  setSelections();
  retreiveAndAppendModal();
  displayExercises();
});

function setSelections(){
	$('#Chest').click(function(){
	 $("#interactivebody").attr('src',"Images/pecksChosen.png");
	return false;
 });
 
 $('#Abs').click(function(){
   $("#interactivebody").attr('src',"Images/absChosen.png");
   return false;
 });
 
 $('#Quads').click(function(){
   $("#interactivebody").attr('src',"Images/quadsChosen.png");
   return false;
 });
 
 $('#Shoulders').click(function(){
   $("#interactivebody").attr('src',"Images/shouldersChosen.png");
   return false;
 });
 
 $('#Forearms').click(function(){
   $("#interactivebody").attr('src',"Images/forearmsChosen.png");
   return false;
 });
 
  $('#Biceps').click(function(){
   $("#interactivebody").attr('src',"Images/bicepsChosen.png");
   return false;
 });
 
 $('#Calf').click(function(){
   $("#interactivebody").attr('src',"Images/calvesChosen.png");
   return false;
 });
 
 $('#Neck').click(function(){
   $("#interactivebody").attr('src',"Images/neckChosen.png");
   return false;
 });
}
	
function retreiveAndAppendModal() {
	 
	// Get the modal
	var imgpopup = document.getElementById('imgPopUp');

	// Get the button that opens the modal
	var btnChest = document.getElementById("Chest");
	var btnAbs = document.getElementById("Abs");
	var btnQuads = document.getElementById("Quads");
	var btnShoulds = document.getElementById("Shoulders");
	var btnBis = document.getElementById("Biceps");
	var btnFores = document.getElementById("Forearms");
	var btnNeck = document.getElementById("Neck");
	var btnCalf = document.getElementById("Calf");
	
	// When the user clicks on the button, open the modal
	btnChest.onclick = function() {
		document.getElementById('select').play();
		imgpopup.style.display = "block";
		$("#pectoralsimg").attr('src',"Images/preExercises.png");
		return false;
	}
	btnAbs.onclick = function() {
		document.getElementById('select').play();   
		imgpopup.style.display = "block";
		$("#pectoralsimg").attr('src',"Images/abdominals.png");
		return false;
	}
	btnQuads.onclick = function() {
		document.getElementById('select').play();
		imgpopup.style.display = "block";
		$("#pectoralsimg").attr('src',"Images/quadriceps.png");
		return false;
	}
	btnShoulds.onclick = function() {
		document.getElementById('select').play();
		imgpopup.style.display = "block";
		$("#pectoralsimg").attr('src',"Images/shoulders.png");
		return false;
	}
	btnBis.onclick = function() {
		document.getElementById('select').play();
		imgpopup.style.display = "block";
		$("#pectoralsimg").attr('src',"Images/biceps.png");
		return false;
	}

	btnFores.onclick = function() {
		document.getElementById('select').play();
		imgpopup.style.display = "block";
		$("#pectoralsimg").attr('src',"Images/forearms.png");
		return false;
	}
	btnNeck.onclick = function() {
	
		document.getElementById('select').play();
		imgpopup.style.display = "block";
		$("#pectoralsimg").attr('src',"Images/trapezius.png");
		return false;
	}
	btnCalf.onclick = function() {
		document.getElementById('select').play();
		imgpopup.style.display = "block";
		$("#pectoralsimg").attr('src',"Images/calves.png");
		return false;
	}

// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == imgpopup) {
			imgpopup.style.display = "none";
		}
	}
}
 

function displayExercises() {
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
}

 
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
	$('#Chest').click(function(){
	location.reload(true);
	});
	$('#Biceps').click(function(){
	location.reload(true);
	});
	$('#Forearms').click(function(){
	location.reload(true);
	});
	$('#Neck').click(function(){
	location.reload(true);
	});
	$('#Abs').click(function(){
	location.reload(true);
	});
	$('#Quads').click(function(){
	location.reload(true);
	});
	$('#Calf').click(function(){
	location.reload(true);
	});
	
	$('#Shoulders').click(function(){
	location.reload(true);
	});
 
}

function setExercisePictures() {
	if ($('#interactivebody').attr('src') == 'Images/absChosen.png') {
		$('#exercise1pic').attr('src', 'Images/abs/1.gif');
		$('#exercise2pic').attr('src', 'Images/abs/2.gif');
		$('#exercise1').attr('src', 'Images/abs/legraise.png');
		$('#exercise2').attr('src', 'Images/abs/rollout.png');
	}
	else if ($('#interactivebody').attr('src') == 'Images/pecksChosen.png') {
		$('#exercise1pic').attr('src', 'Images/chest/1.gif');
		$('#exercise2pic').attr('src', 'Images/chest/2.gif');
		$('#exercise1').attr('src', 'Images/chest/bench.png');
		$('#exercise2').attr('src', 'Images/chest/pectoralfly.png');
	}
	else if ($('#interactivebody').attr('src') == 'Images/bicepsChosen.png') {
		$('#exercise1pic').attr('src', 'Images/biceps/1.gif');
		$('#exercise2pic').attr('src', 'Images/biceps/2.gif');
		$('#exercise1').attr('src', 'Images/biceps/inclinecurls.png');
		$('#exercise2').attr('src', 'Images/biceps/standingcurls.png');
	}
	else if ($('#interactivebody').attr('src') == 'Images/calvesChosen.png') {
		$('#exercise1pic').attr('src', 'Images/calves/1.gif');
		$('#exercise1').attr('src', 'Images/calves/calfraises.png');
		$('#exercise2pic').attr('src', '');
		
	}
	else if ($('#interactivebody').attr('src') == 'Images/shouldersChosen.png') {
		$('#exercise1pic').attr('src', 'Images/shoulders/1.gif');
		$('#exercise2pic').attr('src', 'Images/shoulders/2.gif');
		$('#exercise1').attr('src', 'Images/shoulders/arnie.png');
		$('#exercise2').attr('src', 'Images/shoulders/lateralraise.png');
		
	}
	else if ($('#interactivebody').attr('src') == 'Images/forearmsChosen.png') {
		$('#exercise1pic').attr('src', 'Images/forearms/1.gif');
		$('#exercise2pic').attr('src', 'Images/forearms/2.gif');
		$('#exercise1').attr('src', 'Images/forearms/hammercurl.png');
		$('#exercise2').attr('src', 'Images/forearms/reversecurl.png');
	}
	else if ($('#interactivebody').attr('src') == 'Images/neckChosen.png') {
		$('#exercise1pic').attr('src', 'Images/neck/1.gif');
		$('#exercise2pic').attr('src', '');
		$('#exercise1').attr('src', 'Images/neck/uprightrow.png');
		$('#exercise2').attr('src', '');
	}
	else if ($('#interactivebody').attr('src') == 'Images/quadsChosen.png') {
		$('#exercise1pic').attr('src', 'Images/quads/1.gif');
		$('#exercise2pic').attr('src', 'Images/quads/2.gif');
		$('#exercise1').attr('src', 'Images/quads/lunge.png');
		$('#exercise2').attr('src', 'Images/quads/squat.png');
	}
}
 