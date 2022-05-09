module.exports = function (gulp, $, browserSync) {
	var sitemap = require('gulp-sitemap');
	var save = require('gulp-save');
	gulp.task('sitemap', function () {
		return gulp.src([
			'www/*.html',
		])
			.pipe(sitemap({
				siteUrl: 'https://madelab.dev'
			}))
			.pipe(gulp.dest('www'))
	});
};
