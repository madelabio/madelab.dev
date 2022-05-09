var __appHeaderLayout = (e) => {

	var scrolled = document.scrollingElement.scrollTop;
	var scrolledHeight = window.innerHeight

	// ACTIVE HEADER LINK
	if (scrolled >= scrolledHeight) {
		$('header').addClass('fixedheader');
		$('.pgwtop, .pgwbottom').removeClass('animatable active');

	} else {
		$('header').removeClass('fixedheader');
		$('.pgwtop, .pgwbottom').addClass('animatable active');
	}

	// TOGGLE MENU 
	if (document.querySelector('header .navbar-toggler')) {
		document.querySelectorAll("header .nav-link").forEach((btn) => {
			btn.addEventListener("click", (e) => {
				if(bootstrap.Offcanvas.getInstance(document.getElementById('globalMenu'))) {
					setTimeout(() => {
						bootstrap.Offcanvas.getInstance(document.getElementById('globalMenu')).hide();
					}, 500);
				}
			});
		});
	}

}