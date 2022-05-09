module.exports = function (gulp, $, browserSync) {
	gulp.task('clean-up', function () {
		return gulp.src([
			'www/css/*.map',
			'www/css/*.css',
			'!www/css/*.min.css',
			'www/js/*.map',
			'www/js/*.js',
			'!www/js/*.min.js',
			'!www/js/customize.js',
		], {read: false, allowEmpty: true })
			.pipe($.clean({force: true}));
	});
};
