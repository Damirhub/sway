/**txt fadein**/

$(function() {
    $(window).scroll( function(){
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 500;  
          
            if( bottom_of_window > bottom_of_object ){               
                $(this).animate({'opacity':'1'}, 2500);
                }
          /*  else //if ( bottom_of_window < bottom_of_object )/
            {              
                $(this).animate({'opacity':'0'},1500);
    			}*/
        }); 
    
    });
});


/*stickBg*/

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var os = $('#curtain').offset().top;
    var ht = $('#curtain').height();
    if(scroll > os + ht + 100)
    {
        $('#pozadina').addClass('attach');
        $('#pozadina').removeClass('background');
        $('#offset').removeClass('wellcome');
        }
        else  if(scroll < os + ht + 100)
        {
        	$('#pozadina').addClass('background');
        	$('#pozadina').removeClass('attach');
        	$('#offset').addClass('wellcome');       	       
  			}

});


/*nav - stick*/

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var os = $('#offset').offset().top;
    var ht = $('#offset').height();
    if(scroll > os + ht )
    {
    	$('#navigacija').addClass('zalepi');
        $('#navigacija').addClass('senka');       
        }
        else  if(scroll < os + ht )
        {
        	$('#navigacija').removeClass('zalepi');       	
        	$('#navigacija').removeClass('senka');       	
        }

});

/*mob-nav-stick*/

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var os = $('#offset').offset().top;
    var ht = $('#offset').height();
    if(scroll > os + ht -40 )
    {
    	$('#mobnav').addClass('zalepi');
        $('#mobnav').addClass('senka');       
        }
        else  if(scroll < os + ht )
        {
        	$('#mobnav').removeClass('zalepi');       	
        	$('#mobnav').removeClass('senka');       	
        }

});


/*nav-slide*/
$(document).ready(function(){
    $("#menuclk").click(function(){
        $("#Dropdown").slideToggle("fast");
    });
});


/***mob nav slide - up***/
$( "#linkclick" ).click(function() {
  $( "#Dropdown" ).slideUp( "slow", function() {
    // Animation complete.
  });
});

/***slider***/
$('#slideshow').carousel({
           interval: 1000
        });


/***animated scroll***/
$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});

  // Add smooth scrolling on all links inside the navbar
  $("#navigacija a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});