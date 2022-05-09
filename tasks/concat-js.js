module.exports = function (gulp, $, browserSync) {
	gulp.task('concat-js', function () {
		return gulp.src([
				'bower_components/jquery/dist/jquery.min.js',
				// 'node_modules/@popperjs/core/dist/umd/popper.min.js',
				'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
				// 'src/vendor/smoothscroll.js',
				'src/vendor/modernizr.js',
				// 'src/vendor/masonry.pkgd.min.js',
				// 'src/vendor/fancybox.umd.js',
				// 'src/vendor/jquery.background-video.js',
				// 'src/vendor/plyr.polyfilled.js',
				// 'src/vendor/pace.min.js',
				// 'src/vendor/jquery.slimscroll.min.js',
				// 'src/vendor/jquery.easing.min.js',
				// 'src/vendor/fullpage.min.js',
				// 'src/vendor/jquery.fullPage.min.js',
				// Phần Plugins
				// 'bower_components/owl.carousel/dist/owl.carousel.min.js',
				// 'bower_components/particles.js/particles.min.js',
				// 'bower_components/typed.js/lib/typed.min.js',
				// 'src/vendor/swiper.js',
			])
			.pipe($.concat('madelab.js'))
			.pipe(gulp.dest('./dist/js'));
	});
};
