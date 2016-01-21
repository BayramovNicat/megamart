function slider_init(){
	$('#hot-deals-slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'ease',
	  autoplay: true,
	  autoplaySpeed: 3000,
	});
}

function sidebar_open(){
	$('#sidebar-wrapper-open').on('click',function(){
		$('#wrapper').toggleClass('sidebar-wrapper-opened');
		return false;
	});
	$('#sidebar-wrapper').on('mouseleave',function(){
		$('#wrapper').removeClass('sidebar-wrapper-opened');
	});
}

function search_button(){
	$(document).on('click','#search-button',function(){
		$('.search').addClass('opened');
		$('#header-main .row > div > a').hide();

		$('html').click(function(event) {
	        //check up the tree of the click target to check whether user has clicked outside of menu
	        if ($(event.target).parents('.search').length == 0) {
	           	$('.search').removeClass('opened');
				$('#header-main .row > div > a').show();
	            //this event listener has done its job so we can unbind it.
	            $(this).unbind(event);
	        }

	    });
	});
}

function sidebar_button(){
	$(document).on('click','#open-mini-sidebar',function(){
		$('#sidebar-wrapper').addClass('opened');

		$('html').click(function(event) {
	        //check up the tree of the click target to check whether user has clicked outside of menu
	        if ($(event.target).parents('#sidebar-wrapper').length == 0) {
	           	$('#sidebar-wrapper').removeClass('opened');
	            //this event listener has done its job so we can unbind it.
	            $(this).unbind(event);
	        }

	    });
	});
}

$(document).ready(function(){
	slider_init();
	sidebar_open();
	search_button();
	sidebar_button();
});



















