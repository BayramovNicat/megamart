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

$(document).on('click','#sidebar-wrapper-open',function(){
	$('#wrapper').toggleClass('sidebar-wrapper-opened');
});
