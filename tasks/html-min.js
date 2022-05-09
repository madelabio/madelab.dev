module.exports = function (gulp, $, browserSync) {
	gulp.task('html-min', function () {
		return gulp.src([
				'www/*.html',
			])
			.pipe($.htmlmin({collapseWhitespace: true}))
			.pipe(gulp.dest('www'))
	});
};
