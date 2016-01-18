$('#hot-deals-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'ease',
  autoplay: true,
  autoplaySpeed: 3000,
});

$('#sell-out').imagesLoaded( function() {
	$('.product-img').imagefill({target:'img'}); 
});


function sidebar_open(){
	$('#sidebar-wrapper-open').on('click',function(){
		$('#wrapper').toggleClass('sidebar-wrapper-opened');
		return false;
	});
	$('#sidebar-wrapper').on('mouseleave',function(){
		$('#wrapper').removeClass('sidebar-wrapper-opened');
	});
}

$(document).ready(function(){
	sidebar_open();
});