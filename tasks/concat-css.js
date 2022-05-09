module.exports = function (gulp, $, browserSync) {
	gulp.task('concat-css', function () {
		return gulp.src([
			// OWL
				// 'bower_components/owl.carousel/dist/assets/owl.carousel.min.css',
				// 'bower_components/owl.carousel/dist/assets/owl.theme.default.min.css',
				'src/vendor/animate.min.css',
				'src/vendor/bootstrap-icons/bootstrap-icons.css',
				// 'src/vendor/fontawesome6/all.min.css',
				// 'src/vendor/fullpage.css',
				// 'src/vendor/fancybox.css',
				// 'src/vendor/panzoom.css',
				// 'src/vendor/swiper.css',
				// 'src/vendor/plyr.css',
			])
			.pipe($.concat('madelab.css'))
			.pipe(gulp.dest('./dist/css'));
	});
};
