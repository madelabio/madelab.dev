module.exports = function (gulp, $, browserSync) {
	let strip = require('gulp-strip-comments');
	const terser = require('gulp-terser')
	gulp.task('js-min', function () {
		return gulp.src([
				'./dist/js/*.js',
			])
			.pipe(terser())
			.pipe(strip())
			.pipe($.rename({
                suffix: '.min'
            }))
			.pipe(gulp.dest('./dist/js'));
	});
};
