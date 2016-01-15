$('#hot-deals-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  cssEase: 'linear'
});

$('#sell-out').imagesLoaded( function() {
	$('.product-img').imagefill({target:'img'}); 
});

