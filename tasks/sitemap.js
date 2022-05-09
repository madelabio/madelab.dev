module.exports = function (gulp, $, browserSync) {
	var sitemap = require('gulp-sitemap');
	var save = require('gulp-save');
	gulp.task('sitemap', function () {
		return gulp.src([
			'./dist/*.html',
		])
			.pipe(sitemap({
				siteUrl: 'https://wornandfaded.com'
			}))
			.pipe(gulp.dest('./dist'))
	});
};
