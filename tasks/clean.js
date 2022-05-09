module.exports = function (gulp, $, browserSync) {
	gulp.task('clean', function () {
		return gulp.src([
			'www/**/*.*'
		], {read: false, allowEmpty: true })
			.pipe($.clean({force: true}));
	});
};
