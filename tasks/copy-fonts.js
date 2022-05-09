module.exports = function (gulp, $, browserSync) {
	gulp.task('copy-fonts', function () {
		return gulp.src([
				'./src/fonts/**.*',
			])
			.pipe(gulp.dest('www/fonts'));
	});
	gulp.task('copy-webfonts', function () {
		return gulp.src([
				'./src/webfonts/**.*',
			])
			.pipe(gulp.dest('www/webfonts'));
	});
};
