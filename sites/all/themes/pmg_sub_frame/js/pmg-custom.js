/**
 * @todo
 */

(function($) {
  /**
   * @todo
   */
	
})(jQuery);
	


jQuery(document).ready(function($){

	/* prepend menu icon */
	$('nav.navigation').prepend('<div id="menu-icon">Menu</div>');
	
	/* toggle nav */
	$("#menu-icon").on("click", function(){
		$("#nice-menu-0").slideToggle();
		$(this).toggleClass("active");
	});


	/* Floater */
	var isShown = false;
	/* If Not frontpage the animate in */
	if (!$('body.front').length) {  
	 	 $('.block-2').animate({
			top: '0px'
		      }, 500, function() {
		      });
		 return;
	} else {
	/* Otherwise wait for a scroll then animate in */
	  jQuery(window).scroll(function(e){
	    var top = 150;
	    var scroll = $(this).scrollTop();
	    if(!isShown && scroll > top){
	      isShown = true;
	      $('.block-2').animate({
		top: '0px'
	      }, 500, function() {
		
	      });
	    }
	    if(isShown && scroll < top){
	      isShown = false;
	      $('.block-2').animate({
		top: '-70px'
	      }, 500, function() {
		
	      });
	    }    
	  });
	}
	
	/* Toolbar DropDown 
	if ($('body.front').length) {  
	 	 $('.zone-menu').addClass("hover");
	}
	$('.zone-menu-wrapper').mouseenter(function(){
		      $('.zone-menu').addClass("hover"); 
		});
	$('.zone-menu-wrapper').mouseleave(function(){
		      $('.zone-menu').removeClass("hover");
	  });
	  */

	
	
});

/* Form Placeholder from Label */
	
var phForms = jQuery('#webform-client-form-421');
var phFields = 'input[type=text], input[type=email], textarea';

function lbl2ph(){ // function that contains our code

	jQuery('#webform-client-form-421').find(phFields).each(function(){ // loop through each field in the specified form(s)
	
	var el = jQuery(this), // field that is next in line
	    wrapper = el.parents('.form-item'), // parent .form-item div
	    lbl = wrapper.find('label'), // label contained in the wrapper
	    lblText = lbl.text(); // the label's text

	// add label text to field's placeholder attribute
	el.attr("placeholder",lblText);
	
	// hide original label
	lbl.hide();
	
	});
	
	}
	
	jQuery(function($){
	    if (Modernizr.input.placeholder) { // check for placeholder support
	    	    lbl2ph(); // initiate function
            }
});
/*   -Used for Nav dropdown Creation 
jQuery(document).ready(function($) {
	/*Nav Dropdown for Mobile   
	$("ul#nice-menu-0").tinyNav();
 }); */