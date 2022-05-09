
var WORN_FADED = WORN_FADED || {
	init: __appInit,
	videoAutoPlay: __videoAutoPlay,
	fixiOS: __appFixediOS,
	fancyBox: __appFancyBox,
	headerLayout: __appHeaderLayout,
	setAnimation: __appSetAnimation
};
wornFADEDReady(function () {
	WORN_FADED.headerLayout();
	WORN_FADED.fixiOS();
	WORN_FADED.fancyBox();
	WORN_FADED.init();
	WORN_FADED.videoAutoPlay();
	WORN_FADED.setAnimation();
});

document.addEventListener('scroll', function (e) {
	WORN_FADED.headerLayout(e);
	WORN_FADED.setAnimation(e);
});
window.addEventListener('resize', function (e) {
	WORN_FADED.headerLayout(e);
	WORN_FADED.setAnimation(e);
});

Pace.on('done', function () {
	document.getElementById('loadingpage').classList.add('done');
	document.getElementById('top-page').classList.add('loaded');
});
