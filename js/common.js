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

function item_slider_init(){
	$('.items-slider').slick({
		speed: 200,
		dots: false,
		infinite: false,
		arrows: false,
		cssEase: 'ease',
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
			    slidesToShow: 4,
			    slidesToScroll: 4,
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
			    slidesToShow: 3,
			    slidesToScroll: 3
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
			    slidesToShow: 2,
			    slidesToScroll: 2
			  }
			}
		]
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

$('.product_small_img').on('click', function(){
	$('.product_small_img').removeClass('active');
	$(this).addClass('active');
	$('#product_img').attr('src',$(this).attr('href')).attr('data-zoom-image',$(this).attr('href'));
	$('.zoomWindowContainer > div').css('background-image','url("'+$(this).attr('href')+'")')
	return false;
});

function product_img_zoom(){
	$('#product_img').elevateZoom({
    	zoomType: "inner",
		cursor: "crosshair",
		zoomWindowFadeIn: 500,
		zoomWindowFadeOut: 750
	}); 
}

$(document).ready(function(){
	slider_init();
	item_slider_init();
	sidebar_open();
	search_button();
	sidebar_button();
	product_img_zoom();
});



















