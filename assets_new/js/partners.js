
//Alternate Direction
$(document).ready(function () {
    var owl = $('#partners-slider');
	resp = {
		0: {
		  items: 2,
		},
		768: {
		  items: 4,
		},
		992: {
		  items: 6,
		},
		1400: {
			items: 8,
		  }
	}; 
    owl.owlCarousel({
        loop: true,
        responsive: resp,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true
    });

});