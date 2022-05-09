var __appInit = () => {


	if(window.innerWidth > 1200) {
		$('#home-page').fullpage({
			anchors: ['wornfaded-home', 'wornfaded-video', 'wornfaded-synopsis', 'wornfaded-contribute', 'wornfaded-credits', 'wornfaded-footer'],
			menu: '#menu',
			// autoScrolling: true,
			// scrollHorizontally: true,
			// lockAnchors: false,
			// navigation: false,
			// scrollingSpeed: 300
			afterLoad: function(origin, destination, direction, trigger){
				if(destination > 1) {
					$('header').addClass('fixedheader');
				} else {
					$('header').removeClass('fixedheader');
				}
			}
		})
		// $.fn.fullpage.setAllowScrolling(false);

		$('.viewmore').on('click', function(){
			$.fn.fullpage.moveTo('wornfaded-video', 1);
		});

	}
}

