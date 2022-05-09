module.exports = function (gulp, $, browserSync) {
	let rev = require('gulp-rev');
	let revReplace = require('gulp-rev-replace');
	gulp.task('revision', function () {
		return gulp.src([
				'www/**/*.css',
				'www/**/*.js',
				'!www/js/customize.js',
			])
			.pipe(rev())
			.pipe(gulp.dest('www'))
			.pipe(rev.manifest())
			.pipe(gulp.dest('www'))
	});

	gulp.task("revreplace", function() {
		var manifest = gulp.src("www/rev-manifest.json");
		return gulp.src([
			'www/*.html',
		])
			.pipe(revReplace({manifest: manifest}))
			.pipe(gulp.dest('www'))
	});

};


